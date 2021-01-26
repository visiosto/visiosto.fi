// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Head from './Head';
import Header from './Header';

import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background: ${(props) =>
      props.colorScheme === 'dark' ? props.theme.colors.black : props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) =>
      props.colorScheme === 'dark' ? props.theme.colors.white : props.theme.colors.dark}
  }
`;

const Layout = (props) => {
  const [colorScheme, setColorScheme] = useState(
    typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  );

  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    });
  }

  return (
    <>
      <GlobalStyle colorScheme={colorScheme} />
      <Head {...props} />
      <Header {...props} />
      {props.children}
    </>
  );
};

export default (props) => (
  <ThemeProvider theme={theme}>
    <Layout {...props} />
  </ThemeProvider>
);
