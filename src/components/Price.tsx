// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin: 2em 0;
`;

const Title = styled.h4`
  margin: 0;
`;

const createLocalization = function createLocalizationID(list, key, property?) {
  return list.filter(({ id }) => id === key)[0][property ? property : 'name'];
};

const createPrice = function createPriceFromData(price, locale, rate, localizations) {
  if (rate !== '') {
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

const propTypes = {
  extra: PropTypes.string,
  extraPrices: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rate: PropTypes.string,
    }),
  ),
  locale: PropTypes.string.isRequired,
  localizations: PropTypes.object.isRequired,
  localizationsList: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const defaultProps = { extra: '', extraPrices: null, rate: '' };

function Price({
  extra,
  extraPrices,
  locale,
  localizations,
  localizationsList,
  price,
  rate,
  title,
}) {
  const translations = localizations[localizationsList];

  if (extra !== '') {
    return (
      <Div>
        <Title>{title}</Title>
        <div
          dangerouslySetInnerHTML={{
            __html: createPrice(price, locale, rate, localizations),
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: `(${extra})` }} />
      </Div>
    );
  } else if (extraPrices) {
    const reducedExtraPrices = extraPrices.reduce((accumulated, extraPrice) => {
      const entryPrice = createPrice(extraPrice.price, locale, extraPrice.rate, localizations);
      if (!accumulated) {
        return `${createLocalization(translations, extraPrice.name).toLowerCase()}: ${entryPrice}`;
      } else {
        return `${accumulated}; ${createLocalization(
          translations,
          extraPrice.name,
        ).toLowerCase()}: ${entryPrice}`;
      }
    }, '');
    return (
      <Div>
        <Title>{title}</Title>
        <div
          dangerouslySetInnerHTML={{
            __html: createPrice(price, locale, rate, localizations),
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: `(${reducedExtraPrices})` }} />
      </Div>
    );
  } else {
    return (
      <Div>
        <Title>{title}</Title>
        <div
          dangerouslySetInnerHTML={{
            __html: createPrice(price, locale, rate, localizations),
          }}
        />
      </Div>
    );
  }
}

Price.propTypes = propTypes;
Price.defaultProps = defaultProps;

export default Price;
