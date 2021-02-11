// Coypright (c) 2021 Visiosto oy
// Licensed under the MIT License

const colors = {
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

export const COLORS = {
  background: {
    light: colors.white,
    dark: colors.black,
  },
  text: {
    light: colors.black,
    dark: colors.white,
  },
  'text-button': {
    light: colors.white,
    dark: colors.black,
  },
  link: {
    light: colors.linkBlue,
    dark: colors.linkYellow,
  },
  'link-hover': {
    light: colors.linkBlueDark,
    dark: colors.linkYellowDark,
  },
  primary: {
    light: colors.blue,
    dark: colors.lightBlue,
  },
  secondary: {
    light: colors.peach,
    dark: colors.cream,
  },
  'background-hover': {
    light: colors.shade,
    dark: colors.shadeDark,
  },
};

const fonts = {
  heading: 'utopia-std, Times, "Times New Roman", serif',
  main: 'source-sans-pro, "Helvetica Neue", Helvetica, Arial, sans-serif',
  code: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
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

export default {
  fonts: { ...fonts },
  sizes: { ...sizes },
  devices: { ...devices },
  layout: { ...layout },
  borders: { ...borders },
};
