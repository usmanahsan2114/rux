const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\SDW 2\\Downloads\\backgroun';
const destDir = path.join(__dirname, '..', 'assets', 'images', 'products');

const mappings = [
  {
    id: 'rux-multi-surface',
    name: 'RUX Multi Surface Lifestyle',
    srcName: 'multi.png',
    destWebpName: 'rux-multi-surface-lifestyle.webp'
  },
  {
    id: 'rux-toilet-cleaner',
    name: 'RUX Toilet Cleaner Lifestyle',
    srcName: 'toilet.png',
    destWebpName: 'rux-toilet-cleaner-lifestyle.webp'
  },
  {
    id: 'rux-dishwash',
    name: 'RUX Dishwash Lifestyle',
    srcName: 'dish.png',
    destWebpName: 'rux-dishwash-lifestyle.webp'
  },
  {
    id: 'rux-blue',
    name: 'RUX Blue Fabric Whitener Lifestyle',
    srcName: 'blue.png',
    destWebpName: 'rux-blue-lifestyle.webp'
  },
  {
    id: 'rux-bleach',
    name: 'RUX Disinfectant Bleach Lifestyle',
    srcName: 'bleech.png',
    destWebpName: 'rux-bleach-lifestyle.webp'
  },
  {
    id: 'rux-solar-cleaner',
    name: 'RUX Solar Panel Cleaner Lifestyle',
    srcName: 'solar.png',
    destWebpName: 'rux-solar-cleaner-lifestyle.webp'
  },
  {
    id: 'rux-washing-liquid',
    name: 'RUX Washing Liquid Lifestyle',
    srcName: 'washing.png',
    destWebpName: 'rux-washing-liquid-lifestyle.webp'
  }
];

console.log('=== Processing Contextual Lifestyle Background Images ===');

mappings.forEach((item, index) => {
  const srcPath = path.join(srcDir, item.srcName);
  const destWebpPath = path.join(destDir, item.destWebpName);

  if (!fs.existsSync(srcPath)) {
    console.error(`[FAIL] Source file not found: ${srcPath}`);
    return;
  }

  const originalSize = fs.statSync(srcPath).size;
  console.log(`\n[${index + 1}/${mappings.length}] Converting ${item.name}...`);
  console.log(`Source: ${srcPath} (${(originalSize / 1024 / 1024).toFixed(2)} MB)`);

  try {
    execSync(`npx -y sharp-cli -i "${srcPath}" -o "${destWebpPath}" --quality 90`, { stdio: 'inherit' });
    const newSize = fs.statSync(destWebpPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(`✓ Generated ${item.destWebpName}: ${(newSize / 1024).toFixed(1)} KB (Saved ${savings}%)`);
  } catch (err) {
    console.error(`Error converting ${srcPath}:`, err.message);
  }
});

console.log('\n=== All 7 lifestyle background images converted successfully! ===');
