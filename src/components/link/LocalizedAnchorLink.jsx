// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AnchorLink from './AnchorLink';

import createPagePath from '../../util/createPagePath';

const createPathFromSlug = (slug, locale, data) => {
  const { defaultLocale, localePaths } = data.site.siteMetadata;

  const authorNodes = data.allContentfulAuthor.edges.filter(({ node }) => node.slug === slug);

  if (authorNodes.length > 0) {
    const nodeID = authorNodes[0].node.contentful_id;
    const nodes = data.allContentfulAuthor.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const node = nodes[0].node;
    const authorPath = data.authorPaths.edges.filter(({ node }) => node.node_locale === locale)[0]
      .node;
    return createPagePath(node, locale, defaultLocale, localePaths, authorPath);
  }

  const blogPostNodes = data.allContentfulBlogPost.edges.filter(({ node }) => node.slug === slug);

  if (blogPostNodes.length > 0) {
    const nodeID = blogPostNodes[0].node.contentful_id;
    const nodes = data.allContentfulBlogPost.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const node = nodes[0].node;
    const blogPath = data.blogPaths.edges.filter(({ node }) => node.node_locale === locale)[0].node;
    return createPagePath(node, locale, defaultLocale, localePaths, blogPath);
  }

  const categoryNodes = data.allContentfulCategory.edges.filter(({ node }) => node.slug === slug);

  if (categoryNodes.length > 0) {
    const nodeID = categoryNodes[0].node.contentful_id;
    const nodes = data.allContentfulCategory.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const node = nodes[0].node;
    const categoryPath = data.categoryPaths.edges.filter(
      ({ node }) => node.node_locale === locale,
    )[0].node;
    return createPagePath(node, locale, defaultLocale, localePaths, categoryPath);
  }

  const pageNodes = data.allContentfulPage.edges.filter(({ node }) => node.slug === slug);

  if (pageNodes.length > 0) {
    const nodeID = pageNodes[0].node.contentful_id;
    const nodes = data.allContentfulPage.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const node = nodes[0].node;
    return createPagePath(node, locale, defaultLocale, localePaths);
  }

  const pathNodes = data.allContentfulPath.edges.filter(({ node }) => node.slug === slug);

  if (pathNodes.length > 0) {
    const nodeID = pathNodes[0].node.contentful_id;
    const nodes = data.allContentfulPath.edges.filter(
      ({ node }) => node.contentful_id === nodeID && node.node_locale === locale,
    );
    const node = nodes[0].node;
    return createPagePath(node, locale, defaultLocale, localePaths);
  }

  return null;
};

const LocalizedAnchorLink = (props) => {
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
                slug
                parentPath {
                  slug
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
      }
    `,
  );

  const { defaultLocale, localePaths } = data.site.siteMetadata;
  const [toLocation, hashedLocation] = props.to.split('#');

  const hashedEntryId = data.allContentfulId.edges.filter(
    ({ node }) => node.slug === hashedLocation,
  )[0].node.contentful_id;
  const hashedDestination = data.allContentfulId.edges.filter(
    ({ node }) => node.contentful_id === hashedEntryId && node.node_locale === props.locale,
  )[0].node.slug;

  if (toLocation === '/') {
    return (
      <AnchorLink
        {...props}
        to={`${
          props.locale === defaultLocale ? '/' : `/${localePaths[props.locale.replace('-', '_')]}`
        }#${hashedDestination}`}
      />
    );
  } else if (toLocation === '/blog') {
    const blogPath = data.blogPaths.edges.filter(({ node }) => node.node_locale === props.locale)[0]
      .node;
    const pagePath =
      props.locale === defaultLocale
        ? `/${blogPath.slug}`
        : `/${localePaths[props.locale.replace('-', '_')]}/${blogPath.slug}`;
    return <AnchorLink {...props} to={`${pagePath}#${hashedDestination}`} />;
  } else if (toLocation.startsWith('/')) {
    const pageSlug = toLocation.substring(1);
    const pagePath = createPathFromSlug(pageSlug, props.locale, data);

    if (pagePath) {
      return <AnchorLink {...props} to={`${pagePath}#${hashedDestination}`} />;
    } else {
      return <AnchorLink {...props} />;
    }
  } else {
    const node = data.allContentfulEntry.edges.filter(
      ({ node }) => node.contentful_id === toLocation && node.node_locale === props.locale,
    )[0].node;

    switch (node.internal.type) {
      case 'ContentfulAuthor': {
        const authorNode = data.allContentfulAuthor.edges.filter(
          ({ node }) => node.contentful_id === toLocation && node.node_locale === props.locale,
        )[0].node;
        const authorPath = data.authorPaths.edges.filter(
          ({ node }) => node.node_locale === props.locale,
        )[0].node;

        return (
          <AnchorLink
            {...props}
            to={`${createPagePath(
              authorNode,
              props.locale,
              defaultLocale,
              localePaths,
              authorPath,
            )}#${hashedDestination}`}
          />
        );
      }
      case 'ContentfulBlogPost': {
        const blogPostNode = data.allContentfulBlogPost.edges.filter(
          ({ node }) => node.contentful_id === toLocation && node.node_locale === props.locale,
        )[0].node;
        const blogPath = data.blogPaths.edges.filter(
          ({ node }) => node.node_locale === props.locale,
        )[0].node;
        return (
          <AnchorLink
            {...props}
            to={`${createPagePath(
              blogPostNode,
              props.locale,
              defaultLocale,
              localePaths,
              blogPath,
            )}#${hashedDestination}`}
          />
        );
      }
      case 'ContentfulCategory': {
        const categoryNode = data.allContentfulCategory.edges.filter(
          ({ node }) => node.contentful_id === toLocation && node.node_locale === props.locale,
        )[0].node;
        const categoryPath = data.categoryPaths.edges.filter(
          ({ node }) => node.node_locale === props.locale,
        )[0].node;

        return (
          <AnchorLink
            {...props}
            to={`${createPagePath(
              categoryNode,
              props.locale,
              defaultLocale,
              localePaths,
              categoryPath,
            )}#${hashedDestination}`}
          />
        );
      }
      case 'ContentfulPage': {
        const pageNode = data.allContentfulPage.edges.filter(
          ({ node }) => node.contentful_id === toLocation && node.node_locale === props.locale,
        )[0].node;
        return (
          <AnchorLink
            {...props}
            to={`${createPagePath(
              pageNode,
              props.locale,
              defaultLocale,
              localePaths,
            )}#${hashedDestination}`}
          />
        );
      }
      case 'ContentfulIndexPage': {
        const indexPath =
          props.locale === defaultLocale ? '/' : `/${localePaths[props.locale.replace('-', '_')]}`;
        return <AnchorLink {...props} to={`${indexPath}#${hashedDestination}`} />;
      }
      case 'ContentfulPath': {
        const pathNode = data.allContentfulPath.edges.filter(
          ({ node }) => node.contentful_id === toLocation && node.node_locale === props.locale,
        )[0].node;
        return (
          <AnchorLink
            {...props}
            to={`${createPagePath(
              pathNode,
              props.locale,
              defaultLocale,
              localePaths,
            )}#${hashedDestination}`}
          />
        );
      }
      default:
        break;
    }
  }
};

export default LocalizedAnchorLink;
