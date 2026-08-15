const fs = require('fs');
const path = require('path');

const srcDirs = [
  'NK EAST 20203-2024',
  'NK EAST 2024-2025',
  'NK EAST 2025-2026',
  'NK WEST 2023-2024',
  'NK WEST 2024-2025',
  'NK WEST 2025-2026',
  'Photo 2023-24',
  'Photo 2024-25'
];

const destDir = path.join(__dirname, 'public', 'students');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function sanitizeName(name) {
  // Remove extension
  const ext = path.extname(name);
  const baseName = path.basename(name, ext);
  
  // Lowercase, replace spaces and underscores with hyphens, remove multiple hyphens
  let cleanName = baseName.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
    
  return { cleanName, ext };
}

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const { cleanName, ext } = sanitizeName(file);
        // Force .jpg if it's a jpeg, otherwise keep original
        const newExt = ext.toLowerCase() === '.jpeg' ? '.jpg' : ext.toLowerCase();
        const destPath = path.join(destDir, `${cleanName}${newExt}`);
        
        fs.copyFileSync(fullPath, destPath);
        console.log(`Copied ${file} -> ${cleanName}${newExt}`);
      }
    }
  }
}

srcDirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  processDirectory(fullPath);
});

console.log('Done organizing photos!');
