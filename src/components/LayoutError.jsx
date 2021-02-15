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
      <main>
        <section>
          <header>
            <ErrorCode>{props.errorCode}</ErrorCode>
            <PageTitle>{props.title}</PageTitle>
          </header>
          <div>{props.children}</div>
        </section>
      </main>
      <Footer noLanguageSwitcher {...props} />
    </>
  );
};
