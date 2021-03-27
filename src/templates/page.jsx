// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import Theme from '../components/Theme';

const Div = styled.div`
  margin: 1em ${(props) => props.theme.layout.marginMobile};

  @media screen and ${(props) => props.theme.devices.mobileL} {
    margin: 1em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 1em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const Page = (props) => {
  const { contentfulPage: page } = props.data;

  return (
    <Layout
      title={page.title}
      locale={props.pageContext.locale}
      pageId={props.pageContext.pageId}
      description={page.description}
      image={page.image}
    >
      <Div dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
    </Layout>
  );
};

const ContentfulPage = (props) => (
  <Intl
    locale={props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]}
  >
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default ContentfulPage;

export const pageQuery = graphql`
  query PageQuery($pageId: String, $locale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    contentfulPage(contentful_id: { eq: $pageId }, node_locale: { eq: $locale }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      description {
        description
      }
      image {
        description
        file {
          contentType
          url
        }
      }
    }
  }
`;
