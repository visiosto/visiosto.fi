// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Cover from '../components/Cover';
import Intl from '../components/Intl';
import Layout from '../components/Layout';

import createIntl from '../utils/createIntl';

import coverImage from '../assets/front-page-cover.png';

const IndexPage = (props) => {
  const i = createIntl(useIntl());

  const SectionTitle = styled.h3`
    margin: 4rem 0 0;
    font-size: 2.5rem;
  `;

  return (
    <Layout
      title={i('indexTitle')}
      home
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
      <Cover title={i('indexCoverTitle')} background={coverImage}>
        <p>{i('indexCoverContent')}</p>
        <SectionTitle>{i('indexStoryTitle')}</SectionTitle>
        <p>{i('indexStoryContent')}</p>
        <Link to="#">Kokeilulinkki</Link>
      </Cover>
    </Layout>
  );
};

IndexPage.propTypes = { pageContext: PropTypes.object };

const Index = (props) => (
  <Intl locale={props.pageContext.lang}>
    <IndexPage {...props} />
  </Intl>
);

Index.propTypes = { pageContext: PropTypes.object };

export default Index;

export const query = graphql`
  query IndexPage {
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
  }
`;
