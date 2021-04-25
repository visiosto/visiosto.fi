// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import localizedLinkQuery from './localizedLinkQuery';

export default {
  ...localizedLinkQuery,
  site: {
    siteMetadata: {
      ...localizedLinkQuery.site.siteMetadata,
      defaultEmail: 'info@visiosto.fi',
      businessID: '3010084-6',
      vatNumber: 'FI30100846',
      socialMedia: {
        facebook: 'https://facebook.com/visiosto',
        github: 'https://github.com/visiosto',
        instagram: 'https://instagram.com/visiosto',
        linkedin: 'https://linkedin.com/company/visiosto',
        twitter: 'https://twitter.com/visiosto_oy',
      },
    },
  },
  logoLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAACxKAAAsSgF3enRNAAAENklEQVQ4y2VUW2xUVRS9LTUiQYkQhb7bs+fOnH2HllJSG6qo1KQ8RINGCGlaQcOjFSqEWnr3nulMS+fV8tZagsESbEgrJgrxR4Mx/PCrv/75wZfxx0/LTO8x+86doYkfZ+7JnH3W2Y+1lgXIVrAqn+5pGyBdBuS7gHwHNM+BpjlAXlCaFgE5CZrrJFZpqlDIFUqTBZotS2kfZFUAVgXIVwH5PiD3AXK1QrLKD8klpGZA/hSQHyik00ECsipkbymkyuDSekD+GZBHJKAEpDQ9A0gbAXkDaFpVAlDIq5WmG4D0tR8XPOq/qjRVBWAH5M8X6kYtvZmjtsMzIYd/tx1+HEL+G5DTtuNffHbFgylAvh7gVMqPrCuAfE4CXmpyrU3KHWwM01JdiEy9TWaTcv1vc4S+aYqQVQPuin5LdjQPmvpLGbYD0n15YWOzazXYNPjGq2OmqzNu9vckn+zZmSgMHJws7O1Oms1bYn/VgNtlrftMgPYAcpsMAjTVBhU+JweXALlf+tKyJebUhtyloUOTJnUiU/jybM7c5mkvO5gxUyezy693jZm6EC1JGwDZAPIjnx1+lTwFyIel3G+VphpJNxzlL6qVa3r3TTz5bvyCGe5LedMns97kiYw3fixjdnSNLUvpIWSjNHuAJKC7g9Lle124c8cfu6Yq2+HfasA1e7uThUfXrnjHPzhvrpzOmc/P5LyFxAVve2fcNIbJsx0uAHJeaR/wYgDYBEjzspkr8ohfBuTHjWEyHR3x5fjHaW/nawkzeTxjZodzZrg/Zdq2xkoD8pSmPPiZ0t0AcLXS/KNw6lbQ2PVK059STp1Nyx0dcW92eMoMHJg0l4ay5kxvyqQHMoaOpOXrNUWKgL6SitxcqzT9ICNfAF2mwEPbYcmi8F7PuF+m9PLchynz/q5xI30UsFvutHFaY/nmiN9PDipEhXxbkBcAKRIADoeKgE/2vZU0N0amvOTRtHd5KGuO7D9vhg5Neu7htHf1dM6Ltsa85ggt2w63FiXJB4TPUmockM8GBF1nO/yHTHp/T3LpfuqiJ6Bz7pQ30p/ypOzcJ1lvMXHhX2xh0xShmRfrRwMt803hpoBUi9AB+Xk5iES5vSFM/7Rvi5uJY5lC3zsTef4one/ekcjvejOR7393QjKVwfzatjW2RpSjkF8B5HsixxL6KaXppqQednw+YmOEHspEa0NkJGOZfkOYhNiFDQ2jovE1Itt623eZB6C5qyg95Iqgf18BUlaCQg5biaPpimhrrMd2eDoc5cUQ8rztsBttjbVYlWdLxiB3vwekU6pobat8H/OdozjpGaGB0tQQBAQeyP9fmjoB+RfQfKps0NovmZ9m6YNSLyD/FCjgbUBWoHktIK8DZAeQDwKyeOA90Lw9uFd2H6tkjmrlgabVgWPPAvK86B2QxfpvA/Jl0LS7nHnZdIvG+x8tXxbtjVsjWwAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/12c8930996726e57eb384915656e7098/e9a79/logo-light.png',
            srcSet:
              '/static/12c8930996726e57eb384915656e7098/f31ef/logo-light.png 40w,\n/static/12c8930996726e57eb384915656e7098/1f8a1/logo-light.png 80w,\n/static/12c8930996726e57eb384915656e7098/e9a79/logo-light.png 160w,\n/static/12c8930996726e57eb384915656e7098/5f035/logo-light.png 320w',
            sizes: '(min-width: 160px) 160px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/12c8930996726e57eb384915656e7098/e73fe/logo-light.webp 40w,\n/static/12c8930996726e57eb384915656e7098/61ca6/logo-light.webp 80w,\n/static/12c8930996726e57eb384915656e7098/60b4d/logo-light.webp 160w,\n/static/12c8930996726e57eb384915656e7098/5e011/logo-light.webp 320w',
              type: 'image/webp',
              sizes: '(min-width: 160px) 160px, 100vw',
            },
          ],
        },
        width: 160,
        height: 160,
      },
    },
  },
  logoDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAACxKAAAsSgF3enRNAAADMElEQVQ4y2VUO4ieVRD99l9czWojKghGkGDjY8FGC9NZ+NhSUBAxAU1jEaIsilGJwVcRghqTObpqsj4SY+IzmYORJHaRKCgRBAsRRDEBtRHBwjngytw7/78LFpef/35zz5yZM3MGEUO4DUGMghjUz40iXhJxWG4HROwVsS+IgyIOiXgqiLUVOxV53NrbQd4upxuYY0bEbhFHwnGviMuDGdhPPVoXbg+JOCliSwfNbwmagMSoXbpdGo4TQVsYZ+tAOC+BRVwStGmtVHFBuL0exN7wAp0wdMyE42TQ7hw/COJ6EXtEnAni56D9LuK5+nZ+J9FinxfxSt2Pxtl2y7GwKvtCEMv6/3mngEbjFkQHOiDHfa2H4ZYCHKls2Yvsyx9BnBNxWsS3Ij4Q8Z2In8KxvmLng7ihleu2NojjItZk7bvEJkBmuq6YvBtuLwbxZBAPithR5Z5L5uH4Wv33VLhN1XTsDLcNCfh+b3qjv0e0BDwWxP3KUohncoTC8XJj2IGW5fi3gRK3VZvmRbw6tDnzNoszXQBbDtpXQdwi4lMR25RM3TaJOFsV/BMOyW053HYW4DoRbyVQl93baJyNzvDXzBZuP1YpW0W8GcSfY4GCpoo93IWxHK8vh74BrdzLgvhFPlH0NxFPiPhIxLNVfrJ5o7aoA7vtr6WYFfF5Ah5s29DLPrVqRE4HsSmIDSKWRHwhYlcJlJPwV8VtrZKvzbgck9zNq2sUHouVkr4R7dEUIxxPy+2YiPdEvCZiu4i/U8BwzBXg3ck8WW0XbUsN6sVy+6EyJ9t7RDxSjPaJ2F+b8UDFoNY2AVOLO7KZV4o4EW6zlemmVLHOCyI+q4ffy3Em/4c39TPhbLlVvjk6Noc8D4tY7M7SMs7VlowbX22Y9HcpHBdG7/tUOk8QN3dzIKYKdKmGuMzB0oVubco6DkX3xcdFzNX+jsl8LGJzkZkeohvkuA+L0Q3gilVGMaxyllX/W5npiZvrbtQNtiNPhU9sa6OI4+HYEW63i7gq3NYEcZGIa0TcFd4c/KiI9WXAo3o7DJO+NaY2Krazom0MYrGU/SQcH4p4u4Z6fuLUtOlYadPwH3SGK57IvVz0AAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/e30a6d8cc0fbdfdcb649c54ea2d6d0a4/e9a79/logo-dark-2.png',
            srcSet:
              '/static/e30a6d8cc0fbdfdcb649c54ea2d6d0a4/f31ef/logo-dark-2.png 40w,\n/static/e30a6d8cc0fbdfdcb649c54ea2d6d0a4/1f8a1/logo-dark-2.png 80w,\n/static/e30a6d8cc0fbdfdcb649c54ea2d6d0a4/e9a79/logo-dark-2.png 160w,\n/static/e30a6d8cc0fbdfdcb649c54ea2d6d0a4/5f035/logo-dark-2.png 320w',
            sizes: '(min-width: 160px) 160px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/e30a6d8cc0fbdfdcb649c54ea2d6d0a4/e73fe/logo-dark-2.webp 40w,\n/static/e30a6d8cc0fbdfdcb649c54ea2d6d0a4/61ca6/logo-dark-2.webp 80w,\n/static/e30a6d8cc0fbdfdcb649c54ea2d6d0a4/60b4d/logo-dark-2.webp 160w,\n/static/e30a6d8cc0fbdfdcb649c54ea2d6d0a4/5e011/logo-dark-2.webp 320w',
              type: 'image/webp',
              sizes: '(min-width: 160px) 160px, 100vw',
            },
          ],
        },
        width: 160,
        height: 160,
      },
    },
  },
  facebook: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#f8f8f8',
        images: {
          fallback: {
            src: '/static/f5294b0961a87de3bf91872909e20374/914ee/facebook.png',
            srcSet:
              '/static/f5294b0961a87de3bf91872909e20374/22867/facebook.png 8w,\n/static/f5294b0961a87de3bf91872909e20374/fbc98/facebook.png 16w,\n/static/f5294b0961a87de3bf91872909e20374/914ee/facebook.png 32w,\n/static/f5294b0961a87de3bf91872909e20374/1c9ce/facebook.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/f5294b0961a87de3bf91872909e20374/5d252/facebook.webp 8w,\n/static/f5294b0961a87de3bf91872909e20374/e789a/facebook.webp 16w,\n/static/f5294b0961a87de3bf91872909e20374/ef6ff/facebook.webp 32w,\n/static/f5294b0961a87de3bf91872909e20374/8257c/facebook.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  facebookColor: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#1878f8',
        images: {
          fallback: {
            src: '/static/f407c31b217aac6e0cd4171092d53a8c/914ee/facebook-color.png',
            srcSet:
              '/static/f407c31b217aac6e0cd4171092d53a8c/22867/facebook-color.png 8w,\n/static/f407c31b217aac6e0cd4171092d53a8c/fbc98/facebook-color.png 16w,\n/static/f407c31b217aac6e0cd4171092d53a8c/914ee/facebook-color.png 32w,\n/static/f407c31b217aac6e0cd4171092d53a8c/1c9ce/facebook-color.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/f407c31b217aac6e0cd4171092d53a8c/5d252/facebook-color.webp 8w,\n/static/f407c31b217aac6e0cd4171092d53a8c/e789a/facebook-color.webp 16w,\n/static/f407c31b217aac6e0cd4171092d53a8c/ef6ff/facebook-color.webp 32w,\n/static/f407c31b217aac6e0cd4171092d53a8c/8257c/facebook-color.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  github: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#080808',
        images: {
          fallback: {
            src: '/static/438c17272c5f0e9f4a6da34d3e4bc5bd/914ee/github.png',
            srcSet:
              '/static/438c17272c5f0e9f4a6da34d3e4bc5bd/22867/github.png 8w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/fbc98/github.png 16w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/914ee/github.png 32w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/1c9ce/github.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/438c17272c5f0e9f4a6da34d3e4bc5bd/5d252/github.webp 8w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/e789a/github.webp 16w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/ef6ff/github.webp 32w,\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/8257c/github.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  instagram: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#f8f8f8',
        images: {
          fallback: {
            src: '/static/0e84d5926187e7a3b785febd3a55bf1d/914ee/instagram.png',
            srcSet:
              '/static/0e84d5926187e7a3b785febd3a55bf1d/22867/instagram.png 8w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/fbc98/instagram.png 16w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/914ee/instagram.png 32w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/1c9ce/instagram.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/0e84d5926187e7a3b785febd3a55bf1d/5d252/instagram.webp 8w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/e789a/instagram.webp 16w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/ef6ff/instagram.webp 32w,\n/static/0e84d5926187e7a3b785febd3a55bf1d/8257c/instagram.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  instagramColor: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#d82878',
        images: {
          fallback: {
            src: '/static/fafa030c53d0768359acf1f430c6aa52/914ee/instagram-color.png',
            srcSet:
              '/static/fafa030c53d0768359acf1f430c6aa52/22867/instagram-color.png 8w,\n/static/fafa030c53d0768359acf1f430c6aa52/fbc98/instagram-color.png 16w,\n/static/fafa030c53d0768359acf1f430c6aa52/914ee/instagram-color.png 32w,\n/static/fafa030c53d0768359acf1f430c6aa52/1c9ce/instagram-color.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/fafa030c53d0768359acf1f430c6aa52/5d252/instagram-color.webp 8w,\n/static/fafa030c53d0768359acf1f430c6aa52/e789a/instagram-color.webp 16w,\n/static/fafa030c53d0768359acf1f430c6aa52/ef6ff/instagram-color.webp 32w,\n/static/fafa030c53d0768359acf1f430c6aa52/8257c/instagram-color.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  linkedin: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#080808',
        images: {
          fallback: {
            src: '/static/c0ea523502937c51e46d2821e4cd45f1/914ee/linkedin.png',
            srcSet:
              '/static/c0ea523502937c51e46d2821e4cd45f1/22867/linkedin.png 8w,\n/static/c0ea523502937c51e46d2821e4cd45f1/fbc98/linkedin.png 16w,\n/static/c0ea523502937c51e46d2821e4cd45f1/914ee/linkedin.png 32w,\n/static/c0ea523502937c51e46d2821e4cd45f1/1c9ce/linkedin.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/c0ea523502937c51e46d2821e4cd45f1/5d252/linkedin.webp 8w,\n/static/c0ea523502937c51e46d2821e4cd45f1/e789a/linkedin.webp 16w,\n/static/c0ea523502937c51e46d2821e4cd45f1/ef6ff/linkedin.webp 32w,\n/static/c0ea523502937c51e46d2821e4cd45f1/8257c/linkedin.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  linkedinColor: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#2868b8',
        images: {
          fallback: {
            src: '/static/9c8e6a00a094c3d457443a762b3cfb86/914ee/linkedin-color.png',
            srcSet:
              '/static/9c8e6a00a094c3d457443a762b3cfb86/22867/linkedin-color.png 8w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/fbc98/linkedin-color.png 16w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/914ee/linkedin-color.png 32w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/1c9ce/linkedin-color.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/9c8e6a00a094c3d457443a762b3cfb86/5d252/linkedin-color.webp 8w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/e789a/linkedin-color.webp 16w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/ef6ff/linkedin-color.webp 32w,\n/static/9c8e6a00a094c3d457443a762b3cfb86/8257c/linkedin-color.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  twitter: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#080808',
        images: {
          fallback: {
            src: '/static/b482f5b3953e7e402643775772d9f7a1/914ee/twitter.png',
            srcSet:
              '/static/b482f5b3953e7e402643775772d9f7a1/22867/twitter.png 8w,\n/static/b482f5b3953e7e402643775772d9f7a1/fbc98/twitter.png 16w,\n/static/b482f5b3953e7e402643775772d9f7a1/914ee/twitter.png 32w,\n/static/b482f5b3953e7e402643775772d9f7a1/1c9ce/twitter.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/b482f5b3953e7e402643775772d9f7a1/5d252/twitter.webp 8w,\n/static/b482f5b3953e7e402643775772d9f7a1/e789a/twitter.webp 16w,\n/static/b482f5b3953e7e402643775772d9f7a1/ef6ff/twitter.webp 32w,\n/static/b482f5b3953e7e402643775772d9f7a1/8257c/twitter.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
  twitterColor: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        backgroundColor: '#080808',
        images: {
          fallback: {
            src: '/static/fd7fe5d1dae728c6791714967c8731b8/914ee/twitter-color.png',
            srcSet:
              '/static/fd7fe5d1dae728c6791714967c8731b8/22867/twitter-color.png 8w,\n/static/fd7fe5d1dae728c6791714967c8731b8/fbc98/twitter-color.png 16w,\n/static/fd7fe5d1dae728c6791714967c8731b8/914ee/twitter-color.png 32w,\n/static/fd7fe5d1dae728c6791714967c8731b8/1c9ce/twitter-color.png 64w',
            sizes: '(min-width: 32px) 32px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/fd7fe5d1dae728c6791714967c8731b8/5d252/twitter-color.webp 8w,\n/static/fd7fe5d1dae728c6791714967c8731b8/e789a/twitter-color.webp 16w,\n/static/fd7fe5d1dae728c6791714967c8731b8/ef6ff/twitter-color.webp 32w,\n/static/fd7fe5d1dae728c6791714967c8731b8/8257c/twitter-color.webp 64w',
              type: 'image/webp',
              sizes: '(min-width: 32px) 32px, 100vw',
            },
          ],
        },
        width: 32,
        height: 32,
      },
    },
  },
};
