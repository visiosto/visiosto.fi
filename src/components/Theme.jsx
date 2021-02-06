// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

export default (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
