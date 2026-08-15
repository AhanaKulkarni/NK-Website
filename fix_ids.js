const fs = require('fs');
const path = require('path');

const resultsFile = path.join(__dirname, 'src', 'data', 'results.ts');
let content = fs.readFileSync(resultsFile, 'utf8');

const photoDir = path.join(__dirname, 'public', 'students');
const photos = fs.readdirSync(photoDir).map(p => path.basename(p, path.extname(p)));

// For each photoId in results.ts, if it doesn't exist exactly, try to find a close match
const photoIdRegex = /photoId:\s*'([^']+)'/g;
let match;
while ((match = photoIdRegex.exec(content)) !== null) {
  const id = match[1];
  if (!photos.includes(id)) {
    // try to find a partial match
    const partialMatch = photos.find(p => p.includes(id.split('-')[0]));
    if (partialMatch) {
      console.log(`Replacing ${id} with ${partialMatch}`);
      content = content.replace(`photoId: '${id}'`, `photoId: '${partialMatch}'`);
    } else {
      console.log(`No match found for ${id}`);
    }
  }
}

fs.writeFileSync(resultsFile, content);
console.log('Fixed photo IDs in results.ts');
