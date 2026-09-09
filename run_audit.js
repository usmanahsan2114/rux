const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const results = [];
let broken = 0;
let total = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  const hrefMatches = [...content.matchAll(/href=["']([^"']+)["']/g)];
  hrefMatches.forEach(m => {
    const h = m[1];
    total++;
    if (!h.startsWith('http') && !h.startsWith('tel:') && !h.startsWith('mailto:') && !h.startsWith('#') && !h.startsWith('javascript:')) {
      const clean = h.split('?')[0].split('#')[0];
      if (clean && !fs.existsSync(clean)) {
        results.push(`BROKEN LINK in ${file}: ${h}`);
        broken++;
      }
    }
  });

  const imgMatches = [...content.matchAll(/src=["']([^"']+)["']/g)];
  imgMatches.forEach(m => {
    const s = m[1];
    if (!s.startsWith('http') && !s.startsWith('data:')) {
      const clean = s.split('?')[0];
      if (clean && !fs.existsSync(clean)) {
        results.push(`BROKEN IMG in ${file}: ${s}`);
        broken++;
      }
    }
  });
});

results.push(`AUDIT SUMMARY: ${total} links scanned. BROKEN COUNT = ${broken}`);
fs.writeFileSync('audit_report.txt', results.join('\n'), 'utf8');
console.log(results[results.length - 1]);
