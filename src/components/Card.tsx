// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import boxShadowHoverStyle from '../styles/boxShadowHoverStyle';
import boxShadowStyle from '../styles/boxShadowStyle';

const Article = styled.article<{ centered?: boolean; lesserPadding?: boolean }>`
  border-radius: 0.5rem;
  padding: ${(props) => (props.lesserPadding ? 0 : '2rem')};
  transition: box-shadow 100ms ease-in;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};

  ${boxShadowStyle}

  &:hover {
    ${boxShadowHoverStyle}
  }
`;

const propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  lesserPadding: PropTypes.bool,
};

const defaultProps = { centered: false, lesserPadding: false };

function Card({ centered, children, lesserPadding }) {
  return (
    <Article centered={centered} lesserPadding={lesserPadding}>
      {children}
    </Article>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
