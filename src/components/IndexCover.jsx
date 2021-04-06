// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Cover from './Cover';

export default function IndexCover(props) {
  const data = useStaticQuery(
    graphql`
      {
        topPhoneSmallLight: file(
          relativePath: { eq: "front-page/cover/phone-small-up-left-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        topPhoneSmallDark: file(
          relativePath: { eq: "front-page/cover/phone-small-up-left-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        topTabletLight: file(relativePath: { eq: "front-page/cover/tablet-up-left-light.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        topTabletDark: file(relativePath: { eq: "front-page/cover/tablet-up-left-dark.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        bottomPhoneSmallLight: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        bottomPhoneSmallDark: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        bottomTabletLight: file(
          relativePath: { eq: "front-page/cover/tablet-down-right-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        bottomTabletDark: file(
          relativePath: { eq: "front-page/cover/tablet-down-right-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
      }
    `,
  );

  return (
    <Cover
      data={data}
      rule={{ color: 'peach', mode: 3 }}
      tabletStyle={{ width: '400px', height: '400px' }}
      style={{ top: {}, bottom: { bottom: 0, right: 0 } }}
      {...props}
    />
  );
}
