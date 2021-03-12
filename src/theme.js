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
  'text-weak': {
    light: colors.shade,
    dark: colors.gray,
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
  mobileS: '20em', // 320px
  mobileM: '23.4375em', // 375px
  mobileL: '26.5625em', // 425px
  tablet: '48em', // 768px
  laptop: '64em', // 1024px
  laptopL: '90em', // 1440px
  fourK: '160em', // 2560px
};

const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  fourK: `(min-width: ${sizes.fourK})`,
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
