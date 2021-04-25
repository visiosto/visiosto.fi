// Coypright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { css } from 'styled-components';

const blogMetaLinksStyle = css`
  text-decoration: none;
  color: var(--color-text);

  &:visited {
    color: var(--color-text);
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
    color: var(--color-link-hover);
  }
`;

export default blogMetaLinksStyle;
