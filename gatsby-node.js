// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const fs = require('fs');
const path = require('path');

const pageSlugs = require('./src/data/page-slugs.json');

const paths = [];
const addPathToSite = (pagePath) => paths.push(pagePath);

const writeAllPathsToFile = () => {
  const generated = path.join(__dirname, 'src', '__generated__');

  if (!fs.existsSync(generated)) {
    fs.mkdirSync(generated);
  }

  const allPagesPath = path.join(generated, 'all-pages.js');

  fs.writeFileSync(
    allPagesPath,
    `// Generated during bootstrapping via gatsby-node.js

export default ['${paths.join("', '")}'];
`,
  );
};

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

const createRootPages = async (createPage) => {
  const rootPagesDir = path.join(__dirname, 'src', 'templates');
  const langRootDir = path.join(__dirname, 'src', 'locales');

  const langs = fs
    .readdirSync(langRootDir)
    .filter((f) => f.endsWith('.js') && f.length === 5)
    .map((f) => path.basename(f, '.js'));

  const files = recursiveReadDirSync(rootPagesDir)
    .filter((f) => !f.startsWith('.'))
    .filter((f) => !f.includes('.scss'));

  console.log('The languages found are', langs);

  files.forEach((f) => {
    const fullpath = path.join(__dirname, '..', '..', '..', f);

    console.log('Processing file', fullpath);

    let originalSitePath = path.relative(rootPagesDir, fullpath).replace(/.jsx$/g, '');

    console.log('The original path is', originalSitePath);

    // Remove the index files
    if (originalSitePath.endsWith('index')) {
      originalSitePath = originalSitePath.substring(0, originalSitePath.length - 5);
    }

    // If they have .fi then just drop that completely
    if (originalSitePath.endsWith('.fi')) {
      originalSitePath = originalSitePath.substring(0, originalSitePath.length - 3);
    }

    langs.forEach((lang) => {
      const sitePath = (() => {
        if (originalSitePath === '') {
          return lang === 'fi' ? '/' : `/${lang}`;
        }
        if (originalSitePath in pageSlugs && lang in pageSlugs[originalSitePath]) {
          const slug = pageSlugs[originalSitePath][lang];

          return lang === 'fi' ? `/${slug}` : `/${lang}/${slug}`;
        }

        return lang === 'fi' ? `/${originalSitePath}` : `/${lang}/${originalSitePath}`;
      })();

      console.log('The new path for the page is', sitePath);

      const pageOpts = {
        path: sitePath,
        component: fullpath,
        context: {
          lang,
          key: originalSitePath,
        },
      };

      addPathToSite(sitePath);
      createPage(pageOpts);
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path === '/404/') {
    const oldPage = { ...page };

    // eslint-disable-next-line no-param-reassign
    page.path = '/404';

    if (page.path !== oldPage.path) {
      deletePage(oldPage);
      createPage(page);
    }
  }

  addPathToSite(page.path);
};

exports.onPostBootstrap = () => writeAllPathsToFile();

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  await createRootPages(createPage);
};
