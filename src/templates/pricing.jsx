// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import AnchorButton from '../components/AnchorButton';
import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import PriceList, { createLocalizationKey } from '../components/PriceList';
import Rule from '../components/Rule';
import Theme from '../components/Theme';

import createIntl from '../util/createIntl';

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

  const { edges: lists } = props.data.allPricesJson;

  return (
    <Layout title={i('pricingTitle')} lang={props.pageContext.lang} pageKey={props.pageContext.key}>
      <Buttons>
        {lists.map(({ node: list }) => {
          return (
            <AnchorButton
              key={list.listType}
              to={`/${props.pageContext.key}#${list.listType}`}
              locale={props.pageContext.lang}
            >
              {i(`${createLocalizationKey(list.listType)}Title`)}
            </AnchorButton>
          );
        })}
      </Buttons>
      <Separator>
        <Rule color="peach" mode={3} />
      </Separator>
      {lists.map(({ node: list }) => {
        return (
          <>
            <PriceList key={list.listType} list={list} jsLocale={props.pageContext.jsLocale} />
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
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default Pricing;

export const pageQuery = graphql`
  query PricingQuery {
    allPricesJson {
      edges {
        node {
          listType
          prices {
            name
            price
            rate
          }
          additionalWork {
            name
            price
            rate
          }
          additionalFees {
            name
            price
            rate
            extra
          }
        }
      }
    }
  }
`;
