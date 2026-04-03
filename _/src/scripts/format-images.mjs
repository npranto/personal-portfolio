import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const SUPPORTED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const FORMATTED_IMAGE_EXTENSIONS = ['.webp', '.avif'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const IMAGES_DIR = path.join(__dirname, '../../public/assets/images');

const cleanupExistingImages = () => {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`🚨 Error: Images Directory [${IMAGES_DIR}] does not exist`);
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR);

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (FORMATTED_IMAGE_EXTENSIONS.includes(ext)) {
      const filePath = path.join(IMAGES_DIR, file);
      fs.unlinkSync(filePath);
      console.log(`❌ REMOVED file: [${filePath}]`);
    }
  });
};

const formatAllImages = () => {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`🚨 Error: Images Directory [${IMAGES_DIR}] does not exist`);
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR);

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();

    if (!SUPPORTED_IMAGE_EXTENSIONS.includes(ext)) return;

    const filePath = path.join(IMAGES_DIR, file);
    const fileBasename = path.basename(file, ext);
    const outputFilePathInWebP = path.join(IMAGES_DIR, `${fileBasename}.webp`);
    const outputFilePathInAvif = path.join(IMAGES_DIR, `${fileBasename}.avif`);

    sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputFilePathInWebP)
      .then(() => console.log(`✅ CREATED file: [${outputFilePathInWebP}]`))
      .catch((err) =>
        console.error(`🚨 Error processing WebP [${outputFilePathInWebP}]`, err)
      );

    sharp(filePath)
      .avif({ quality: 50 })
      .toFile(outputFilePathInAvif)
      .then(() => console.log(`✅ CREATED file: [${outputFilePathInAvif}]`))
      .catch((err) =>
        console.error(`🚨 Error processing AVIF [${outputFilePathInAvif}]`, err)
      );
  });
};

(() => {
  cleanupExistingImages();
  formatAllImages();
})();
