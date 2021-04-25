// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import boxShadowHoverStyle from '../styles/boxShadowHoverStyle';
import boxShadowStyle from '../styles/boxShadowStyle';

const Article = styled.article`
  border-radius: 0.5rem;
  padding: 2rem;
  transition: box-shadow 100ms ease-in;

  ${boxShadowStyle}

  &:hover {
    ${boxShadowHoverStyle}
  }
`;

const propTypes = { children: PropTypes.node.isRequired };

function Card({ children }) {
  return <Article>{children}</Article>;
}

Card.propTypes = propTypes;

export default Card;
