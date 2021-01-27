// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cover = (props) => {
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background: url(${(props) => props.background}) 50% 35% / cover;
  `;

  const Inner = styled.div`
    margin: 2em ${(props) => props.theme.layout.marginPhone};

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      margin: 2em ${(props) => props.theme.layout.marginTablet};
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 2em ${(props) => props.theme.layout.marginDesktop};
    }
  `;

  const Title = styled.h2`
    margin-bottom: 3rem;
    text-align: center;
    font-size: 3rem;
  `;

  const Content = styled.div`
    margin-bottom: 3rem;
    text-align: center;
  `;

  return (
    <Div background={props.background}>
      <Inner>
        <Title>{props.title}</Title>
        <Content>{props.children}</Content>
      </Inner>
    </Div>
  );
};

Cover.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Cover;
