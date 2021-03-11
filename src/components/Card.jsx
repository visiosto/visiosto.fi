// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  border-radius: 0.25rem;
  padding: 2rem;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.08),
    0px 3px 8px rgba(0, 0, 0, 0.08), 0px 15px 22px rgba(0, 0, 0, 0.06);
  transition: box-shadow 100ms ease-in;

  &:hover {
    box-shadow: 0px 13px 11px rgba(0, 0, 0, 0.04), 0px 11px 11px rgba(0, 0, 0, 0.08),
      0px 13px 18px rgba(0, 0, 0, 0.08), 0px 15px 22px rgba(0, 0, 0, 0.06);
  }
`;

export default (props) => <Article>{props.children}</Article>;
