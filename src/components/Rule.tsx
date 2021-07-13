// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import SchemedImage from './SchemedImage';

const useRuleImages = function useRuleImageDataWithStaticQuery(ruleType) {
  const data = useStaticQuery(
    graphql`
      {
        blueRule1: file(relativePath: { eq: "rule/blue-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        turquoiseRule1: file(relativePath: { eq: "rule/turquoise-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        brownRule1: file(relativePath: { eq: "rule/brown-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        peachRule1: file(relativePath: { eq: "rule/peach-1.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        blueRule2: file(relativePath: { eq: "rule/blue-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        turquoiseRule2: file(relativePath: { eq: "rule/turquoise-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        brownRule2: file(relativePath: { eq: "rule/brown-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        peachRule2: file(relativePath: { eq: "rule/peach-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        blueRule3: file(relativePath: { eq: "rule/blue-3.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        turquoiseRule3: file(relativePath: { eq: "rule/turquoise-3.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        brownRule3: file(relativePath: { eq: "rule/brown-3.png" }) {
          childImageSharp {
            gatsbyImageData(width: 250, height: 50, layout: FIXED, placeholder: BLURRED)
          }
        }
        peachRule3: file(relativePath: { eq: "rule/peach-3.png" }) {
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
        turquoiseRule: data.turquoiseRule3,
        peachRule: data.peachRule3,
        brownRule: data.brownRule3,
      };
    case 2:
      return {
        blueRule: data.blueRule2,
        turquoiseRule: data.turquoiseRule2,
        peachRule: data.peachRule2,
        brownRule: data.brownRule2,
      };
    case 1:
    default:
      return {
        blueRule: data.blueRule1,
        turquoiseRule: data.turquoiseRule1,
        peachRule: data.peachRule1,
        brownRule: data.brownRule1,
      };
  }
};

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const propTypes = {
  color: PropTypes.oneOf(['blue', 'turquoise', 'brown', 'peach']),
  ignoreColorScheme: PropTypes.bool,
  mode: PropTypes.oneOf([1, 2, 3]),
};

const defaultProps = { color: 'blue', ignoreColorScheme: false, mode: 1 };

function Rule({ color, ignoreColorScheme, mode }) {
  const { blueRule, turquoiseRule, brownRule, peachRule } = useRuleImages(mode);

  if (color === 'blue') {
    if (ignoreColorScheme) {
      return (
        <Div>
          <SchemedImage alt="" dark={getImage(blueRule)!} light={getImage(blueRule)!} />
        </Div>
      );
    }

    return (
      <Div>
        <SchemedImage alt="" dark={getImage(turquoiseRule)!} light={getImage(blueRule)!} />
      </Div>
    );
  }

  if (color === 'turqoise') {
    if (ignoreColorScheme) {
      return (
        <Div>
          <SchemedImage alt="" dark={getImage(turquoiseRule)!} light={getImage(turquoiseRule)!} />
        </Div>
      );
    }

    return (
      <Div>
        <SchemedImage alt="" dark={getImage(turquoiseRule)!} light={getImage(blueRule)!} />
      </Div>
    );
  }

  if (color === 'brown') {
    if (ignoreColorScheme) {
      return (
        <Div>
          <SchemedImage alt="" dark={getImage(brownRule)!} light={getImage(brownRule)!} />
        </Div>
      );
    }

    return (
      <Div>
        <SchemedImage alt="" dark={getImage(peachRule)!} light={getImage(brownRule)!} />
      </Div>
    );
  }

  if (color === 'peach') {
    if (ignoreColorScheme) {
      return (
        <Div>
          <SchemedImage alt="" dark={getImage(peachRule)!} light={getImage(peachRule)!} />
        </Div>
      );
    }

    return (
      <Div>
        <SchemedImage alt="" dark={getImage(peachRule)!} light={getImage(brownRule)!} />
      </Div>
    );
  }

  return null;
}

Rule.propTypes = propTypes;
Rule.defaultProps = defaultProps;

export default Rule;
