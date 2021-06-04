// Coypright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { css } from 'styled-components';

const buttonDefaultStyle = css`
  background-color: var(--color-link);
  color: var(--color-text-inverted);

  &:hover,
  &:focus {
    background-color: var(--color-link-hover);
    color: var(--color-text);
  }
`;

export default buttonDefaultStyle;
