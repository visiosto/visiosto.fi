// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import SchemedImage from './SchemedImage';

const getRules = function getRuleImageDataWithStaticQuery(ruleType) {
  const data = useStaticQuery(
    graphql`
      {
        blueRule1: file(relativePath: { eq: "rule/blue-rule-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        lightBlueRule1: file(relativePath: { eq: "rule/light-blue-rule-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        peachRule1: file(relativePath: { eq: "rule/peach-rule-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        creamRule1: file(relativePath: { eq: "rule/cream-rule-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        blueRule2: file(relativePath: { eq: "rule/blue-rule-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        lightBlueRule2: file(relativePath: { eq: "rule/light-blue-rule-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        peachRule2: file(relativePath: { eq: "rule/peach-rule-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        creamRule2: file(relativePath: { eq: "rule/cream-rule-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        blueRule3: file(relativePath: { eq: "rule/blue-rule-3.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        lightBlueRule3: file(relativePath: { eq: "rule/light-blue-rule-3.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        peachRule3: file(relativePath: { eq: "rule/peach-rule-3.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        creamRule3: file(relativePath: { eq: "rule/cream-rule-3.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
      }
    `,
  );
  switch (ruleType) {
    case 3:
      return {
        blueRule: data.blueRule3,
        lightBlueRule: data.lightBlueRule3,
        peachRule: data.peachRule3,
        creamRule: data.creamRule3,
      };
    case 2:
      return {
        blueRule: data.blueRule2,
        lightBlueRule: data.lightBlueRule2,
        peachRule: data.peachRule2,
        creamRule: data.creamRule2,
      };
    case 1:
    default:
      return {
        blueRule: data.blueRule1,
        lightBlueRule: data.lightBlueRule1,
        peachRule: data.peachRule1,
        creamRule: data.creamRule1,
      };
  }
};

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Rule({ color, mode }) {
  const { blueRule, lightBlueRule, peachRule, creamRule } = getRules(mode);

  if (color === 'peach') {
    return (
      <Div>
        <SchemedImage alt="" light={getImage(peachRule)} dark={getImage(creamRule)} />
      </Div>
    );
  } else if (color === 'blue') {
    return (
      <Div>
        <SchemedImage alt="" light={getImage(blueRule)} dark={getImage(lightBlueRule)} />
      </Div>
    );
  }
}
