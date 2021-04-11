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

const ErrorCode = styled.h1`
  font-size: 3rem;
  font-family: ${(props) => props.theme.fonts.code};
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    font-size: 4em;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    font-size: 5em;
  }
`;

const PageTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
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

function LayoutError({ children, description, errorCode, image, locale, pageId, title }) {
  useColorScheme();

  return (
    <>
      <GlobalStyle />
      <Head
        errorPage
        description={description}
        image={image}
        locale={locale}
        pageId={pageId}
        title={title}
      />
      <Header errorPage locale={locale} pageId={pageId} />
      <main>
        <section>
          <header>
            <ErrorCode>{errorCode}</ErrorCode>
            <PageTitle>{title}</PageTitle>
          </header>
          <div>{children}</div>
        </section>
      </main>
      <Footer locale={locale} pageId={pageId} />
    </>
  );
}

LayoutError.propTypes = propTypes;
LayoutError.defaultProps = defaultProps;

export default LayoutError;
