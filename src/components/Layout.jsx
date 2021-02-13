// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import Head from './Head';
import Header from './Header';

import listenColorScheme from '../utils/listenColorScheme';

export default (props) => {
  listenColorScheme();

  if (props.errorPage) {
    const ErrorCode = styled.h1`
      font-size: 3rem;
      font-family: ${(props) => props.theme.fonts.code};
      text-align: center;
    `;

    const PageTitle = styled.h2`
      font-size: 2rem;
      text-align: center;
    `;

    return (
      <>
        <GlobalStyle />
        <Head {...props} />
        <Header {...props} />
        <ErrorCode>{props.errorCode}</ErrorCode>
        <PageTitle>{props.title}</PageTitle>
        {props.children}
        <Footer {...props} />
      </>
    );
  } else {
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
  }
};
