import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOTAL_FRAMES = 180;
const OUTPUT_DIR_1X = path.join(__dirname, '../public/sequences/wall-fill/1x');
const OUTPUT_DIR_2X = path.join(__dirname, '../public/sequences/wall-fill/2x');

// Ensure directories exist
[OUTPUT_DIR_1X, OUTPUT_DIR_2X].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

async function generateFrame(index, dir, scale) {
  const width = 1920 * scale;
  const height = 1080 * scale;
  const frameStr = index.toString().padStart(4, '0');
  
  // Create an SVG with text
  const svgText = `
    <svg width="${width}" height="${height}">
      <rect x="0" y="0" width="${width}" height="${height}" fill="#1E2328" />
      <text x="50%" y="50%" font-family="sans-serif" font-size="${120 * scale}" fill="#EFE7D8" text-anchor="middle" dominant-baseline="middle">
        FRAME ${frameStr}
      </text>
    </svg>
  `;

  const outputPath = path.join(dir, `frame_${frameStr}.avif`);
  
  await sharp(Buffer.from(svgText))
    .avif({ quality: 50 })
    .toFile(outputPath);
}

async function run() {
  console.log('Generating 1x frames...');
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    await generateFrame(i, OUTPUT_DIR_1X, 1);
    if (i % 20 === 0) console.log(`Generated ${i}/${TOTAL_FRAMES} (1x)`);
  }

  console.log('Generating 2x frames...');
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    await generateFrame(i, OUTPUT_DIR_2X, 2);
    if (i % 20 === 0) console.log(`Generated ${i}/${TOTAL_FRAMES} (2x)`);
  }
  
  console.log('Done generating all placeholder frames.');
}

run().catch(console.error);
