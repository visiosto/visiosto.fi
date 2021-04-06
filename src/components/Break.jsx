// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import Rule from './Rule';

const Hr = styled.hr`
  visibility: hidden;
`;

export default function Break(props) {
  return (
    <>
      <Rule {...props} />
      <Hr />
    </>
  );
}
