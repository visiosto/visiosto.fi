// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

require('dotenv').config();

const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://visiosto.github.io',
    title: 'Visiosto',
    description:
      'Pilvilinnojen maalauksen aika on ohi, me rakennamme sen, mitä toivot. Taitamme sinun visiosi – linssimme läpi.',
    twitterAuthor: '@visiosto_oy',
    locales: ['fi', 'en-GB'],
    localePaths: { fi: '', 'en-GB': 'en' },
    simpleLocales: { fi: 'fi', 'en-GB': 'en' },
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
    DEV_SSR: false,
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
        name: 'data',
        path: path.join(__dirname, 'data'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-transformer-json',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN,
      },
    },
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
      resolve: 'gatsby-plugin-sitemap',
    },
  ],
};
