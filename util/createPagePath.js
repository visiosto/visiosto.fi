// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createParentPath = (node) =>
  node.parentPath ? `${createParentPath(node.parentPath)}/${node.slug}` : `${node.slug}`;

const createPagePath = (node, locale, defaultLocale, localePaths) =>
  defaultLocale === locale
    ? `/${createParentPath(node)}`
    : `/${localePaths[locale.replace('-', '_')]}/${createParentPath(node)}`;

module.exports = createPagePath;
