// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import RegisterBusinessForm from '../components/form/RegisterBusinessForm';
import RegisterPersonForm from '../components/form/RegisterPersonForm';
import Rule from '../components/Rule';
import Theme from '../components/Theme';

import createInternationalization from '../util/createInternationalization';

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

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    clientType: PropTypes.string,
    locale: PropTypes.string,
    pageID: PropTypes.string,
  }).isRequired,
};

function Page({ data, pageContext }) {
  const intl = createInternationalization(useIntl());

  const { contentfulPage: page } = data;
  const { clientType, locale, pageID } = pageContext;

  return (
    <Layout locale={locale} pageID={pageID} title={page.title}>
      <Div dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
      <Separator>
        <Rule color="peach" mode={1} ignoreColorScheme />
      </Separator>
      <H2>{intl('clientRegisterFormTitle')}</H2>
      {clientType === 'business' ? (
        <RegisterBusinessForm locale={locale} />
      ) : (
        <RegisterPersonForm locale={locale} />
      )}
    </Layout>
  );
}

Page.propTypes = propTypes;

function ClientRegister({ data, pageContext }) {
  const { simpleLocales } = data.site.siteMetadata;
  const { locale } = pageContext;
  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
        <Page data={data} pageContext={pageContext} />
      </Theme>
    </Intl>
  );
}

ClientRegister.propTypes = propTypes;

export default ClientRegister;

export const pageQuery = graphql`
  query ClientRegisterQuery($pageID: String, $locale: String) {
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
