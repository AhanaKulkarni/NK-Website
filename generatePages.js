const fs = require('fs');
const path = require('path');
const programs = ['mht-cet', 'jee-institute', 'premium', 'ssc-borivali-west', 'icse-borivali-west', 'cbse-borivali-west'];
const baseDir = path.join(process.cwd(), 'src/app/programs');

programs.forEach(prog => {
  const dir = path.join(baseDir, prog);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const content = `import { ProgramTemplate } from '@/components/sections/ProgramTemplate';\n\nexport default function Page() {\n  return <ProgramTemplate programId="${prog}" />;\n}\n`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
});
console.log('Done!');
