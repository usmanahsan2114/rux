const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\SDW 2\\Downloads\\imge';

const mappings = [
  {
    name: 'Before Counter',
    src: path.join(srcDir, 'before-counter.png'),
    destWebp: path.join(__dirname, '..', 'assets', 'images', 'before-counter.webp')
  },
  {
    name: 'Multi Surface 3D',
    src: path.join(srcDir, 'multi-surface-3d.png'),
    destWebp: path.join(__dirname, '..', 'assets', 'images', 'products', 'rux-multi-surface-studio.webp')
  },
  {
    name: 'Toilet Cleaner 3D',
    src: path.join(srcDir, 'toiler-cleaner-3d.png'),
    destWebp: path.join(__dirname, '..', 'assets', 'images', 'products', 'rux-toilet-cleaner-studio.webp')
  },
  {
    name: 'Dishwash 3D',
    src: path.join(srcDir, 'dishwash-3d.png'),
    destWebp: path.join(__dirname, '..', 'assets', 'images', 'products', 'rux-dishwash-studio.webp')
  },
  {
    name: 'Blue Whitener 3D',
    src: path.join(srcDir, 'blue-3d.png'),
    destWebp: path.join(__dirname, '..', 'assets', 'images', 'products', 'rux-blue-studio.webp')
  },
  {
    name: 'Home Bundle Kit 3D',
    src: path.join(srcDir, 'rux-home-bundle-studio.png'),
    destWebp: path.join(__dirname, '..', 'assets', 'images', 'products', 'rux-home-bundle-studio.webp')
  }
];

mappings.forEach((m, idx) => {
  if (!fs.existsSync(m.src)) {
    console.error(`Missing source file: ${m.src}`);
    return;
  }
  const originalSize = fs.statSync(m.src).size;
  console.log(`\n[${idx + 1}/${mappings.length}] Processing ${m.name}...`);
  console.log(`Source: ${m.src} (${(originalSize / 1024 / 1024).toFixed(2)} MB)`);

  // Convert to WebP using sharp-cli
  const tempOut = m.destWebp;
  try {
    execSync(`npx -y sharp-cli -i "${m.src}" -o "${tempOut}" --quality 88`, { stdio: 'inherit' });
    const newSize = fs.statSync(tempOut).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(`✓ Generated ${tempOut}: ${(newSize / 1024).toFixed(1)} KB (Saved ${savings}%)`);
  } catch (err) {
    console.error(`Error converting ${m.src}:`, err.message);
  }
});

console.log('\nAll 6 images successfully converted and updated in website assets!');
