// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

import { createContext } from 'react';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const defaultContext = { colorMode: 'light', setColorMode: (value: string) => {} };

export default createContext(defaultContext);
