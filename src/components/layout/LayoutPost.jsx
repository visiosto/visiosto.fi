// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import AuthorName from '../AuthorName';
import CategoryName from '../CategoryName';
import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import Head from './Head';
import Header from './Header';

import createIntl from '../../util/createIntl';
import useColorScheme from '../../util/useColorScheme';

const PageTitle = styled.h1`
  margin: 2em ${(props) => props.theme.layout.marginMobile};
  font-size: 2rem;
  text-align: center;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
    font-size: 3rem;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
    font-size: 3rem;
  }
`;

const PostMeta = styled.div`
  margin: 2em 0;
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
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

const propTypes = {
  article: PropTypes.bool,
  author: PropTypes.object,
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  image: PropTypes.object,
  locale: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  article: false,
  author: null,
  description: '',
  image: null,
};

function LayoutPost({
  article,
  author,
  children,
  description,
  image,
  locale,
  pageId,
  post,
  title,
}) {
  useColorScheme();

  const i = createIntl(useIntl());

  return (
    <>
      <GlobalStyle />
      <Head
        article={article}
        author={author}
        description={description}
        image={image}
        locale={locale}
        pageId={pageId}
        title={title}
      />
      <Header locale={locale} pageId={pageId} />
      <main>
        <section>
          <header>
            <PageTitle>{title}</PageTitle>
            <PostMeta>
              <time dateTime={post.datetime}>{post.date}</time>
              <PostAuthor>
                <AuthorName author={post.author} locale={locale} />
              </PostAuthor>
              <PostCategory>
                {i('blogCategory')} <CategoryName category={post.category} locale={locale} />
              </PostCategory>
            </PostMeta>
          </header>
          <div>{children}</div>
        </section>
      </main>
      <Footer locale={locale} pageId={pageId} />
    </>
  );
}

LayoutPost.propTypes = propTypes;
LayoutPost.defaultProps = defaultProps;

export default LayoutPost;
