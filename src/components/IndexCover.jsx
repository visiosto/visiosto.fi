// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
            gatsbyImageData(width: 300, height: 90, layout: FIXED)
          }
        }
        topPhoneSmallDark: file(
          relativePath: { eq: "front-page/cover/phone-small-up-left-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, height: 90, layout: FIXED)
          }
        }
        topTabletLight: file(relativePath: { eq: "front-page/cover/tablet-up-left-light.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400, height: 400, layout: FIXED)
          }
        }
        topTabletDark: file(relativePath: { eq: "front-page/cover/tablet-up-left-dark.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400, height: 400, layout: FIXED)
          }
        }
        bottomPhoneSmallLight: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, height: 90, layout: FIXED)
          }
        }
        bottomPhoneSmallDark: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, height: 90, layout: FIXED)
          }
        }
        bottomTabletLight: file(
          relativePath: { eq: "front-page/cover/tablet-down-right-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, height: 400, layout: FIXED)
          }
        }
        bottomTabletDark: file(
          relativePath: { eq: "front-page/cover/tablet-down-right-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, height: 400, layout: FIXED)
          }
        }
      }
    `,
  );

  const sourcesTopLight = [
    data.topPhoneSmallLight.childImageSharp.gatsbyImageData,
    {
      ...data.topTabletLight.childImageSharp.gatsbyImageData,
      media: theme.devices.tablet,
    },
  ];

  const sourcesTopDark = [
    data.topPhoneSmallDark.childImageSharp.gatsbyImageData,
    {
      ...data.topTabletDark.childImageSharp.gatsbyImageData,
      media: theme.devices.tablet,
    },
  ];

  const sourcesBottomLight = [
    data.bottomPhoneSmallLight.childImageSharp.gatsbyImageData,
    {
      ...data.bottomTabletLight.childImageSharp.gatsbyImageData,
      media: theme.devices.tablet,
    },
  ];

  const sourcesBottomDark = [
    data.bottomPhoneSmallDark.childImageSharp.gatsbyImageData,
    {
      ...data.bottomTabletDark.childImageSharp.gatsbyImageData,
      media: theme.devices.tablet,
    },
  ];

  const Img = styled(SchemedImg)`
    margin: 0;

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 0 4em;
    }
  `;

  const TopImg = styled(Img)``;

  const BottomImg = styled(Img)``;

  const imgStyles = {
    position: 'absolute',
    zIndex: -1,
  };

  return (
    <Cover
      title={props.title}
      imgTop={
        <TopImg
          fixedLight={sourcesTopLight}
          fixedDark={sourcesTopDark}
          style={imgStyles}
          objectFit="cover"
        />
      }
      imgBottom={
        <BottomImg
          fixedLight={sourcesBottomLight}
          fixedDark={sourcesBottomDark}
          style={{ bottom: 0, right: 0, ...imgStyles }}
          objectFit="cover"
        />
      }
    >
      {props.children}
    </Cover>
  );
};
