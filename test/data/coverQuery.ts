// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import ruleQuery from './ruleQuery';

export default {
  ...ruleQuery,
  lensTopPhoneSmallLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVQY021Qv0uCURS9Ws0NUTiV3NuH71pjQYhQU/0LtTbUEKGExPcuGoEl5q/Ij8QtGkqltVzChpb2pqZaggL/BIkXT4skPXA4997h3MMBgN3RyFJytd3wnr7uKgnzfgEwtgfBkAZiAVIa0JKtSnfu3rmnA3DCsjztaHOfK5r6Qd5MBd0XJyw3xFIi1kIs+8TiopIYsTSJ5RyVjPdMhxgG0J0klsNaKm+Sm8dvAXSfZ8NiiIdQdbWDLDPIYlP7BgzT2xl4vSzPn8Wyppo4OUpvZWBxITlBLA6yjhLLCrFEkXUElY4jy/pPOp+tYQCPpyVoFYo75XjWtArFtetUDgA2+rr67etvt13afajhZ92DdsMLfdS8Zue2MmceqnCVyvlRaR+x+PuJSo/YZP0P/uMbPyV9+lohH9gAAAAASUVORK5CYII=',
        },
        images: {
          fallback: {
            src: '/static/2c91a50abba5a6eee66f36d92c87c8b7/22008/phone-small-up-left-light.png',
            srcSet:
              '/static/2c91a50abba5a6eee66f36d92c87c8b7/ed81f/phone-small-up-left-light.png 75w,\n/static/2c91a50abba5a6eee66f36d92c87c8b7/c1db7/phone-small-up-left-light.png 150w,\n/static/2c91a50abba5a6eee66f36d92c87c8b7/22008/phone-small-up-left-light.png 300w,\n/static/2c91a50abba5a6eee66f36d92c87c8b7/0cb8e/phone-small-up-left-light.png 600w',
            sizes: '(min-width: 300px) 300px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/2c91a50abba5a6eee66f36d92c87c8b7/403a6/phone-small-up-left-light.webp 75w,\n/static/2c91a50abba5a6eee66f36d92c87c8b7/94723/phone-small-up-left-light.webp 150w,\n/static/2c91a50abba5a6eee66f36d92c87c8b7/89bd1/phone-small-up-left-light.webp 300w,\n/static/2c91a50abba5a6eee66f36d92c87c8b7/745da/phone-small-up-left-light.webp 600w',
              type: 'image/webp',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
          ],
        },
        width: 300,
        height: 90,
      },
    },
  },
  lensTopPhoneSmallDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZ0lEQVQY03WPz0oCURTGj2jaolXraNGuRS/QptrXrh4giEgZRcu/FPQGURAF9QRRtBEpcyMFlRh3dCYXQUKTo9bkgDH3Dmp1T43pwv588MF34PA734HrmgZRiU7Hy/phvKLP7xbrw+sFY8CfM52em0b/Qqbpmjv/cAwdoA1xBpaI6fKKbEwgpsMrmiAQBj0K5NlIMM8wJlFclb8dk2krKhv1iGyYYZnSkESrIYnereRZwSeaTCCs6BeZXSAmWNBebaBzr1jf1hoVzOjaRTDPNtdujURMpumIbJyEJeM0JNHLoETl5RzL+UQzKRA267FghP0G6s0KID5MIJYQUVnM6hr0HSGktCfYV2qwo9TgzFAAEQAxC4HOm+52OwZe8gOIWIJ3rm5xriJ7K48i3sMjq9oRryDxUoVjrWJtwXgSYTLdsoA2gTC7+7+GFpBzdYpzNcW5OmjNhddnm8+63nE3C91W7fwH7Euf9BMHNYPMOeUAAAAASUVORK5CYII=',
        },
        images: {
          fallback: {
            src: '/static/ddf22f4dc15f27cf8ff28fe68795fb83/22008/phone-small-up-left-dark.png',
            srcSet:
              '/static/ddf22f4dc15f27cf8ff28fe68795fb83/ed81f/phone-small-up-left-dark.png 75w,\n/static/ddf22f4dc15f27cf8ff28fe68795fb83/c1db7/phone-small-up-left-dark.png 150w,\n/static/ddf22f4dc15f27cf8ff28fe68795fb83/22008/phone-small-up-left-dark.png 300w,\n/static/ddf22f4dc15f27cf8ff28fe68795fb83/0cb8e/phone-small-up-left-dark.png 600w',
            sizes: '(min-width: 300px) 300px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/ddf22f4dc15f27cf8ff28fe68795fb83/403a6/phone-small-up-left-dark.webp 75w,\n/static/ddf22f4dc15f27cf8ff28fe68795fb83/94723/phone-small-up-left-dark.webp 150w,\n/static/ddf22f4dc15f27cf8ff28fe68795fb83/89bd1/phone-small-up-left-dark.webp 300w,\n/static/ddf22f4dc15f27cf8ff28fe68795fb83/745da/phone-small-up-left-dark.webp 600w',
              type: 'image/webp',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
          ],
        },
        width: 300,
        height: 90,
      },
    },
  },
  lensTopTabletLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACf0lEQVQ4y82RTUhUURTHz5sciIg0QqIIqnei3lV007JNGATltBD6hgohclGSINK8G/kxWQl+YHPfezoJhYLM+PxsZkQEg1SIVqZBi1CpRaU1k2Emyoxw4jkzWq7i1aIDP87lLn73/M8FgGI4n18FNNaSuxTUX9FI86Wyy9UAGWWw75AKyDggS/UEsqKuddm6W+0JICuHZ+5Cd9FoY8OLlX6DntXVD8GW0rzs3NunkPGTyLgLGS9ExktR4dXIuA8Z70SmDiDjw8jUCWT8riVFRZWA5fCrO/e76dppD9GAEXcdq6Dd6KYDWZxkRSWZJcBV+BoyU5eR8Y/I+BQyfjY5vQMuuqq2ApRk1954EJ7r0ujMicr7O/a6Cw9m8+vIeFGSc8j4UVlRD8uKKiPj6TJTNyPjTkxGXo2tqABEw9LDkhr40iHqZvyCaKwls+B4JaTvubW+I2tfG3YpJ8+pezklHG1skGixDb51aX0RU6wEymszAADy8yqcsqKmIeNpqKibrDgJVAkZl+QNH5UCej3V8L1HwEKvNhI1RTR0r9453twIH9rFLz+c4I/qk18Hopuw0KO9jphistvz0DH5RMBsQICt+tHbBPS8VZrv1qY+B8T4xKNyWA76INJhU0iDPqB3fsdcl3g/4/e+bOMeIHpj7dSmcMgH9LYtLWqKmVm/d7i+2AMABbD0VLcrbAaaeOyMmmIuYoqh9js1cMFVDvGwYU+40m8ADTZt+9qp0Xy3Zk63emG61SvFQjYntCaJh40ri306LQf1QNTUIGrq8BdC3aIqHjYoHjZKkg9ItiMvBQ2IhQwr4pFYSN9uTRYL6faFSUEq+m/YE64LHP9E+N/XT3GpY5qF/H6HAAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/89f858106d55e4b2e0c3794aba8330f1/d6138/tablet-up-left-light.png',
            srcSet:
              '/static/89f858106d55e4b2e0c3794aba8330f1/15e42/tablet-up-left-light.png 100w,\n/static/89f858106d55e4b2e0c3794aba8330f1/5aead/tablet-up-left-light.png 200w,\n/static/89f858106d55e4b2e0c3794aba8330f1/d6138/tablet-up-left-light.png 400w,\n/static/89f858106d55e4b2e0c3794aba8330f1/b7804/tablet-up-left-light.png 800w',
            sizes: '(min-width: 400px) 400px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/89f858106d55e4b2e0c3794aba8330f1/d8057/tablet-up-left-light.webp 100w,\n/static/89f858106d55e4b2e0c3794aba8330f1/2e34e/tablet-up-left-light.webp 200w,\n/static/89f858106d55e4b2e0c3794aba8330f1/416c3/tablet-up-left-light.webp 400w,\n/static/89f858106d55e4b2e0c3794aba8330f1/c1587/tablet-up-left-light.webp 800w',
              type: 'image/webp',
              sizes: '(min-width: 400px) 400px, 100vw',
            },
          ],
        },
        width: 400,
        height: 400,
      },
    },
  },
  lensTopTabletDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChUlEQVQ4y7WTTWgTURDHZ5OAIJ6kFw8iCiIIPXnSi1SvgqjgB+JFxFLdV6sUPYjevChSVAQ9eSoKIp68eCgWDxU1OxaKtqktNPsdY5ps8iab3WRHXppqxVO3OPDnDcOb3/5ndhdOToXwYL4GAAzM5k3m4tErKOGyQTCUJ9BRgjAoIwy5RSDtEkgHdZRnBdKwQLohDLogkE7oKLequzDyRR4ZzNP4WKH2tBbZ7Ded1q2Z+thQnq4Po3wkkN4IpEWB1BYoWUlHYqFkKKkaVXRDbtMNCSBQjqhLFz8TLzS8eKpc4vOfmjzcaxZITYE0rRv0WqB8LJBGBdJpgTQgkA70zn4F6wK1l6xG23nJoNNF6bYKde/9wLt43+i03C9Q7tFRblaj6Eggfkt2z79qxoqA+RncnwsAjjGY5MZL0n31oliBMx9CGMz/adBRagIpq6PMCYOy3b2izOiGzAjs7rj7APgWeBrzPASR3bckXS4E3vjHnyW4Nxvkbs/UM2KNC91Ym6+4/CeCyNaYTWAu7lhoeFyoe08m/DJMln5kVX3dUY/tTCdRQLP/e93jxYZ352vNh/m6l0sSa/3ARmxnmm0L4sQ6rIA2udeK0gWn6eZSOaxFdrYW2SBj+9Riw+Plln2uHDpQaTnZhFM4rEZ2rtJy1HnVIpfDtnWoEdtd55wGWA6drB86sBzZd0uhw0li7o07FlDbSgecDTxtLvDU6M+rkc3MxT61u1bH0iBNHJ+qwlvfBxlbE9S2qsxLmxSwneYNq1BjMVu5TmL6ncScbLRNKIYWJImZDqga48RU+3KYrYcrH7mZTdI6VI09bU8Sa3cv1zY68lppq/mGgMrVKky5TPWX/I/4BYGATI8ggBBWAAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/7b830cb5b222a956b097606e42439482/d6138/tablet-up-left-dark.png',
            srcSet:
              '/static/7b830cb5b222a956b097606e42439482/15e42/tablet-up-left-dark.png 100w,\n/static/7b830cb5b222a956b097606e42439482/5aead/tablet-up-left-dark.png 200w,\n/static/7b830cb5b222a956b097606e42439482/d6138/tablet-up-left-dark.png 400w,\n/static/7b830cb5b222a956b097606e42439482/b7804/tablet-up-left-dark.png 800w',
            sizes: '(min-width: 400px) 400px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/7b830cb5b222a956b097606e42439482/d8057/tablet-up-left-dark.webp 100w,\n/static/7b830cb5b222a956b097606e42439482/2e34e/tablet-up-left-dark.webp 200w,\n/static/7b830cb5b222a956b097606e42439482/416c3/tablet-up-left-dark.webp 400w,\n/static/7b830cb5b222a956b097606e42439482/c1587/tablet-up-left-dark.webp 800w',
              type: 'image/webp',
              sizes: '(min-width: 400px) 400px, 100vw',
            },
          ],
        },
        width: 400,
        height: 400,
      },
    },
  },
  lensBottomPhoneSmallLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhklEQVQY02XQTSiDcRwH8C+PeTlwckWeeXk25qUV8rZ2sJJolJdIGGKxJCXP/9nYzCgXicdoxx3MwYEpSaIdbCRFOSusJOdh0k9EefnW9/qp7xf4EaXAwAsMWq0EXhChVDGoNQxFxRK0WitKS6yoKrdBX2nDyfJCLO278eKXc6N+eTHql7Ned1bwK0qV+AllqViMkM+QmjEBJI4BGAEwDMDyVRMAM87kBbxsy1vP2zJFtmQfHa/9Bdk3CKAHXOp4EmCOB1o5oJ4DjHFAAwc0cYBFQREv6MBtp3030bmn68qz+A+M+QTVLI0XxEu1hr3pKmyPtfqpu0aD/aatzhHuNk6HzS3O25F2Z3isc+ba3j975xqcJaNhag8YSv4F8oIY+/WdnhfEK02h5K0utx3W6CaDjQb7aWeDIzTQ7AyNdsycWk2u0GSfKzg/NPfU2zRN6dliQF0gpfyb/NFMQVTk5LGEshIrHjaWQLQJohCIgiAKgOgCRIR73xLoaLWFdleOidYVksmFd3cBm5hUlcxyAAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/c0ada0fe35908140801dafbef72d233d/22008/phone-small-down-right-light.png',
            srcSet:
              '/static/c0ada0fe35908140801dafbef72d233d/ed81f/phone-small-down-right-light.png 75w,\n/static/c0ada0fe35908140801dafbef72d233d/c1db7/phone-small-down-right-light.png 150w,\n/static/c0ada0fe35908140801dafbef72d233d/22008/phone-small-down-right-light.png 300w,\n/static/c0ada0fe35908140801dafbef72d233d/0cb8e/phone-small-down-right-light.png 600w',
            sizes: '(min-width: 300px) 300px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/c0ada0fe35908140801dafbef72d233d/403a6/phone-small-down-right-light.webp 75w,\n/static/c0ada0fe35908140801dafbef72d233d/94723/phone-small-down-right-light.webp 150w,\n/static/c0ada0fe35908140801dafbef72d233d/89bd1/phone-small-down-right-light.webp 300w,\n/static/c0ada0fe35908140801dafbef72d233d/745da/phone-small-down-right-light.webp 600w',
              type: 'image/webp',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
          ],
        },
        width: 300,
        height: 90,
      },
    },
  },
  lensBottomPhoneSmallDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfElEQVQY023QTStEYRgG4NuZ7GSPf2BhyY6FHyCF8g+o42uGksZXUqQUUeMrH0kp2VOyYqFmzowxyDgzYxxlw7zmnPfEZM6tc4aiLN7u99lcPfcDAOjRbO+pETelm75eTfoCMakMxSxlJG6VjSdMBK9MuLmTySFlPSvkIxzHGHUcY518QNExgB9Q1UqYP+qB6NUkArHS7P7bzguoPSLqjon6kyLIGw/8dIy5omPwrfBU4874vaELDsY8sLVHk239Udncp8mGrrBdXXHIcgTpwxR9mKeylBTluw85kNkt8vGTjFeKwlMJVL2aUvmu3KRGbAaikhMJk9M3ec7e5jl/9/aymBTp5XuRXdFFelUXmY2USO1nX83NdO69T5OTaOHfDb/BKjViNw5EZfvwpeUfuzKDU9fm6uxt/nQhKbSQLsJrKRFe0cVFSBeXO5kcp69NdoftA2z/D3rp3m4kbmEyYSKkC5BJkB0gQyD3QGbQevbhVl7+KBozZBZkJ74AiQImqIdDIfAAAAAASUVORK5CYII=',
        },
        images: {
          fallback: {
            src: '/static/a3a20d1b149b50337bd252a3b1be92e3/22008/phone-small-down-right-dark.png',
            srcSet:
              '/static/a3a20d1b149b50337bd252a3b1be92e3/ed81f/phone-small-down-right-dark.png 75w,\n/static/a3a20d1b149b50337bd252a3b1be92e3/c1db7/phone-small-down-right-dark.png 150w,\n/static/a3a20d1b149b50337bd252a3b1be92e3/22008/phone-small-down-right-dark.png 300w,\n/static/a3a20d1b149b50337bd252a3b1be92e3/0cb8e/phone-small-down-right-dark.png 600w',
            sizes: '(min-width: 300px) 300px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/a3a20d1b149b50337bd252a3b1be92e3/403a6/phone-small-down-right-dark.webp 75w,\n/static/a3a20d1b149b50337bd252a3b1be92e3/94723/phone-small-down-right-dark.webp 150w,\n/static/a3a20d1b149b50337bd252a3b1be92e3/89bd1/phone-small-down-right-dark.webp 300w,\n/static/a3a20d1b149b50337bd252a3b1be92e3/745da/phone-small-down-right-dark.webp 600w',
              type: 'image/webp',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
          ],
        },
        width: 300,
        height: 90,
      },
    },
  },
  lensBottomTabletLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClUlEQVQ4y92SXUgUURTH/7OIGkRIGBH4gXs15mZFPVVCPVQPvQVBvedD1KOQ6FyTDAlBK9rdmdnIyDJT2/ULd1Wshz7YPoggbIN0IyQyk/IjP7DYUU/MzG670FPTWwOHOZfL/d1zfvcA/9Xn5gqYLMC4FVIikmsHQFlBOuA3WBbW3r8BZVHIuCKnVfv3QPOQCU2AnzAuPri5kmWpcAhMOityy8qaW1YeMfMCpw6ZbPtisshhXKwyLvpNmNu6SHHWMrPaU7KYrPxgXAymHscR0HZlemNcLDAuhu0K7XFy9ijcdKZkMC4mGBev0mfTwdiI9NGJMC5mGVcyUyqEE4fCZYPFTcYFMS7yU7OY8GiEdSviITM0GGHNyn/2a1jq07DYq2GhR8VMUMWBstqMvGKrmkoTWLJNHMwtrEZN+cUMGtRTMBuoSUZYdwGHQB9vgUZbQM9vYGXAj8kOH6LNHgCnpJ27alDMxWETWFCiVO8vqwVRP+i+/w+g9Q9euAyiZxLRG4noC2isVXqqeqSTx+qlLW7F1XCmAUDFpvwSZZXvECHgqNlF6VyXmpmESQngXiOsty/2ao9ngurodMAXmw2q7+Z71PdLvdrYcp8WW+7TzDz2qc07PnLtKn3vVuM0pE/FQ5phhPXdSXcuG6x54yGdZrvUr5/bvWMTd72vJ9t90alO38h0QI3OdanR+W7VzN9+C/heRjxXxtvONVKsxROjYb8+HVBzYSTaNNuNh/R1KwNaNj30ZxP1SEA5gCwAJ0DUASKyAjjiui0asSGvqnVzUTVh/dmCzvNNIHoAGCE9DahhJayDhnRQ5DqI7oGm7oBeNGO81Ydg3SWcPl6PfXtqpZz8KsjbRcXWUtGNjZVYG9Rdgbom/ALBWnuywiFffgAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/71112d77abf9c35b0e5d56081b334b85/d6138/tablet-down-right-light.png',
            srcSet:
              '/static/71112d77abf9c35b0e5d56081b334b85/15e42/tablet-down-right-light.png 100w,\n/static/71112d77abf9c35b0e5d56081b334b85/5aead/tablet-down-right-light.png 200w,\n/static/71112d77abf9c35b0e5d56081b334b85/d6138/tablet-down-right-light.png 400w,\n/static/71112d77abf9c35b0e5d56081b334b85/b7804/tablet-down-right-light.png 800w',
            sizes: '(min-width: 400px) 400px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/71112d77abf9c35b0e5d56081b334b85/d8057/tablet-down-right-light.webp 100w,\n/static/71112d77abf9c35b0e5d56081b334b85/2e34e/tablet-down-right-light.webp 200w,\n/static/71112d77abf9c35b0e5d56081b334b85/416c3/tablet-down-right-light.webp 400w,\n/static/71112d77abf9c35b0e5d56081b334b85/c1587/tablet-down-right-light.webp 800w',
              type: 'image/webp',
              sizes: '(min-width: 400px) 400px, 100vw',
            },
          ],
        },
        width: 400,
        height: 400,
      },
    },
  },
  lensBottomTabletDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACa0lEQVQ4y6WUzWsTQRiH382mevEgeOmlHyIIngT/AJH2oOAfIPRekCbbj81HU0G8iHgSbDVeKl489CJ48CwoFPGjuzsbwYNgaXZqbVNtJTOjJM38ZLNJmrZ6yDrw42UG5pln3lmWqMdhOTKKG0YlLFdRJ46knke6C5B2ZRQnSrjW87CaABXGtFx5wXLl8cg2JrBtYrnqWNqRu2lH3m4ZJiwnlqEyUo6klCNPTboKk65anHIVTbpN496BU640Uo6iiRU1nGUSGU8uzPqS8kyasa487UkjvFrKUQN5XyDLxPxcSVDBF2Y6DtD2pDEV9XBgNgI+mCtVaa5UjWcYAm1PhqaDoWGGiWLBr1LBr8broe0JI8tECB7MMQHbE8WcLyjv/4dhjgnKeHIowwRmPFnMMEE5JuIZzrSBTA7bnmwCbSYPAgF+KEFXOGkdkNb8MHBoJgI+DHvaAbY37NdmEgBPAtzUmpsAD+cJrQPj5WbFHH1Vp5sfq03DLJPF6yuKnq7tJMtygzoWB+32DzlqvUrL2xUae/u7P88EbpTEwpPVHQI+EVDuAI3Wxn4gWAL4fYCPax1MAPwawEeA4LzW/Gytwc8Ba8P+7uZIwRd4/GV3CXje97O2flprfrJtYLZqHggA8H8kgNZRrTU4pl25t1ypAChjL1q/2AYaLdMzWvMXAJ8G+CjArwLBWGt+R2s+39D8HlC++2Z760P4c3jGf7wHyo/qDX6rofmJ7of4Sz/5ofWwrtG771t0+XXtUvjKKUcxIhjraoMAduSTMbqquZ8g2YpZra8ngc8JIpDN5HjeF1doEbQqNvq+/fpKfwBTALYSdjK8jAAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/c81c89a9a0b4cc98a0a2b612d195d5f0/d6138/tablet-down-right-dark.png',
            srcSet:
              '/static/c81c89a9a0b4cc98a0a2b612d195d5f0/15e42/tablet-down-right-dark.png 100w,\n/static/c81c89a9a0b4cc98a0a2b612d195d5f0/5aead/tablet-down-right-dark.png 200w,\n/static/c81c89a9a0b4cc98a0a2b612d195d5f0/d6138/tablet-down-right-dark.png 400w,\n/static/c81c89a9a0b4cc98a0a2b612d195d5f0/b7804/tablet-down-right-dark.png 800w',
            sizes: '(min-width: 400px) 400px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/c81c89a9a0b4cc98a0a2b612d195d5f0/d8057/tablet-down-right-dark.webp 100w,\n/static/c81c89a9a0b4cc98a0a2b612d195d5f0/2e34e/tablet-down-right-dark.webp 200w,\n/static/c81c89a9a0b4cc98a0a2b612d195d5f0/416c3/tablet-down-right-dark.webp 400w,\n/static/c81c89a9a0b4cc98a0a2b612d195d5f0/c1587/tablet-down-right-dark.webp 800w',
              type: 'image/webp',
              sizes: '(min-width: 400px) 400px, 100vw',
            },
          ],
        },
        width: 400,
        height: 400,
      },
    },
  },
  linesTopPhoneSmallLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVQY02WRvy6FQRDFd90rVCoVEsmcZk60Sok/Jb2SQnc1SnMiCok3UYhO4g2UXkCvVYpOPvbbb7n3KiYzmfnlnNnZBCpNxYJ55OmeeSQw0iwXG2CcgLoCdQlqCx4924BcxZqA1kEdgDoG4xDUGqhFUPvGuAf1BaozqkONT1DXcC3NOWsb1KN5NLADf+v3XqTMXM+gJqB2Qd2A+gD1Bmq5CnmsgLr9E9ETqAtQZ2CcG+MBrhdQd/DYsX8nEECtljqVoXmcDuu/grE3Bw+mMzcseVTONOSmkyro2jSPI7hG1T2yMcbGKPAYVG794ePay5JVk9wzP4LfyVd8O2fyOTAAAAAASUVORK5CYII=',
        },
        images: {
          fallback: {
            src: '/static/328f1a2fa1ad95d13e4da2655732387e/22008/phone-small-up-right-light.png',
            srcSet:
              '/static/328f1a2fa1ad95d13e4da2655732387e/ed81f/phone-small-up-right-light.png 75w,\n/static/328f1a2fa1ad95d13e4da2655732387e/c1db7/phone-small-up-right-light.png 150w,\n/static/328f1a2fa1ad95d13e4da2655732387e/22008/phone-small-up-right-light.png 300w,\n/static/328f1a2fa1ad95d13e4da2655732387e/0cb8e/phone-small-up-right-light.png 600w',
            sizes: '(min-width: 300px) 300px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/328f1a2fa1ad95d13e4da2655732387e/403a6/phone-small-up-right-light.webp 75w,\n/static/328f1a2fa1ad95d13e4da2655732387e/94723/phone-small-up-right-light.webp 150w,\n/static/328f1a2fa1ad95d13e4da2655732387e/89bd1/phone-small-up-right-light.webp 300w,\n/static/328f1a2fa1ad95d13e4da2655732387e/745da/phone-small-up-right-light.webp 600w',
              type: 'image/webp',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
          ],
        },
        width: 300,
        height: 90,
      },
    },
  },
  linesTopPhoneSmallDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6ElEQVQY022RIUtEURSE73tvtZjUalUQFsEoGE0Gm1WwiUGLYLJtsIh/ZLeKGPwVRoucqUaDKPPJXe9d3wPDcA7DnDn3zE12JIhUamcrQUXM65Cb85u2TiBubJ3ZWq/6YqSmN7wMMQYdgI5A26CVMnQIMYXgF6p4BR2D1havgGhtnYPehuLAjk87vnsGT6BT0L6tK9AX6MOOnXrGNeiliN8h7kCXoAvQPegB9Ai6Be2VqxawtQHayn0lZ8XsGbQ6zOu/PKOxowO1oK6fcxXlzCag3WKwBBpBjPJAMUmlb/8W1A9Vk5ENfwCNcHqwWZpyJgAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/4ed47be373c497e2aef5a205771a3f83/22008/phone-small-up-right-dark.png',
            srcSet:
              '/static/4ed47be373c497e2aef5a205771a3f83/ed81f/phone-small-up-right-dark.png 75w,\n/static/4ed47be373c497e2aef5a205771a3f83/c1db7/phone-small-up-right-dark.png 150w,\n/static/4ed47be373c497e2aef5a205771a3f83/22008/phone-small-up-right-dark.png 300w,\n/static/4ed47be373c497e2aef5a205771a3f83/0cb8e/phone-small-up-right-dark.png 600w',
            sizes: '(min-width: 300px) 300px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/4ed47be373c497e2aef5a205771a3f83/403a6/phone-small-up-right-dark.webp 75w,\n/static/4ed47be373c497e2aef5a205771a3f83/94723/phone-small-up-right-dark.webp 150w,\n/static/4ed47be373c497e2aef5a205771a3f83/89bd1/phone-small-up-right-dark.webp 300w,\n/static/4ed47be373c497e2aef5a205771a3f83/745da/phone-small-up-right-dark.webp 600w',
              type: 'image/webp',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
          ],
        },
        width: 300,
        height: 90,
      },
    },
  },
  linesTopTabletLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPElEQVQ4y9VUIU4EQRDc2YWEQAiCgDnXZboEP8DzASyGX3RrnkEC6gyaMxiCwvMEDB5HSJbszOze7ZHA7LmbpE1nura6qnaqamsP6OsVhDbqTTpxWD0VvRLtwCJggwE49QoZjgCPQT+MwD1DtZA+Usg2s6rz0D1oLehPoF+tAIV0z4s1rJNudgH6M+jfotZC7VHUDiKwWsiM/wHUXqORGSeg30Ij24euHyXQgrWXog+rpfWjrjYHvQXtUpI0jagVOj2Ozg6SfrME6IvMMvQEijM5rMchPm+gvUN9Vxh1rCdlU9byKGqvoH+Bvr952JOrTR6+yVG6A/0c9DPQwkTAZfa6oIvaImvZ1Sfopxv93xKzlxwX2jXoH6C9QO1oImDUrnc/rBg0E/reZA1/59My2w1N+eN5CzmfW/Ay/wCGuJmYU2Vi8wAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/cbe55397701d98350ccc85d7f0be6645/d6138/tablet-up-right-light.png',
            srcSet:
              '/static/cbe55397701d98350ccc85d7f0be6645/15e42/tablet-up-right-light.png 100w,\n/static/cbe55397701d98350ccc85d7f0be6645/5aead/tablet-up-right-light.png 200w,\n/static/cbe55397701d98350ccc85d7f0be6645/d6138/tablet-up-right-light.png 400w,\n/static/cbe55397701d98350ccc85d7f0be6645/b7804/tablet-up-right-light.png 800w',
            sizes: '(min-width: 400px) 400px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/cbe55397701d98350ccc85d7f0be6645/d8057/tablet-up-right-light.webp 100w,\n/static/cbe55397701d98350ccc85d7f0be6645/2e34e/tablet-up-right-light.webp 200w,\n/static/cbe55397701d98350ccc85d7f0be6645/416c3/tablet-up-right-light.webp 400w,\n/static/cbe55397701d98350ccc85d7f0be6645/c1587/tablet-up-right-light.webp 800w',
              type: 'image/webp',
              sizes: '(min-width: 400px) 400px, 100vw',
            },
          ],
        },
        width: 400,
        height: 400,
      },
    },
  },
  linesTopTabletDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABOklEQVQ4y9VUMUoEQRDc2T0NLzE0EvyA4T1EEO4Jdgtmgj7BwDcI+pyuRAMDv2DWna7MTN/sIKfObiDY0OzsshTVVdXTdf+2GFaaqvOuFwEStCPxhvYk2idAsY5kJnACdLDMSjsuZxtYKsZijSOLDZSA7ZJgjww7I/i3yB4WmmVwhpmJ2A1DRxIdGfbCsPNqgsA+yY+VjJCi4UDQDcMeWFQZNhL0KWpK0z/tGiYdJ82OGPYcQRl2VzRtGXnqZEbP0FXWNrqtbwz7INF1Nk5Dk+t7snjgRt2TJJYbN7D/dexvGK/8ee1jbx3wcHbgs1ElKicO+E5ip4wGY/YBegaD5/A2Rik19IpmM6y2Y9ogu2AxIbFXhoXZO172G1Wos8PHcez5gPLF9bieJau6/GqLwFlH3b2HRdfan9cn72uHWeQSRHsAAAAASUVORK5CYII=',
        },
        images: {
          fallback: {
            src: '/static/2cea7845735f92c8e8115775f9cd78e9/d6138/tablet-up-right-dark.png',
            srcSet:
              '/static/2cea7845735f92c8e8115775f9cd78e9/15e42/tablet-up-right-dark.png 100w,\n/static/2cea7845735f92c8e8115775f9cd78e9/5aead/tablet-up-right-dark.png 200w,\n/static/2cea7845735f92c8e8115775f9cd78e9/d6138/tablet-up-right-dark.png 400w,\n/static/2cea7845735f92c8e8115775f9cd78e9/b7804/tablet-up-right-dark.png 800w',
            sizes: '(min-width: 400px) 400px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/2cea7845735f92c8e8115775f9cd78e9/d8057/tablet-up-right-dark.webp 100w,\n/static/2cea7845735f92c8e8115775f9cd78e9/2e34e/tablet-up-right-dark.webp 200w,\n/static/2cea7845735f92c8e8115775f9cd78e9/416c3/tablet-up-right-dark.webp 400w,\n/static/2cea7845735f92c8e8115775f9cd78e9/c1587/tablet-up-right-dark.webp 800w',
              type: 'image/webp',
              sizes: '(min-width: 400px) 400px, 100vw',
            },
          ],
        },
        width: 400,
        height: 400,
      },
    },
  },
  linesBottomPhoneSmallLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVQY001RMUoEQRCcu1MzMwWjC7pAuiJBxMwX+AHR1B8IYtfl5sbiA0wNxUjFTIxNzUQEzdWT6d293aCome6eaqaqgCrwKMmJKNacJ+YxAjWy2u+Q8ypZY95XQFl9Y4zSC3mcgLoBddDVrBVo+RTUA6hzuNYGS6agvkEd1tlu4w6oeQdz3cG1D2oDrjGoi2Ef1B+oFzAe4fEOxhyus16Q2oXr16hPUM8pykiA8dWw7kFtgjoGdQvGGzw+QL3CdWkeq+YpmN/ZBvXTbt8CNYVrBsY1GE/mujLGeu9zYgmuZWOMFxZxIZjFPaOO0A30pg99rEFNrAZVe94E0QVX8Q8Y+IETPyH4HgAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/c648c61c6cfdd60eeb112de69afeda0c/22008/phone-small-down-left-light.png',
            srcSet:
              '/static/c648c61c6cfdd60eeb112de69afeda0c/ed81f/phone-small-down-left-light.png 75w,\n/static/c648c61c6cfdd60eeb112de69afeda0c/c1db7/phone-small-down-left-light.png 150w,\n/static/c648c61c6cfdd60eeb112de69afeda0c/22008/phone-small-down-left-light.png 300w,\n/static/c648c61c6cfdd60eeb112de69afeda0c/0cb8e/phone-small-down-left-light.png 600w',
            sizes: '(min-width: 300px) 300px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/c648c61c6cfdd60eeb112de69afeda0c/403a6/phone-small-down-left-light.webp 75w,\n/static/c648c61c6cfdd60eeb112de69afeda0c/94723/phone-small-down-left-light.webp 150w,\n/static/c648c61c6cfdd60eeb112de69afeda0c/89bd1/phone-small-down-left-light.webp 300w,\n/static/c648c61c6cfdd60eeb112de69afeda0c/745da/phone-small-down-left-light.webp 600w',
              type: 'image/webp',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
          ],
        },
        width: 300,
        height: 90,
      },
    },
  },
  linesBottomPhoneSmallDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA80lEQVQY01WRsS5GQRCF7/1pUNCJFlEpJFqRiCcQL6BSSLyDh9DSKDQovIBGRKGRaCWSOeIJBM35ZO7udd3iZHZmds9svmlALaiBWAGtQbR2lzelrsaOUV7Pk6LxvT7ZBn2BAL2CTiF2QbO1vw9xBXELOoSYKwadjkAXEItp3hueVLMnW88QpGx9gB5qL+US4x10DnEG+q69rT9DOzaKiV5AB3as1yGPoE/QvR2boHmIYzvehqHxA3Gd6PLHyaMy1E01vRtYdZopnOI/z+S3DFoFLYEW6t22h5txx9YlaC8f25oeYHeLmNi5wJgaaqPlZa/5BePCf0BjkwH1AAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/ba45391fedcf454a868e3e6bc6aa6eba/22008/phone-small-down-left-dark.png',
            srcSet:
              '/static/ba45391fedcf454a868e3e6bc6aa6eba/ed81f/phone-small-down-left-dark.png 75w,\n/static/ba45391fedcf454a868e3e6bc6aa6eba/c1db7/phone-small-down-left-dark.png 150w,\n/static/ba45391fedcf454a868e3e6bc6aa6eba/22008/phone-small-down-left-dark.png 300w,\n/static/ba45391fedcf454a868e3e6bc6aa6eba/0cb8e/phone-small-down-left-dark.png 600w',
            sizes: '(min-width: 300px) 300px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/ba45391fedcf454a868e3e6bc6aa6eba/403a6/phone-small-down-left-dark.webp 75w,\n/static/ba45391fedcf454a868e3e6bc6aa6eba/94723/phone-small-down-left-dark.webp 150w,\n/static/ba45391fedcf454a868e3e6bc6aa6eba/89bd1/phone-small-down-left-dark.webp 300w,\n/static/ba45391fedcf454a868e3e6bc6aa6eba/745da/phone-small-down-left-dark.webp 600w',
              type: 'image/webp',
              sizes: '(min-width: 300px) 300px, 100vw',
            },
          ],
        },
        width: 300,
        height: 90,
      },
    },
  },
  linesBottomTabletLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6ElEQVQ4y+2SMWoDQQxFd9ch6XICF0GfEH0HXLryIVKkSRtyBRf6dU4QfCG3vobJAVK6spnZ2dhFIGPX++HDIDQPIf2mGTVq1BUClW2MxsobjN96BaA0ezHVgurgMQHj5gStBqoxT9DoErB/9xOegdqh9q8sN6YPGXAL6tFcS1BvYKxAbYwxH8A1E3al+RXUzhgHUOf+BvVwCTD52TyD9qC+QK3g8WEeC1B3F+8Q1LpM83Laqf50DXAG1w9c236P0eXrpit7vnZOgnl9bJ7KdDt4TAugHfJn5fLVsj5/7+b6BON+yOW1OgI5+mZimksykgAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/7dee23ecee38895f2753e1e03c366251/d6138/tablet-down-left-light.png',
            srcSet:
              '/static/7dee23ecee38895f2753e1e03c366251/15e42/tablet-down-left-light.png 100w,\n/static/7dee23ecee38895f2753e1e03c366251/5aead/tablet-down-left-light.png 200w,\n/static/7dee23ecee38895f2753e1e03c366251/d6138/tablet-down-left-light.png 400w,\n/static/7dee23ecee38895f2753e1e03c366251/b7804/tablet-down-left-light.png 800w',
            sizes: '(min-width: 400px) 400px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/7dee23ecee38895f2753e1e03c366251/d8057/tablet-down-left-light.webp 100w,\n/static/7dee23ecee38895f2753e1e03c366251/2e34e/tablet-down-left-light.webp 200w,\n/static/7dee23ecee38895f2753e1e03c366251/416c3/tablet-down-left-light.webp 400w,\n/static/7dee23ecee38895f2753e1e03c366251/c1587/tablet-down-left-light.webp 800w',
              type: 'image/webp',
              sizes: '(min-width: 400px) 400px, 100vw',
            },
          ],
        },
        width: 400,
        height: 400,
      },
    },
  },
  linesBottomTabletDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBklEQVQ4y+2TMUoEQRBFx92NxEQ08BiCt/AAxqYL9QPBCxgZeRRD8Rb1I83MxXChfyDISld1r2viDJu6BU3PNNOvX1VND8M+9vFfAtRgrpjBUueDfM73SQB0wAYUY1ZhCS8xjBqBedpYAqrJ3KiFeQmrtn68AfoI0OLUGLOtFANk1DmoR1AvYFnAy3jKubHDwuTaqDtQT2BZg1rD9WA/tqP167ALUB8VYBXk+gLLM6hLa9a9vn8b1jRcR0a9hQ11Yx6pnma3oxzTu9w+WjbYbZqUPKg1KcxcfW20hmegXuF6B3XYTOa//70JqW4ZnpiXFahPZFezrq7dboXlrbiC677XrdvtEt/bHCJpx9IwyAAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/953938c1bdec2190fca582f777a3bdfc/d6138/tablet-down-left-dark.png',
            srcSet:
              '/static/953938c1bdec2190fca582f777a3bdfc/15e42/tablet-down-left-dark.png 100w,\n/static/953938c1bdec2190fca582f777a3bdfc/5aead/tablet-down-left-dark.png 200w,\n/static/953938c1bdec2190fca582f777a3bdfc/d6138/tablet-down-left-dark.png 400w,\n/static/953938c1bdec2190fca582f777a3bdfc/b7804/tablet-down-left-dark.png 800w',
            sizes: '(min-width: 400px) 400px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/953938c1bdec2190fca582f777a3bdfc/d8057/tablet-down-left-dark.webp 100w,\n/static/953938c1bdec2190fca582f777a3bdfc/2e34e/tablet-down-left-dark.webp 200w,\n/static/953938c1bdec2190fca582f777a3bdfc/416c3/tablet-down-left-dark.webp 400w,\n/static/953938c1bdec2190fca582f777a3bdfc/c1587/tablet-down-left-dark.webp 800w',
              type: 'image/webp',
              sizes: '(min-width: 400px) 400px, 100vw',
            },
          ],
        },
        width: 400,
        height: 400,
      },
    },
  },
};
