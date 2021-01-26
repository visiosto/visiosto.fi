// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Head from './Head';

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
  }
`;

const Layout = (props) => {
  const [colorScheme, setColorScheme] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  );

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    setColorScheme(e.matches ? 'dark' : 'light');
  });

  return (
    <>
      <GlobalStyle colorScheme={colorScheme} />
      <Head {...props} />
      {props.children}
    </>
  );
};

export default (props) => (
  <ThemeProvider theme={theme}>
    <Layout {...props} />
  </ThemeProvider>
);
