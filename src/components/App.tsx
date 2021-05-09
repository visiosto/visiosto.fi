// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContextProvider } from '@visiosto/components';

import { COLORS } from '../theme';

const propTypes = { children: PropTypes.node.isRequired };

function App({ children }) {
  return <ThemeContextProvider colors={COLORS}>{children}</ThemeContextProvider>;
}

App.propTypes = propTypes;

export default App;
