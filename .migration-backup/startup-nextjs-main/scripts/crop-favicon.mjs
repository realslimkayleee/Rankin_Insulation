import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function cropFavicon() {
  const inputPath = path.join(process.cwd(), 'src/app/icon.png');
  const tempPath = path.join(process.cwd(), 'src/app/icon-temp.png');

  try {
    // Trim the image (removes transparent or solid color borders)
    await sharp(inputPath)
      .trim()
      .toFile(tempPath);

    // Replace the original file
    fs.renameSync(tempPath, inputPath);
    console.log('Successfully cropped the favicon to remove padding!');
  } catch (error) {
    console.error('Error cropping image:', error);
  }
}

cropFavicon();
