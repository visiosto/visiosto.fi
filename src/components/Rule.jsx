// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default (props) => {
  const { orangeRule, turquoiseRule } = useStaticQuery(
    graphql`
      query {
        orangeRule: file(relativePath: { eq: "orange-rule.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        turquoiseRule: file(relativePath: { eq: "turquoise-rule.png" }) {
          childImageSharp {
            fixed(width: 250, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `,
  );

  const Div = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <Div>
      <Img
        fixed={(() => {
          if (props.color === 'orange') {
            return orangeRule.childImageSharp.fixed;
          } else if (props.color === 'turquoise') {
            return turquoiseRule.childImageSharp.fixed;
          }
        })()}
      />
    </Div>
  );
};
