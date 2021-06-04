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

import createInternationalization from '../../util/createInternationalization';
import useColorSchemeListener from '../../util/useColorSchemeListener';

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
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object,
  locale: PropTypes.string.isRequired,
  pageID: PropTypes.string.isRequired,
  post: PropTypes.shape({
    author: PropTypes.shape({
      contentful_id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      twitter: PropTypes.string,
    }).isRequired,
    category: PropTypes.shape({
      contentful_id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const defaultProps = {
  article: false,
  description: '',
  image: null,
};

function LayoutPost({ article, children, description, image, locale, pageID, post }) {
  useColorSchemeListener();

  const intl = createInternationalization(useIntl());

  return (
    <>
      <GlobalStyle />
      <Head
        article={article}
        author={post.author}
        description={description}
        image={image}
        locale={locale}
        pageID={pageID}
        title={post.title}
      />
      <Header locale={locale} pageID={pageID} />
      <main>
        <section>
          <header>
            <PageTitle>{post.title}</PageTitle>
            <PostMeta>
              <time dateTime={post.datetime}>{post.date}</time>
              <PostAuthor>
                <AuthorName author={post.author} locale={locale} />
              </PostAuthor>
              <PostCategory>
                {intl('blogCategory')} <CategoryName category={post.category} locale={locale} />
              </PostCategory>
            </PostMeta>
          </header>
          <div>{children}</div>
        </section>
      </main>
      <Footer locale={locale} pageID={pageID} />
    </>
  );
}

LayoutPost.propTypes = propTypes;
LayoutPost.defaultProps = defaultProps;

export default LayoutPost;
