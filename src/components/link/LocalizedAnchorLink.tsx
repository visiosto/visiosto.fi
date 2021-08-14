// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import AnchorLink from './AnchorLink';

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
  to: PropTypes.string.isRequired,
};

const defaultProps = { className: null };

function LocalizedAnchorLink({ children, className, locale, to }) {
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
        allContentfulId {
          edges {
            node {
              contentful_id
              node_locale
              slug
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
  const [toLocation, hashedLocation] = to.split('#');

  const hashedEntryId = data.allContentfulId.edges.filter(
    ({ node }) => node.slug === hashedLocation,
  )[0].node.contentful_id;
  const hashedDestination = data.allContentfulId.edges.filter(
    ({ node }) => node.contentful_id === hashedEntryId && node.node_locale === locale,
  )[0].node.slug;

  if (toLocation === '/') {
    return (
      <AnchorLink
        className={className}
        to={`${
          locale === defaultLocale ? '/' : `/${localePaths[locale.replace('-', '_')]}`
        }#${hashedDestination}`}
      >
        {children}
      </AnchorLink>
    );
  }

  if (toLocation === '/blog') {
    const blogPath = data.blogPaths.edges.filter(({ node }) => node.node_locale === locale)[0].node;
    const pagePath =
      locale === defaultLocale
        ? `/${blogPath.slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${blogPath.slug}`;
    return (
      <AnchorLink className={className} to={`${pagePath}#${hashedDestination}`}>
        {children}
      </AnchorLink>
    );
  }

  if (toLocation.startsWith('/')) {
    const pageSlug = toLocation.substring(1);
    const pagePath = createPathFromSlug(pageSlug, locale, data);

    if (pagePath) {
      return (
        <AnchorLink className={className} to={`${pagePath}#${hashedDestination}`}>
          {children}
        </AnchorLink>
      );
    }
    return (
      <AnchorLink className={className} to={to}>
        {children}
      </AnchorLink>
    );
  }

  const { node } = data.allContentfulEntry.edges.filter(
    ({ node: entryNode }) =>
      entryNode.contentful_id === toLocation && entryNode.node_locale === locale,
  )[0];

  switch (node.internal.type) {
    case 'ContentfulAuthor': {
      const authorNode = data.allContentfulAuthor.edges.filter(
        ({ node: entryNode }) =>
          entryNode.contentful_id === toLocation && entryNode.node_locale === locale,
      )[0].node;
      const authorPath = data.authorPaths.edges.filter(
        ({ node: entryNode }) => entryNode.node_locale === locale,
      )[0].node;

      return (
        <AnchorLink
          className={className}
          to={`${createPagePath(
            authorNode,
            locale,
            defaultLocale,
            localePaths,
            authorPath,
          )}#${hashedDestination}`}
        >
          {children}
        </AnchorLink>
      );
    }
    case 'ContentfulBlogPost': {
      const blogPostNode = data.allContentfulBlogPost.edges.filter(
        ({ node: entryNode }) =>
          entryNode.contentful_id === toLocation && entryNode.node_locale === locale,
      )[0].node;
      const blogPath = data.blogPaths.edges.filter(
        ({ node: entryNode }) => entryNode.node_locale === locale,
      )[0].node;
      return (
        <AnchorLink
          className={className}
          to={`${createPagePath(
            blogPostNode,
            locale,
            defaultLocale,
            localePaths,
            blogPath,
          )}#${hashedDestination}`}
        >
          {children}
        </AnchorLink>
      );
    }
    case 'ContentfulCategory': {
      const categoryNode = data.allContentfulCategory.edges.filter(
        ({ node: entryNode }) =>
          entryNode.contentful_id === toLocation && entryNode.node_locale === locale,
      )[0].node;
      const categoryPath = data.categoryPaths.edges.filter(
        ({ node: entryNode }) => entryNode.node_locale === locale,
      )[0].node;

      return (
        <AnchorLink
          className={className}
          to={`${createPagePath(
            categoryNode,
            locale,
            defaultLocale,
            localePaths,
            categoryPath,
          )}#${hashedDestination}`}
        >
          {children}
        </AnchorLink>
      );
    }
    case 'ContentfulPage': {
      const pageNode = data.allContentfulPage.edges.filter(
        ({ node: entryNode }) =>
          entryNode.contentful_id === toLocation && entryNode.node_locale === locale,
      )[0].node;
      return (
        <AnchorLink
          className={className}
          to={`${createPagePath(
            pageNode,
            locale,
            defaultLocale,
            localePaths,
          )}#${hashedDestination}`}
        >
          {children}
        </AnchorLink>
      );
    }
    case 'ContentfulIndexPage': {
      const indexPath =
        locale === defaultLocale ? '/' : `/${localePaths[locale.replace('-', '_')]}`;
      return (
        <AnchorLink className={className} to={`${indexPath}#${hashedDestination}`}>
          {children}
        </AnchorLink>
      );
    }
    case 'ContentfulPath': {
      const pathNode = data.allContentfulPath.edges.filter(
        ({ node: entryNode }) =>
          entryNode.contentful_id === toLocation && entryNode.node_locale === locale,
      )[0].node;
      return (
        <AnchorLink
          className={className}
          to={`${createPagePath(
            pathNode,
            locale,
            defaultLocale,
            localePaths,
          )}#${hashedDestination}`}
        >
          {children}
        </AnchorLink>
      );
    }
    case 'ContentfulPortfolioReference': {
      const referenceNode = data.allContentfulPortfolioReference.edges.filter(
        ({ node: entryNode }) =>
          entryNode.contentful_id === toLocation && entryNode.node_locale === locale,
      )[0].node;
      const portfolioPath = data.portfolioPaths.edges.filter(
        ({ node: entryNode }) => entryNode.node_locale === locale,
      )[0].node;

      return (
        <AnchorLink
          className={className}
          to={`${createPagePath(
            referenceNode,
            locale,
            defaultLocale,
            localePaths,
            portfolioPath,
          )}#${hashedDestination}`}
        >
          {children}
        </AnchorLink>
      );
    }
    default: {
      return null;
    }
  }
}

LocalizedAnchorLink.propTypes = propTypes;
LocalizedAnchorLink.defaultProps = defaultProps;

export default LocalizedAnchorLink;
