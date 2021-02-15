// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import SchemedImg from './SchemedImg';

const getRules = (ruleType) => {
  switch (ruleType) {
    case 3:
      return useStaticQuery(
        graphql`
          query {
            blueRule: file(relativePath: { eq: "blue-rule-3.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            lightBlueRule: file(relativePath: { eq: "light-blue-rule-3.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            peachRule: file(relativePath: { eq: "peach-rule-3.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            creamRule: file(relativePath: { eq: "cream-rule-3.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `,
      );
    case 2:
      return useStaticQuery(
        graphql`
          query {
            blueRule: file(relativePath: { eq: "blue-rule-2.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            lightBlueRule: file(relativePath: { eq: "light-blue-rule-2.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            peachRule: file(relativePath: { eq: "peach-rule-2.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            creamRule: file(relativePath: { eq: "cream-rule-2.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `,
      );
    case 1:
    default:
      return useStaticQuery(
        graphql`
          query {
            blueRule: file(relativePath: { eq: "blue-rule-1.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            lightBlueRule: file(relativePath: { eq: "light-blue-rule-1.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            peachRule: file(relativePath: { eq: "peach-rule-1.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            creamRule: file(relativePath: { eq: "cream-rule-1.png" }) {
              childImageSharp {
                fixed(width: 250, height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `,
      );
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
