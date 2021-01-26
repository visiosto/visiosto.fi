// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

export default (props) => {
  const SiteTitle = styled.h1`
    font-size: 3rem;
    font-family: ${(props) => props.theme.fonts.heading};
    text-align: center;
  `;

  return (
    <>
      <SiteTitle>Visiosto</SiteTitle>
    </>
  );
};
