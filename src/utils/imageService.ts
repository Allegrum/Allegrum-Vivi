// Utility for resolving image URLs directly from GitHub repository or fallback sources
import drRubensFile from '../assets/images/Rubens_Final.png';
import draJoelyFile from '../assets/images/Joely.png';
import clinicHeroBgFile from '../assets/images/clinic_hero_bg_1780585593128.png';
import allegrumLogoFile from '../assets/images/Allegrum.png';
import esComplexExamFile from '../assets/images/Es Complex.png';
import nerveExpressExamFile from '../assets/images/nerve_express_exam_1782414091360.jpg';
import bioquantumExamFile from '../assets/images/bioquantum_exam_1782414101835.jpg';
import bioimpedanciaExamFile from '../assets/images/bioimpedancia_exam_1782414111539.jpg';

// Base URL for GitHub repository hosted images
const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/Allegrum/imagens-do-site/main';

// Direct GitHub CDN map for repository images
const githubImageMap: Record<string, string> = {
  'Allegrum.png': `${GITHUB_RAW_BASE}/Allegrum.png`,
  'Joely.png': `${GITHUB_RAW_BASE}/Joely.png`,
  'Rubens_Final.png': `${GITHUB_RAW_BASE}/Rubens_Final.png`,
  'Rubens.png': `${GITHUB_RAW_BASE}/Rubens_Final.png`,
};

// Local fallback map using bundled Vite imports
const bundledImageMap: Record<string, string> = {
  'Rubens_Final.png': drRubensFile,
  'Joely.png': draJoelyFile,
  'clinic_hero_bg_1780585593128.png': clinicHeroBgFile,
  'Allegrum.png': allegrumLogoFile,
  'Es Complex.png': esComplexExamFile,
  'es_complex.png': esComplexExamFile,
  'nerve_express_exam_1782414091360.jpg': nerveExpressExamFile,
  'bioquantum_exam_1782414101835.jpg': bioquantumExamFile,
  'bioimpedancia_exam_1782414111539.jpg': bioimpedanciaExamFile,
};

/**
 * Resolves the final image URL, prioritizing the direct GitHub repository URLs
 * (https://github.com/Allegrum/imagens-do-site) so images load reliably everywhere.
 */
export function getImageUrl(filename: string): string {
  // Priority 1: GitHub Repository hosted images (Allegrum.png, Joely.png, Rubens_Final.png, etc.)
  if (githubImageMap[filename]) {
    return githubImageMap[filename];
  }

  // Priority 2: Check runtime environment variable for Google Cloud Storage or custom image server URL
  const rawGcsUrl = import.meta.env.VITE_GCS_BUCKET_URL || import.meta.env.VITE_IMAGE_SERVER_URL;
  if (rawGcsUrl && rawGcsUrl.trim().length > 0 && !rawGcsUrl.includes('@')) {
    let cleanBase = rawGcsUrl.trim().replace(/\/+$/, '');
    if (!cleanBase.startsWith('http://') && !cleanBase.startsWith('https://')) {
      cleanBase = `https://storage.googleapis.com/${cleanBase}`;
    }
    return `${cleanBase}/images/${encodeURIComponent(filename)}`;
  }

  // Priority 3: Bundled asset import
  if (bundledImageMap[filename]) {
    return bundledImageMap[filename];
  }

  // Fallback 4: Direct public image path
  return `/images/${encodeURIComponent(filename)}`;
}

export const activeImages = {
  drRubensPhoto: getImageUrl('Rubens_Final.png'),
  draJoelyPhoto: getImageUrl('Joely.png'),
  clinicHeroBg: getImageUrl('clinic_hero_bg_1780585593128.png'),
  allegrumLogo: getImageUrl('Allegrum.png'),
  esComplexExamImg: getImageUrl('Es Complex.png'),
  nerveExpressExamImg: getImageUrl('nerve_express_exam_1782414091360.jpg'),
  bioquantumExamImg: getImageUrl('bioquantum_exam_1782414101835.jpg'),
  bioimpedanciaExamImg: getImageUrl('bioimpedancia_exam_1782414111539.jpg'),
};

