const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

const brokenAssets = [];
const brokenLinks = [];

// 1. Check HTML Files
htmlFiles.forEach(file => {
  const content = fs.readFileSync(path.join(rootDir, file), 'utf8');

  // Check Images
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const src = match[1];
    if (!src.startsWith('http') && !src.startsWith('data:')) {
      const cleanSrc = src.split('?')[0];
      const absPath = path.join(rootDir, cleanSrc);
      if (!fs.existsSync(absPath)) {
        brokenAssets.push({ file, src });
      }
    }
  }

  // Check Anchors
  const aRegex = /<a[^>]+href=["']([^"']+)["']/g;
  while ((match = aRegex.exec(content)) !== null) {
    const href = match[1];
    if (!href.startsWith('http') && !href.startsWith('https:') && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('#') && !href.startsWith('javascript:')) {
      const cleanHref = href.split('?')[0].split('#')[0];
      if (cleanHref) {
        const absPath = path.join(rootDir, cleanHref);
        if (!fs.existsSync(absPath)) {
          brokenLinks.push({ file, href });
        }
      }
    }
  }
});

// 2. Check rux-store.js Image Paths
const storeJsPath = path.join(rootDir, 'assets', 'js', 'rux-store.js');
if (fs.existsSync(storeJsPath)) {
  const storeContent = fs.readFileSync(storeJsPath, 'utf8');
  const pathRegex = /"(assets\/images\/[^"]+)"/g;
  let m;
  while ((m = pathRegex.exec(storeContent)) !== null) {
    const relPath = m[1];
    const absPath = path.join(rootDir, relPath);
    if (!fs.existsSync(absPath)) {
      brokenAssets.push({ file: 'rux-store.js', src: relPath });
    }
  }
}

console.log('=== VERIFICATION SUMMARY ===');
console.log(`HTML Files Scanned: ${htmlFiles.length}`);
console.log(`Broken Images/Assets: ${brokenAssets.length}`);
if (brokenAssets.length > 0) {
  brokenAssets.forEach(b => console.log(`  [BROKEN ASSET] in ${b.file}: ${b.src}`));
}
console.log(`Broken Relative Links: ${brokenLinks.length}`);
if (brokenLinks.length > 0) {
  brokenLinks.forEach(b => console.log(`  [BROKEN LINK] in ${b.file}: ${b.href}`));
}

if (brokenAssets.length === 0 && brokenLinks.length === 0) {
  console.log('PERFECT! ZERO broken assets and ZERO broken links found anywhere in the project!');
}
