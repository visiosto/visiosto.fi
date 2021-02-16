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
      query {
        topPhoneSmallLight: file(
          relativePath: { eq: "front-page/cover/phone-small-up-left-light.png" }
        ) {
          childImageSharp {
            fixed(width: 300, height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        topPhoneSmallDark: file(
          relativePath: { eq: "front-page/cover/phone-small-up-left-dark.png" }
        ) {
          childImageSharp {
            fixed(width: 300, height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        topTabletLight: file(relativePath: { eq: "front-page/cover/tablet-up-left-light.png" }) {
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        topTabletDark: file(relativePath: { eq: "front-page/cover/tablet-up-left-dark.png" }) {
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bottomPhoneSmallLight: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-light.png" }
        ) {
          childImageSharp {
            fixed(width: 300, height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bottomPhoneSmallDark: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-dark.png" }
        ) {
          childImageSharp {
            fixed(width: 300, height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bottomTabletLight: file(
          relativePath: { eq: "front-page/cover/tablet-down-right-light.png" }
        ) {
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bottomTabletDark: file(
          relativePath: { eq: "front-page/cover/tablet-down-right-dark.png" }
        ) {
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `,
  );

  const sourcesTopLight = [
    data.topPhoneSmallLight.childImageSharp.fixed,
    {
      ...data.topTabletLight.childImageSharp.fixed,
      media: theme.devices.tablet,
    },
  ];

  const sourcesTopDark = [
    data.topPhoneSmallDark.childImageSharp.fixed,
    {
      ...data.topTabletDark.childImageSharp.fixed,
      media: theme.devices.tablet,
    },
  ];

  const sourcesBottomLight = [
    data.bottomPhoneSmallLight.childImageSharp.fixed,
    {
      ...data.bottomTabletLight.childImageSharp.fixed,
      media: theme.devices.tablet,
    },
  ];

  const sourcesBottomDark = [
    data.bottomPhoneSmallDark.childImageSharp.fixed,
    {
      ...data.bottomTabletDark.childImageSharp.fixed,
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
