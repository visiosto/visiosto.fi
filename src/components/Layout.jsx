// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Footer from './Footer';
import Head from './Head';
import Header from './Header';

import listenColorScheme from '../utils/listenColorScheme';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background: var(--color-background);
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1rem;
    font-weight: 400;
    font-smoothing: antialiased;
    line-height: 1.5;
    color: var(--color-text);
  }

  h1, h2 {
    clear: both;
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: 700;
  }

  h3, h4, h5, h6 {
    clear: both;
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 700;
  }

  a {
    color: var(--color-link);

    &:visited {
      color: var(--color-link);
    }

    &:hover, &:focus, &:active {
      color: var(--color-link-hover);
    }
  }
`;

export default (props) => {
  listenColorScheme();

  const PageTitle = props.home
    ? styled.h2`
        display: none;
      `
    : styled.h1`
        font-size: 3rem;
        text-align: center;
      `;

  return (
    <>
      <GlobalStyle />
      <Head {...props} />
      <Header {...props} />
      <PageTitle>{props.title}</PageTitle>
      {props.children}
      <Footer {...props} />
    </>
  );
};
