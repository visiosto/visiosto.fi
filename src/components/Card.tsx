// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Article = styled.article`
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: var(--color-box-shadow);
  transition: box-shadow 100ms ease-in;

  &:hover {
    box-shadow: var(--color-box-shadow-hover);
  }
`;

const propTypes = { children: PropTypes.node.isRequired };

function Card({ children }) {
  return <Article>{children}</Article>;
}

Card.propTypes = propTypes;

export default Card;
