// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, withArtDirection } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Cover from './Cover';
import SchemedImg from './SchemedImg';

import theme from '../theme';

export default (props) => {
  const data = useStaticQuery(
    graphql`
      {
        topPhoneSmallLight: file(
          relativePath: { eq: "front-page/cover/phone-small-up-left-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
        topPhoneSmallDark: file(
          relativePath: { eq: "front-page/cover/phone-small-up-left-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
        topTabletLight: file(relativePath: { eq: "front-page/cover/tablet-up-left-light.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
        topTabletDark: file(relativePath: { eq: "front-page/cover/tablet-up-left-dark.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
        bottomPhoneSmallLight: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
        bottomPhoneSmallDark: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
        bottomTabletLight: file(
          relativePath: { eq: "front-page/cover/tablet-down-right-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
        bottomTabletDark: file(
          relativePath: { eq: "front-page/cover/tablet-down-right-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
      }
    `,
  );

  const imagesTopLight = withArtDirection(getImage(data.topPhoneSmallLight), [
    {
      media: theme.devices.tablet,
      image: getImage(data.topTabletLight),
    },
  ]);
  const imagesTopDark = withArtDirection(getImage(data.topPhoneSmallDark), [
    {
      media: theme.devices.tablet,
      image: getImage(data.topTabletDark),
    },
  ]);

  const imagesBottomLight = withArtDirection(getImage(data.bottomPhoneSmallLight), [
    {
      media: theme.devices.tablet,
      image: getImage(data.bottomTabletLight),
    },
  ]);
  const imagesBottomDark = withArtDirection(getImage(data.bottomPhoneSmallDark), [
    {
      media: theme.devices.tablet,
      image: getImage(data.bottomTabletDark),
    },
  ]);

  const Img = styled(SchemedImg)`
    margin: 0;

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 0 4em;
    }
  `;

  const TopImg = styled(Img)`
    @media screen and ${(props) => props.theme.devices.tablet} {
      width: 400px;
      height: 400px;
    }
  `;

  const BottomImg = styled(Img)`
    @media screen and ${(props) => props.theme.devices.tablet} {
      width: 400px;
      height: 400px;
    }
  `;

  const imageStyles = {
    position: 'absolute',
    zIndex: -1,
  };

  return (
    <Cover
      title={props.title}
      imgTop={
        <TopImg
          imageLight={imagesTopLight}
          imageDark={imagesTopDark}
          style={imageStyles}
          objectFit="cover"
        />
      }
      imgBottom={
        <BottomImg
          imageLight={imagesBottomLight}
          imageDark={imagesBottomDark}
          style={{ bottom: 0, right: 0, ...imageStyles }}
          objectFit="cover"
        />
      }
    >
      {props.children}
    </Cover>
  );
};
