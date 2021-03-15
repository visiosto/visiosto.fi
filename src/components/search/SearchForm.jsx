// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled, { css } from 'styled-components';
import { SearchIcon } from '@primer/octicons-react';
import { useIntl } from 'react-intl';

import createIntl from '../../utils/createIntl';

const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
`;

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

const Input = styled.input`
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
`;

const Icon = styled(SearchIcon)`
  width: 1em;
  height: auto;
  margin: 0.3em;
  color: var(--color-text);
  pointer-events: none;
`;

const SearchForm = (props) => {
  const i = createIntl(useIntl());

  if (props.loading || props.error) {
    return (
      <Form>
        <Input
          type="text"
          placeholder={i('searchPlaceholder')}
          aria-label={i('searchPlaceholder')}
          onChange={props.searchData}
          value={props.searchQuery}
          onFocus={props.onFocus}
        />
        <Icon />
      </Form>
    );
  } else {
    return (
      <Form>
        <Input
          type="text"
          placeholder={i('searchPlaceholder')}
          aria-label={i('searchPlaceholder')}
          onChange={props.searchData}
          value={props.searchQuery}
          onFocus={props.onFocus}
        />
        <Icon />
      </Form>
    );
  }
};

export default SearchForm;
