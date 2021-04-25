// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import _ from 'lodash';

import localizedAnchorLinkQuery from './localizedAnchorLinkQuery';
import localizedLinkQuery from './localizedLinkQuery';

const navigationQuery = {
  backgroundHoverLight1: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fixed',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiklEQVQoz21TPUtdURC87/kwnRCwsDKxEGwUxPwAU0gCKfIfQiBdfoyVoFVQmxT5B1ZCEAlCqhQ7ZIc0O2lCSOPH0xfOnnPznpILw13O3ZnZ3bO3A9XBozOPDtSgoWso8RDUnHnMldgYmf8vp8YLNVaXh8ZIEZsmDm2W1H8rxoyRuTbNY8eoLVBvzHVhHm9BjRqhVJikJfNYS1fXvFFPQb0E9RrUezCOQH0xjyu4xqBuzWMCqseLvoJ3oD7D9d08zkEdgPoK6ldJNMYEroRNyXcN12Bcl1xjPCti86AuSmJx6x1TJIlxWyoBdQPqMgU8Be7QOM1grxTXWZ3hx3Z4ZR5jS9dsaWxVcGrkrdra7h9QZ3DtgnpeBevwj/uWZuYxmRG6MY+fcJ2AOoVr36htoxbN9Qh1/uUeBv0MP7Uh/zDqN6hv2Z7Hh3Yp6ygX5Pc2oW1Ivkf9uuUNg3oCahnUhnkYqENzvTKP1YfkrKTu5rBUVA2mJvfcGlbM4/F/3AdJ9P5HUCJXrgi15y8I/F7LzI8l7wAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/0fe6f1e02402de875c446de52d67ed29/6bf3d/background-hover-light-1.png',
            srcSet:
              '/static/0fe6f1e02402de875c446de52d67ed29/6bf3d/background-hover-light-1.png 150w,\n/static/0fe6f1e02402de875c446de52d67ed29/42407/background-hover-light-1.png 300w',
            sizes: '150px',
          },
          sources: [
            {
              srcSet:
                '/static/0fe6f1e02402de875c446de52d67ed29/c2036/background-hover-light-1.webp 150w,\n/static/0fe6f1e02402de875c446de52d67ed29/77dc5/background-hover-light-1.webp 300w',
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
  backgroundHoverDark1: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fixed',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQklEQVQoz4WSvy6EURDFv11/ohCJQi3ZyvmdRqjoJHqNRqPWSUTjBUQjeAq9ByBEqRTBA2ioZCNhN7ty985dHxGKk7lzvzkz5853KnAVaIBHwM2US1RxHqmh+g9VJrsqTdI5R6KIYXHcTYMBLwKr4CmJLckb6XtRlmILfAjeiiHj4HnwOnhTYg98KfkJ/Brog58j9oDlpKAZSmYl+hm+krgHd1MehN/QC04n8rXynDnwNfgN6BWCNIhd8AfwDk7o5NylrhvxNK1nsCPJB3HZkehJSdmA2PmuiPqg1LCdRfgxqUv7LwqPfkwrpH6Q7sA34DPwOfgEWAJaEouSJ/KPZdjwOKa3Q9ULeBe8DV6Q3JQ8+uWG71bJzsgohxnwPnAr+QL88EWiRqDYqBlo/PBt3TYD702CVyTvZCJjhVBX85exPwEjtrQ+WKUleQAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/d54e2d9fc8b4b6e5f04cd14780c30d82/6bf3d/background-hover-dark-1.png',
            srcSet:
              '/static/d54e2d9fc8b4b6e5f04cd14780c30d82/6bf3d/background-hover-dark-1.png 150w,\n/static/d54e2d9fc8b4b6e5f04cd14780c30d82/42407/background-hover-dark-1.png 300w',
            sizes: '150px',
          },
          sources: [
            {
              srcSet:
                '/static/d54e2d9fc8b4b6e5f04cd14780c30d82/c2036/background-hover-dark-1.webp 150w,\n/static/d54e2d9fc8b4b6e5f04cd14780c30d82/77dc5/background-hover-dark-1.webp 300w',
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
  backgroundHoverLight2: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fixed',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVQoz11Sq04EQRDcBwgI30CCQPEFJwkKh7gEc5J/wCEAg0GDJghICJaEDyBoEjBTSZfrdggSOA44Mj0zu3cnZrPpqa6unqoqUKtAq0BrQKuR/qsgXT2eNlDrVLdYb4J4rdx3J37q1Kx9s8R/jc01pB+QsFaVGsSHNPOEktWI7gTRDW8UbTti8YZhELsB7Qm0h0C9CLQhFhRGUVHFMmgXoE1BewZtMwEcvOoEovFuGiSdjJ2CehWoA4jjupUPMmASqLHhHbRriF6C9uJEtDFo346L5E6sP/nuA6KvoG1BksJ1iN5m0gj6BbVTEUTHnSKxc9BOQXtLGJ1A9C8P2nPCtLu7ezRLVFbMKqLSUTLOn2Ib9E2+Au0zDz4spjToozMA7RhidxC9B+0MtP1oEFKM2uz4GmiPmHtP240cxeG6ZLBEKHR57LO4kLkRaCdpqKtbCdmUTKAl3EuetzSgXSTyYM9kMeezy+E/7NRVa5TyOTAAAAAASUVORK5CYII=',
        },
        images: {
          fallback: {
            src: '/static/481b91191af955c7a2d8b2258ae98d84/6bf3d/background-hover-light-2.png',
            srcSet:
              '/static/481b91191af955c7a2d8b2258ae98d84/6bf3d/background-hover-light-2.png 150w,\n/static/481b91191af955c7a2d8b2258ae98d84/42407/background-hover-light-2.png 300w',
            sizes: '150px',
          },
          sources: [
            {
              srcSet:
                '/static/481b91191af955c7a2d8b2258ae98d84/c2036/background-hover-light-2.webp 150w,\n/static/481b91191af955c7a2d8b2258ae98d84/77dc5/background-hover-light-2.webp 300w',
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
  backgroundHoverDark2: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fixed',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVQoz22SMS9EQRSFx1vZiGolOoVKcb/zJ7QajVIlGyQKiVa1jYJQ+RdCqaGQSFQSaj9BQkIllli5+2b2zRuKk7kz99wzZ+7cAAoJZk1cYAqo6jVx8bUDeC7UUCgLKidGckLVvrQWKjiTfeGKUmA6ns2YcQC6AN2CHkBXoF3QfHKXO1wCHYKWM+HUhh7oBjRymDkYpT3oGbQJzLpLL+qbMYzJH2DLXZt5b7QKeoq5j1w0xl+NMNtuxAWPIyFL6g50nxV+wtjVC2gfNABdRqfDyDuNT6brTzXjzQlmrVu/s/gctFhMxFF26SPQyfrFDigTmDzvFbTX/ih1Y7yWcd9Bc6GZrXHPFkDroDPQCWjFSX9HKM0dPaBvpmvQRvqU8M/PhnxYzajag06Ln+MXeb2obeh5avAAAAAASUVORK5CYII=',
        },
        images: {
          fallback: {
            src: '/static/a22afe15cddcb4511deceaac17853ae2/6bf3d/background-hover-dark-2.png',
            srcSet:
              '/static/a22afe15cddcb4511deceaac17853ae2/6bf3d/background-hover-dark-2.png 150w,\n/static/a22afe15cddcb4511deceaac17853ae2/42407/background-hover-dark-2.png 300w',
            sizes: '150px',
          },
          sources: [
            {
              srcSet:
                '/static/a22afe15cddcb4511deceaac17853ae2/c2036/background-hover-dark-2.webp 150w,\n/static/a22afe15cddcb4511deceaac17853ae2/77dc5/background-hover-dark-2.webp 300w',
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
  backgroundHoverLight3: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fixed',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbElEQVQoz21Su0olQRS8L01MFhH9AhMjA8FwkwU/wMREQcHAzMBAMNhg8Q/M3WSjDfwA/8HIwOAUnDI6hYImiq/rle7pGWfgDhQz3X26Tp2a6oHRA9Uzr94tDMxjAKpfrSPX5LpSO/WBKyFd/JNgHutgzGaSbpM+GMNUa93GXfKycQBqAtckvY26AnVq1G+4lkHNti8Xwn57qlp9WmyZx4d5PINK+Mzk33gyjxtQ/+CxD2rVqJma2Krpho1SeKw0JB41yTuoN1Afrb0aY1DXoLaNmsuWtUeH64cxjkGdgfprjPs8dkU0NkYifgX1UhrVZwlJ+TmoQ1ALVgh7TZfqew3UBahHY0wSanVWkSV7XuFZaVv5XqWw8iJ5MDRPRueIpKgswrVp1BGoE2Ncgrrrkmflk2wN9bMQRqOu/LVB44m3opPzp3lj7BjjP1y3hezBPH514oMpucoqPasemceoa35usgRqF9RGOcsx+gJM/ETyfBmUmQAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/8b7a9249fe146349ae3379ea736b1d37/6bf3d/background-hover-light-3.png',
            srcSet:
              '/static/8b7a9249fe146349ae3379ea736b1d37/6bf3d/background-hover-light-3.png 150w,\n/static/8b7a9249fe146349ae3379ea736b1d37/42407/background-hover-light-3.png 300w',
            sizes: '150px',
          },
          sources: [
            {
              srcSet:
                '/static/8b7a9249fe146349ae3379ea736b1d37/c2036/background-hover-light-3.webp 150w,\n/static/8b7a9249fe146349ae3379ea736b1d37/77dc5/background-hover-light-3.webp 300w',
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
  backgroundHoverDark3: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fixed',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABO0lEQVQoz3WSvS5EQRiGz+6iIkKEVvs+b6LjCtBzCS7APUhUbkEjJCqVxAVQUJHoFeIGRLOxYpfMnG92z651kvfMZOab5/utwBW4LZHWBclLQCU5RDvdg1vJtpzHu+rPlwwTTGIFfA9+kziX2AXPhaOq4bgTa2sEzu8LMD9YBj+Af5KkegUewRfAHnh+Al6VqIuSgyqMDgos9AkeBLQ4eQXOpGy7BV4skChJDaw3CHwp8QzuRoQDiZ7kL6A/AlOc3oI3JM9Eljnb9GvVB1nJU4LfNKMLJXAP/N04+wDfSZyCD3OTSi0kt0pxI4Vt8LXk9wlIv4ZnNR2+ALOTRR7WoxH1GngTfAQ8jTct17kb+6thp2N8xuYL3Bl1ddjdOfAO+BicJqAXsLRfnzqX/4xGirozJZt98Al4tdj+An6Ho52N6PZ6AAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/8903169937758b9b3dbea2417e63cc15/6bf3d/background-hover-dark-3.png',
            srcSet:
              '/static/8903169937758b9b3dbea2417e63cc15/6bf3d/background-hover-dark-3.png 150w,\n/static/8903169937758b9b3dbea2417e63cc15/42407/background-hover-dark-3.png 300w',
            sizes: '150px',
          },
          sources: [
            {
              srcSet:
                '/static/8903169937758b9b3dbea2417e63cc15/c2036/background-hover-dark-3.webp 150w,\n/static/8903169937758b9b3dbea2417e63cc15/77dc5/background-hover-dark-3.webp 300w',
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
  backgroundHoverLight4: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fixed',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiUlEQVQoz01SPYsUURCcnUMj0wMD5UwEDTczNDIxMzMUBDHQ3OB+wYGxoVwmYuxvMDAWpEu6si4UFBG8vd2Zk36vZ8+g6Zl63dVfNcA1GGOAx4j0VNpdUEfWv1eFDf09VuYxGHXVGGtQa+S/d7yTUQeVdBuu96B2oM6N8TzxDPyfuAjfweMCrr/mcb9jMebjQQU8NMYW1AWoqftwuF7AdaVIR1CvQL0B9bPFeIv/DOpRFltGWZvH1yLbGDUX6VQJj3M18FjB4yOo32AkvjPGWeW9LsK2l+MEjTqrwLmCdg13fat9PQH1wzyWKebq8gs8jpJraJWpW6C+V/JkjIVwvhxfmySyvrep8Cy4AXVieVzPDttu4maOYX282bwRnlfCYvXW1rBbCpnr1PqVx2xuKGlcN8avpZPye7O+hm0zj6lG3sL11hiHqRRzraxGHksOz/ZVe/Ino56C+gDqT3W/WB7wXqmja7Mkdakrb+K+A0ZK4ngJ6NfVjTyIebwE9QDUNet52cyeLAn/Ac60d+1M7zXvAAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/367341218f130dd858968d8b98b1e974/6bf3d/background-hover-light-4.png',
            srcSet:
              '/static/367341218f130dd858968d8b98b1e974/6bf3d/background-hover-light-4.png 150w,\n/static/367341218f130dd858968d8b98b1e974/42407/background-hover-light-4.png 300w',
            sizes: '150px',
          },
          sources: [
            {
              srcSet:
                '/static/367341218f130dd858968d8b98b1e974/c2036/background-hover-light-4.webp 150w,\n/static/367341218f130dd858968d8b98b1e974/77dc5/background-hover-light-4.webp 300w',
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
  backgroundHoverDark4: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fixed',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVQoz12TPS9FQRCGzzk3oUWiutUNIu8ziVLjByhF+AkSvYKIXyBKkegUJFpaUQqJjl4UKpWW++HK7J29d6OY7J6dd57Z2ZlTSVYBySSrgRZYNTpP1oTl7+yrY78Atgc244yqENYSIWYZ2IYkDgihcw0Omw7fBtgQ7K4AZrF1gGOwLxdJaT2XbHFy2wTL+jmwlwC67RQ3ow32IZGdfRjvu2DrRfIO2BbYgzT2+/rozlZkO4hbfYMNwH5j7UbQO9gp2A3Y5yhxStiXyMATz9hE1usA9gLmgoHkAQk8DHBZQbe43SvYbH6LJS935GBQlDkcgTyQnmQ/kCpwX6+A30rMOyuPzNok6xh0GO/0VgT+N2/IUYxcalpVzNh+bkKUthnnbYkzsCeJZ+AK7BJsF2yq6HjjUO9uE11e9REBLsDuwVby7IW/lryB458gj1yrHPg/e3nA90qFaPcAAAAASUVORK5CYII=',
        },
        images: {
          fallback: {
            src: '/static/ac9f345cf53ab7a531de728cb12900e3/6bf3d/background-hover-dark-4.png',
            srcSet:
              '/static/ac9f345cf53ab7a531de728cb12900e3/6bf3d/background-hover-dark-4.png 150w,\n/static/ac9f345cf53ab7a531de728cb12900e3/42407/background-hover-dark-4.png 300w',
            sizes: '150px',
          },
          sources: [
            {
              srcSet:
                '/static/ac9f345cf53ab7a531de728cb12900e3/c2036/background-hover-dark-4.webp 150w,\n/static/ac9f345cf53ab7a531de728cb12900e3/77dc5/background-hover-dark-4.webp 300w',
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
