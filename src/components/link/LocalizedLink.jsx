// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { AUTHOR_SLUG, BLOG_SLUG, CATEGORY_SLUG } from '../../constants';

import pageSlugs from '../../data/page-slugs.json';

const pageKeySlashIndex = 1;

const createLocalizedSlug = (site, locale, slug) => {
  const { defaultLocale } = site.siteMetadata;

  const pageKey = slug.substring(pageKeySlashIndex);

  if (pageKey) {
    return pageKey.split('/').reduce(
      (previous, current) => {
        const slugs = pageSlugs;
        return `${previous}/${slugs[current][locale]}`;
      },
      locale === defaultLocale ? '' : `/${locale}`,
    );
  } else {
    return locale === defaultLocale ? '/' : `/${locale}`;
  }
};

const LocalizedLink = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
            simpleLocales {
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

  const { defaultLocale } = data.site.siteMetadata;

  console.log('Creating link to', props.to);

  if (props.to.startsWith('/')) {
    return <Link {...props} to={createLocalizedSlug(data.site, props.locale, props.to)} />;
  } else {
    console.log('Creating Contentful link to', props.to);

    console.log(data);

    const nodes = data.allContentfulEntry.edges.filter(
      ({ node }) => node.contentful_id === props.to && node.node_locale === props.locale,
    );

    console.log(nodes);

    const node = nodes[0].node;

    switch (node.internal.type) {
      case 'ContentfulAuthor': {
        const authorNode = data.allContentfulAuthor.edges.filter(
          ({ node }) => node.contentful_id === props.to && node.node_locale === props.locale,
        )[0].node;

        const authorSlug =
          props.locale === defaultLocale
            ? `/${pageSlugs[AUTHOR_SLUG][props.locale]}`
            : `/${props.locale}/${pageSlugs[AUTHOR_SLUG][props.locale]}`;

        return <Link {...props} to={`${authorSlug}/${authorNode.slug}`} />;
      }
      case 'ContentfulBlogPost': {
        const blogNode = data.allContentfulBlogPost.edges.filter(
          ({ node }) => node.contentful_id === props.to && node.node_locale === props.locale,
        )[0].node;

        const blogSlug =
          props.locale === defaultLocale
            ? `/${pageSlugs[BLOG_SLUG][props.locale]}`
            : `/${data.site.siteMetadata.simpleLocales[props.locale]}/${
                pageSlugs[BLOG_SLUG][props.locale]
              }`;

        return <Link {...props} to={`${blogSlug}/${blogNode.slug}`} />;
      }
      case 'ContentfulCategory': {
        const categoryNode = data.allContentfulCategory.edges.filter(
          ({ node }) => node.contentful_id === props.to && node.node_locale === props.locale,
        )[0].node;

        const categorySlug =
          props.locale === defaultLocale
            ? `/${pageSlugs[CATEGORY_SLUG][props.locale]}`
            : `/${data.site.siteMetadata.simpleLocales[props.locale]}/${
                pageSlugs[CATEGORY_SLUG][props.locale]
              }`;

        return <Link {...props} to={`${categorySlug}/${categoryNode.slug}`} />;
      }
      case 'ContentfulPage': {
        const pageNode = data.allContentfulPage.edges.filter(
          ({ node }) => node.contentful_id === props.to && node.node_locale === props.locale,
        )[0].node;

        const { parentPath, slug } = pageNode;

        // TODO Make a common helper function for this
        const pageSlug = (() => {
          if (parentPath) {
            if (parentPath.parentPath) {
              return props.locale === defaultLocale
                ? `/${parentPath.parentPath.slug}/${parentPath.slug}/${slug}`
                : `/${data.site.siteMetadata.simpleLocales[props.locale]}/${
                    parentPath.parentPath.slug
                  }/${parentPath.slug}/${slug}`;
            }

            return props.locale === defaultLocale
              ? `/${parentPath.slug}/${slug}`
              : `/${data.site.siteMetadata.simpleLocales[props.locale]}/${parentPath.slug}/${slug}`;
          }

          return props.locale === defaultLocale
            ? `/${slug}`
            : `/${data.site.siteMetadata.simpleLocales[props.locale]}/${slug}`;
        })();

        return <Link {...props} to={`${pageSlug}`} />;
      }
      default:
        break;
    }
  }
};

export default LocalizedLink;
