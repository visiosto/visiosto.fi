// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import _ from 'lodash';

import localizedAnchorLinkQuery from './localizedAnchorLinkQuery';
import localizedLinkQuery from './localizedLinkQuery';

const navigationQuery = {
  allContentfulMenu: {
    edges: [
      {
        node: {
          node_locale: 'fi',
          links: [
            {
              contentful_id: 'rXFgpak6HKjCuUXjFo9KW',
              title: 'Etusivu',
              internal: {
                type: 'ContentfulIndexPage',
              },
            },
            {
              contentful_id: '1f2lQN3GiF78OkVM9b7EG5',
              slug: 'portfolio',
              title: 'Portfolio',
              internal: {
                type: 'ContentfulId',
              },
            },
            {
              contentful_id: 'W2EtQJcRZkS4zKRWftrkX',
              slug: 'yhteystiedot',
              title: 'Yhteystiedot',
              internal: {
                type: 'ContentfulId',
              },
            },
            {
              contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
              title: 'Blogi',
              internal: {
                type: 'ContentfulPath',
              },
            },
          ],
        },
      },
      {
        node: {
          node_locale: 'en-GB',
          links: [
            {
              contentful_id: 'rXFgpak6HKjCuUXjFo9KW',
              title: 'Front Page',
              internal: {
                type: 'ContentfulIndexPage',
              },
            },
            {
              contentful_id: '1f2lQN3GiF78OkVM9b7EG5',
              slug: 'portfolio',
              title: 'Portfolio',
              internal: {
                type: 'ContentfulId',
              },
            },
            {
              contentful_id: 'W2EtQJcRZkS4zKRWftrkX',
              slug: 'contact',
              title: 'Contact',
              internal: {
                type: 'ContentfulId',
              },
            },
            {
              contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
              title: 'Blog',
              internal: {
                type: 'ContentfulPath',
              },
            },
          ],
        },
      },
    ],
  },
};

export default _.merge(navigationQuery, localizedAnchorLinkQuery, localizedLinkQuery);
