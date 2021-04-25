// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

export default {
  imageLight: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAACxKAAAsSgF3enRNAAAENklEQVQ4y2VUW2xUVRS9LTUiQYkQhb7bs+fOnH2HllJSG6qo1KQ8RINGCGlaQcOjFSqEWnr3nulMS+fV8tZagsESbEgrJgrxR4Mx/PCrv/75wZfxx0/LTO8x+86doYkfZ+7JnH3W2Y+1lgXIVrAqn+5pGyBdBuS7gHwHNM+BpjlAXlCaFgE5CZrrJFZpqlDIFUqTBZotS2kfZFUAVgXIVwH5PiD3AXK1QrLKD8klpGZA/hSQHyik00ECsipkbymkyuDSekD+GZBHJKAEpDQ9A0gbAXkDaFpVAlDIq5WmG4D0tR8XPOq/qjRVBWAH5M8X6kYtvZmjtsMzIYd/tx1+HEL+G5DTtuNffHbFgylAvh7gVMqPrCuAfE4CXmpyrU3KHWwM01JdiEy9TWaTcv1vc4S+aYqQVQPuin5LdjQPmvpLGbYD0n15YWOzazXYNPjGq2OmqzNu9vckn+zZmSgMHJws7O1Oms1bYn/VgNtlrftMgPYAcpsMAjTVBhU+JweXALlf+tKyJebUhtyloUOTJnUiU/jybM7c5mkvO5gxUyezy693jZm6EC1JGwDZAPIjnx1+lTwFyIel3G+VphpJNxzlL6qVa3r3TTz5bvyCGe5LedMns97kiYw3fixjdnSNLUvpIWSjNHuAJKC7g9Lle124c8cfu6Yq2+HfasA1e7uThUfXrnjHPzhvrpzOmc/P5LyFxAVve2fcNIbJsx0uAHJeaR/wYgDYBEjzspkr8ohfBuTHjWEyHR3x5fjHaW/nawkzeTxjZodzZrg/Zdq2xkoD8pSmPPiZ0t0AcLXS/KNw6lbQ2PVK059STp1Nyx0dcW92eMoMHJg0l4ay5kxvyqQHMoaOpOXrNUWKgL6SitxcqzT9ICNfAF2mwEPbYcmi8F7PuF+m9PLchynz/q5xI30UsFvutHFaY/nmiN9PDipEhXxbkBcAKRIADoeKgE/2vZU0N0amvOTRtHd5KGuO7D9vhg5Neu7htHf1dM6Ltsa85ggt2w63FiXJB4TPUmockM8GBF1nO/yHTHp/T3LpfuqiJ6Bz7pQ30p/ypOzcJ1lvMXHhX2xh0xShmRfrRwMt803hpoBUi9AB+Xk5iES5vSFM/7Rvi5uJY5lC3zsTef4one/ekcjvejOR7393QjKVwfzatjW2RpSjkF8B5HsixxL6KaXppqQednw+YmOEHspEa0NkJGOZfkOYhNiFDQ2jovE1Itt623eZB6C5qyg95Iqgf18BUlaCQg5biaPpimhrrMd2eDoc5cUQ8rztsBttjbVYlWdLxiB3vwekU6pobat8H/OdozjpGaGB0tQQBAQeyP9fmjoB+RfQfKps0NovmZ9m6YNSLyD/FCjgbUBWoHktIK8DZAeQDwKyeOA90Lw9uFd2H6tkjmrlgabVgWPPAvK86B2QxfpvA/Jl0LS7nHnZdIvG+x8tXxbtjVsjWwAAAABJRU5ErkJggg==',
        },
        images: {
          fallback: {
            src: '/static/12c8930996726e57eb384915656e7098/614dc/logo-light.png',
            srcSet:
              '/static/12c8930996726e57eb384915656e7098/5861f/logo-light.png 50w,\n/static/12c8930996726e57eb384915656e7098/90cd3/logo-light.png 100w,\n/static/12c8930996726e57eb384915656e7098/614dc/logo-light.png 200w,\n/static/12c8930996726e57eb384915656e7098/5f2c3/logo-light.png 400w',
            sizes: '(min-width: 200px) 200px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/12c8930996726e57eb384915656e7098/9afd2/logo-light.webp 50w,\n/static/12c8930996726e57eb384915656e7098/e64f1/logo-light.webp 100w,\n/static/12c8930996726e57eb384915656e7098/8b00d/logo-light.webp 200w,\n/static/12c8930996726e57eb384915656e7098/9c0a1/logo-light.webp 400w',
              type: 'image/webp',
              sizes: '(min-width: 200px) 200px, 100vw',
            },
          ],
        },
        width: 200,
        height: 200,
      },
    },
  },
  imageDark: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'constrained',
        placeholder: {
          fallback:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAACxKAAAsSgF3enRNAAAEIElEQVQ4y3VVzW9UVRR/LQGCuDHGSPyIMXGhCxo3agx/gIIbFxqVqLjwI4pQC5YiNaGFYdrpTNuhM+e8trTyMU3lw5b23dNSWupH0gULQNHEBcEFEoxKYoIizNwzc485d97AbFzcvPPeu+93f+ec3/m9gAkDazBgg413YsJnmLDfGjzOhGNMOGIJR5lwnAmPMuFua+AR3c+EDdYv0DgI4ofL/NXgCibMMeGUJdjIhGusgdoevyzB40y41RIuMEGzrT032FADbNSPrMEH2G/ClnoAJlzOBtcwwf1MsOwuMK5kwiEmHK0/1Kdoq8wWrIGX9aV8Nxj8OwVrixFgKYIfihFcLRm4bg3sK0V6OKxk49lqnLAEgzFgYy0NTbPFg50JA5kPt7hZZJlDkVMoMh/6a3kGD1dmMJC5+np7dgUmfKuW8rNMeFJPlIUwcLO49ZfDA3J1bEDOYdb+OJwtUzJT/mk4Kzcm83/I6fB5+f6AprzBEj4dAz/MhKeZcJW+yFrCN7S4Nybya2UOeWJPWoZbU+XU5i757J19bvDTlORauitXCgPKtFgycIEJhQmXrIGGON0eZRmwAZXGgwp4expCTe+b3j677c2ETHSmXba5W4Z3pNxoW0quFAYqmnrJgII5azzoCzHgemsgVIaFqmRgRTGCiwp4IcyWX3+pw8339Ep6c5ekP+5ybZsS7tp4TtwsumIEZWuAlaU1kIkBVU6HAi9abbsB1dxvMotybTxXObKrx10+NCDh9pR0f9QlxzvS8teJfK1BjgnZVpket9U6LreES4HXUbXTqsNfNR2Zw8rvX+Zc14dJifZlZP8n3fJVZ1qGWlNSaO/R+jpVgQJaA2Mxw3uYcF51NO7HxusRlooRKIvyOcy61rcTrnnjXs/ubK5fvtiZEtyecrvfTcrNk8Bl8vXcFU/LU0x4UIOj1uAT1fbDzlIV0F4cykrig6QbaUv5xpzJ9Mp0IuPGPu9xfVu63M2T4MqElWIETfG3r7LBfs29w89mleF9xQgua53OY7a0+bW90vl+0nW+l3RHd6fd5J6MykcbVLw1BVKZwbwshkF1dGGEDaxXho9q7tbgKj3p1jQ8J7N48/qxnBzYkSp/3dvHhfYevnRwP/88sp8XM31uKpHRxnz757Hc6vKMJ6LuNK2kakO9jQlDrmoxuB1BU2UGl3xHdfxOhyoXv7RhshhCMYLVflTPDgexqayrty/t8kEm7NRYDeB8mG38ZzK/vhhB3+0ITpQMjJciaP97Mt8kl0aDmsNYAxNaspoNeoNk7xr+gdrRYUv4UHz/v8tWTXihDqyxnmFDvEnjTfGgp5jwRSZ8zJKv772W8EkmfIUJD7DBaUuwLmbayDGBIB47XQ0e2NwRqQIPxtY0Ef8OjuivgQ1u4LtOvYzvph/8B8lTHNKDRZdnAAAAAElFTkSuQmCC',
        },
        images: {
          fallback: {
            src: '/static/089805191949f9b8104c587b306fba4d/614dc/logo-dark.png',
            srcSet:
              '/static/089805191949f9b8104c587b306fba4d/5861f/logo-dark.png 50w,\n/static/089805191949f9b8104c587b306fba4d/90cd3/logo-dark.png 100w,\n/static/089805191949f9b8104c587b306fba4d/614dc/logo-dark.png 200w,\n/static/089805191949f9b8104c587b306fba4d/5f2c3/logo-dark.png 400w',
            sizes: '(min-width: 200px) 200px, 100vw',
          },
          sources: [
            {
              srcSet:
                '/static/089805191949f9b8104c587b306fba4d/9afd2/logo-dark.webp 50w,\n/static/089805191949f9b8104c587b306fba4d/e64f1/logo-dark.webp 100w,\n/static/089805191949f9b8104c587b306fba4d/8b00d/logo-dark.webp 200w,\n/static/089805191949f9b8104c587b306fba4d/9c0a1/logo-dark.webp 400w',
              type: 'image/webp',
              sizes: '(min-width: 200px) 200px, 100vw',
            },
          ],
        },
        width: 200,
        height: 200,
      },
    },
  },
};
