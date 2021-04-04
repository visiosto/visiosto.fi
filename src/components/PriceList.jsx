// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import Price from './Price';

const Wrapper = styled.div`
  margin: 0 ${(props) => props.theme.layout.marginMobile};
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 0 ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 0 ${(props) => props.theme.layout.marginDesktop};
  }
`;

const Div = styled.div`
  margin: 1em 0;
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 1em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 1em 0;
  }
`;

const createLocalization = (list, key, property) =>
  list.filter(({ id }) => id === key)[0][property ? property : 'name'];

const PriceList = (props) => {
  const { listType, prices, additionalWork, additionalFees } = props.list;
  const { localizations } = props;
  const {
    prices: pricesLocalizations,
    additionalFees: additionalFeesLocalizations,
    additionalWork: additionalWorkLocalizations,
  } = localizations;

  const domainPrice = prices.filter(({ name }) => name === 'domain')[0];
  const serverPrice = prices.filter(({ name }) => name === 'server')[0];

  return (
    <Wrapper>
      <h2 id={createLocalization(localizations.listType, listType, 'link')}>
        {createLocalization(localizations.listType, listType)}
      </h2>
      <Div
        dangerouslySetInnerHTML={{
          __html: createLocalization(localizations.listType, listType, 'description'),
        }}
      />
      <Div>
        <Price
          id="serverDomain"
          title={createLocalization(pricesLocalizations, 'serverDomain')}
          price={serverPrice.price + domainPrice.price}
          rate={serverPrice.rate}
          extraPrices={[
            { name: serverPrice.name, price: serverPrice.price, rate: serverPrice.rate },
            { name: domainPrice.name, price: domainPrice.price, rate: domainPrice.rate },
          ]}
          locale={props.locale}
          localizations={localizations}
          localizationList="prices"
        />
      </Div>
      <h3>{createLocalization(additionalWorkLocalizations, 'title')}</h3>
      <Div>
        {additionalWork.map((price) => {
          return (
            <Price
              key={price.name}
              id={price.name}
              title={createLocalization(additionalWorkLocalizations, price.name)}
              price={price.price}
              rate={price.rate}
              locale={props.locale}
              localizations={localizations}
              localizationList="additionalWork"
            />
          );
        })}
      </Div>
      <h3>{createLocalization(additionalFeesLocalizations, 'title')}</h3>
      <Div>
        {additionalFees.map((price) => {
          if (price.extra) {
            return (
              <Price
                key={price.name}
                id={price.name}
                title={createLocalization(additionalFeesLocalizations, price.name)}
                extra={createLocalization(additionalFeesLocalizations, price.name, 'extra')}
                price={price.price}
                rate={price.rate}
                locale={props.locale}
                localizations={localizations}
                localizationList="additionalFees"
              />
            );
          } else {
            return (
              <Price
                key={price.name}
                id={price.name}
                title={createLocalization(additionalFeesLocalizations, price.name)}
                price={price.price}
                rate={price.rate}
                locale={props.locale}
                localizations={localizations}
                localizationList="additionalFees"
              />
            );
          }
        })}
      </Div>
    </Wrapper>
  );
};

export default PriceList;
