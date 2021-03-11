// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchIcon } from '@primer/octicons-react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import createIntl from '../../utils/createIntl';

const Icon = styled(SearchIcon)`
  width: 1em;
  height: auto;
  margin: 0.3em;
  color: var(--color-text);
  pointer-events: none;
`;

export default connectSearchBox(({ refine, currentRefinement, className, onFocus }) => {
  const i = createIntl(useIntl());

  return (
    <form className={className}>
      <input
        className="search-input"
        type="text"
        placeholder={i('searchPlaceholder')}
        aria-label={i('searchPlaceholder')}
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <Icon />
    </form>
  );
});
