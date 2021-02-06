// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

import React, { createContext, useEffect, useMemo, useState } from 'react';

import { COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '../constants';
import { colors } from '../theme';

export const ThemeContext = createContext();

export default (props) => {
  const [colorScheme, setColorScheme] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue = root.style.getPropertyValue(INITIAL_COLOR_MODE_CSS_PROP);

    setColorScheme(initialColorValue);
  }, []);

  const contextValue = useMemo(() => {
    const setColorTheme = (newValue) => {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(colors).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      setColorScheme(newValue);
    };

    return { colorScheme, setColorTheme };
  }, [colorScheme, setColorScheme]);

  return <ThemeContext.Provider value={contextValue}>{props.children}</ThemeContext.Provider>;
};
