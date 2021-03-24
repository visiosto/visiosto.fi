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
  background-color: var(${(props) => (props.accept ? '--color-link-accept' : '--color-link')});
  color: var(${(props) => (props.accept ? '--color-text-accept' : '--color-text-button')});
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: var(
      ${(props) => (props.accept ? '--color-link-accept-hover' : '--color-link-hover')}
    );
  }
`;

const Button = (props) => (
  <Span accept={props.accept} onClick={props.onClick}>
    {props.children}
  </Span>
);

export default Button;
