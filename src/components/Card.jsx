// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

export default (props) => {
  const Div = styled.div`
    border-radius: 0.25rem;
    padding: 2rem;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.08),
      0px 3px 8px rgba(0, 0, 0, 0.08), 0px 15px 22px rgba(0, 0, 0, 0.06);
    transition: box-shadow 100ms ease-in;

    &:hover {
      box-shadow: 0px 13px 11px rgba(0, 0, 0, 0.04), 0px 11px 11px rgba(0, 0, 0, 0.08),
        0px 13px 18px rgba(0, 0, 0, 0.08), 0px 15px 22px rgba(0, 0, 0, 0.06);
    }
  `;

  const Icon = styled.div`
    text-align: center;
  `;

  const H3 = styled.h3`
    clear: none;
    margin: 2rem 0;
    font-size: 1.5rem;
    text-align: center;
  `;

  return (
    <Div>
      <Icon>{props.icon}</Icon>
      <H3>{props.title}</H3>
      {props.children}
      {props.button}
    </Div>
  );
};
