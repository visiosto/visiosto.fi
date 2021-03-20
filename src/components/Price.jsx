// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 2em 0;
`;

const Title = styled.h4`
  margin: 0;
`;

const createLocalization = (list, key, property) =>
  list.filter(({ id }) => id === key)[0][property ? property : 'name'];

const createPrice = (price, locale, rate, localizations) => {
  if (rate) {
    return `${price.toLocaleString(locale, {
      style: 'currency',
      currency: 'EUR',
    })}/${createLocalization(localizations.rate, rate)}`;
  } else {
    return `${price.toLocaleString(locale, {
      style: 'currency',
      currency: 'EUR',
    })}`;
  }
};

const Price = (props) => {
  const { localizations } = props;
  const localizationList = localizations[props.localizationList];

  if (props.extra) {
    return (
      <Div>
        <Title>{props.title}</Title>
        <div
          dangerouslySetInnerHTML={{
            __html: createPrice(props.price, props.locale, props.rate, localizations),
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: `(${props.extra})` }} />
      </Div>
    );
  } else if (props.extraPrices) {
    const extraPrices = props.extraPrices.reduce((accumulated, price) => {
      const entryPrice = createPrice(price.price, props.locale, price.rate, localizations);
      if (!accumulated) {
        return `${createLocalization(localizationList, price.name).toLowerCase()}: ${entryPrice}`;
      } else {
        return `${accumulated}; ${createLocalization(
          localizationList,
          price.name,
        ).toLowerCase()}: ${entryPrice}`;
      }
    }, '');
    return (
      <Div>
        <Title>{props.title}</Title>
        <div
          dangerouslySetInnerHTML={{
            __html: createPrice(props.price, props.locale, props.rate, localizations),
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: `(${extraPrices})` }} />
      </Div>
    );
  } else {
    return (
      <Div>
        <Title>{props.title}</Title>
        <div
          dangerouslySetInnerHTML={{
            __html: createPrice(props.price, props.locale, props.rate, localizations),
          }}
        />
      </Div>
    );
  }
};

export default Price;
