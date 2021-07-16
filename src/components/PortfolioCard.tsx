// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Card from './Card';
import LocalizedLink from './link/LocalizedLink';

import createInternationalization from '../util/createInternationalization';

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled(GatsbyImage)`
  * {
    border-radius: 0.5rem;
  }
`;

const H3 = styled.h3`
  clear: none;
  margin: 2rem 0;
  font-size: 1.5rem;
  text-align: center;
`;

const Div = styled.div`
  margin: 0 0 2rem;
  text-align: center;
`;

const propTypes = {
  locale: PropTypes.string.isRequired,
  reference: PropTypes.shape({
    contentful_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    image: PropTypes.object.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

function PortfolioCard({ locale, reference }) {
  const { contentful_id: referenceID, name, image, subtitle } = reference;
  const intl = createInternationalization(useIntl());

  return (
    <Card lesserPadding>
      <ImageDiv>
        <Image alt={name} image={getImage(image)!} />
      </ImageDiv>
      <H3>{name}</H3>
      <Div>
        <p>{subtitle}</p>
        <p>
          <LocalizedLink locale={locale} to={referenceID}>
            {intl('portfolioCardReadMore')}
          </LocalizedLink>
        </p>
      </Div>
    </Card>
  );
}

PortfolioCard.propTypes = propTypes;

export default PortfolioCard;
