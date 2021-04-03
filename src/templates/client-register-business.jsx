// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import RegisterForm from '../components/RegisterForm';
import Theme from '../components/Theme';
import createIntl from '../util/createIntl';
import { useIntl } from 'react-intl';

const H2 = styled.h2`
  font-size: 2.2rem;
  text-align: center;
`;

const Page = (props) => {
  const i = createIntl(useIntl());

  const { contentfulPage: page } = props.data;

  return (
    <Layout title={page.title} locale={props.pageContext.locale} pageId={props.pageContext.pageId}>
      <H2>{page.contactFormTitle}</H2>
      <RegisterForm locale={props.pageContext.locale} />
    </Layout>
  );
};

const ClientRegisterBusiness = (props) => (
  <Intl
    locale={props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]}
  >
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default ClientRegisterBusiness;

export const pageQuery = graphql`
  query ClientRegisterBusinessQuery($pageId: String, $locale: String) {
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
