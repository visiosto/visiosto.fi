// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { useContext } from 'react';

import ThemeContext from '../components/ThemeContext';

export default function listenColorScheme() {
  if (typeof window !== 'undefined') {
    const { setColorMode } = useContext(ThemeContext);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      setColorMode(e.matches ? 'dark' : 'light');
    });
  }
}
