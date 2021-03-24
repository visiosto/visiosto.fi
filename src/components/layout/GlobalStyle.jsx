// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background: var(--color-background);
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--color-text);
  }

  body.cookie-settings-open {
    overflow: hidden;
  }

  h1, h2 {
    clear: both;
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: 700;
  }

  h3, h4, h5, h6 {
    clear: both;
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 700;
  }

  a {
    color: var(--color-link);

    &:visited {
      color: var(--color-link);
    }

    &:hover, &:focus, &:active {
      color: var(--color-link-hover);
    }
  }
`;
