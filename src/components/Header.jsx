// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Navigation from './Navigation';

export default (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  const SiteTitle = styled.h1`
    font-size: 3rem;
    font-family: ${(props) => props.theme.fonts.heading};
    text-align: center;
  `;

  return (
    <header>
      <SiteTitle>{site.siteMetadata.title}</SiteTitle>
      <Navigation {...props} />
    </header>
  );
};
