// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import createIntl from '../../util/createIntl';

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

export default function SearchResultList(props) {
  const i = createIntl(useIntl());

  return (
    <>
      {(() => {
        if (props.queryResults && props.queryResults.length > 0) {
          return (
            <HitCount>
              {props.queryResults.length}{' '}
              {props.queryResults.length !== 1 ? i('searchResults') : i('searchResult')}
            </HitCount>
          );
        }
      })()}
      <div>
        <List>
          {props.queryResults.map((result) => (
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
