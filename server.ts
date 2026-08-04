import express from "express";
import path from "path";
import fs from "fs";

const rootDir = process.cwd();
const publicPath = path.join(rootDir, "public");

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  // Serve static public folder (includes /public/images and /public/assets/images)
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
  }

  // Google Cloud Storage setup (lazy initialization)
  const gcsBucketName = (process.env.GCS_BUCKET_NAME || process.env.GOOGLE_CLOUD_STORAGE_BUCKET || "").trim();
  let gcsStorage: any = null;

  if (gcsBucketName) {
    try {
      const { Storage } = await import("@google-cloud/storage");
      const storageOpts: any = {};
      if (process.env.GCS_PROJECT_ID?.trim()) {
        storageOpts.projectId = process.env.GCS_PROJECT_ID.trim();
      }
      if (process.env.GOOGLE_APPLICATION_CREDENTIALS?.trim()) {
        storageOpts.keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS.trim();
      }
      gcsStorage = new Storage(storageOpts);
      console.log(`[Google Cloud Storage] Initialized for bucket: ${gcsBucketName}`);
    } catch (err) {
      console.warn("[Google Cloud Storage] Initialization warning:", err);
    }
  }

  const getGcsBaseUrl = () => {
    const raw = process.env.VITE_GCS_BUCKET_URL || process.env.VITE_IMAGE_SERVER_URL;
    if (raw && !raw.includes("@")) {
      let clean = raw.trim().replace(/\/+$/, "");
      if (!clean.startsWith("http://") && !clean.startsWith("https://")) {
        clean = `https://storage.googleapis.com/${clean}`;
      }
      return clean;
    }
    if (gcsBucketName) {
      return `https://storage.googleapis.com/${gcsBucketName}`;
    }
    return null;
  };

  const getImagesDir = () => {
    const pubImages = path.join(rootDir, "public", "images");
    if (fs.existsSync(pubImages)) return pubImages;
    const distImages = path.join(rootDir, "dist", "images");
    if (fs.existsSync(distImages)) return distImages;
    return pubImages;
  };

  // API Route: Image Server Status
  app.get("/api/images/status", async (_req, res) => {
    const imagesDir = getImagesDir();
    let localFiles: string[] = [];
    if (fs.existsSync(imagesDir)) {
      localFiles = fs.readdirSync(imagesDir);
    }

    const gcsUrl = getGcsBaseUrl();

    res.json({
      status: "online",
      gcsConfigured: Boolean(gcsBucketName || gcsUrl),
      gcsBucket: gcsBucketName || null,
      gcsBaseUrl: gcsUrl,
      totalLocalImages: localFiles.length,
      images: localFiles,
    });
  });

  // API Route: List hosted images
  app.get("/api/images", async (_req, res) => {
    const imagesDir = getImagesDir();
    let localFiles: string[] = [];
    if (fs.existsSync(imagesDir)) {
      localFiles = fs.readdirSync(imagesDir);
    }

    const gcsBaseUrl = getGcsBaseUrl();

    const imageList = localFiles.map((file) => ({
      name: file,
      localUrl: `/images/${encodeURIComponent(file)}`,
      gcsUrl: gcsBaseUrl ? `${gcsBaseUrl}/images/${encodeURIComponent(file)}` : null,
    }));

    res.json({
      success: true,
      count: imageList.length,
      images: imageList,
    });
  });

  // API Route: Serve or Proxy specific image
  app.get("/api/images/:filename", (req, res) => {
    const filename = req.params.filename;
    const imagesDir = getImagesDir();
    const localImagePath = path.join(imagesDir, filename);

    if (fs.existsSync(localImagePath)) {
      return res.sendFile(localImagePath);
    }

    // Fallback if not found locally
    res.status(404).json({ error: "Image not found on image server" });
  });

  // API Route: Image Upload Endpoint (Saves to public/images and GCS if configured)
  app.post("/api/images/upload", async (req, res) => {
    try {
      const { filename, base64Data } = req.body;
      if (!filename || !base64Data) {
        return res.status(400).json({ error: "Filename and base64Data are required" });
      }

      // Save locally to public/images
      const imagesDir = path.join(rootDir, "public", "images");
      if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
      }

      const cleanFilename = path.basename(filename).replace(/\s+/g, "_");
      const filePath = path.join(imagesDir, cleanFilename);
      const buffer = Buffer.from(base64Data.replace(/^data:image\/\w+;base64,/, ""), "base64");

      fs.writeFileSync(filePath, buffer);

      let gcsUrl = null;

      // Upload to GCS if configured
      if (gcsStorage && gcsBucketName) {
        try {
          const bucket = gcsStorage.bucket(gcsBucketName);
          const gcsFile = bucket.file(`images/${cleanFilename}`);
          await gcsFile.save(buffer, {
            resumable: false,
            metadata: {
              contentType: filename.endsWith(".png") ? "image/png" : "image/jpeg",
            },
          });
          gcsUrl = `https://storage.googleapis.com/${gcsBucketName}/images/${cleanFilename}`;
          console.log(`[Google Cloud Storage] Uploaded ${cleanFilename} to GCS`);
        } catch (gcsErr: any) {
          console.error("[Google Cloud Storage] Upload error:", gcsErr?.message || gcsErr);
        }
      }

      const localUrl = `/images/${encodeURIComponent(cleanFilename)}`;

      res.json({
        success: true,
        filename: cleanFilename,
        localUrl,
        gcsUrl,
        url: gcsUrl || localUrl,
      });
    } catch (err: any) {
      console.error("[Image Server] Upload error:", err);
      res.status(500).json({ error: err.message || "Failed to upload image" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(rootDir, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send("Index file not found.");
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Image Server & App running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
