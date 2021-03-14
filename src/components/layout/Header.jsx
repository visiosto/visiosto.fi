// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, withArtDirection } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import SchemedImage from '../SchemedImage';
import Navigation from './Navigation';

import createLink from '../link/createLink';

import createIntl from '../../utils/createIntl';

import theme from '../../theme';

const Header = styled.header`
  margin: 2em ${(props) => props.theme.layout.marginPhone};

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const createSiteTitle = (isHome) => (isHome ? styled.h1 : styled.p)`
    display: none;
    margin: 0;
    font-size: 3rem;
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: 700;
    text-align: center;
  `;

const SiteBranding = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 3rem auto;
  }
`;

const Image = styled(SchemedImage)`
  @media screen and ${(props) => props.theme.devices.tablet} {
    width: 300px;
    height: auto;
  }
`;

export default (props) => {
  const i = createIntl(useIntl());
  const LocalizedLink = createLink(props.lang);

  const { site, logoPhoneSLight, logoPhoneSDark, logoTabletLight, logoTabletDark } = useStaticQuery(
    graphql`
      query {
        site: site {
          siteMetadata {
            title
          }
        }
        logoPhoneSLight: file(relativePath: { eq: "header/logo-light.png" }) {
          childImageSharp {
            gatsbyImageData(width: 301)
          }
        }
        logoPhoneSDark: file(relativePath: { eq: "header/logo-dark.png" }) {
          childImageSharp {
            gatsbyImageData(width: 301)
          }
        }
        logoTabletLight: file(relativePath: { eq: "header/logo-light.png" }) {
          childImageSharp {
            gatsbyImageData(width: 301)
          }
        }
        logoTabletDark: file(relativePath: { eq: "header/logo-dark.png" }) {
          childImageSharp {
            gatsbyImageData(width: 301)
          }
        }
      }
    `,
  );

  const logosLight = withArtDirection(getImage(logoPhoneSLight), [
    {
      media: theme.devices.tablet,
      image: getImage(logoTabletLight),
    },
  ]);
  const logosDark = withArtDirection(getImage(logoPhoneSDark), [
    {
      media: theme.devices.tablet,
      image: getImage(logoTabletDark),
    },
  ]);

  const SiteTitle = createSiteTitle(props.home);

  return (
    <Header>
      <SiteBranding>
        <SiteTitle {...props}>{site.siteMetadata.title}</SiteTitle>
        <LocalizedLink to="/">
          <Image alt={i('headerLogoAlt')} light={logosLight} dark={logosDark} />
        </LocalizedLink>
      </SiteBranding>
      <Navigation {...props} />
    </Header>
  );
};
