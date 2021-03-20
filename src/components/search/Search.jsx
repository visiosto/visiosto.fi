// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import SearchContainer from './SearchContainer';

const Container = styled(SearchContainer)`
  display: inline-block;
  position: relative;
  margin: 0.6em 0;
  border-radius: 0.25rem;
  box-shadow: none;
  transition: box-shadow 75ms ease-in;

  &.focus {
    box-shadow: var(--color-box-shadow);
  }
`;

const Search = (props) => {
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

  return <Container siteUrl={site.siteMetadata.siteUrl} locale={props.locale} />;
};

export default Search;
