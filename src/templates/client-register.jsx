// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import RegisterForm from '../form/components/RegisterForm';
import Rule from '../components/Rule';
import Theme from '../components/Theme';

import createIntl from '../util/createIntl';

const Div = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  .centered {
    text-align: center;
  }

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 3em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const Separator = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em 0;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 4em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 5em 0;
  }
`;

const H2 = styled.h2`
  margin: 2em ${(props) => props.theme.layout.marginMobile};
  font-size: 2.2rem;
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }
`;

const Page = (props) => {
  const i = createIntl(useIntl());

  const { contentfulPage: page } = props.data;

  return (
    <Layout title={page.title} locale={props.pageContext.locale} pageId={props.pageContext.pageId}>
      <Div dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
      <Separator>
        <Rule color="peach" mode={1} />
      </Separator>
      <H2>{i('clientRegisterFormTitle')}</H2>
      <RegisterForm clientType={props.pageContext.clientType} locale={props.pageContext.locale} />
    </Layout>
  );
};

const ClientRegister = (props) => (
  <Intl
    locale={props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]}
  >
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default ClientRegister;

export const pageQuery = graphql`
  query ClientRegisterQuery($pageId: String, $locale: String) {
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
