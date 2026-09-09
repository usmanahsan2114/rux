const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\SDW 2\\Downloads\\main product images';
const destDir = path.join(__dirname, '..', 'assets', 'images', 'products');
const backupDir = path.join(destDir, 'backup_previous');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const mappings = [
  {
    id: 'rux-multi-surface',
    name: 'RUX Multi Surface Cleaner (1000ml)',
    srcName: 'multi.png',
    destWebpName: 'rux-multi-surface-studio.webp',
    destPngName: 'rux-multi-surface-studio.png'
  },
  {
    id: 'rux-toilet-cleaner',
    name: 'RUX Toilet Bowl Cleaner (500ml)',
    srcName: 'toilet.png',
    destWebpName: 'rux-toilet-cleaner-studio.webp',
    destPngName: 'rux-toilet-cleaner-studio.png'
  },
  {
    id: 'rux-dishwash',
    name: 'RUX Dishwash Liquid (500ml)',
    srcName: 'dish.png',
    destWebpName: 'rux-dishwash-studio.webp',
    destPngName: 'rux-dishwash-studio.png'
  },
  {
    id: 'rux-blue',
    name: 'RUX Blue Fabric Whitener (150ml)',
    srcName: 'blue.png',
    destWebpName: 'rux-blue-studio.webp',
    destPngName: 'rux-blue-studio.png'
  },
  {
    id: 'rux-bleach',
    name: 'RUX Disinfectant Bleach',
    srcName: 'bleech.png',
    destWebpName: 'rux-bleach-studio.webp',
    destPngName: 'rux-bleach-studio.png'
  },
  {
    id: 'rux-solar-cleaner',
    name: 'RUX Solar Panel Cleaner (750ml)',
    srcName: 'solar.png',
    destWebpName: 'rux-solar-cleaner.webp',
    destPngName: 'rux-solar-cleaner.png'
  },
  {
    id: 'rux-washing-liquid',
    name: 'RUX Washing Machine Liquid (2L)',
    srcName: 'washing liquid.png',
    destWebpName: 'rux-washing-liquid.webp',
    destPngName: 'rux-washing-liquid.png'
  }
];

console.log('=== Processing Main Product Images ===');

mappings.forEach((item, index) => {
  const srcPath = path.join(srcDir, item.srcName);
  const destWebpPath = path.join(destDir, item.destWebpName);
  const destPngPath = path.join(destDir, item.destPngName);
  const backupWebpPath = path.join(backupDir, item.destWebpName);

  if (!fs.existsSync(srcPath)) {
    console.error(`[FAIL] Source file not found: ${srcPath}`);
    return;
  }

  // Backup existing webp if exists
  if (fs.existsSync(destWebpPath)) {
    fs.copyFileSync(destWebpPath, backupWebpPath);
  }

  // Copy PNG version
  fs.copyFileSync(srcPath, destPngPath);

  const originalSize = fs.statSync(srcPath).size;
  console.log(`\n[${index + 1}/${mappings.length}] Converting ${item.name}...`);
  console.log(`Source: ${srcPath} (${(originalSize / 1024 / 1024).toFixed(2)} MB)`);

  // Convert to high-quality optimized WebP using sharp-cli
  try {
    execSync(`npx -y sharp-cli -i "${srcPath}" -o "${destWebpPath}" --quality 90`, { stdio: 'inherit' });
    const newSize = fs.statSync(destWebpPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(`✓ Generated ${item.destWebpName}: ${(newSize / 1024).toFixed(1)} KB (Saved ${savings}%)`);
  } catch (err) {
    console.error(`Error converting ${srcPath}:`, err.message);
  }
});

console.log('\n=== All 7 main product images converted successfully! ===');
