// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from './Footer';
import GlobalStyle from './GlobalStyle';
import Head from './Head';
import Header from './Header';

import useColorScheme from '../../util/useColorScheme';

const PageTitle = styled.h2`
  display: none;
`;

const propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  errorCode: PropTypes.string.isRequired,
  image: PropTypes.object,
  locale: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  description: '',
  image: null,
};

function LayoutIndex({ children, description, image, locale, pageId, title }) {
  useColorScheme();

  return (
    <>
      <GlobalStyle />
      <Head
        home
        description={description}
        image={image}
        locale={locale}
        pageId={pageId}
        title={title}
      />
      <Header home locale={locale} pageId={pageId} />
      <main>
        <section>
          <header>
            <PageTitle>{title}</PageTitle>
          </header>
          <div>{children}</div>
        </section>
      </main>
      <Footer locale={locale} pageId={pageId} />
    </>
  );
}

LayoutIndex.propTypes = propTypes;
LayoutIndex.defaultProps = defaultProps;

export default LayoutIndex;
