const fs = require('fs');
const path = require('path');

const icons = [
  // Skills
  'JavaScript', 'Node.js', 'ReactJS', 'NextJS', 'ExpressJS', 
  'MySQL', 'MSSQL', 'MongoDB', 'Laravel', 'ASP.NET MVC', 
  '.NET Core', 'Spring Boot', 'Bootstrap', 'TailwindCSS', 'Git',
  // Tools
  'VSCode', 'GitHub', 'Postman', 'Kursor AI', 'Docker', 'npm', 'Figma'
];

const outputDir = path.join(__dirname, '..', 'public', 'icons');

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

const generateSvg = (name) => `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="12" fill="#f3f4f6" />
  <text x="50%" y="50%" font-family="Arial" font-size="10" fill="#374151" text-anchor="middle" dominant-baseline="middle">
    ${name}
  </text>
</svg>
`.trim();

icons.forEach(name => {
  // sanitize filename
  const filename = name.replace(/[\s.]/g, '').toLowerCase() + '.svg';
  fs.writeFileSync(path.join(outputDir, filename), generateSvg(name));
  console.log(`Generated ${filename}`);
});


