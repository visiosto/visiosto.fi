// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Cover from './Cover';

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

  return (
    <Cover
      data={data}
      rule={{ color: 'blue', mode: 3 }}
      tabletStyle={{ width: '400px', height: '400px' }}
      style={{ top: {}, bottom: { bottom: 0, right: 0 } }}
      {...props}
    />
  );
};
