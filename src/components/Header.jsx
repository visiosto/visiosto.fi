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

  const Header = styled.header`
    margin: 2em ${(props) => props.theme.layout.marginPhone};

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      margin: 2em ${(props) => props.theme.layout.marginTablet};
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 2em ${(props) => props.theme.layout.marginDesktop};
    }
  `;

  const SiteTitle = (props.home ? styled.h1 : styled.p)`
    font-size: 3rem;
    font-family: ${(props) => props.theme.fonts.heading};
    text-align: center;
  `;

  return (
    <Header>
      <SiteTitle {...props}>{site.siteMetadata.title}</SiteTitle>
      <Navigation {...props} />
    </Header>
  );
};
