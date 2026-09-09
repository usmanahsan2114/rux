const fs = require('fs');
const path = require('path');

const files = [
  'about.html',
  'cart.html',
  'checkout.html',
  'contact.html',
  'faq.html',
  'privacy.html',
  'terms.html',
  'track.html'
];

const attributionHtml = `<p style="margin: 4px 0 0 0; font-size: 0.82rem; color: #94a3b8;">Designed by <a href="https://apexmarketings.com/" target="_blank" rel="noopener" style="color: #60a5fa; text-decoration: underline; font-weight: 600;">Apex Marketings</a> &nbsp;|&nbsp; Developed by <a href="https://www.apexitsolutions.co/" target="_blank" rel="noopener" style="color: #60a5fa; text-decoration: underline; font-weight: 600;">Apex IT Solutions</a></p>`;

const pkSeoTags = `  <meta name="geo.region" content="PK">\n  <meta name="geo.placename" content="Pakistan">`;

files.forEach(filename => {
  const filepath = path.join(__dirname, '..', filename);
  if (!fs.existsSync(filepath)) return;
  let content = fs.readFileSync(filepath, 'utf8');

  // Add attribution below copyright if not already present
  if (!content.includes('https://apexmarketings.com/')) {
    content = content.replace(
      /(©\s*<span class="current-year">\d+<\/span>\s*RUX Cleaning & Shine \(TM # 768691\)\.\s*All Rights Reserved\.<\/p>)/g,
      `$1\n        ${attributionHtml}`
    );
  }

  // Add Pakistan Geo SEO if not present
  if (!content.includes('geo.region') && content.includes('</head>')) {
    content = content.replace('</head>', `${pkSeoTags}\n</head>`);
  }

  fs.writeFileSync(filepath, content, 'utf8');
  console.log(`✓ Updated footer and SEO in ${filename}`);
});
