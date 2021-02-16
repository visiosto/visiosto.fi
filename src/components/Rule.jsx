// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import SchemedImg from './SchemedImg';

const getRules = (ruleType) => {
  const data = useStaticQuery(
    graphql`
      query {
        blueRule1: file(relativePath: { eq: "blue-rule-1.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        lightBlueRule1: file(relativePath: { eq: "light-blue-rule-1.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        peachRule1: file(relativePath: { eq: "peach-rule-1.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        creamRule1: file(relativePath: { eq: "cream-rule-1.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        blueRule2: file(relativePath: { eq: "blue-rule-2.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        lightBlueRule2: file(relativePath: { eq: "light-blue-rule-2.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        peachRule2: file(relativePath: { eq: "peach-rule-2.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        creamRule2: file(relativePath: { eq: "cream-rule-2.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        blueRule3: file(relativePath: { eq: "blue-rule-3.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        lightBlueRule3: file(relativePath: { eq: "light-blue-rule-3.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        peachRule3: file(relativePath: { eq: "peach-rule-3.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        creamRule3: file(relativePath: { eq: "cream-rule-3.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
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

  const Img = () => {
    if (props.color === 'peach') {
      return (
        <SchemedImg
          fixedLight={peachRule.childImageSharp.fixed}
          fixedDark={creamRule.childImageSharp.fixed}
        />
      );
    } else if (props.color === 'blue') {
      return (
        <SchemedImg
          fixedLight={blueRule.childImageSharp.fixed}
          fixedDark={lightBlueRule.childImageSharp.fixed}
        />
      );
    }
  };

  return (
    <Div>
      <Img />
    </Div>
  );
};
