// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Intl from '../components/Intl';
import Layout from '../components/Layout';
import Theme from '../components/Theme';

const Page = (props) => {
  const { markdownRemark: page } = props.data;

  const Div = styled.div`
    margin: 1em ${(props) => props.theme.layout.marginPhone};

    @media screen and ${(props) => props.theme.devices.phoneL} {
      margin: 1em ${(props) => props.theme.layout.marginTablet};
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 1em ${(props) => props.theme.layout.marginDesktop};
    }
  `;

  return (
    <Layout
      title={page.frontmatter.title}
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
      <Div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  );
};

const MarkdownPage = (props) => (
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default MarkdownPage;

export const pageQuery = graphql`
  query MarkdownPageQuery($path: String) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
