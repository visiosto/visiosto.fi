// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { IntlProvider } from 'react-intl';

const Intl = ({ children, locale }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
          }
        }
      }
    `,
  );

  const { defaultLocale } = site.siteMetadata;

  // eslint-disable-next-line global-require, no-undef
  let messages = require(`../locales/${defaultLocale}`).lang;

  try {
    // eslint-disable-next-line global-require, no-undef
    messages = require(`../locales/${locale}`).lang;
  } catch (error) {
    // Do nothing and use the default.
  }

  return (
    <IntlProvider locale={locale || defaultLocale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default Intl;
