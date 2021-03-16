// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LocalizedPageLink = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
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

  console.log(data);

  const node = data.allContentfulPage.edges.filter(
    ({ node }) =>
      node.contentful_id === props.to &&
      (props.locale === 'en' ? node.node_locale === 'en-GB' : node.node_locale === props.locale),
  )[0].node;

  console.log(node);

  const { parents, slug } = node;

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
};

export default LocalizedPageLink;
