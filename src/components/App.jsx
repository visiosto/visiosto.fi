// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

import React from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeContextProvider from './ThemeContextProvider';

export default (props) => <ThemeContextProvider>{props.children}</ThemeContextProvider>;
