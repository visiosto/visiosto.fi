// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import Layout from '../components/Layout';

import createIntl from '../utils/createIntl';

const IndexPage = (props) => {
  const i = createIntl(useIntl());

  return (
    <Layout
      title={i('indexTitle')}
      home
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
      <div>Sinun visiosi</div>
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
