// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';

import createPagePath from '../../util/createPagePath';

const createPathFromSlug = function createPathFromSlugForLocale(slug, locale, data) {
  const { defaultLocale, localePaths } = data.site.siteMetadata;

  const authorNodes = data.allContentfulAuthor.edges.filter(({ node }) => node.slug === slug);

  if (authorNodes.length > 0) {
    const nodeID = authorNodes[0].node.contentful_id;
    const nodes = data.allContentfulAuthor.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const { node } = nodes[0];
    const authorPath = data.authorPaths.edges.filter(
      ({ node: entryNode }) => entryNode.node_locale === locale,
    )[0].node;
    return createPagePath(node, locale, defaultLocale, localePaths, authorPath);
  }

  const blogPostNodes = data.allContentfulBlogPost.edges.filter(({ node }) => node.slug === slug);

  if (blogPostNodes.length > 0) {
    const nodeID = blogPostNodes[0].node.contentful_id;
    const nodes = data.allContentfulBlogPost.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const { node } = nodes[0];
    const blogPath = data.blogPaths.edges.filter(
      ({ node: entryNode }) => entryNode.node_locale === locale,
    )[0].node;
    return createPagePath(node, locale, defaultLocale, localePaths, blogPath);
  }

  const categoryNodes = data.allContentfulCategory.edges.filter(({ node }) => node.slug === slug);

  if (categoryNodes.length > 0) {
    const nodeID = categoryNodes[0].node.contentful_id;
    const nodes = data.allContentfulCategory.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const { node } = nodes[0];
    const categoryPath = data.categoryPaths.edges.filter(
      ({ node: entryNode }) => entryNode.node_locale === locale,
    )[0].node;
    return createPagePath(node, locale, defaultLocale, localePaths, categoryPath);
  }

  const pageNodes = data.allContentfulPage.edges.filter(({ node }) => node.slug === slug);

  if (pageNodes.length > 0) {
    const nodeID = pageNodes[0].node.contentful_id;
    const nodes = data.allContentfulPage.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const { node } = nodes[0];
    return createPagePath(node, locale, defaultLocale, localePaths);
  }

  const pathNodes = data.allContentfulPath.edges.filter(({ node }) => node.slug === slug);

  if (pathNodes.length > 0) {
    const nodeID = pathNodes[0].node.contentful_id;
    const nodes = data.allContentfulPath.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const { node } = nodes[0];
    return createPagePath(node, locale, defaultLocale, localePaths);
  }

  return null;
};

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  locale: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

const defaultProps = { className: null, onClick: null };

