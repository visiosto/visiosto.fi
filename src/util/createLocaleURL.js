// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import createPagePath from './createPagePath';

const createLocaleURL = (baseURL, pageId, locale, data) => {
  const { defaultLocale, localePaths } = data.site.siteMetadata;

  const entryNode = data.allContentfulEntry.edges.filter(
    ({ node }) => node.contentful_id === pageId && node.node_locale === locale,
  )[0].node;

  switch (entryNode.internal.type) {
    case 'ContentfulAuthor': {
      const authorNode = data.allContentfulAuthor.edges.filter(
        ({ node }) => node.contentful_id === pageId && node.node_locale === locale,
      )[0].node;
      const authorPath = data.authorPaths.edges.filter(({ node }) => node.node_locale === locale)[0]
        .node;

      return `${baseURL}${createPagePath(
        authorNode,
        locale,
        defaultLocale,
        localePaths,
        authorPath,
      )}`;
    }
    case 'ContentfulBlogPost': {
      const blogPostNode = data.allContentfulBlogPost.edges.filter(
        ({ node }) => node.contentful_id === pageId && node.node_locale === locale,
      )[0].node;
      const blogPath = data.blogPaths.edges.filter(({ node }) => node.node_locale === locale)[0]
        .node;
      return `${baseURL}${createPagePath(
        blogPostNode,
        locale,
        defaultLocale,
        localePaths,
        blogPath,
      )}`;
    }
    case 'ContentfulCategory': {
      const categoryNode = data.allContentfulCategory.edges.filter(
        ({ node }) => node.contentful_id === pageId && node.node_locale === locale,
      )[0].node;
      const categoryPath = data.categoryPaths.edges.filter(
        ({ node }) => node.node_locale === locale,
      )[0].node;
      return `${baseURL}${createPagePath(
        categoryNode,
        locale,
        defaultLocale,
        localePaths,
        categoryPath,
      )}`;
    }
    case 'ContentfulPage': {
      const pageNode = data.allContentfulPage.edges.filter(
        ({ node }) => node.contentful_id === pageId && node.node_locale === locale,
      )[0].node;
      return `${baseURL}${createPagePath(pageNode, locale, defaultLocale, localePaths)}`;
    }
    case 'ContentfulIndexPage': {
      return locale === defaultLocale
        ? baseURL
        : `${baseURL}/${localePaths[locale.replace('-', '_')]}`;
    }
    case 'ContentfulPath': {
      const pathNode = data.allContentfulPath.edges.filter(
        ({ node }) => node.contentful_id === pageId && node.node_locale === locale,
      )[0].node;
      return `${baseURL}${createPagePath(pathNode, locale, defaultLocale, localePaths)}`;
    }
    default:
      return null;
  }
};

export default createLocaleURL;
