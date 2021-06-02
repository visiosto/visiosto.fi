// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import Head from './Head';
import Header from './Header';

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

const propTypes = {
  article: PropTypes.bool,
  author: PropTypes.shape({ twitter: PropTypes.string }),
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object,
  locale: PropTypes.string.isRequired,
  pageID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  article: false,
  author: null,
  description: '',
  image: null,
};

function Layout({ article, author, children, description, image, locale, pageID, title }) {
  useColorSchemeListener();

  return (
    <>
      <GlobalStyle />
      <Head
        article={article}
        author={author}
        description={description}
        image={image}
        locale={locale}
        pageID={pageID}
        title={title}
      />
      <Header locale={locale} pageID={pageID} />
      <main>
        <section>
          <header>
            <PageTitle>{title}</PageTitle>
          </header>
          <div>{children}</div>
        </section>
      </main>
      <Footer locale={locale} pageID={pageID} />
    </>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
