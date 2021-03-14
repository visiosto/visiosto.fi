// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import LocalizedAnchorLink from './link/LocalizedAnchorLink';

const Link = styled(LocalizedAnchorLink)`
  text-decoration: none;
`;

const Span = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;
  border-style: none;
  border-radius: 3rem;
  border: 3px solid transparent;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 100ms ease-in;
  background-clip: padding-box;
  background-color: var(--color-link);
  color: var(--color-text-button);
  font-weight: 600;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: var(--color-link-hover);
  }
`;

const AnchorButton = (props) => {
  return (
    <div>
      <Link to={props.to} locale={props.locale}>
        <Span>{props.children}</Span>
      </Link>
    </div>
  );
};

export default AnchorButton;
