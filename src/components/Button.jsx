// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export default (props) => {
  const Div = styled.div``;

  const ButtonLink = styled(Link)`
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
    background-color: ${(props) => props.theme.colors.link};
    color: ${(props) => props.theme.colors.textButton};
    font-weight: 600;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: ${(props) => props.theme.colors.linkHover};
    }
  `;

  return (
    <Div>
      <ButtonLink to={props.to}>
        <Span>{props.children}</Span>
      </ButtonLink>
    </Div>
  );
};
