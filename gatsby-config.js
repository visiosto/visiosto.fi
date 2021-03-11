// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

require('dotenv').config();

const path = require('path');

const queries = require('./util/algolia/queries');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://visiosto.github.io',
    title: 'Visiosto',
    description:
      'Pilvilinnojen maalauksen aika on ohi, me rakennamme sen, mitä toivot. Taitamme sinun visiosi – linssimme läpi.',
    twitterAuthor: '@visiosto_oy',
    locales: ['fi', 'en'],
    defaultLocale: 'fi',
    defaultEmail: 'info@visiosto.fi',
    businessId: '3010084-6',
    vatNumber: 'FI30100846',
    socialMedia: {
      facebook: 'https://facebook.com/visiosto',
      github: 'https://github.com/visiosto',
      instagram: 'https://instagram.com/visiosto',
      linkedin: 'https://linkedin.com/company/visiosto',
      twitter: 'https://twitter.com/visiosto_oy',
    },
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: path.join(__dirname, 'src', 'assets'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'content'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'fi',
        useLangKeyLayout: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Proof of Concept',
        short_name: 'Concept',
        icon: 'src/assets/favicon.png',
        theme_color: '#eb5952',
        background_color: '#ffffff',
        display: 'browser',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        skipIndexing: process.env.CI || !process.env.INDEX_SEARCH,
      },
    },
  ],
};
