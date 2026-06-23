const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processFavicon() {
  try {
    const inputPath = path.join(__dirname, 'public', 'tch.png');
    const outputPath = path.join(__dirname, 'public', 'tch-icon-favicon.png');

    // Process the image: remove white background and create favicon
    await sharp(inputPath)
      .removeAlpha()
      .flatten({ background: '#ffffff' })
      // Convert to favicon size 32x32
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      // Create ICO format (using PNG as fallback, browsers support PNG as favicon)
      .png()
      .toFile(outputPath);

    console.log(`✓ Favicon created at ${outputPath}`);

    // Also create a larger version for various uses
    const applePath = path.join(__dirname, 'public', 'tch-apple-icon.png');
    await sharp(inputPath)
      .removeAlpha()
      .flatten({ background: '#ffffff' })
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(applePath);

    console.log(`✓ Apple icon created at ${applePath}`);
  } catch (error) {
    console.error('Error processing favicon:', error);
    process.exit(1);
  }
}

processFavicon();

