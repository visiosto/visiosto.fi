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

  const PageTitle = styled.h1`
    margin: 2em 0.1em;
    font-size: 2rem;
    text-align: center;

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      margin: 2em ${(props) => props.theme.layout.marginTablet};
      font-size: 3rem;
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 2em ${(props) => props.theme.layout.marginTablet};
    }
  `;

  const PostMeta = styled.div`
    margin: 2em 0;
    text-align: center;

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      margin: 2em 0;
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 2em 0;
    }
  `;

  const PostAuthor = styled.span`
    clear: both;
    display: block;
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
            <PostMeta>
              <time datetime={props.frontmatter.datetime}>{props.frontmatter.date}</time>
              <PostAuthor>{props.frontmatter.author}</PostAuthor>
            </PostMeta>
          </header>
          <div>{props.children}</div>
        </section>
      </main>
      <Footer {...props} />
    </>
  );
};
