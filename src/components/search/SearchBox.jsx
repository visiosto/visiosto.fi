// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import styled, { css } from 'styled-components';
import SearchBox from './connectSearchBox';

const open = css`
  width: 10em;
  cursor: text;
  margin-left: -1.6em;
  padding-left: 1.6em;
  background: var(--color-background);
`;

const closed = css`
  width: 10em;
  cursor: text;
  margin-left: -1.6em;
  padding-left: 1.6em;
  background: var(--color-background);
`;

// const closed = css`
//   width: 0;
//   background: transparent;
//   cursor: pointer;
//   margin-left: -1em;
//   padding-left: 1em;
// `;

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;

  .search-input {
    outline: none;
    border: none;
    font-size: 1em;
    transition: 100ms;
    border-radius: 2px;
    color: var(--color-text);
    ::placeholder {
      color: var(--color-text-weak);
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }
`;
