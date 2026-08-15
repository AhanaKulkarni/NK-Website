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

const res = {};

function processDir(d) {
  if(!fs.existsSync(d)) return;
  const files = fs.readdirSync(d);
  files.forEach(f => {
    const fp = path.join(d, f);
    if(fs.statSync(fp).isDirectory()) {
      processDir(fp);
    } else if(f.match(/\.(jpg|jpeg|png)$/i)) {
      const parts = d.split(path.sep);
      const cat = parts[parts.length-1];
      if(!res[cat]) res[cat] = [];
      res[cat].push(f);
    }
  });
}

srcDirs.forEach(d => processDir(path.join(process.cwd(), d)));

Object.keys(res).forEach(k => console.log(k + ': ' + res[k].length + ' photos'));
