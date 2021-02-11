// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Cover from './Cover';

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
        bottomPhoneSmallLight: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-light.png" }
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
        bottomPhoneSmallDark: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-dark.png" }
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
        bottomTabletLight: file(
          relativePath: { eq: "front-page/cover/tablet-down-right-light.png" }
        ) {
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

  const imgStyles = {
    position: 'absolute',
    zIndex: -1,
  };

  const sourcesTopLight = [
    data.topPhoneSmallLight.childImageSharp.fixed,
    {
      ...data.topTabletLight.childImageSharp.fixed,
      media: theme.devices.tablet,
    },
  ];

  /*
  const sourcesTopDark = [
    data.topPhoneSmallDark.childImageSharp.fixed,
    {
      ...data.topTabletDark.childImageSharp.fixed,
      media: theme.devices.tablet,
    },
  ];*/

  const sourcesBottomLight = [
    data.bottomPhoneSmallLight.childImageSharp.fixed,
    {
      ...data.bottomTabletLight.childImageSharp.fixed,
      media: theme.devices.tablet,
    },
  ];

  /*
  const sourcesBottomDark = [
    data.bottomPhoneSmallDark.childImageSharp.fixed,
    {
      ...data.bottomTabletDark.childImageSharp.fixed,
      media: theme.devices.tablet,
    },
  ];*/

  return (
    <Cover
      title={props.title}
      imgTopLight={<Img fixed={sourcesTopLight} style={imgStyles} objectFit="cover" />}
      imgTopDark={<Img fixed={sourcesTopLight} style={imgStyles} objectFit="cover" />}
      imgBottomLight={
        <Img
          fixed={sourcesBottomLight}
          style={{ bottom: 0, right: 0, ...imgStyles }}
          objectFit="cover"
        />
      }
      imgBottomDark={
        <Img
          fixed={sourcesBottomLight}
          style={{ bottom: 0, right: 0, ...imgStyles }}
          objectFit="cover"
        />
      }
    >
      {props.children}
    </Cover>
  );
};
