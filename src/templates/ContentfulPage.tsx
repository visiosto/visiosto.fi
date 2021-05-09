// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Theme } from '@visiosto/components';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';

import theme from '../theme';

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
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string,
    pageID: PropTypes.string,
  }).isRequired,
};

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

function ContentfulPage({ data, pageContext }) {
  const { simpleLocales } = data.site.siteMetadata;
  const { locale } = pageContext;
  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme theme={theme}>
        <Page data={data} pageContext={pageContext} />
      </Theme>
    </Intl>
  );
}

ContentfulPage.propTypes = propTypes;

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
