// Coypright (c) 2021 Visiosto oy
// Licensed under the MIT License

const colors = {
  blue: '#91d7f2',
  turquoise: '#5196a6',
  orange: '#f2955e',
  red: '#eb5952',
  linkBlue: '#0051c2',
  linkBlueDark: '#004099',
  linkYellow: '#fabd46',
  linkYellowDark: '#ba8d34',
  // white: '#f2f0eb',
  white: '#ffffff',
  black: '#3b4a57',
  shade: '#dde1e9',
  shadeDark: '#2a2a2b',
  gray: '#f6f7f9',
};

const fonts = {
  heading: 'utopia-std, serif',
  // heading: 'baskerville-display-pt, Garamond, Georgia, serif',
  main: 'montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',
  code: 'roboto-mono, Menlo, Monaco, Consolas, "Courier New", monospace',
};

// The maximum sizes of different viewports.
const sizes = {
  xxsmall: '20em', // 320px
  xsmall: '30em', // 480px
  small: '37.5em', // 600px
  medium: '48em', // 768px
  large: '56.25em', // 900px
  xlarge: '64em', // 1024px
  xxlarge: '75em', // 1200px
  larger: '90em', // 1440px
  xlarger: '160em', // 2560px
};

const devices = {
  phoneSmall: `(min-width: ${sizes.xxsmall})`,
  phoneMedium: `(min-width: ${sizes.xsmall})`,
  phoneLarge: `(min-width: ${sizes.small})`,
  tablet: `(min-width: ${sizes.medium})`,
  laptopSmall: `(min-width: ${sizes.large})`,
  laptopMedium: `(min-width: ${sizes.xlarge})`,
  desktopSmall: `(min-width: ${sizes.xxlarge})`,
  desktopMedium: `(min-width: ${sizes.larger})`,
  desktopLarge: `(min-width: ${sizes.xlarger})`,
};

const layout = {
  marginPhone: '2em',
  marginTablet: '4em',
  marginDesktop: '16em',
};

const borders = {
  commonRadius: '25px',
};

const common = {
  colors: { ...colors },
  fonts: { ...fonts },
  sizes: { ...sizes },
  devices: { ...devices },
  layout: { ...layout },
  borders: { ...borders },
};

const light = {
  ...common,
  colors: {
    background: colors.white,
    textMain: colors.black,
    link: colors.linkBlue,
    linkHover: colors.linkBlueDark,
    navHover: colors.shade,
    ...common.colors,
  },
};

const dark = {
  ...common,
  colors: {
    background: colors.black,
    textMain: colors.white,
    link: colors.linkYellow,
    linkHover: colors.linkYellowDark,
    navHover: colors.shadeDark,
    ...common.colors,
  },
};

export default {
  light,
  dark,
};
