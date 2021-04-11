// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
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

const createLocalization = function createLocalizationForProperty(list, key, property) {
  return list.filter(({ id }) => id === key)[0][property ? property : 'name'];
};

const propTypes = {
  list: PropTypes.shape({
    additionalFees: PropTypes.arrayOf(PropTypes.object).isRequired,
    additionalWork: PropTypes.arrayOf(PropTypes.object).isRequired,
    listType: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  locale: PropTypes.string.isRequired,
  localizations: PropTypes.object.isRequired,
};

function PriceList({ list, locale, localizations }) {
  const { additionalFees, additionalWork, listType, prices } = list;
  const {
    additionalFees: additionalFeesLocalizations,
    additionalWork: additionalWorkLocalizations,
    prices: pricesLocalizations,
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
          locale={locale}
          localizations={localizations}
          localizationsList="prices"
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
              locale={locale}
              localizations={localizations}
              localizationsList="additionalWork"
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
                locale={locale}
                localizations={localizations}
                localizationsList="additionalFees"
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
                locale={locale}
                localizations={localizations}
                localizationsList="additionalFees"
              />
            );
          }
        })}
      </Div>
    </Wrapper>
  );
}

PriceList.propTypes = propTypes;

export default PriceList;
