// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://visiosto.fi',
    title: 'Concept Site',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    twitterAuthor: '@visiosto_oy',
    locales: ['fi', 'en'],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets'),
      },
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
  ],
};
