// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import LocalizedAnchorLinkButton from '../components/link/LocalizedAnchorLinkButton';
import PriceList from '../components/PriceList';
import Rule from '../components/Rule';
import Theme from '../components/Theme';

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

const Buttons = styled.div`
  display: flex;
  justify-content: center;
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
  const { pageData: pricingList, pageDataLocalization: localizations } = page;
  const { locale, pageID } = pageContext;

  return (
    <Layout
      description={page.description.description}
      image={page.image}
      locale={locale}
      pageID={pageID}
      title={page.title}
    >
      <Div dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
      <Buttons>
        {pricingList.map((node) => {
          return (
            <LocalizedAnchorLinkButton
              key={node.listType}
              to={`${pageID}#${
                localizations.listType.filter((localeNode) => localeNode.id === node.listType)[0]
                  .link
              }`}
              locale={locale}
            >
              {localizations.listType.filter((listNode) => listNode.id === node.listType)[0].name}
            </LocalizedAnchorLinkButton>
          );
        })}
      </Buttons>
      <Separator>
        <Rule color="peach" mode={3} />
      </Separator>
      {pricingList.map((list) => {
        return (
          <Fragment key={list.listType}>
            <PriceList list={list} localizations={localizations} locale={locale} />
            <Separator>
              <Rule color="blue" mode={3} />
            </Separator>
          </Fragment>
        );
      })}
    </Layout>
  );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

function Pricing(props) {
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

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;

export const pageQuery = graphql`
  query PricingQuery($pageID: String, $locale: String) {
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
      pageData {
        listType
        additionalFees {
          extra
          name
          price
          rate
        }
        additionalWork {
          name
          price
          rate
        }
        prices {
          name
          price
          rate
        }
      }
      pageDataLocalization {
        additionalFees {
          extra
          id
          name
        }
        additionalWork {
          id
          name
        }
        listType {
          description
          id
          link
          name
        }
        prices {
          id
          name
        }
        rate {
          id
          name
        }
      }
    }
  }
`;
