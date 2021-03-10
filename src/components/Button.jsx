// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export default (props) => {
  const ButtonLink = (props.link ? styled(props.link) : styled(Link))`
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

  return (
    <div>
      <ButtonLink to={props.to}>
        <Span>{props.children}</Span>
      </ButtonLink>
    </div>
  );
};
