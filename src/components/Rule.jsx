// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import SchemedImage from './SchemedImage';

const getRules = (ruleType) => {
  const data = useStaticQuery(
    graphql`
      {
        blueRule1: file(relativePath: { eq: "rule/blue-rule-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
          }
        }
        lightBlueRule1: file(relativePath: { eq: "rule/light-blue-rule-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
          }
        }
        peachRule1: file(relativePath: { eq: "rule/peach-rule-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
          }
        }
        creamRule1: file(relativePath: { eq: "rule/cream-rule-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
          }
        }
        blueRule2: file(relativePath: { eq: "rule/blue-rule-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
          }
        }
        lightBlueRule2: file(relativePath: { eq: "rule/light-blue-rule-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
          }
        }
        peachRule2: file(relativePath: { eq: "rule/peach-rule-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
          }
        }
        creamRule2: file(relativePath: { eq: "rule/cream-rule-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
          }
        }
        blueRule3: file(relativePath: { eq: "rule/blue-rule-3.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
          }
        }
        lightBlueRule3: file(relativePath: { eq: "rule/light-blue-rule-3.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
          }
        }
        peachRule3: file(relativePath: { eq: "rule/peach-rule-3.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
          }
        }
        creamRule3: file(relativePath: { eq: "rule/cream-rule-3.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED)
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

export default (props) => {
  const { blueRule, lightBlueRule, peachRule, creamRule } = getRules(props.mode);

  const Div = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Image = () => {
    if (props.color === 'peach') {
      return <SchemedImage alt="" light={getImage(peachRule)} dark={getImage(creamRule)} />;
    } else if (props.color === 'blue') {
      return <SchemedImage alt="" light={getImage(blueRule)} dark={getImage(lightBlueRule)} />;
    }
  };

  return (
    <Div>
      <Image />
    </Div>
  );
};
