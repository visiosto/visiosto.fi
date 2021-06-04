// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import buttonDefaultStyle from '../styles/buttonDefaultStyle';
import buttonStyle from '../styles/buttonStyle';

const Span = styled.span`
  ${buttonStyle}
`;

const SpanDefault = styled(Span)`
  ${buttonDefaultStyle}
`;

const SpanAccept = styled(Span)`
  background-color: var(--color-accept);
  color: var(--color-text-inverted);

  &:hover {
    background-color: var(--color-accept-inverted);
    color: var(--color-text);
  }
`;

const propTypes = {
  action: PropTypes.oneOf(['default', 'accept']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = { action: 'default', onClick: null };

function Button({ action, children, onClick }) {
  if (action === 'accept') {
    return <SpanAccept onClick={onClick}>{children}</SpanAccept>;
  }

  return <SpanDefault onClick={onClick}>{children}</SpanDefault>;
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
