// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  display: inline-block;
  border-style: none;
  border-radius: 3rem;
  border: 3px solid transparent;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 100ms ease-in;
  background-clip: padding-box;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
`;

const SpanNormal = styled(Span)`
  background-color: var(--color-link);
  color: var(--color-text-button);

  &:hover {
    background-color: var(--color-link-hover);
  }
`;

const SpanGreen = styled(Span)`
  background-color: var(--color-button-green);
  color: var(--color-text-button-green);

  &:hover {
    background-color: var(--color-button-green-hover);
  }
`;

const Button = (props) => {
  if (props.color && props.color === 'green') {
    return <SpanGreen onClick={props.onClick}>{props.children}</SpanGreen>;
  }

  return <SpanNormal onClick={props.onClick}>{props.children}</SpanNormal>;
};

export default Button;
