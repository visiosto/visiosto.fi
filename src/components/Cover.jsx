// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

export default (props) => {
  const Section = styled.section`
    overflow: hidden;
    position: relative;
    min-width: 100%;
    min-height: 100%;
    margin: 0 0 2em;
  `;

  const Inner = styled.div`
    margin: 2em ${(props) => props.theme.layout.marginPhone};
    padding: 0.5em 0 1em;

    @media screen and ${(props) => props.theme.devices.phoneL} {
      margin: 2em ${(props) => props.theme.layout.marginTablet};
      padding: 2em 0;
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 2em ${(props) => props.theme.layout.marginDesktop};
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

  const ImgTop = () => props.imgTop;
  const ImgBottom = () => props.imgBottom;

  return (
    <Section>
      <ImgTop />
      <Inner>
        <header>
          <Title>{props.title}</Title>
        </header>
        <Content>{props.children}</Content>
      </Inner>
      <ImgBottom />
    </Section>
  );
};
