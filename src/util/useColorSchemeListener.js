// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { useContext } from 'react';

import ThemeContext from '../components/ThemeContext';

export default function useColorSchemeListener() {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { setColorMode } = useContext(ThemeContext);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      setColorMode(event.matches ? 'dark' : 'light');
    });
  }
}
