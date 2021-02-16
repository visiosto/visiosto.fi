// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const fs = require('fs');
const path = require('path');

const recursiveReadDirSync = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const entryPaths = fs.readdirSync(folderPath).map((entry) => path.join(folderPath, entry));
  const filePaths = entryPaths.filter((entryPath) => fs.statSync(entryPath).isFile());
  const dirPaths = entryPaths.filter((entryPath) => !filePaths.includes(entryPath));
  const dirFiles = dirPaths.reduce((prev, curr) => prev.concat(recursiveReadDirSync(curr)), []);

  return [...filePaths, ...dirFiles]
    .filter((f) => !f.endsWith('.DS_Store') && !f.endsWith('README.md'))
    .map((f) => {
      const root = path.join(__dirname, '..', '..', '..');

      return f.replace(root, '');
    });
};

module.exports = recursiveReadDirSync;
