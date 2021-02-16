// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import Rule from './Rule';

export default (props) => {
  const Hr = styled.hr`
    visibility: hidden;
  `;

  return (
    <>
      <Rule {...props} />
      <Hr />
    </>
  );
};
