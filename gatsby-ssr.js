// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// eslint-disable react/jsx-filename-extension

import React from 'react';
import Terser from 'terser';

import App from './src/components/App';

import { COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from './src/constants';
import { COLORS } from './src/theme';

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

function setColorsByTheme() {
  const colors = '🌈';
  const colorModeKey = '🔑';
  const colorModeCssProp = '⚡️';

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkScheme = mediaQuery.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  // TODO Uncomment the line if a dark mode toggle is added
  // const hasUsedToggle = typeof persistedPreference === 'string';
  const hasUsedToggle = false;

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkScheme ? 'dark' : 'light';
  }

  const root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;

  calledFunction = Terser.minify(calledFunction).code;

  // eslint-disable-next-line react/no-danger, react/jsx-filename-extension
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => `${acc}\n--color-${name}: ${colorByTheme.light};`,
    '',
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  // eslint-disable-next-line react/jsx-filename-extension
  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles key="color-scheme-fallback-styles" />);
  setPreBodyComponents(<MagicScriptTag key="color-scheme-magic-script-tag" />);
};

export const wrapPageElement = ({ element }) => <App>{element}</App>;
