// Coypright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { css } from 'styled-components';

const switchInputStyle = css`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: var(--color-link);
  }

  &:checked + span::before {
    transform: translateX(26px);
  }

  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
`;

export default switchInputStyle;
