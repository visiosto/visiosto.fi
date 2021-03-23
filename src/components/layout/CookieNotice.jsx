// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import createIntl from '../../util/createIntl';

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: fixed;
  left: 50%;
  bottom: 0;
  width: 90vw;
  margin: 0 0 2rem -45vw;
  border-radius: 0.5rem;
  padding: 1rem;
  background: var(--color-background);
  box-shadow: var(--color-box-shadow);

  @media screen and ${(props) => props.theme.devices.mobileL} {
    grid-template-columns: 2fr 1fr;
  }
`;

const Text = styled.div``;

const Buttons = styled.div``;

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

export default (props) => {
  const i = createIntl(useIntl());

  return (
    <Div>
      <Text>{i('cookieNoticeContent')}</Text>
      <Buttons>
        <Span>Hei</Span>
        <Span>Moi</Span>
      </Buttons>
    </Div>
  );
};
