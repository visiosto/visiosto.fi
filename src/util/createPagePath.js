// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createPath = (pathNode) => {
  if (pathNode.parentPath) {
    return `${createPath(pathNode.parentPath)}/${pathNode.slug}`;
  }

  return `${pathNode.slug}`;
};

const createPagePath = (node, locale, defaultLocale, localePaths, parentPath) => {
  let pagePath = `${node.slug}`;
  if (parentPath) {
    if (node.parentPath) {
      pagePath = `${createPath(parentPath)}/${createPath(node.parentPath)}/${pagePath}`;
    } else {
      pagePath = `${createPath(parentPath)}/${pagePath}`;
    }
  } else if (node.parentPath) {
    pagePath = `${createPath(node.parentPath)}/${pagePath}`;
  }

  return defaultLocale === locale
    ? `/${pagePath}`
    : `/${localePaths[locale.replace('-', '_')]}/${pagePath}`;
};

export default createPagePath;
