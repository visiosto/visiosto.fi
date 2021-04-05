// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createParentPath = function createParentPathFromNodeSlugs(node) {
  return node.parentPath ? `${createParentPath(node.parentPath)}/${node.slug}` : `${node.slug}`;
};

const createPagePath = function createPagePathFromParentNodes(
  node,
  locale,
  defaultLocale,
  localePaths,
) {
  return defaultLocale === locale
    ? `/${createParentPath(node)}`
    : `/${localePaths[locale.replace('-', '_')]}/${createParentPath(node)}`;
};

module.exports = createPagePath;
