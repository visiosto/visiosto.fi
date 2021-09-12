// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import createInternationalization from '../../util/createInternationalization';
import createLocaleURL from '../../util/createLocaleURL';

const propTypes = {
  article: PropTypes.bool,
  author: PropTypes.shape({ twitter: PropTypes.string }),
  description: PropTypes.string,
  errorPage: PropTypes.bool,
  home: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
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

  const intl = createInternationalization(useIntl());
  const baseURL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : siteMetadata.siteURL;

  const titleTemplate = home
    ? `${siteMetadata.title} - ${intl('headSlogan')}`
    : `%s - ${siteMetadata.title}`;
  const pageTitle = home
    ? `${siteMetadata.title} - ${intl('headSlogan')}`
    : `${title} - ${siteMetadata.title}`;
  const pageDescription = description === '' ? intl('headDescription') : description;

  // Use an anonymous function to resolve the lang attribute to make sure the value is valid.
  const lang: string = (() => {
    if (locale === 'en-GB') {
      return 'en';
    }

    return 'fi';
  })();

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang={lang} />
      <title>{title}</title>

      <meta content={pageDescription} name="description" />

      <meta content={siteMetadata.facebookAppID} property="fb:app_id" />

      <meta content={pageTitle} property="og:title" />
      <meta content={pageDescription} property="og:description" />
      <meta
        content={(() => {
          if (article) {
            return 'article';
          }
          if (author) {
            return 'profile';
          }
          return 'website';
        })()}
        property="og:type"
      />
      <meta content={image ? image.file.url : `${baseURL}/social-media-image.png`} property="og:image" />
      <meta
        content={image ? image.file.url : `${baseURL}/social-media-image.png`}
        property="og:image:secure_url"
      />
      <meta content={image ? image.file.contentType : 'image/png'} property="og:image:type" />
      <meta content={image ? image.description : intl('headOGImageText')} property="og:image:alt" />
      <meta content={siteMetadata.title} property="og:site_name" />
      {(() => {
        if (errorPage) {
          const pagePath =
            locale === siteMetadata.defaultLocale
              ? '404'
              : `${siteMetadata.localePaths[locale.replace('-', '_')]}/404`;
          return <meta content={`${baseURL}/${pagePath}`} property="og:url" />;
        }
        return <meta content={createLocaleURL(baseURL, pageID, locale, data)} property="og:url" />;
      })()}
      <meta content={locale === 'fi' ? 'fi_FI' : locale.replace('-', '_')} property="og:locale" />

      {siteMetadata.locales
        .filter((listLocale) => listLocale !== locale)
        .map((listLocale) => (
          <meta
            key={listLocale}
            content={listLocale === 'fi' ? 'fi_FI' : listLocale.replace('-', '_')}
            property="og:locale:alternate"
          />
        ))}

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={siteMetadata.twitterAuthor} name="twitter:site" />
      <meta
        content={author && author.twitter ? `@${author.twitter}` : siteMetadata.twitterAuthor}
        name="twitter:creator"
      />

      {(() => {
        if (errorPage) {
          const pagePath =
            locale === siteMetadata.defaultLocale
              ? '404'
              : `${siteMetadata.localePaths[locale.replace('-', '_')]}/404`;
          return <link href={`${baseURL}/${pagePath}`} rel="canonical" />;
        }
        return <link href={createLocaleURL(baseURL, pageID, locale, data)} rel="canonical" />;
      })()}

      <link href="https://use.typekit.net/njo0slg.css" rel="stylesheet" />

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

      {(() => {
        if (errorPage) {
          return siteMetadata.locales.map((listLocale) => (
            <link
              key={listLocale}
              href={`${baseURL}/${
                listLocale === siteMetadata.defaultLocale
                  ? '404'
                  : `${siteMetadata.localePaths[listLocale.replace('-', '_')]}/404`
              }`}
              hrefLang={siteMetadata.simpleLocales[listLocale.replace('-', '_')]}
              rel="alternate"
            />
          ));
        }
        return siteMetadata.locales.map((listLocale) => (
          <link
            key={listLocale}
            href={createLocaleURL(baseURL, pageID, listLocale, data)}
            hrefLang={siteMetadata.simpleLocales[listLocale.replace('-', '_')]}
            rel="alternate"
          />
        ));
      })()}
    </Helmet>
  );
}

Head.propTypes = propTypes;
Head.defaultProps = defaultProps;

export default Head;
