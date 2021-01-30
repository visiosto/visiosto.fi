// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Footer from './Footer';
import Head from './Head';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1rem;
    font-weight: 400;
    font-smoothing: antialiased;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.textMain};
  }

  h1, h2, h3, h4, h5, h6 {
    clear: both;
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: 700;
  }

  a {
    color: ${(props) => props.theme.colors.link};

    &:visited {
      color: ${(props) => props.theme.colors.link};
    }

    &:hover, &:focus, &:active {
      color: ${(props) => props.theme.colors.linkHover};
    }
  }
`;

export default (props) => {
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
