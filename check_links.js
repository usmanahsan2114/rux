const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
console.log('HTML Files to check:', htmlFiles);

const issues = [];
const checkedLinks = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Check img tags
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const src = match[1];
    if (!src.startsWith('http') && !src.startsWith('data:')) {
      const cleanSrc = src.split('?')[0];
      if (!fs.existsSync(cleanSrc)) {
        issues.push({ file, type: 'BROKEN_IMAGE', target: src });
      }
    }
  }

  // Check a tags
  const aRegex = /<a[^>]+href=["']([^"']+)["']/g;
  while ((match = aRegex.exec(content)) !== null) {
    const href = match[1];
    checkedLinks.push({ file, href });
    if (!href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('#') && !href.startsWith('javascript:')) {
      const cleanHref = href.split('?')[0].split('#')[0];
      if (cleanHref && !fs.existsSync(cleanHref)) {
        issues.push({ file, type: 'BROKEN_LINK', target: href });
      }
    }
  }
});

console.log(`\nChecked ${checkedLinks.length} links across ${htmlFiles.length} files.`);
if (issues.length === 0) {
  console.log('PASSED: Zero broken relative links or images found!');
} else {
  console.log(`FAILED: Found ${issues.length} issues:`);
  issues.forEach(i => console.log(`[${i.type}] in ${i.file} -> ${i.target}`));
}
