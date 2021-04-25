// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { SearchIcon } from '@primer/octicons-react';
import { useIntl } from 'react-intl';

import createInternationalization from '../../util/createInternationalization';

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
    color: var(--color-text);
  }
  ${open}
`;

const Icon = styled(SearchIcon)`
  width: 1em;
  height: auto;
  margin: 0.3em;
  color: var(--color-text);
  pointer-events: none;
`;

const propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  onFocus: PropTypes.func.isRequired,
  searchData: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};

const defaultProps = { error: false, loading: false, searchQuery: '' };

function SearchForm({ error, loading, onFocus, searchData, searchQuery }) {
  const intl = createInternationalization(useIntl());

  if (loading || error) {
    return (
      <Form>
        <Input
          aria-label={intl('searchPlaceholder')}
          onChange={searchData}
          onFocus={onFocus}
          placeholder={intl('searchPlaceholder')}
          type="text"
          value={searchQuery}
        />
        <Icon />
      </Form>
    );
  }
  return (
    <Form>
      <Input
        aria-label={intl('searchPlaceholder')}
        onChange={searchData}
        onFocus={onFocus}
        placeholder={intl('searchPlaceholder')}
        type="text"
        value={searchQuery}
      />
      <Icon />
    </Form>
  );
}

SearchForm.propTypes = propTypes;
SearchForm.defaultProps = defaultProps;

export default SearchForm;
