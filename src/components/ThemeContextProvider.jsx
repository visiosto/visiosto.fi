// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from './ThemeContext';

import { INITIAL_COLOR_MODE_CSS_PROP } from '../constants';
import { COLORS } from '../theme';

const propTypes = { children: PropTypes.node.isRequired };

function ThemeContextProvider({ children }) {
  // Use state in a function component as this is the way it was done in the original code.
  const [colorMode, rawSetColorMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;

    // Because colours matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(INITIAL_COLOR_MODE_CSS_PROP);

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement;

      // TODO Uncomment the line if a dark mode toggle is added
      // localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

ThemeContextProvider.propTypes = propTypes;

export default ThemeContextProvider;
