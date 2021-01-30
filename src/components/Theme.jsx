// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

export default (props) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [colorScheme, setColorScheme] = useState(
    typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  );

  useEffect(() => {
    setHasMounted(true);
  });

  if (!hasMounted) {
    return null;
  }

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
