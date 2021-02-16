// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://visiosto.github.io',
    title: 'Concept Site',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    twitterAuthor: '@visiosto_oy',
    locales: ['fi', 'en'],
    defaultLocale: 'fi',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
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
  ],
};
