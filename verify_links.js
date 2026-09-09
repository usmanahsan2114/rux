const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let brokenCount = 0;
let totalLinks = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // strip script tags so JS templates like ${item.image} aren't treated as static hrefs
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  const hrefMatches = [...content.matchAll(/href=["']([^"']+)["']/g)];
  hrefMatches.forEach(m => {
    const h = m[1];
    totalLinks++;
    if (!h.startsWith('http') && !h.startsWith('tel:') && !h.startsWith('mailto:') && !h.startsWith('#') && !h.startsWith('javascript:')) {
      const clean = h.split('?')[0].split('#')[0];
      if (clean && !fs.existsSync(clean)) {
        console.log(`BROKEN LINK in ${file} -> ${h}`);
        brokenCount++;
      }
    }
  });

  const imgMatches = [...content.matchAll(/src=["']([^"']+)["']/g)];
  imgMatches.forEach(m => {
    const s = m[1];
    if (!s.startsWith('http') && !s.startsWith('data:')) {
      const clean = s.split('?')[0];
      if (clean && !fs.existsSync(clean)) {
        console.log(`BROKEN IMG in ${file} -> ${s}`);
        brokenCount++;
      }
    }
  });
});

console.log(`Scanned ${totalLinks} links across ${htmlFiles.length} HTML files.`);
console.log(`Total broken items: ${brokenCount}`);
if (brokenCount === 0) {
  console.log("SUCCESS: Every single link and image points to an existing file!");
}
