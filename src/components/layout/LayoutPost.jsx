// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import AuthorName from '../AuthorName';
import CategoryName from '../CategoryName';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import Head from './Head';
import Header from './Header';

import createIntl from '../../utils/createIntl';
import listenColorScheme from '../../utils/listenColorScheme';

const PageTitle = styled.h1`
  margin: 2em ${(props) => props.theme.layout.marginPhone};
  font-size: 2rem;
  text-align: center;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
    font-size: 3rem;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
    font-size: 3rem;
  }
`;

const PostMeta = styled.div`
  margin: 2em 0;
  text-align: center;

  @media screen and ${(props) => props.theme.devices.phoneL} {
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

const PostCategory = styled.span`
  clear: both;
  display: block;
`;

export default (props) => {
  listenColorScheme();

  const i = createIntl(useIntl());

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
              <PostAuthor>
                <AuthorName name={props.frontmatter.author} locale={props.lang} />
              </PostAuthor>
              <PostCategory>
                {i('blogCategory')}{' '}
                <CategoryName name={props.frontmatter.category} locale={props.lang} />
              </PostCategory>
            </PostMeta>
          </header>
          <div>{props.children}</div>
        </section>
      </main>
      <Footer {...props} />
    </>
  );
};
