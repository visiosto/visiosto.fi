// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://visiosto.fi',
    title: 'Proof of Concept',
    description: 'Sinun visiosi - linssimme läpi',
    twitterAuthor: '@visiosto_oy',
    locales: ['fi', 'en'],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'fi',
        useLangKeyLayout: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src', 'assets'),
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
  ],
};
