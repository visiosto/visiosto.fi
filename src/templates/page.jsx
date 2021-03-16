// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import Theme from '../components/Theme';

const Div = styled.div`
  margin: 1em ${(props) => props.theme.layout.marginPhone};

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 1em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 1em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const Page = (props) => {
  const { contentfulPage: page } = props.data;

  return (
    <Layout title={page.title} lang={props.pageContext.lang} pageKey={props.pageContext.key}>
      <Div dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
    </Layout>
  );
};

const ContentfulPage = (props) => (
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default ContentfulPage;

export const pageQuery = graphql`
  query PageQuery($key: String, $locale: String) {
    contentfulPage(contentful_id: { eq: $key }, node_locale: { eq: $locale }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
