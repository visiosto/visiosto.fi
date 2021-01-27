// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import Layout from '../components/Layout';

import createIntl from '../utils/createIntl';

const BlogPage = (props) => {
  const i = createIntl(useIntl());

  const P = styled.p`
    text-align: center;
  `;

  return (
    <Layout title={i('blogTitle')} lang={props.pageContext.lang} pageKey={props.pageContext.key}>
      <P>{i('blogNothingFound')}</P>
    </Layout>
  );
};

const Blog = (props) => (
  <Intl locale={props.pageContext.lang}>
    <BlogPage {...props} />
  </Intl>
);

export default Blog;

export const query = graphql`
  query BlogPage {
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
  }
`;
