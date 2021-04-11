// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import Theme from '../components/Theme';

const Div = styled.div`
  margin: 1em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 1em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 1em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const propTypes = {
  children: PropTypes.node,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
  pageContext: PropTypes.object.isRequired,
  pageResources: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};

const defaultProps = { children: undefined };

function Page({ data, pageContext }) {
  const { contentfulPage: page } = data;
  const { locale, pageID } = pageContext;

  return (
    <Layout
      description={page.description}
      image={page.image}
      locale={locale}
      pageID={pageID}
      title={page.title}
    >
      <Div dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
    </Layout>
  );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

function ContentfulPage(props) {
  const { simpleLocales } = props.data.site.siteMetadata;
  const { locale } = props.pageContext;
  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
        <Page {...props} />
      </Theme>
    </Intl>
  );
}

ContentfulPage.propTypes = propTypes;
ContentfulPage.defaultProps = defaultProps;

export default ContentfulPage;

export const pageQuery = graphql`
  query PageQuery($pageID: String, $locale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    contentfulPage(contentful_id: { eq: $pageID }, node_locale: { eq: $locale }) {
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
