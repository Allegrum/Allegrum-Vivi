var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var rootDir = process.cwd();
var publicPath = import_path.default.join(rootDir, "public");
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3e3;
  app.use(import_express.default.json({ limit: "50mb" }));
  app.use(import_express.default.urlencoded({ extended: true, limit: "50mb" }));
  if (import_fs.default.existsSync(publicPath)) {
    app.use(import_express.default.static(publicPath));
  }
  const gcsBucketName = (process.env.GCS_BUCKET_NAME || process.env.GOOGLE_CLOUD_STORAGE_BUCKET || "").trim();
  let gcsStorage = null;
  if (gcsBucketName) {
    try {
      const { Storage } = await import("@google-cloud/storage");
      const storageOpts = {};
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
    const pubImages = import_path.default.join(rootDir, "public", "images");
    if (import_fs.default.existsSync(pubImages)) return pubImages;
    const distImages = import_path.default.join(rootDir, "dist", "images");
    if (import_fs.default.existsSync(distImages)) return distImages;
    return pubImages;
  };
  app.get("/api/images/status", async (_req, res) => {
    const imagesDir = getImagesDir();
    let localFiles = [];
    if (import_fs.default.existsSync(imagesDir)) {
      localFiles = import_fs.default.readdirSync(imagesDir);
    }
    const gcsUrl = getGcsBaseUrl();
    res.json({
      status: "online",
      gcsConfigured: Boolean(gcsBucketName || gcsUrl),
      gcsBucket: gcsBucketName || null,
      gcsBaseUrl: gcsUrl,
      totalLocalImages: localFiles.length,
      images: localFiles
    });
  });
  app.get("/api/images", async (_req, res) => {
    const imagesDir = getImagesDir();
    let localFiles = [];
    if (import_fs.default.existsSync(imagesDir)) {
      localFiles = import_fs.default.readdirSync(imagesDir);
    }
    const gcsBaseUrl = getGcsBaseUrl();
    const imageList = localFiles.map((file) => ({
      name: file,
      localUrl: `/images/${encodeURIComponent(file)}`,
      gcsUrl: gcsBaseUrl ? `${gcsBaseUrl}/images/${encodeURIComponent(file)}` : null
    }));
    res.json({
      success: true,
      count: imageList.length,
      images: imageList
    });
  });
  app.get("/api/images/:filename", (req, res) => {
    const filename = req.params.filename;
    const imagesDir = getImagesDir();
    const localImagePath = import_path.default.join(imagesDir, filename);
    if (import_fs.default.existsSync(localImagePath)) {
      return res.sendFile(localImagePath);
    }
    res.status(404).json({ error: "Image not found on image server" });
  });
  app.post("/api/images/upload", async (req, res) => {
    try {
      const { filename, base64Data } = req.body;
      if (!filename || !base64Data) {
        return res.status(400).json({ error: "Filename and base64Data are required" });
      }
      const imagesDir = import_path.default.join(rootDir, "public", "images");
      if (!import_fs.default.existsSync(imagesDir)) {
        import_fs.default.mkdirSync(imagesDir, { recursive: true });
      }
      const cleanFilename = import_path.default.basename(filename).replace(/\s+/g, "_");
      const filePath = import_path.default.join(imagesDir, cleanFilename);
      const buffer = Buffer.from(base64Data.replace(/^data:image\/\w+;base64,/, ""), "base64");
      import_fs.default.writeFileSync(filePath, buffer);
      let gcsUrl = null;
      if (gcsStorage && gcsBucketName) {
        try {
          const bucket = gcsStorage.bucket(gcsBucketName);
          const gcsFile = bucket.file(`images/${cleanFilename}`);
          await gcsFile.save(buffer, {
            resumable: false,
            metadata: {
              contentType: filename.endsWith(".png") ? "image/png" : "image/jpeg"
            }
          });
          gcsUrl = `https://storage.googleapis.com/${gcsBucketName}/images/${cleanFilename}`;
          console.log(`[Google Cloud Storage] Uploaded ${cleanFilename} to GCS`);
        } catch (gcsErr) {
          console.error("[Google Cloud Storage] Upload error:", gcsErr?.message || gcsErr);
        }
      }
      const localUrl = `/images/${encodeURIComponent(cleanFilename)}`;
      res.json({
        success: true,
        filename: cleanFilename,
        localUrl,
        gcsUrl,
        url: gcsUrl || localUrl
      });
    } catch (err) {
      console.error("[Image Server] Upload error:", err);
      res.status(500).json({ error: err.message || "Failed to upload image" });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(rootDir, "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (_req, res) => {
      const indexPath = import_path.default.join(distPath, "index.html");
      if (import_fs.default.existsSync(indexPath)) {
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
//# sourceMappingURL=server.cjs.map
