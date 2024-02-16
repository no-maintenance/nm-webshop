const fs = require('fs');
const path = require('path');

const {getAllInfoByISO} = require('iso-country-currency');

const countryDataFilePath = 'countries.json';
const countriesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, countryDataFilePath), 'utf8'),
);

// Define the supported languages and their names
const languagesData = {
  en: 'English',
  fr: 'French',
  de: 'Deutsch',
  it: 'Italiano',
  es: 'Español',
  ca: 'Català',
  ja: '日本語',
  ko: '한국어',
};

// Create the all.json file content
const allJsonData = Object.entries(countriesData).map(
  ([code, country], index) => {
    const {currency, symbol} = getAllInfoByISO(code);
    const countryEntry = {
      code,
      name: `${country.name} ${
        currency && symbol ? `(${currency} ${symbol})` : ''
      }`, // Replace "Currency symbol" with the actual currency symbol
      languages: [],
      prefixes: [],
    };
    country.languages.forEach((langCode) => {
      if (languagesData[langCode]) {
        countryEntry.languages.push({
          code: langCode,
          name: languagesData[langCode],
        });
        countryEntry.prefixes.push(`/${langCode}-${code}`);
      }
    });
    if (index === 0) {
      countryEntry.isDefault = true;
    }
    return countryEntry;
  },
);

// Write the all.json file
fs.writeFileSync('scripts/data/all.json', JSON.stringify(allJsonData, null, 4));
