const fs = require('fs');
const path = require('path');

const countryDataFilePath = 'countries.json';
const countryData = JSON.parse(
  fs.readFileSync(path.join(__dirname, countryDataFilePath), 'utf8'),
);

const outputDir = 'scripts/data/countries';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

for (const [code, data] of Object.entries(countryData)) {
  const filePath = path.join(outputDir, `${code}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
}
