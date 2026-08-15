const fs = require('fs');
const path = require('path');

const knownScores = {
  'manasvi patankar': '98.8%',
  'ananya dalvi': '97%',
  'navya ghosalkar': '96.8%',
  'saanvi prabhu': '96.6%',
  'ishan hindalekar': '96.2%',
  'reet narang': '96.2%',
  'manasvi kurudwad': '95.6%',
  'sanika sawant': '95.4%',
  'aditya khatavkar': '95.4%',
  'kavya rajendrn': '95.2%',
  'orishna upadhyay': '95.2%',
  'swaraj bhopi': '94.2%',
  'ayush jagtap': '93.8%',
  'vaidehi shewale': '93.8%',
  'jinansh chheda': '93.6%',
  'aayussh naik': '92.8%',
  'svea ralhan': '92.6%',
  'aayushi dike': '92%',
  'dhairya semlani': '91.4%',
  'kimaya mulgaonkar': '91.4%',
  'yahvi shukla': '91.4%',
  'shreyas ghadi': '91%',
  'shlok sawant': '90.8%',
  'soumil save': '90.6%',
  'stuti panchal': '90.6%',
  'meher mistry': '90.4%',
  'ansh dhiman': '90.2%',
  'ddhanika kava': '90%',
  'anay sharma': '98.4%',
  'aryan goswami': '97.6%',
  'aaryan goswami': '97.6%',
  'prasiddhi senghani': '97.6%',
  'ditsa mistry': '97.4%',
  'tithi patel': '97.2%',
  'tvisha majithia': '97%',
  'diya mookkole': '97%',
  'aahana sheth': '96.6%',
  'ahana seth': '96.6%',
  'akshaya parashar': '96.6%',
  'shrey thakoor': '96.2%',
  'aarush padhye': '95.8%',
  'aakanksha dighe': '95.2%',
  'hiya sheth': '95%',
  'saarth gaikwad': '94.2%',
  'purvansh mewada': '93.2%',
  'jiya modi': '93.2%',
  'ahan shetty': '92.8%',
  'aditya pawaskar': '92.8%',
  'divyanka ranjan': '92.6%',
  'janhavi pawar': '92.4%',
  'ishani bharti': '92%',
  'varad pednekar': '92%',
  'charvi shah': '91.8%',
  'sanjeevani bapat': '91%',
  'aarav shah': '90.6%'
};

function formatName(filename) {
  const ext = path.extname(filename);
  let base = path.basename(filename, ext);
  base = base.replace(/^[0-9\-]+/, '').replace(/_/g, ' ');
  return base.trim().split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

function normalizeKey(name) {
  return name.toLowerCase().replace(/[^a-z]+/g, '');
}

function getPhotoId(filename) {
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  return base.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

const folders = {
  'NK EAST 23-24': 'NK EAST 20203-2024',
  'NK EAST 24-25': 'NK EAST 2024-2025',
  'NK EAST 25-26': 'NK EAST 2025-2026',
  'NK WEST 23-24': 'NK WEST 2023-2024',
  'NK WEST 24-25': 'NK WEST 2024-2025',
  'NK WEST 25-26': 'NK WEST 2025-2026'
};

let output = `export type Topper = {
  name: string;
  score: string;
  school?: string;
  photoId: string;
};\n\n`;

Object.keys(folders).forEach(tabName => {
  const dir = folders[tabName];
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) return;
  
  const files = fs.readdirSync(fullPath).filter(f => f.match(/\.(jpg|jpeg|png)$/i));
  const varName = tabName.replace(/[^a-zA-Z0-9]/g, '_').replace(/^_+|_+$/g, '').toLowerCase();
  
  output += `export const ${varName}: Topper[] = [\n`;
  
  const seen = new Set();
  
  files.forEach(file => {
    const name = formatName(file);
    const key = normalizeKey(name);
    if(seen.has(key)) return;
    seen.add(key);
    
    const photoId = getPhotoId(file);
    // Find score
    let score = 'Top Scorer';
    const n = name.toLowerCase();
    if(knownScores[n]) score = knownScores[n];
    else {
      // rough fallback if only partial match
      for(const k of Object.keys(knownScores)) {
        if(normalizeKey(k) === key) { score = knownScores[k]; break; }
      }
    }
    
    output += `  { name: '${name.replace(/'/g, "\\'")}', score: '${score}', photoId: '${photoId}' },\n`;
  });
  
  output += `];\n\n`;
});

output += `export const allBoards = {
  'NK EAST 23-24': nk_east_23_24,
  'NK EAST 24-25': nk_east_24_25,
  'NK EAST 25-26': nk_east_25_26,
  'NK WEST 23-24': nk_west_23_24,
  'NK WEST 24-25': nk_west_24_25,
  'NK WEST 25-26': nk_west_25_26,
};\n`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'results.ts'), output);
console.log('results.ts generated without duplicates.');
