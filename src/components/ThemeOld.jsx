// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useState } from 'react';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

const getDefaultUserTheme = () => {
  return typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const getQueryTheme = (query) => {
  const fallback = getDefaultUserTheme();

  if (query) {
    const queried = queryString.parse(query);
    const { colorscheme } = queried;

    // Ensure a valid expected value is passed
    if (['light', 'dark'].includes(colorscheme)) {
      return colorscheme;
    }

    return fallback;
  }

  return fallback;
};

export default (props) => {
  const location = useLocation();
  const defaultTheme = (location.search && getQueryTheme(location.search)) || getDefaultUserTheme();
  const [colorScheme, setColorScheme] = useState(defaultTheme);

  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    });
  }

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? theme.dark : theme.light}>
      {props.children}
    </ThemeProvider>
  );
};