function LocalizedLink({ children, className, locale, onClick, to }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
            localePaths {
              en_GB
              fi
            }
          }
        }
        allContentfulEntry {
          edges {
            node {
              contentful_id
              node_locale
              internal {
                type
              }
            }
          }
        }
        allContentfulAuthor {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
        allContentfulBlogPost {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
        allContentfulCategory {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              contentful_id
              node_locale
              slug
              parentPath {
                ... on ContentfulPage {
                  slug
                  parentPath {
                    ... on ContentfulPage {
                      slug
                    }
                    ... on ContentfulPath {
                      slug
                    }
                  }
                }
                ... on ContentfulPath {
                  slug
                  parentPath {
                    slug
                  }
                }
              }
            }
          }
        }
        allContentfulPath {
          edges {
            node {
              contentful_id
              node_locale
              slug
              parentPath {
                slug
                parentPath {
                  slug
                }
              }
            }
          }
        }
        allContentfulPortfolioReference {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
        authorPaths: allContentfulPath(
          filter: { contentful_id: { eq: "4uEZ43he1uPiXUzzZUuedS" } }
        ) {
          edges {
            node {
              node_locale
              slug
            }
          }
        }
        blogPaths: allContentfulPath(filter: { contentful_id: { eq: "2zOhJf5PQ1SzUJhT37Cnb2" } }) {
          edges {
            node {
              node_locale
              slug
            }
          }
        }
        categoryPaths: allContentfulPath(
          filter: { contentful_id: { eq: "54IoCQAEBdBmvFfVtUeegI" } }
        ) {
          edges {
            node {
              node_locale
              slug
              parentPath {
                slug
                parentPath {
                  slug
                }
              }
            }
          }
        }
        portfolioPaths: allContentfulPath(
          filter: { contentful_id: { eq: "1tG1ohi0pFMwiZwtSoiAhm" } }
        ) {
          edges {
            node {
              node_locale
              slug
            }
          }
        }
      }
    `,
  );

  const { defaultLocale, localePaths } = data.site.siteMetadata;

  if (to === '/') {
    return (
      <Link
        className={className}
        onClick={onClick}
        to={locale === defaultLocale ? '/' : `/${localePaths[locale.replace('-', '_')]}`}
      >
        {children}
      </Link>
    );
  }

  if (to === '/blog') {
    const blogPath = data.blogPaths.edges.filter(({ node }) => node.node_locale === locale)[0].node;
    const pagePath =
      locale === defaultLocale
        ? `/${blogPath.slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${blogPath.slug}`;
    return (
      <Link className={className} onClick={onClick} to={pagePath}>
        {children}
      </Link>
    );
  }

  if (to.startsWith('/')) {
    const pageSlug = to.substring(1);
    const pagePath = createPathFromSlug(pageSlug, locale, data);

    if (pagePath) {
      return (
        <Link className={className} onClick={onClick} to={pagePath}>
          {children}
        </Link>
      );
    }
    return (
      <Link className={className} onClick={onClick} to={to}>
        {children}
      </Link>
    );
  }

  if (to === '404') {
    const pagePath =
      locale === defaultLocale ? '/404' : `/${localePaths[locale.replace('-', '_')]}/404`;
    return (
      <Link className={className} onClick={onClick} to={pagePath}>
        {children}
      </Link>
    );
  }
  const { node } = data.allContentfulEntry.edges.filter(
    ({ node: entryNode }) => entryNode.contentful_id === to && entryNode.node_locale === locale,
  )[0];

  switch (node.internal.type) {
    case 'ContentfulAuthor': {
      const authorNode = data.allContentfulAuthor.edges.filter(
        ({ node: entryNode }) => entryNode.contentful_id === to && entryNode.node_locale === locale,
      )[0].node;
      const authorPath = data.authorPaths.edges.filter(
        ({ node: entryNode }) => entryNode.node_locale === locale,
      )[0].node;

      return (
        <Link
          className={className}
          onClick={onClick}
          to={createPagePath(authorNode, locale, defaultLocale, localePaths, authorPath)}
        >
          {children}
        </Link>
      );
    }
    case 'ContentfulBlogPost': {
      const blogPostNode = data.allContentfulBlogPost.edges.filter(
        ({ node: entryNode }) => entryNode.contentful_id === to && entryNode.node_locale === locale,
      )[0].node;
      const blogPath = data.blogPaths.edges.filter(
        ({ node: entryNode }) => entryNode.node_locale === locale,
      )[0].node;
      return (
        <Link
          className={className}
          onClick={onClick}
          to={createPagePath(blogPostNode, locale, defaultLocale, localePaths, blogPath)}
        >
          {children}
        </Link>
      );
    }
    case 'ContentfulCategory': {
      const categoryNode = data.allContentfulCategory.edges.filter(
        ({ node: entryNode }) => entryNode.contentful_id === to && entryNode.node_locale === locale,
      )[0].node;
      const categoryPath = data.categoryPaths.edges.filter(
        ({ node: entryNode }) => entryNode.node_locale === locale,
      )[0].node;

      return (
        <Link
          className={className}
          onClick={onClick}
          to={createPagePath(categoryNode, locale, defaultLocale, localePaths, categoryPath)}
        >
          {children}
        </Link>
      );
    }
    case 'ContentfulPage': {
      const pageNode = data.allContentfulPage.edges.filter(
        ({ node: entryNode }) => entryNode.contentful_id === to && entryNode.node_locale === locale,
      )[0].node;
      return (
        <Link
          className={className}
          onClick={onClick}
          to={createPagePath(pageNode, locale, defaultLocale, localePaths)}
        >
          {children}
        </Link>
      );
    }
    case 'ContentfulIndexPage': {
      const indexPath =
        locale === defaultLocale ? '/' : `/${localePaths[locale.replace('-', '_')]}`;
      return (
        <Link className={className} onClick={onClick} to={indexPath}>
          {children}
        </Link>
      );
    }
    case 'ContentfulPath': {
      const pathNode = data.allContentfulPath.edges.filter(
        ({ node: entryNode }) => entryNode.contentful_id === to && entryNode.node_locale === locale,
      )[0].node;
      return (
        <Link
          className={className}
          onClick={onClick}
          to={createPagePath(pathNode, locale, defaultLocale, localePaths)}
        >
          {children}
        </Link>
      );
    }
    case 'ContentfulPortfolioReference': {
      const referenceNode = data.allContentfulPortfolioReference.edges.filter(
        ({ node: entryNode }) => entryNode.contentful_id === to && entryNode.node_locale === locale,
      )[0].node;
      const portfolioPath = data.portfolioPaths.edges.filter(
        ({ node: entryNode }) => entryNode.node_locale === locale,
      )[0].node;
      return (
        <Link
          className={className}
          onClick={onClick}
          to={createPagePath(referenceNode, locale, defaultLocale, localePaths, portfolioPath)}
        >
          {children}
        </Link>
      );
    }
    default: {
      return null;
    }
  }
}

LocalizedLink.propTypes = propTypes;
LocalizedLink.defaultProps = defaultProps;

export default LocalizedLink;
