// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { Fragment } from 'react';
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

function Page(props) {
  const { contentfulPage: page } = props.data;
  const { pageData: pricingList, pageDataLocalization: localizations } = page;

  return (
    <Layout
      title={page.title}
      locale={props.pageContext.locale}
      pageID={props.pageContext.pageID}
      description={page.description.description}
      image={page.image}
    >
      <Div dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
      <Buttons>
        {pricingList.map((node) => {
          return (
            <LocalizedAnchorLinkButton
              key={node.listType}
              to={`${props.pageContext.pageID}#${
                localizations.listType.filter((localeNode) => localeNode.id === node.listType)[0]
                  .link
              }`}
              locale={props.pageContext.locale}
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
            <PriceList
              list={list}
              localizations={localizations}
              locale={props.pageContext.locale}
            />
            <Separator>
              <Rule color="blue" mode={3} />
            </Separator>
          </Fragment>
        );
      })}
    </Layout>
  );
}

export default function Pricing(props) {
  return (
    <Intl
      locale={
        props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]
      }
    >
      <Theme>
        <Page {...props} />
      </Theme>
    </Intl>
  );
}

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
