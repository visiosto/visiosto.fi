// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Price from './Price';

import createIntl from '../utils/createIntl';

const Wrapper = styled.div`
  margin: 0 ${(props) => props.theme.layout.marginPhone};
  text-align: center;

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 0 ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 0 ${(props) => props.theme.layout.marginDesktop};
  }
`;

const Div = styled.div`
  margin: 1em 0;
  text-align: center;

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 1em 0;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 1em 0;
  }
`;

const createLocalizationKey = (name) => `pricing${name.charAt(0).toUpperCase() + name.slice(1)}`;

const PriceList = (props) => {
  const i = createIntl(useIntl());

  return (
    <Wrapper>
      <h2>{i(createLocalizationKey(`${props.list.listType}Title`))}</h2>
      <Div
        dangerouslySetInnerHTML={{
          __html: i(createLocalizationKey(`${props.list.listType}Common`)),
        }}
      />
      <Div>
        <Price
          title="Palvelin ja verkkotunnus"
          price={13.5}
          rate="monthly"
          extraPrices={[
            { name: 'server', price: 10.5, rate: 'monthly' },
            { name: 'domain', price: 3, rate: 'monthly' },
          ]}
          jsLocale={props.pageContext.jsLocale}
        />
      </Div>
    </Wrapper>
  );
};

export default PriceList;
