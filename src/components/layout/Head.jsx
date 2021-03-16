// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import createIntl from '../../utils/createIntl';
import createLanguageUrl from '../../utils/createLanguageUrl';

// TODO Add at least 'og:image'
const Head = (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            locales
            simpleLocales
            siteUrl
            title
            twitterAuthor
          }
        }
      }
    `,
  );

  const i = createIntl(useIntl());

  const baseUrl =
    process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : site.siteMetadata.siteUrl;

  // TODO Make sure this function works.
  const createUrl = createLanguageUrl(baseUrl, props.pageId);

  const titleTemplate = props.home
    ? `${site.siteMetadata.title} - ${i('metaSlogan')}`
    : `%s - ${site.siteMetadata.title}`;
  const title = props.home
    ? `${site.siteMetadata.title} - ${i('metaSlogan')}`
    : `%s - ${site.siteMetadata.title}`;
  const description = i('metaDescription') || props.description;

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang={`${site.siteMetadata.simpleLocales[props.locale]}`} />
      <title>{props.title}</title>

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* TODO For articles: <meta property="og:type" content="article" /> */}
      <meta property="og:url" content={createUrl(props.locale)} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={site.siteMetadata.twitterAuthor} />
      <meta name="twitter:creator" content={site.siteMetadata.twitterAuthor} />

      <link rel="stylesheet" href="https://use.typekit.net/wvk6tpf.css" />

      {site.siteMetadata.locales.map((locale) => (
        <link rel="alternate" href={createUrl(locale)} hrefLang={locale} key={locale} />
      ))}
    </Helmet>
  );
};

export default Head;
