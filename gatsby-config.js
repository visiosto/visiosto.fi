// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://visiosto.fi',
    title: 'Visiosto',
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
  ],
};
