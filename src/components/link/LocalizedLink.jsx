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
              parents {
                slug
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

    const node = data.allContentfulEntry.edges.filter(
      ({ node }) =>
        node.contentful_id === props.to &&
        (props.locale === 'en' ? node.node_locale === 'en-GB' : node.node_locale === props.locale),
    )[0].node;

    console.log(node);

    switch (node.internal.type) {
      case 'ContentfulAuthor': {
        const authorNode = data.allContentfulAuthor.edges.filter(
          ({ node }) =>
            node.contentful_id === props.to &&
            (props.locale === 'en'
              ? node.node_locale === 'en-GB'
              : node.node_locale === props.locale),
        )[0].node;

        const authorSlug =
          props.locale === defaultLocale
            ? `/${pageSlugs[AUTHOR_SLUG][props.locale]}`
            : `/${props.locale}/${pageSlugs[AUTHOR_SLUG][props.locale]}`;

        return <Link {...props} to={`${authorSlug}/${authorNode.slug}`} />;
      }
      case 'ContentfulBlogPost': {
        const blogNode = data.allContentfulBlogPost.edges.filter(
          ({ node }) =>
            node.contentful_id === props.to &&
            (props.locale === 'en'
              ? node.node_locale === 'en-GB'
              : node.node_locale === props.locale),
        )[0].node;

        const blogSlug =
          props.locale === defaultLocale
            ? `/${pageSlugs[BLOG_SLUG][props.locale]}`
            : `/${props.locale}/${pageSlugs[BLOG_SLUG][props.locale]}`;

        return <Link {...props} to={`${blogSlug}/${blogNode.slug}`} />;
      }
      case 'ContentfulCategory': {
        const categoryNode = data.allContentfulCategory.edges.filter(
          ({ node }) =>
            node.contentful_id === props.to &&
            (props.locale === 'en'
              ? node.node_locale === 'en-GB'
              : node.node_locale === props.locale),
        )[0].node;

        const categorySlug =
          props.locale === defaultLocale
            ? `/${pageSlugs[CATEGORY_SLUG][props.locale]}`
            : `/${props.locale}/${pageSlugs[CATEGORY_SLUG][props.locale]}`;

        return <Link {...props} to={`${categorySlug}/${categoryNode.slug}`} />;
      }
      case 'ContentfulPage': {
        const pageNode = data.allContentfulPage.edges.filter(
          ({ node }) =>
            node.contentful_id === props.to &&
            (props.locale === 'en'
              ? node.node_locale === 'en-GB'
              : node.node_locale === props.locale),
        )[0].node;

        const { parents, slug } = pageNode;

        const pageSlug = parents
          ? `${parents
              .map(({ slug }) => slug)
              .reduce(
                (previous, current) => `${previous}/${current}`,
                props.locale === defaultLocale ? '' : `/${props.locale}`,
              )}/${slug}`
          : props.locale === defaultLocale
          ? `/${slug}`
          : `/${props.locale}/${slug}`;

        return <Link {...props} to={`${pageSlug}`} />;
      }
      default:
        break;
    }
  }
};

export default LocalizedLink;
