// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import createINTL from '../../util/createINTL';
import createLocaleURL from '../../util/createLocaleURL';

const propTypes = {
  article: PropTypes.bool,
  author: PropTypes.object,
  description: PropTypes.string,
  errorPage: PropTypes.bool,
  home: PropTypes.bool,
  image: PropTypes.object,
  locale: PropTypes.string.isRequired,
  pageID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  article: false,
  author: null,
  description: '',
  errorPage: false,
  home: false,
  image: null,
};

function Head({ article, author, description, errorPage, home, image, locale, pageID, title }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            facebookAppID
            locales
            siteURL
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

  const i = createINTL(useIntl());
  const baseURL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : siteMetadata.siteURL;

  const titleTemplate = home
    ? `${siteMetadata.title} - ${i('metaSlogan')}`
    : `%s - ${siteMetadata.title}`;
  const pageTitle = home
    ? `${siteMetadata.title} - ${i('metaSlogan')}`
    : `${title} - ${siteMetadata.title}`;
  const pageDescription = description === '' ? i('metaDescription') : description;

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang={`${siteMetadata.simpleLocales[locale.replace('-', '_')]}`} />
      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />

      <meta property="fb:app_id" content={siteMetadata.facebookAppID} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:type"
        content={(() => {
          if (article) {
            return 'article';
          } else if (author) {
            return 'profile';
          }
          return 'website';
        })()}
      />
      <meta property="og:image" content={image ? image.file.url : `${baseURL}/thumbnail.png`} />
      <meta
        property="og:image:secure_url"
        content={image ? image.file.url : `${baseURL}/thumbnail.png`}
      />
      <meta property="og:image:type" content={image ? image.file.contentType : 'image/png'} />
      <meta property="og:image:alt" content={image ? image.description : i('metaOgImageAlt')} />
      <meta property="og:site_name" content={siteMetadata.title} />
      {(() => {
        if (errorPage) {
          const pagePath =
            locale === siteMetadata.defaultLocale
              ? '404'
              : `${siteMetadata.localePaths[locale.replace('-', '_')]}/404`;
          return <meta property="og:url" content={`${baseURL}/${pagePath}`} />;
        } else {
          return (
            <meta property="og:url" content={createLocaleURL(baseURL, pageID, locale, data)} />
          );
        }
      })()}
      <meta property="og:locale" content={locale === 'fi' ? 'fi_FI' : locale.replace('-', '_')} />

      {siteMetadata.locales
        .filter((listLocale) => listLocale !== locale)
        .map((listLocale) => (
          <meta
            key={listLocale}
            property="og:locale:alternate"
            content={listLocale === 'fi' ? 'fi_FI' : listLocale.replace('-', '_')}
          />
        ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitterAuthor} />
      <meta
        name="twitter:creator"
        content={author && author.twitter ? `@${author.twitter}` : siteMetadata.twitterAuthor}
      />

      <link rel="stylesheet" href="https://use.typekit.net/wbu0jvl.css" />

      {(() => {
        if (errorPage) {
          return siteMetadata.locales.map((listLocale) => (
            <link
              rel="alternate"
              href={`${baseURL}/${
                listLocale === siteMetadata.defaultLocale
                  ? '404'
                  : `${siteMetadata.localePaths[listLocale.replace('-', '_')]}/404`
              }`}
              hrefLang={siteMetadata.simpleLocales[listLocale.replace('-', '_')]}
              key={listLocale}
            />
          ));
        } else {
          return siteMetadata.locales.map((listLocale) => (
            <link
              rel="alternate"
              href={createLocaleURL(baseURL, pageID, listLocale, data)}
              hrefLang={siteMetadata.simpleLocales[listLocale.replace('-', '_')]}
              key={listLocale}
            />
          ));
        }
      })()}
    </Helmet>
  );
}

Head.propTypes = propTypes;
Head.defaultProps = defaultProps;

export default Head;
