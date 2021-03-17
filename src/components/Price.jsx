// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import createIntl from '../util/createIntl';

const Div = styled.div`
  margin: 2em 0;
`;

const Title = styled.h4`
  margin: 0;
`;

const createPrice = (price, locale, rate) => {
  const i = createIntl(useIntl());

  if (rate) {
    return `${price.toLocaleString(locale, {
      style: 'currency',
      currency: 'EUR',
    })}/${i(`pricingRate${rate.charAt(0).toUpperCase() + rate.slice(1)}`)}`;
  } else {
    return `${price.toLocaleString(locale, {
      style: 'currency',
      currency: 'EUR',
    })}`;
  }
};

const Price = (props) => {
  const i = createIntl(useIntl());

  if (props.extra) {
    return (
      <Div>
        <Title>{props.title}</Title>
        <div
          dangerouslySetInnerHTML={{ __html: createPrice(props.price, props.jsLocale, props.rate) }}
        />
        <div dangerouslySetInnerHTML={{ __html: `(${props.extra})` }} />
      </Div>
    );
  } else if (props.extraPrices) {
    const extraPrices = props.extraPrices.reduce((accumulated, price) => {
      const entryPrice = createPrice(price.price, props.jsLocale, price.rate);
      if (!accumulated) {
        return `${i(
          `pricingPrice${price.name.charAt(0).toUpperCase() + price.name.slice(1)}`,
        )}: ${entryPrice}`;
      } else {
        return `${accumulated}; ${i(
          `pricingPrice${price.name.charAt(0).toUpperCase() + price.name.slice(1)}`,
        )}: ${entryPrice}`;
      }
    }, '');
    return (
      <Div>
        <Title>{props.title}</Title>
        <div
          dangerouslySetInnerHTML={{ __html: createPrice(props.price, props.jsLocale, props.rate) }}
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
            __html: createPrice(props.price, props.jsLocale, props.rate, props.extra),
          }}
        />
      </Div>
    );
  }
};

export default Price;
