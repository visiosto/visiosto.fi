// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { createRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components';
import { useIntl } from 'react-intl';

import SearchContainer from './SearchContainer';

import createIntl from '../../utils/createIntl';

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

const Container = styled(SearchContainer)`
  display: inline-block;
  position: relative;
  margin: 0.6em 0;
  border-radius: 0.25rem;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.08),
    0px 3px 8px rgba(0, 0, 0, 0.08), 0px 15px 22px rgba(0, 0, 0, 0.06);
  transition: box-shadow 100ms ease-in;

  .search-form {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 0;
  }

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

const Search = (props) => {
  const i = createIntl(useIntl());

  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `,
  );

  return <Container i={i} siteUrl={site.siteMetadata.siteUrl} lang={props.lang} />;
};

export default Search;
