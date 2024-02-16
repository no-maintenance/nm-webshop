import { test, expect } from '@playwright/test';
import path from 'path';
import { readJsonFile } from "./utils";

// Utility function to compare the structure of two objects
const compareStructures = (baseObj: any, compareObj: any, path = ''): string[] => {
  const errors: string[] = [];
  const baseKeys = Object.keys(baseObj);
  const compareKeys = new Set(Object.keys(compareObj));

  baseKeys.forEach((key) => {
    const currentPath = path ? `${path}.${key}` : key;
    if (compareKeys.has(key)) {
      compareKeys.delete(key);
      if (typeof baseObj[key] === 'object' && baseObj[key] !== null) {
        errors.push(...compareStructures(baseObj[key], compareObj[key], currentPath));
      }
    } else {
      errors.push(`Missing key: ${currentPath}`);
    }
  });

  compareKeys.forEach((key) => {
    const currentPath = path ? `${path}.${key}` : key;
    errors.push(`Additional key: ${currentPath}`);
  });

  return errors;
};

// Base language file
const baseLangPath = path.join(__dirname, '../public/locales/language/en.json');
const baseLang = readJsonFile(baseLangPath);

// Languages to compare
const languages = ['ja', 'ko', 'de', 'it', 'fr', 'es', 'ca'];

languages.forEach((lang) => {
  test(`Check ${lang}.json structure`, async () => {
    const langPath = path.join(__dirname, `../public/locales/language/${lang}.json`);
    const langData = readJsonFile(langPath);
    const errors = compareStructures(baseLang, langData);

    expect(errors).toEqual([]);
  });
});
