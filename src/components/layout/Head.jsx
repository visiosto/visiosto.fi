// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import createIntl from '../../util/createIntl';
import createLocaleURL from '../../util/createLocaleURL';

const Head = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            facebookAppID
            locales
            siteUrl
            title
            twitterAuthor
            localePaths {
              en_GB
              fi
            }
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

  const { siteMetadata } = data.site;

  const i = createIntl(useIntl());
  const baseURL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : siteMetadata.siteUrl;

  const titleTemplate = props.home
    ? `${siteMetadata.title} - ${i('metaSlogan')}`
    : `%s - ${siteMetadata.title}`;
  const title = props.home
    ? `${siteMetadata.title} - ${i('metaSlogan')}`
    : `%s - ${siteMetadata.title}`;
  const description = i('metaDescription') || props.description;

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang={`${siteMetadata.simpleLocales[props.locale.replace('-', '_')]}`} />
      <title>{props.title}</title>

      <meta name="description" content={description} />

      <meta property="fb:app_id" content={siteMetadata.facebookAppID} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={props.article ? 'article' : 'website'} />
      <meta property="og:image" content={`${baseURL}/thumbnail.png`} />
      <meta property="og:image:secure_url" content={`${baseURL}/thumbnail.png`} />
      <meta property="og:site_name" content={siteMetadata.title} />
      {(() => {
        if (props.errorPage) {
          return <meta property="og:url" content={`${baseURL}/404`} />;
        } else {
          return (
            <meta
              property="og:url"
              content={createLocaleURL(baseURL, props.pageId, props.locale, data)}
            />
          );
        }
      })()}
      {(() => {
        if (props.errorPage) {
          return <meta property="og:locale" content="fi_FI" />;
        } else {
          return (
            <meta
              property="og:locale"
              content={props.locale === 'fi' ? 'fi_FI' : props.locale.replace('-', '_')}
            />
          );
        }
      })()}
      {(() => {
        if (!props.errorPage) {
          return siteMetadata.locales
            .filter((locale) => locale !== props.locale)
            .map((locale) => (
              <meta
                key={locale}
                property="og:locale:alternate"
                content={locale === 'fi' ? 'fi_FI' : locale.replace('-', '_')}
              />
            ));
        }
      })()}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitterAuthor} />
      <meta
        name="twitter:creator"
        content={
          props.author && props.author.twitter
            ? `@${props.author.twitter}`
            : siteMetadata.twitterAuthor
        }
      />

      <link rel="stylesheet" href="https://use.typekit.net/wbu0jvl.css" />

      {(() => {
        if (props.errorPage) {
          return (
            <link
              rel="alternate"
              href={`${baseURL}/404`}
              hrefLang={siteMetadata.simpleLocales[props.locale.replace('-', '_')]}
            />
          );
        } else {
          return siteMetadata.locales.map((locale) => (
            <link
              rel="alternate"
              href={createLocaleURL(baseURL, props.pageId, locale, data)}
              hrefLang={siteMetadata.simpleLocales[locale.replace('-', '_')]}
              key={locale}
            />
          ));
        }
      })()}
    </Helmet>
  );
};

export default Head;
