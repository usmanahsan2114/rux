const fs = require('fs');
const path = require('path');

const filesToRemove = [
  // Old raw camera posters and labels
  'assets/images/products/excel_image1.jpeg',
  'assets/images/products/excel_image2.jpeg',
  'assets/images/products/excel_image3.jpeg',
  'assets/images/products/excel_image4.jpeg',
  'assets/images/products/excel_image5.jpeg',
  'assets/images/products/excel_image6.jpeg',
  'assets/images/products/excel_image7.jpeg',
  'assets/images/products/excel_image8.jpeg',
  'assets/images/products/excel_image9.jpeg',
  'assets/images/products/excel_image10.jpeg',
  'assets/images/products/excel_image11.jpeg',
  'assets/images/products/user_media_1788846869165.jpg',
  'assets/images/products/user_media_1788846870269.jpg',
  'assets/images/products/user_media_1788846871625.jpg',
  'assets/images/products/user_media_1788846872812.jpg',
  'assets/images/products/user_media_1788846873970.jpg',
  'assets/images/products/rux-bleach.jpg',
  'assets/images/products/rux-bleach-label.jpg',
  'assets/images/products/rux-blue-bottle.jpg',
  'assets/images/products/rux-blue-label.jpg',
  'assets/images/products/rux-blue-poster.jpg',
  'assets/images/products/rux-dishwash-bottle.jpg',
  'assets/images/products/rux-dishwash-label.jpg',
  'assets/images/products/rux-dishwash-poster.jpg',
  'assets/images/products/rux-multi-surface-bottle.jpg',
  'assets/images/products/rux-multi-surface-poster.jpg',
  'assets/images/products/rux-solar-cleaner.jpg',
  'assets/images/products/rux-toilet-cleaner-bottle.jpg',
  'assets/images/products/rux-toilet-cleaner-poster.jpg',
  'assets/images/products/rux-washing-liquid.jpg',
  // Old canvas 3d studio renders (replaced by ai studio webp & png)
  'assets/images/products/rux-bleach-studio.jpg',
  'assets/images/products/rux-blue-studio.jpg',
  'assets/images/products/rux-dishwash-studio.jpg',
  'assets/images/products/rux-multi-surface-studio.jpg',
  'assets/images/products/rux-toilet-cleaner-studio.jpg',
  // Old counter jpgs
  'assets/images/after-counter.jpg',
  'assets/images/before-counter.jpg',
  'assets/images/rux-hero-banner.jpg',
  // Duplicate large png files in packaging that belong in products/
  'assets/images/packaging/rux-bleach-studio.png',
  'assets/images/packaging/rux-blue-studio.png',
  'assets/images/packaging/rux-dishwash-studio.png',
  'assets/images/packaging/rux-multi-surface-studio.png',
  'assets/images/packaging/rux-solar-cleaner.png',
  'assets/images/packaging/rux-toilet-cleaner-studio.png',
  'assets/images/packaging/rux-washing-liquid.png'
];

let removedCount = 0;
let bytesSaved = 0;

filesToRemove.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (fs.existsSync(fullPath)) {
    const size = fs.statSync(fullPath).size;
    fs.unlinkSync(fullPath);
    removedCount++;
    bytesSaved += size;
    console.log(`Removed: ${relPath} (${(size / 1024).toFixed(1)} KB)`);
  }
});

console.log(`\nCleanup complete! Removed ${removedCount} extra files, freed ${(bytesSaved / (1024 * 1024)).toFixed(2)} MB of disk space.`);
