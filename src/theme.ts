// Coypright (c) 2021 Visiosto oy
// Licensed under the MIT License

import './DefaultTheme';

import { DefaultTheme } from 'styled-components';

const colors = {
  blue: '#23297a',
  turquoise: '#a4f1ff',
  peach: '#fbb496',
  brown: '#803512',
  black: '#2b3741',
  white: '#ffffff',
  violet: '#f7c1fe',
  purple: '#5e2966',
  lime: '#7ffa7f',
  green: '#0e660e',
};

const oldColors = {
  stPatricksBlue: '#23297a',
  skyBlue: '#6dcff6',
  peach: '#fbb496',
  cream: '#ffffe4',
  green: '#8dd68d',
  greenDark: '#116f11',
  black: '#3b4a57',
  white: '#ffffff',
  lightGray: '#dde1e9',
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
  link: {
    light: colors.blue,
    dark: colors.peach,
  },
  'link-hover': {
    light: colors.turquoise,
    dark: colors.brown,
  },
  accept: {
    light: colors.green,
    dark: colors.lime,
  },
  error: {
    light: colors.purple,
    dark: colors.violet,
  },
};

// export const COLORS = {
//   background: {
//     light: colors.white,
//     dark: colors.black,
//   },
//   'background-weak': {
//     light: colors.lightGray,
//     dark: colors.gray,
//   },
//   text: {
//     light: colors.black,
//     dark: colors.white,
//   },
//   'text-dark': {
//     light: colors.black,
//     dark: colors.black,
//   },
//   link: {
//     light: colors.blue,
//     dark: colors.peach,
//   },
//   'link-hover': {
//     light: colors.skyBlue,
//     dark: colors.cream,
//   },
//   'link-accept': {
//     light: colors.greenDark,
//     dark: colors.green,
//   },
// };

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
  mobileS: `min-width: ${sizes.mobileS}`,
  mobileM: `min-width: ${sizes.mobileM}`,
  mobileL: `min-width: ${sizes.mobileL}`,
  tablet: `min-width: ${sizes.tablet}`,
  laptop: `min-width: ${sizes.laptop}`,
  laptopL: `min-width: ${sizes.laptopL}`,
  fourK: `min-width: ${sizes.fourK}`,
};

const layout = {
  marginMobile: '2em',
  marginTablet: '4em',
  marginDesktop: '16em',
};

const borders = {
  commonRadius: '25px',
  cardRadius: '0.5em',
};

const theme: DefaultTheme = {
  fonts: { ...fonts },
  sizes: { ...sizes },
  devices: { ...devices },
  layout: { ...layout },
  borders: { ...borders },
};

export default theme;
