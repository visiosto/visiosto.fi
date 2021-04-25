// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

import React from 'react';
import PropTypes from 'prop-types';

import ThemeContextProvider from './ThemeContextProvider';

// Sometimes the app's children seem to be something else than a React node in development mode.
// eslint-disable-next-line react/forbid-prop-types
const propTypes = { children: PropTypes.any.isRequired };

function App({ children }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}

App.propTypes = propTypes;

export default App;
