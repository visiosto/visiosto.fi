// Coypright (c) 2021 Visiosto oy
// Licensed under the MIT License

const themeColors = {
  blue: '#23297a',
  lightBlue: '#6dcff6',
  peach: '#fbb496',
  cream: '#ffffe4',
  black: '#3b4a57',
  white: '#ffffff',
  linkBlue: '#0051c2',
  linkBlueDark: '#004099',
  linkYellow: '#fabd46',
  linkYellowDark: '#ba8d34',
  // white: '#f2f0eb',
  shade: '#dde1e9',
  shadeDark: '#2a2a2b',
  gray: '#f6f7f9',
};

export const colors = {
  background: {
    light: themeColors.white,
    dark: themeColors.black,
  },
  text: {
    light: themeColors.black,
    dark: themeColors.white,
  },
  'text-button': {
    light: themeColors.white,
    dark: themeColors.black,
  },
  link: {
    light: themeColors.linkBlue,
    dark: themeColors.linkYellow,
  },
  'link-hover': {
    light: themeColors.linkBlueDark,
    dark: themeColors.linkYellowDark,
  },
  primary: {
    light: themeColors.blue,
    dark: themeColors.lightBlue,
  },
  secondary: {
    light: themeColors.peach,
    dark: themeColors.cream,
  },
  'background-hover': {
    light: themeColors.shade,
    dark: themeColors.shadeDark,
  },
  empty: {
    light: '#',
    dark: '#',
  },
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

const theme = {
  colors: { ...themeColors },
  fonts: { ...fonts },
  sizes: { ...sizes },
  devices: { ...devices },
  layout: { ...layout },
  borders: { ...borders },
};

export default theme;
