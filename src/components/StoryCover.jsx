// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Cover from './Cover';

export default function StoryCover(props) {
  const data = useStaticQuery(
    graphql`
      {
        topPhoneSmallLight: file(
          relativePath: { eq: "front-page/story/phone-small-up-right-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        topPhoneSmallDark: file(
          relativePath: { eq: "front-page/story/phone-small-up-right-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        topTabletLight: file(relativePath: { eq: "front-page/story/tablet-up-right-light.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        topTabletDark: file(relativePath: { eq: "front-page/story/tablet-up-right-dark.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        bottomPhoneSmallLight: file(
          relativePath: { eq: "front-page/story/phone-small-down-left-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        bottomPhoneSmallDark: file(
          relativePath: { eq: "front-page/story/phone-small-down-left-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        bottomTabletLight: file(
          relativePath: { eq: "front-page/story/tablet-down-left-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        bottomTabletDark: file(relativePath: { eq: "front-page/story/tablet-down-left-dark.png" }) {
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
      rule={{ color: 'blue', mode: 3 }}
      tabletStyle={{ width: '400px', height: '400px' }}
      style={{ top: { top: 0, right: 0 }, bottom: { bottom: 0, left: 0 } }}
      {...props}
    />
  );
}
