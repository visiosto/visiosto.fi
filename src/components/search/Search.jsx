// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { createRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components';

import SearchContainer from './SearchContainer';

const Container = styled(SearchContainer)`
  display: inline-block;
  position: relative;
  margin: 0.6em 0;
  border-radius: 0.25rem;
  box-shadow: none;
  transition: box-shadow 75ms ease-in;

  &.focus {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.08),
      0px 3px 8px rgba(0, 0, 0, 0.08), 0px 15px 22px rgba(0, 0, 0, 0.06);
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

  return <Container siteUrl={site.siteMetadata.siteUrl} lang={props.lang} />;
};

export default Search;
