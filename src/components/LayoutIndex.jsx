// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import Head from './Head';
import Header from './Header';

import listenColorScheme from '../utils/listenColorScheme';

export default (props) => {
  listenColorScheme();

  const PageTitle = styled.h2`
    display: none;
  `;

  return (
    <>
      <GlobalStyle />
      <Head {...props} />
      <Header {...props} />
      <main>
        <section>
          <header>
            <PageTitle>{props.title}</PageTitle>
          </header>
          <div>
            {props.children}
          </div>
        </section>
      </main>
      <Footer {...props} />
    </>
  );
};
