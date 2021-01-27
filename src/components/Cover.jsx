// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

const Cover = (props) => {
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background: url(${(props) => props.backgrounds.def}) 40% 40% / cover no-repeat;

    ${(props) => {
      let toRender = '';

      for (let key in props.backgrounds) {
        const img = props.backgrounds[key];
        toRender += `
          @media screen and ${props.theme.devices[key]} {
            background-image: url(${img});
          }
        `;
      }

      return toRender;
    }}
  `;

  const Inner = styled.div`
    margin: 2em ${(props) => props.theme.layout.marginPhone};

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      margin: 2em ${(props) => props.theme.layout.marginTablet};
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 6em ${(props) => props.theme.layout.marginDesktop};
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
    <Div backgrounds={{ ...props.backgrounds }}>
      <Inner>
        <Title>{props.title}</Title>
        <Content>{props.children}</Content>
      </Inner>
    </Div>
  );
};

export default Cover;
