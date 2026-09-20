const fs = require('fs');
const path = require('path');

function fixUrls(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/rel: "canonical", href: "\/([^"]*)"/g, 'rel: "canonical", href: "https://alpinecresthomestay.com/$1"');
  content = content.replace(/property: "og:url", content: "\/([^"]*)"/g, 'property: "og:url", content: "https://alpinecresthomestay.com/$1"');

  // Soften wording and fix geographic names in h2/headings
  content = content.replace(/<h2>A Peaceful Homestay at Shimla<\/h2>/g, '<h2>A Peaceful Homestay Near Shimla</h2>');
  content = content.replace(/<h2>A Peaceful Homestay at Kufri<\/h2>/g, '<h2>A Peaceful Homestay Near Kufri</h2>');
  content = content.replace(/<h2>A Peaceful Homestay at Narkanda<\/h2>/g, '<h2>Explore Narkanda</h2>');
  content = content.replace(/<h2>A Peaceful Homestay at Fagu<\/h2>/g, '<h2>Explore Fagu</h2>');
  content = content.replace(/<h2>A Peaceful Homestay at Chail<\/h2>/g, '<h2>Explore Chail</h2>');

  fs.writeFileSync(filePath, content, 'utf8');
}

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.tsx')) fixUrls(full);
  }
}
walk('./src/routes');
