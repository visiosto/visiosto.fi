// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import _ from 'lodash';

import localizedAnchorLinkQuery from './localizedAnchorLinkQuery';
import localizedLinkQuery from './localizedLinkQuery';

const navigationQuery = {
  backgroundHoverLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fixed',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiklEQVQoz21TPUtdURC87/kwnRCwsDKxEGwUxPwAU0gCKfIfQiBdfoyVoFVQmxT5B1ZCEAlCqhQ7ZIc0O2lCSOPH0xfOnnPznpILw13O3ZnZ3bO3A9XBozOPDtSgoWso8RDUnHnMldgYmf8vp8YLNVaXh8ZIEZsmDm2W1H8rxoyRuTbNY8eoLVBvzHVhHm9BjRqhVJikJfNYS1fXvFFPQb0E9RrUezCOQH0xjyu4xqBuzWMCqseLvoJ3oD7D9d08zkEdgPoK6ldJNMYEroRNyXcN12Bcl1xjPCti86AuSmJx6x1TJIlxWyoBdQPqMgU8Be7QOM1grxTXWZ3hx3Z4ZR5jS9dsaWxVcGrkrdra7h9QZ3DtgnpeBevwj/uWZuYxmRG6MY+fcJ2AOoVr36htoxbN9Qh1/uUeBv0MP7Uh/zDqN6hv2Z7Hh3Yp6ygX5Pc2oW1Ivkf9uuUNg3oCahnUhnkYqENzvTKP1YfkrKTu5rBUVA2mJvfcGlbM4/F/3AdJ9P5HUCJXrgi15y8I/F7LzI8l7wAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/0fe6f1e02402de875c446de52d67ed29/6bf3d/background-hover-light.png',
            srcSet:
              '/static/0fe6f1e02402de875c446de52d67ed29/6bf3d/background-hover-light.png 150w,\n/static/0fe6f1e02402de875c446de52d67ed29/42407/background-hover-light.png 300w',
            sizes: '150px',
          },
          sources: [
            {
              srcSet:
                '/static/0fe6f1e02402de875c446de52d67ed29/c2036/background-hover-light.webp 150w,\n/static/0fe6f1e02402de875c446de52d67ed29/77dc5/background-hover-light.webp 300w',
              type: 'image/webp',
              sizes: '150px',
            },
          ],
        },
        width: 150,
        height: 75,
      },
    },
  },
  backgroundHoverDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fixed',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQklEQVQoz4WSvy6EURDFv11/ohCJQi3ZyvmdRqjoJHqNRqPWSUTjBUQjeAq9ByBEqRTBA2ioZCNhN7ty985dHxGKk7lzvzkz5853KnAVaIBHwM2US1RxHqmh+g9VJrsqTdI5R6KIYXHcTYMBLwKr4CmJLckb6XtRlmILfAjeiiHj4HnwOnhTYg98KfkJ/Brog58j9oDlpKAZSmYl+hm+krgHd1MehN/QC04n8rXynDnwNfgN6BWCNIhd8AfwDk7o5NylrhvxNK1nsCPJB3HZkehJSdmA2PmuiPqg1LCdRfgxqUv7LwqPfkwrpH6Q7sA34DPwOfgEWAJaEouSJ/KPZdjwOKa3Q9ULeBe8DV6Q3JQ8+uWG71bJzsgohxnwPnAr+QL88EWiRqDYqBlo/PBt3TYD702CVyTvZCJjhVBX85exPwEjtrQ+WKUleQAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/d54e2d9fc8b4b6e5f04cd14780c30d82/6bf3d/background-hover-dark.png',
            srcSet:
              '/static/d54e2d9fc8b4b6e5f04cd14780c30d82/6bf3d/background-hover-dark.png 150w,\n/static/d54e2d9fc8b4b6e5f04cd14780c30d82/42407/background-hover-dark.png 300w',
            sizes: '150px',
          },
          sources: [
            {
              srcSet:
                '/static/d54e2d9fc8b4b6e5f04cd14780c30d82/c2036/background-hover-dark.webp 150w,\n/static/d54e2d9fc8b4b6e5f04cd14780c30d82/77dc5/background-hover-dark.webp 300w',
              type: 'image/webp',
              sizes: '150px',
            },
          ],
        },
        width: 150,
        height: 75,
      },
    },
  },
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
