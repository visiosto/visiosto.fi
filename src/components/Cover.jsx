// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

export default (props) => {
  const Div = styled.div`
    overflow: hidden;
    display: inline-block;
    position: relative;
    min-width: 100%;
    min-height: 100%;
    margin: 2em 0;
    padding: 1em;
  `;

  const Inner = styled.div`
    margin: 2em ${(props) => props.theme.layout.marginPhone};
    padding: 0.5em 0 0;

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      margin: 2em ${(props) => props.theme.layout.marginTablet};
      padding: 2em 0;
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 6em ${(props) => props.theme.layout.marginDesktop};
      padding: 2em 0;
    }
  `;

  const Title = styled.h2`
    margin-bottom: 3rem;
    text-align: center;
    font-size: 3rem;
  `;

  const Content = styled.div`
    margin: 0 0 3rem;
    font-size: 1.1rem;
    text-align: center;
  `;

  return (
    <Div>
      {props.imgTop}
      <Inner>
        <Title>{props.title}</Title>
        <Content>{props.children}</Content>
      </Inner>
      {props.imgBottom}
    </Div>
  );
};
