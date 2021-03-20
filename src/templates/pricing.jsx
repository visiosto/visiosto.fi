// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import AnchorButton from '../components/AnchorButton';
import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import PriceList from '../components/PriceList';
import Rule from '../components/Rule';
import Theme from '../components/Theme';

import createIntl from '../util/createIntl';

const Div = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginPhone};

  .centered {
    text-align: center;
  }

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
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

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 4em 0;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 5em 0;
  }
`;

const Page = (props) => {
  const i = createIntl(useIntl());

  const { contentfulPage: page } = props.data;
  const { pageData: pricingList, pageDataLocalization: localizations } = page;

  return (
    <Layout title={page.title} locale={props.pageContext.locale} pageId={props.pageContext.pageId}>
      <Div dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
      <Buttons>
        {pricingList.map((node) => {
          return (
            <AnchorButton
              key={node.listType}
              to={`${props.pageContext.pageId}#${
                localizations.listType.filter((localeNode) => localeNode.id === node.listType)[0]
                  .link
              }`}
              locale={props.pageContext.locale}
            >
              {localizations.listType.filter((listNode) => listNode.id === node.listType)[0].name}
            </AnchorButton>
          );
        })}
      </Buttons>
      <Separator>
        <Rule color="peach" mode={3} />
      </Separator>
      {pricingList.map((list) => {
        return (
          <>
            <PriceList
              key={list.listType}
              list={list}
              localizations={localizations}
              locale={props.pageContext.locale}
            />
            <Separator>
              <Rule color="blue" mode={3} />
            </Separator>
          </>
        );
      })}
    </Layout>
  );
};

const Pricing = (props) => (
  <Intl
    locale={props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]}
  >
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default Pricing;

export const pageQuery = graphql`
  query PricingQuery($pageId: String, $locale: String) {
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
