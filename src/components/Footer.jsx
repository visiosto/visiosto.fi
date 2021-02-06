// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import createIntl from '../utils/createIntl';

export default (props) => {
  const i = createIntl(useIntl());

  const Footer = styled.footer`
    background: var(--color-background);
    color: var(--color-text);
  `;

  const Div = styled.div`
    margin: 1em ${(props) => props.theme.layout.marginPhone};
    text-align: center;

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      margin: 1em ${(props) => props.theme.layout.marginTablet};
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 1em ${(props) => props.theme.layout.marginDesktop};
    }
  `;

  return (
    <Footer>
      <Div>Octicons&nbsp;&copy;&nbsp;2021&nbsp;GitHub,&nbsp;Inc.</Div>
      <Div>&nbsp;&copy;&nbsp;2021&nbsp;Visiosto&nbsp;oy</Div>
    </Footer>
  );
};
