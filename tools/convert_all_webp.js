const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const tasks = [
  {
    src: 'assets/images/packaging/rux-dishwash-studio.png',
    destPng: 'assets/images/products/rux-dishwash-studio.png',
    destWebp: 'assets/images/products/rux-dishwash-studio.webp'
  },
  {
    src: 'assets/images/packaging/rux-toilet-cleaner-studio.png',
    destPng: 'assets/images/products/rux-toilet-cleaner-studio.png',
    destWebp: 'assets/images/products/rux-toilet-cleaner-studio.webp'
  },
  {
    src: 'assets/images/packaging/rux-multi-surface-studio.png',
    destPng: 'assets/images/products/rux-multi-surface-studio.png',
    destWebp: 'assets/images/products/rux-multi-surface-studio.webp'
  },
  {
    src: 'assets/images/packaging/rux-blue-studio.png',
    destPng: 'assets/images/products/rux-blue-studio.png',
    destWebp: 'assets/images/products/rux-blue-studio.webp'
  },
  {
    src: 'assets/images/packaging/rux-bleach-studio.png',
    destPng: 'assets/images/products/rux-bleach-studio.png',
    destWebp: 'assets/images/products/rux-bleach-studio.webp'
  },
  {
    src: 'assets/images/packaging/rux-solar-cleaner.png',
    destPng: 'assets/images/products/rux-solar-cleaner.png',
    destWebp: 'assets/images/products/rux-solar-cleaner.webp'
  },
  {
    src: 'assets/images/packaging/rux-washing-liquid.png',
    destPng: 'assets/images/products/rux-washing-liquid.png',
    destWebp: 'assets/images/products/rux-washing-liquid.webp'
  },
  {
    src: 'assets/images/rux-hero-banner.png',
    destPng: 'assets/images/rux-hero-banner.png',
    destWebp: 'assets/images/rux-hero-banner.webp'
  },
  {
    src: 'assets/images/before-counter.png',
    destPng: 'assets/images/before-counter.png',
    destWebp: 'assets/images/before-counter.webp'
  },
  {
    src: 'assets/images/after-counter.png',
    destPng: 'assets/images/after-counter.png',
    destWebp: 'assets/images/after-counter.webp'
  }
];

tasks.forEach((t, i) => {
  if (fs.existsSync(t.src)) {
    // Copy png if needed
    if (t.destPng && t.src !== t.destPng) {
      fs.copyFileSync(t.src, t.destPng);
    }
    // Convert to webp
    console.log(`[${i + 1}/${tasks.length}] Converting ${t.src} -> ${t.destWebp}`);
    execSync(`npx sharp -i "${t.src}" -o "${t.destWebp}" -f webp -q 85`, { stdio: 'inherit' });
    const originalSize = fs.statSync(t.src).size;
    const webpSize = fs.statSync(t.destWebp).size;
    const saving = ((1 - webpSize / originalSize) * 100).toFixed(1);
    console.log(`✓ Saved ${saving}%: ${(originalSize / 1024).toFixed(0)}KB -> ${(webpSize / 1024).toFixed(0)}KB`);
  } else {
    console.warn(`File not found: ${t.src}`);
  }
});
console.log('All WebP conversions completed successfully!');
