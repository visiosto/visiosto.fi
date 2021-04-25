// Coypright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { css } from 'styled-components';

const boxShadowStyle = css`
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.08),
    0px 3px 8px rgba(0, 0, 0, 0.08), 0px 15px 22px rgba(0, 0, 0, 0.06);

  &:hover,
  &:focus {
    box-shadow: 0px 13px 11px rgba(0, 0, 0, 0.04), 0px 11px 11px rgba(0, 0, 0, 0.08),
      0px 13px 18px rgba(0, 0, 0, 0.08), 0px 15px 22px rgba(0, 0, 0, 0.06);

    @media screen and (prefers-color-scheme: dark) {
      box-shadow: 0px 13px 11px rgba(0, 0, 0, 0.14), 0px 11px 11px rgba(0, 0, 0, 0.18),
        0px 13px 18px rgba(0, 0, 0, 0.18), 0px 15px 22px rgba(0, 0, 0, 0.16);
    }
  }

  @media screen and (prefers-color-scheme: dark) {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 3px 8px rgba(0, 0, 0, 0.14), 0px 15px 22px rgba(0, 0, 0, 0.12);
  }
`;

export default boxShadowStyle;
