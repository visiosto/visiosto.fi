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

export const createLocalizationKey = (name) =>
  `pricing${name.charAt(0).toUpperCase() + name.slice(1)}`;

export const createPriceLocalizationKey = (name) =>
  `pricingPrice${name.charAt(0).toUpperCase() + name.slice(1)}`;

const PriceList = (props) => {
  const i = createIntl(useIntl());

  const { listType, prices, additionalWork, additionalFees } = props.list;

  const domainPrice = prices.filter(({ name }) => name === 'domain')[0];
  const serverPrice = prices.filter(({ name }) => name === 'server')[0];

  return (
    <Wrapper>
      <h2 id={i(createLocalizationKey(`${listType}Id`))}>
        {i(createLocalizationKey(`${listType}Title`))}
      </h2>
      <Div
        dangerouslySetInnerHTML={{
          __html: i(createLocalizationKey(`${listType}Common`)),
        }}
      />
      <Div>
        <Price
          title={i(createLocalizationKey('priceServerDomain'))}
          price={serverPrice.price + domainPrice.price}
          rate={serverPrice.rate}
          extraPrices={[
            { name: serverPrice.name, price: serverPrice.price, rate: serverPrice.rate },
            { name: domainPrice.name, price: domainPrice.price, rate: domainPrice.rate },
          ]}
          jsLocale={props.jsLocale}
        />
      </Div>
      <h3>{i(`${createLocalizationKey('additionalWork')}Title`)}</h3>
      <Div>
        {additionalWork.map((price) => {
          return (
            <Price
              key={price.name}
              title={i(createPriceLocalizationKey(price.name))}
              price={price.price}
              rate={price.rate}
              jsLocale={props.jsLocale}
            />
          );
        })}
      </Div>
      <h3>{i(`${createLocalizationKey('additionalFees')}Title`)}</h3>
      <Div>
        {additionalFees.map((price) => {
          if (price.extra) {
            return (
              <Price
                key={price.name}
                title={i(createPriceLocalizationKey(price.name))}
                extra={i(`${createLocalizationKey(price.name)}Extra`)}
                price={price.price}
                rate={price.rate}
                jsLocale={props.jsLocale}
              />
            );
          } else {
            return (
              <Price
                key={price.name}
                title={i(createPriceLocalizationKey(price.name))}
                price={price.price}
                rate={price.rate}
                jsLocale={props.jsLocale}
              />
            );
          }
        })}
      </Div>
    </Wrapper>
  );
};

export default PriceList;
