// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import createIntl from '../utils/createIntl';

export default (props) => {
  const i = createIntl(useIntl());

  const Footer = styled.footer`
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textMain};
  `;

  const Div = styled.div`
    padding: 2em ${(props) => props.theme.layout.marginPhone};
    text-align: center;

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      padding: 2em ${(props) => props.theme.layout.marginTablet};
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      padding: 2em ${(props) => props.theme.layout.marginDesktop};
    }
  `;

  return (
    <Footer>
      <Div>Copyright&nbsp;&copy;&nbsp;2021&nbsp;Visiosto&nbsp;oy</Div>
    </Footer>
  );
};
