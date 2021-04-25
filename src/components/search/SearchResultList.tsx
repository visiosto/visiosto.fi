// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import createInternationalization from '../../util/createInternationalization';

const HitCount = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const List = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-inline-start: 0;
`;

const Item = styled.li`
  margin-bottom: 1em;

  a {
    color: var(--color-link);

    h4 {
      margin-bottom: 0.2em;
    }
  }
`;

const propTypes = { queryResults: PropTypes.arrayOf(PropTypes.object) };

const defaultProps = { queryResults: [] };

function SearchResultList({ queryResults }) {
  const intl = createInternationalization(useIntl());

  return (
    <>
      {(() => {
        if (queryResults && queryResults.length > 0) {
          return (
            <HitCount>
              {queryResults.length}{' '}
              {queryResults.length !== 1 ? intl('searchResults') : intl('searchResult')}
            </HitCount>
          );
        }

        return null;
      })()}
      <div>
        <List>
          {queryResults.map((result) => (
            <Item key={result.id}>
              <Link to={result.slug}>
                <h4>{result.title}</h4>
              </Link>
              <div>{result.excerpt}</div>
            </Item>
          ))}
        </List>
      </div>
    </>
  );
}

SearchResultList.propTypes = propTypes;
SearchResultList.defaultProps = defaultProps;

export default SearchResultList;
