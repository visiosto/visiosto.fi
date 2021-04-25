// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import localizedAnchorLinkQuery from './localizedAnchorLinkQuery';
import localizedLinkQuery from './localizedLinkQuery';
import navigationQuery from './navigationQuery';

export default {
  ...localizedAnchorLinkQuery,
  ...localizedLinkQuery,
  ...navigationQuery,
  site: {
    siteMetadata: {
      defaultLocale: 'fi',
      title: 'Visiosto',
      localePaths: {
        en_GB: 'en',
        fi: '',
      },
    },
  },
  logoPhoneSLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAACxKAAAsSgF3enRNAAABR0lEQVQY0y2QMUvQcRCG/wRKDoKkQUlD3Wt4T006JFI0qYNDuUVCIoVEYIOD1b1NJYlCEBluIeLaEPQtBL9F0Bdwi0D5/XM4OHiP5567TngksmaE55S1KEqRNa2sSy0TNSI8Fvim8KSoYVGTkTUmfFfpW8J3hG8I3+6UdV/USuBT4d89GM8K31N6VfiV8EfhL4E3hd8LHwp/Fd4WXo2sXVGbon51wguiToTPhP9F+kxZb4OaEH4j/EF4XfiT8GNRW5G1Jbwb1OveEi8H9Uz4oAHnhY8bMLL+9kBcwqMNFnhP+In+230T/ix6o3fKasteinoq/EL4qAvayV4W/nNh+SPwQ+GrwkuBnws/UnpfeEd4I/D3ZhzUvqilPsdrwj+76B/vGVEPLsLpSE8JN/sBUYNBDQpfiaxWrR+P9JDwtX4m67LwsPD1czX8iVX6VUraAAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/52fd09904d7b4655c9853584e3d17a71/501c7/logo-light.png',
            srcSet:
              '/static/52fd09904d7b4655c9853584e3d17a71/8e0ec/logo-light.png 75w,\n/static/52fd09904d7b4655c9853584e3d17a71/545e1/logo-light.png 151w,\n/static/52fd09904d7b4655c9853584e3d17a71/501c7/logo-light.png 301w,\n/static/52fd09904d7b4655c9853584e3d17a71/23911/logo-light.png 602w',
            sizes: '(min-width: 301px) 301px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/52fd09904d7b4655c9853584e3d17a71/f2944/logo-light.webp 75w,\n/static/52fd09904d7b4655c9853584e3d17a71/d962e/logo-light.webp 151w,\n/static/52fd09904d7b4655c9853584e3d17a71/3c7d6/logo-light.webp 301w,\n/static/52fd09904d7b4655c9853584e3d17a71/15842/logo-light.webp 602w',
              type: 'image/webp',
              sizes: '(min-width: 301px) 301px, 100vw',
            },
          ],
        },
        width: 301,
        height: 97,
      },
    },
  },
  logoPhoneSDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAACxKAAAsSgF3enRNAAABRElEQVQY0zWRMUuWYRSGP4QkB0HEIKOh0BByqiGJoiVqcEibxCAQRSTQoaFUmkoMPwgk5VxTSLg6BJ77V0T/IugPtJ07KJ7Pt+HhPHAdrnMfTs9izGLO4rHFvMVUKe5aDHWsvYlKbljMlBgtxUxlTFjMlrhpcdviuhW3ehYPLF5a/Lb42cSV3Le452TF4pXFhxKHlbyxeGfx1eKzxUeLlcroWwN23oRPnfHD4m+JP9Vqsm0xbfHW4r3FZol9iwUne5WxZ9EvsdVSWrzoQp30nDyx+D4QZlSrFruVMd7JjiyWugTHFp+c9CvZqYzGNyyWLdZKcfp/5TbhVyc7s3hkcaUyFitj1eKZRVgcWLwu8cWKfSdRYrHxyli3+NaEY5XRjvKwkucW7SB3LBq7VGLYGcMW44PUF/9rJUYsrl70xGWLUYvJf2ZqPPBYhwFMAAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/115f00c2410f4e0fd64720b01c280dd5/501c7/logo-dark.png',
            srcSet:
              '/static/115f00c2410f4e0fd64720b01c280dd5/8e0ec/logo-dark.png 75w,\n/static/115f00c2410f4e0fd64720b01c280dd5/545e1/logo-dark.png 151w,\n/static/115f00c2410f4e0fd64720b01c280dd5/501c7/logo-dark.png 301w,\n/static/115f00c2410f4e0fd64720b01c280dd5/23911/logo-dark.png 602w',
            sizes: '(min-width: 301px) 301px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/115f00c2410f4e0fd64720b01c280dd5/f2944/logo-dark.webp 75w,\n/static/115f00c2410f4e0fd64720b01c280dd5/d962e/logo-dark.webp 151w,\n/static/115f00c2410f4e0fd64720b01c280dd5/3c7d6/logo-dark.webp 301w,\n/static/115f00c2410f4e0fd64720b01c280dd5/15842/logo-dark.webp 602w',
              type: 'image/webp',
              sizes: '(min-width: 301px) 301px, 100vw',
            },
          ],
        },
        width: 301,
        height: 97,
      },
    },
  },
  logoTabletLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAACxKAAAsSgF3enRNAAABR0lEQVQY0y2QMUvQcRCG/wRKDoKkQUlD3Wt4T006JFI0qYNDuUVCIoVEYIOD1b1NJYlCEBluIeLaEPQtBL9F0Bdwi0D5/XM4OHiP5567TngksmaE55S1KEqRNa2sSy0TNSI8Fvim8KSoYVGTkTUmfFfpW8J3hG8I3+6UdV/USuBT4d89GM8K31N6VfiV8EfhL4E3hd8LHwp/Fd4WXo2sXVGbon51wguiToTPhP9F+kxZb4OaEH4j/EF4XfiT8GNRW5G1Jbwb1OveEi8H9Uz4oAHnhY8bMLL+9kBcwqMNFnhP+In+230T/ix6o3fKasteinoq/EL4qAvayV4W/nNh+SPwQ+GrwkuBnws/UnpfeEd4I/D3ZhzUvqilPsdrwj+76B/vGVEPLsLpSE8JN/sBUYNBDQpfiaxWrR+P9JDwtX4m67LwsPD1czX8iVX6VUraAAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/52fd09904d7b4655c9853584e3d17a71/501c7/logo-light.png',
            srcSet:
              '/static/52fd09904d7b4655c9853584e3d17a71/8e0ec/logo-light.png 75w,\n/static/52fd09904d7b4655c9853584e3d17a71/545e1/logo-light.png 151w,\n/static/52fd09904d7b4655c9853584e3d17a71/501c7/logo-light.png 301w,\n/static/52fd09904d7b4655c9853584e3d17a71/23911/logo-light.png 602w',
            sizes: '(min-width: 301px) 301px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/52fd09904d7b4655c9853584e3d17a71/f2944/logo-light.webp 75w,\n/static/52fd09904d7b4655c9853584e3d17a71/d962e/logo-light.webp 151w,\n/static/52fd09904d7b4655c9853584e3d17a71/3c7d6/logo-light.webp 301w,\n/static/52fd09904d7b4655c9853584e3d17a71/15842/logo-light.webp 602w',
              type: 'image/webp',
              sizes: '(min-width: 301px) 301px, 100vw',
            },
          ],
        },
        width: 301,
        height: 97,
      },
    },
  },
  logoTabletDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAACxKAAAsSgF3enRNAAABRElEQVQY0zWRMUuWYRSGP4QkB0HEIKOh0BByqiGJoiVqcEibxCAQRSTQoaFUmkoMPwgk5VxTSLg6BJ77V0T/IugPtJ07KJ7Pt+HhPHAdrnMfTs9izGLO4rHFvMVUKe5aDHWsvYlKbljMlBgtxUxlTFjMlrhpcdviuhW3ehYPLF5a/Lb42cSV3Le452TF4pXFhxKHlbyxeGfx1eKzxUeLlcroWwN23oRPnfHD4m+JP9Vqsm0xbfHW4r3FZol9iwUne5WxZ9EvsdVSWrzoQp30nDyx+D4QZlSrFruVMd7JjiyWugTHFp+c9CvZqYzGNyyWLdZKcfp/5TbhVyc7s3hkcaUyFitj1eKZRVgcWLwu8cWKfSdRYrHxyli3+NaEY5XRjvKwkucW7SB3LBq7VGLYGcMW44PUF/9rJUYsrl70xGWLUYvJf2ZqPPBYhwFMAAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/115f00c2410f4e0fd64720b01c280dd5/501c7/logo-dark.png',
            srcSet:
              '/static/115f00c2410f4e0fd64720b01c280dd5/8e0ec/logo-dark.png 75w,\n/static/115f00c2410f4e0fd64720b01c280dd5/545e1/logo-dark.png 151w,\n/static/115f00c2410f4e0fd64720b01c280dd5/501c7/logo-dark.png 301w,\n/static/115f00c2410f4e0fd64720b01c280dd5/23911/logo-dark.png 602w',
            sizes: '(min-width: 301px) 301px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/115f00c2410f4e0fd64720b01c280dd5/f2944/logo-dark.webp 75w,\n/static/115f00c2410f4e0fd64720b01c280dd5/d962e/logo-dark.webp 151w,\n/static/115f00c2410f4e0fd64720b01c280dd5/3c7d6/logo-dark.webp 301w,\n/static/115f00c2410f4e0fd64720b01c280dd5/15842/logo-dark.webp 602w',
              type: 'image/webp',
              sizes: '(min-width: 301px) 301px, 100vw',
            },
          ],
        },
        width: 301,
        height: 97,
      },
    },
  },
  allContentfulEntry: {
    edges: [
      {
        node: {
          contentful_id: '6hgL2HfMx63lVFGmKEfmM8',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '1asisPLj0UXhOAB49WlY8y',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '13mljnA6YJ43RRa3QSYNbc',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '6yW5r8lvQRoGnhg6KYGquh',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '174sjegFeLByrrBBf6p8go',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '3VXgoC5s5JSlqHDh7s3tF7',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '3DHvsGXmIHod7y6FZgtln6',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '6hgL2HfMx63lVFGmKEfmM8',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '1asisPLj0UXhOAB49WlY8y',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '13mljnA6YJ43RRa3QSYNbc',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '6yW5r8lvQRoGnhg6KYGquh',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '174sjegFeLByrrBBf6p8go',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '3VXgoC5s5JSlqHDh7s3tF7',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '3DHvsGXmIHod7y6FZgtln6',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulBlogPost',
          },
        },
      },
      {
        node: {
          contentful_id: '4ohjwnImmQGE9t5AVnL26s',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulAuthor',
          },
        },
      },
      {
        node: {
          contentful_id: '5GoB7kOIjTYGLiYKhsQz9X',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulAuthor',
          },
        },
      },
      {
        node: {
          contentful_id: '15fpE4mUkbsZ9MXGSdGzKC',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulAuthor',
          },
        },
      },
      {
        node: {
          contentful_id: '4ohjwnImmQGE9t5AVnL26s',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulAuthor',
          },
        },
      },
      {
        node: {
          contentful_id: '5GoB7kOIjTYGLiYKhsQz9X',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulAuthor',
          },
        },
      },
      {
        node: {
          contentful_id: '15fpE4mUkbsZ9MXGSdGzKC',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulAuthor',
          },
        },
      },
      {
        node: {
          contentful_id: '5dccCaFrZ2CMRu3UBYiu8Q',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulCategory',
          },
        },
      },
      {
        node: {
          contentful_id: '40owXwK7rRTZhiFhzASk8M',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulCategory',
          },
        },
      },
      {
        node: {
          contentful_id: '5dccCaFrZ2CMRu3UBYiu8Q',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulCategory',
          },
        },
      },
      {
        node: {
          contentful_id: '40owXwK7rRTZhiFhzASk8M',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulCategory',
          },
        },
      },
      {
        node: {
          contentful_id: 'rXFgpak6HKjCuUXjFo9KW',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulIndexPage',
          },
        },
      },
      {
        node: {
          contentful_id: 'rXFgpak6HKjCuUXjFo9KW',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulIndexPage',
          },
        },
      },
      {
        node: {
          contentful_id: '3btvbSJKnvM2Eya9bnShrH',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulProduct',
          },
        },
      },
      {
        node: {
          contentful_id: '735MexX6oN7l7ly8REPo78',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulProduct',
          },
        },
      },
      {
        node: {
          contentful_id: '6vLcKWh6usV3o6v4kPI8fe',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulProduct',
          },
        },
      },
      {
        node: {
          contentful_id: '3btvbSJKnvM2Eya9bnShrH',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulProduct',
          },
        },
      },
      {
        node: {
          contentful_id: '735MexX6oN7l7ly8REPo78',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulProduct',
          },
        },
      },
      {
        node: {
          contentful_id: '6vLcKWh6usV3o6v4kPI8fe',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulProduct',
          },
        },
      },
      {
        node: {
          contentful_id: '7yT76Msr4Ist4kaDUu82TQ',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '6a7fVb49Zf79FTetXflVFL',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '2B8WVOvBXdHmLHeBFx381E',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '4TippijFyNwApyemfLovAf',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '4oIYhIQVDliSRZWcw0uLih',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '78yHWSkeCqfmQlxBzNgeiL',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '38XZyq1cZKNY7f6Y6hLvcA',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '3N71KokEFuP1VCArc8GpKw',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '3rPdaUCw3nKo73b5Z6thWW',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '5GW9t8XiBpdiq5WhIYy5AV',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '6JrxMUqXiStBZgt21h88fd',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '4OxelZ3A442xvpTFiIGM4w',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '7yT76Msr4Ist4kaDUu82TQ',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '6a7fVb49Zf79FTetXflVFL',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '2B8WVOvBXdHmLHeBFx381E',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '4TippijFyNwApyemfLovAf',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '4oIYhIQVDliSRZWcw0uLih',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '78yHWSkeCqfmQlxBzNgeiL',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '38XZyq1cZKNY7f6Y6hLvcA',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '3N71KokEFuP1VCArc8GpKw',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '3rPdaUCw3nKo73b5Z6thWW',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '5GW9t8XiBpdiq5WhIYy5AV',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '6JrxMUqXiStBZgt21h88fd',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '4OxelZ3A442xvpTFiIGM4w',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPage',
          },
        },
      },
      {
        node: {
          contentful_id: '54IoCQAEBdBmvFfVtUeegI',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPath',
          },
        },
      },
      {
        node: {
          contentful_id: '4uEZ43he1uPiXUzzZUuedS',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPath',
          },
        },
      },
      {
        node: {
          contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulPath',
          },
        },
      },
      {
        node: {
          contentful_id: '54IoCQAEBdBmvFfVtUeegI',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPath',
          },
        },
      },
      {
        node: {
          contentful_id: '4uEZ43he1uPiXUzzZUuedS',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPath',
          },
        },
      },
      {
        node: {
          contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulPath',
          },
        },
      },
      {
        node: {
          contentful_id: '350kiBbchkPUtlsXLTbU4f',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulId',
          },
        },
      },
      {
        node: {
          contentful_id: '1ZlbDEvrwoeFOnTXPuPiYI',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulId',
          },
        },
      },
      {
        node: {
          contentful_id: '79QNSfmiHeP9kicjGUVoRh',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulId',
          },
        },
      },
      {
        node: {
          contentful_id: 'W2EtQJcRZkS4zKRWftrkX',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulId',
          },
        },
      },
      {
        node: {
          contentful_id: '1f2lQN3GiF78OkVM9b7EG5',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulId',
          },
        },
      },
      {
        node: {
          contentful_id: '350kiBbchkPUtlsXLTbU4f',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulId',
          },
        },
      },
      {
        node: {
          contentful_id: '1ZlbDEvrwoeFOnTXPuPiYI',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulId',
          },
        },
      },
      {
        node: {
          contentful_id: '79QNSfmiHeP9kicjGUVoRh',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulId',
          },
        },
      },
      {
        node: {
          contentful_id: 'W2EtQJcRZkS4zKRWftrkX',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulId',
          },
        },
      },
      {
        node: {
          contentful_id: '1f2lQN3GiF78OkVM9b7EG5',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulId',
          },
        },
      },
      {
        node: {
          contentful_id: '7oKEb5SnrTGF1vbDGwfBbr',
          node_locale: 'fi',
          internal: {
            type: 'ContentfulMenu',
          },
        },
      },
      {
        node: {
          contentful_id: '7oKEb5SnrTGF1vbDGwfBbr',
          node_locale: 'en-GB',
          internal: {
            type: 'ContentfulMenu',
          },
        },
      },
    ],
  },
  allContentfulAuthor: {
    edges: [
      {
        node: {
          contentful_id: '4ohjwnImmQGE9t5AVnL26s',
          node_locale: 'fi',
          name: 'Anssi Moilanen',
        },
      },
      {
        node: {
          contentful_id: '5GoB7kOIjTYGLiYKhsQz9X',
          node_locale: 'fi',
          name: 'Gurmann Saini',
        },
      },
      {
        node: {
          contentful_id: '15fpE4mUkbsZ9MXGSdGzKC',
          node_locale: 'fi',
          name: 'Antti Kivi',
        },
      },
      {
        node: {
          contentful_id: '4ohjwnImmQGE9t5AVnL26s',
          node_locale: 'en-GB',
          name: 'Anssi Moilanen',
        },
      },
      {
        node: {
          contentful_id: '5GoB7kOIjTYGLiYKhsQz9X',
          node_locale: 'en-GB',
          name: 'Gurmann Saini',
        },
      },
      {
        node: {
          contentful_id: '15fpE4mUkbsZ9MXGSdGzKC',
          node_locale: 'en-GB',
          name: 'Antti Kivi',
        },
      },
    ],
  },
  allContentfulBlogPost: {
    edges: [
      {
        node: {
          contentful_id: '6hgL2HfMx63lVFGmKEfmM8',
          node_locale: 'fi',
          title: 'Kutsu Visiosto oy:n ylimääräiseen yhtiökokoukseen 14.10.2019',
        },
      },
      {
        node: {
          contentful_id: '1asisPLj0UXhOAB49WlY8y',
          node_locale: 'fi',
          title: 'Kutsu Visiosto oy:n varsinaiseen yhtiökokoukseen 2020',
        },
      },
      {
        node: {
          contentful_id: '13mljnA6YJ43RRa3QSYNbc',
          node_locale: 'fi',
          title: 'Kutsu Visiosto oy:n varsinaiseen yhtiökokoukseen 2021',
        },
      },
      {
        node: {
          contentful_id: '6yW5r8lvQRoGnhg6KYGquh',
          node_locale: 'fi',
          title:
            'Visioston uudistettu verkkosivusto yhdistää raikkaan suunnittelun moderneihin ominaisuuksiin',
        },
      },
      {
        node: {
          contentful_id: '174sjegFeLByrrBBf6p8go',
          node_locale: 'fi',
          title: 'Visiosto juhlii ensimmäistä syntymäpäiväänsä',
        },
      },
      {
        node: {
          contentful_id: '3VXgoC5s5JSlqHDh7s3tF7',
          node_locale: 'fi',
          title: 'Täydennys kutsuun Visiosto oy:n varsinaiseen yhtiökokoukseen 2020',
        },
      },
      {
        node: {
          contentful_id: '3DHvsGXmIHod7y6FZgtln6',
          node_locale: 'fi',
          title: 'Moderni markkinointitoimisto Visiosto taittaa sinun visiosi',
        },
      },
      {
        node: {
          contentful_id: '6hgL2HfMx63lVFGmKEfmM8',
          node_locale: 'en-GB',
          title: 'Notice to Visiosto oy’s Extraordinary General Meeting on 14/10/2019',
        },
      },
      {
        node: {
          contentful_id: '1asisPLj0UXhOAB49WlY8y',
          node_locale: 'en-GB',
          title: 'Notice to Visiosto oy’s Annual General Meeting 2020',
        },
      },
      {
        node: {
          contentful_id: '13mljnA6YJ43RRa3QSYNbc',
          node_locale: 'en-GB',
          title: 'Notice to Visiosto oy’s Annual General Meeting 2021',
        },
      },
      {
        node: {
          contentful_id: '6yW5r8lvQRoGnhg6KYGquh',
          node_locale: 'en-GB',
          title: 'The Renewed Website of Visiosto Combines Fresh Design with Modern Features',
        },
      },
      {
        node: {
          contentful_id: '174sjegFeLByrrBBf6p8go',
          node_locale: 'en-GB',
          title: 'Visiosto Celebrates Its First Birthday',
        },
      },
      {
        node: {
          contentful_id: '3VXgoC5s5JSlqHDh7s3tF7',
          node_locale: 'en-GB',
          title: 'Additional Notice to Visiosto oy’s Annual General Meeting 2020',
        },
      },
      {
        node: {
          contentful_id: '3DHvsGXmIHod7y6FZgtln6',
          node_locale: 'en-GB',
          title: 'Modern Marketing Agency Visiosto Makes Your Vision Come True',
        },
      },
    ],
  },
  allContentfulCategory: {
    edges: [
      {
        node: {
          contentful_id: '5dccCaFrZ2CMRu3UBYiu8Q',
          node_locale: 'fi',
          name: 'Yleinen',
        },
      },
      {
        node: {
          contentful_id: '40owXwK7rRTZhiFhzASk8M',
          node_locale: 'fi',
          name: 'Uutiset',
        },
      },
      {
        node: {
          contentful_id: '5dccCaFrZ2CMRu3UBYiu8Q',
          node_locale: 'en-GB',
          name: 'General',
        },
      },
      {
        node: {
          contentful_id: '40owXwK7rRTZhiFhzASk8M',
          node_locale: 'en-GB',
          name: 'News',
        },
      },
    ],
  },
  allContentfulPage: {
    edges: [
      {
        node: {
          contentful_id: '7yT76Msr4Ist4kaDUu82TQ',
          node_locale: 'fi',
          title: 'Tietosuoja',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '6a7fVb49Zf79FTetXflVFL',
          node_locale: 'fi',
          title: 'Visioston asiakasrekisterin tietosuojaseloste',
          parentPath: {
            contentful_id: '7yT76Msr4Ist4kaDUu82TQ',
            title: 'Tietosuoja',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '2B8WVOvBXdHmLHeBFx381E',
          node_locale: 'fi',
          title: 'Visioston markkinointirekisterin tietosuojaseloste',
          parentPath: {
            contentful_id: '7yT76Msr4Ist4kaDUu82TQ',
            title: 'Tietosuoja',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '4TippijFyNwApyemfLovAf',
          node_locale: 'fi',
          title: 'Tietojen ilmoittaminen asiakasrekisteriin: kuluttaja-asiakas',
          parentPath: {
            contentful_id: '78yHWSkeCqfmQlxBzNgeiL',
            title: 'Asiakasrekisteri',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '4oIYhIQVDliSRZWcw0uLih',
          node_locale: 'fi',
          title: 'Tietojen ilmoittaminen asiakasrekisteriin: yritys tai yhteisö',
          parentPath: {
            contentful_id: '78yHWSkeCqfmQlxBzNgeiL',
            title: 'Asiakasrekisteri',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '78yHWSkeCqfmQlxBzNgeiL',
          node_locale: 'fi',
          title: 'Asiakasrekisteri',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '38XZyq1cZKNY7f6Y6hLvcA',
          node_locale: 'fi',
          title: 'Visioston palvelin- ja verkkotunnustilaussopimus',
          parentPath: {
            contentful_id: '3N71KokEFuP1VCArc8GpKw',
            title: 'Käyttöehdot',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '3N71KokEFuP1VCArc8GpKw',
          node_locale: 'fi',
          title: 'Käyttöehdot',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '3rPdaUCw3nKo73b5Z6thWW',
          node_locale: 'fi',
          title: 'Hallinto',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '5GW9t8XiBpdiq5WhIYy5AV',
          node_locale: 'fi',
          title: 'Hinnasto',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '6JrxMUqXiStBZgt21h88fd',
          node_locale: 'fi',
          title: 'Yhtiökokoukset',
          parentPath: {
            contentful_id: '3rPdaUCw3nKo73b5Z6thWW',
            title: 'Hallinto',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '4OxelZ3A442xvpTFiIGM4w',
          node_locale: 'fi',
          title: 'Yhtiöjärjestys',
          parentPath: {
            contentful_id: '3rPdaUCw3nKo73b5Z6thWW',
            title: 'Hallinto',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '7yT76Msr4Ist4kaDUu82TQ',
          node_locale: 'en-GB',
          title: 'Data Protection',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '6a7fVb49Zf79FTetXflVFL',
          node_locale: 'en-GB',
          title: 'Privacy Policy for the Client Register of Visiosto',
          parentPath: {
            contentful_id: '7yT76Msr4Ist4kaDUu82TQ',
            title: 'Data Protection',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '2B8WVOvBXdHmLHeBFx381E',
          node_locale: 'en-GB',
          title: 'Privacy Policy for the Marketing Register of Visiosto',
          parentPath: {
            contentful_id: '7yT76Msr4Ist4kaDUu82TQ',
            title: 'Data Protection',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '4TippijFyNwApyemfLovAf',
          node_locale: 'en-GB',
          title: 'Submitting Data for Client Register: Person',
          parentPath: {
            contentful_id: '78yHWSkeCqfmQlxBzNgeiL',
            title: 'Client Register',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '4oIYhIQVDliSRZWcw0uLih',
          node_locale: 'en-GB',
          title: 'Submitting Data for Client Register: Business and Organization',
          parentPath: {
            contentful_id: '78yHWSkeCqfmQlxBzNgeiL',
            title: 'Client Register',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '78yHWSkeCqfmQlxBzNgeiL',
          node_locale: 'en-GB',
          title: 'Client Register',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '38XZyq1cZKNY7f6Y6hLvcA',
          node_locale: 'en-GB',
          title: 'Terms of Visiosto Server and Domain Service',
          parentPath: {
            contentful_id: '3N71KokEFuP1VCArc8GpKw',
            title: 'Terms of Use',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '3N71KokEFuP1VCArc8GpKw',
          node_locale: 'en-GB',
          title: 'Terms of Use',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '3rPdaUCw3nKo73b5Z6thWW',
          node_locale: 'en-GB',
          title: 'Management',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '5GW9t8XiBpdiq5WhIYy5AV',
          node_locale: 'en-GB',
          title: 'Pricing',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '6JrxMUqXiStBZgt21h88fd',
          node_locale: 'en-GB',
          title: 'General Meetings',
          parentPath: {
            contentful_id: '3rPdaUCw3nKo73b5Z6thWW',
            title: 'Management',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '4OxelZ3A442xvpTFiIGM4w',
          node_locale: 'en-GB',
          title: 'Articles of Association',
          parentPath: {
            contentful_id: '3rPdaUCw3nKo73b5Z6thWW',
            title: 'Management',
            parentPath: null,
          },
        },
      },
    ],
  },
  allContentfulPath: {
    edges: [
      {
        node: {
          contentful_id: '54IoCQAEBdBmvFfVtUeegI',
          node_locale: 'fi',
          title: 'Kategoria',
          parentPath: {
            contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
            title: 'Blogi',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '4uEZ43he1uPiXUzzZUuedS',
          node_locale: 'fi',
          title: 'Henkilö',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
          node_locale: 'fi',
          title: 'Blogi',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '54IoCQAEBdBmvFfVtUeegI',
          node_locale: 'en-GB',
          title: 'Category',
          parentPath: {
            contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
            title: 'Blog',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '4uEZ43he1uPiXUzzZUuedS',
          node_locale: 'en-GB',
          title: 'Person',
          parentPath: null,
        },
      },
      {
        node: {
          contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
          node_locale: 'en-GB',
          title: 'Blog',
          parentPath: null,
        },
      },
    ],
  },
  authorPaths: {
    edges: [
      {
        node: {
          contentful_id: '4uEZ43he1uPiXUzzZUuedS',
          node_locale: 'fi',
          title: 'Henkilö',
        },
      },
      {
        node: {
          contentful_id: '4uEZ43he1uPiXUzzZUuedS',
          node_locale: 'en-GB',
          title: 'Person',
        },
      },
    ],
  },
  blogPaths: {
    edges: [
      {
        node: {
          contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
          node_locale: 'fi',
          title: 'Blogi',
        },
      },
      {
        node: {
          contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
          node_locale: 'en-GB',
          title: 'Blog',
        },
      },
    ],
  },
  categoryPaths: {
    edges: [
      {
        node: {
          contentful_id: '54IoCQAEBdBmvFfVtUeegI',
          node_locale: 'fi',
          title: 'Kategoria',
          parentPath: {
            contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
            title: 'Blogi',
            parentPath: null,
          },
        },
      },
      {
        node: {
          contentful_id: '54IoCQAEBdBmvFfVtUeegI',
          node_locale: 'en-GB',
          title: 'Category',
          parentPath: {
            contentful_id: '2zOhJf5PQ1SzUJhT37Cnb2',
            title: 'Blog',
            parentPath: null,
          },
        },
      },
    ],
  },
};
