// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';

import Rule from './Rule';
import SchemedImage from './SchemedImage';

const Section = styled.section`
  overflow: hidden;
  position: relative;
  min-width: 100%;
  min-height: 100%;
  margin: 0 0 2em;
`;

const TopRuleWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    display: none;
  }
`;

const ImageWrapper = styled.div<{ top?: number; right?: number; bottom?: number; left?: number }>`
  display: none;
  position: absolute;
  z-index: -1;

  ${(props) => {
    if (props.top !== undefined) {
      return css`
        top: ${props.top};
      `;
    }

    return null;
  }}

  ${(props) => {
    if (props.right !== undefined) {
      return css`
        right: ${props.right};
      `;
    }

    return null;
  }}
  ${(props) => {
    if (props.bottom !== undefined) {
      return css`
        bottom: ${props.bottom};
      `;
    }

    return null;
  }}

  ${(props) => {
    if (props.left !== undefined) {
      return css`
        left: ${props.left};
      `;
    }

    return null;
  }}

  @media screen and (${(props) => props.theme.devices.tablet}) {
    display: inline-block;
  }
`;

const Image = styled(SchemedImage)`
  @media screen and (${(props) => props.theme.devices.tablet}) {
    width: 400px;
    height: 400px;
  }
`;

const Inner = styled.div`
  margin: 0 ${(props) => props.theme.layout.marginMobile};
  padding: 0.5em 0 1em;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
    padding: 2em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
    padding: 2em 0;
  }
`;

const Title = styled.h2`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 3rem;
`;

const Content = styled.div`
  margin: 0 0 3rem;
  font-size: 1.1rem;
  text-align: center;
`;

const useCoverImages = function useCoverImagesQueryData(imagesType) {
  const data = useStaticQuery(
    graphql`
      {
        lensTopTabletLight: file(
          relativePath: { eq: "front-page/cover/tablet-up-blue-peach.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        lensTopTabletDark: file(
          relativePath: { eq: "front-page/cover/tablet-up-turquoise-peach.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        lensBottomTabletLight: file(
          relativePath: { eq: "front-page/cover/tablet-down-blue-peach.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        lensBottomTabletDark: file(
          relativePath: { eq: "front-page/cover/tablet-down-turquoise-peach.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        linesTopTabletLight: file(relativePath: { eq: "front-page/story/tablet-up-blue.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        linesTopTabletDark: file(relativePath: { eq: "front-page/story/tablet-up-turquoise.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        linesBottomTabletLight: file(
          relativePath: { eq: "front-page/story/tablet-down-blue.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        linesBottomTabletDark: file(
          relativePath: { eq: "front-page/story/tablet-down-turquoise.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
      }
    `,
  );

  switch (imagesType) {
    case 'lens': {
      const { lensTopTabletLight, lensTopTabletDark, lensBottomTabletLight, lensBottomTabletDark } =
        data;
      return {
        topTabletLight: lensTopTabletLight,
        topTabletDark: lensTopTabletDark,
        bottomTabletLight: lensBottomTabletLight,
        bottomTabletDark: lensBottomTabletDark,
      };
    }
    case 'lines': {
      const {
        linesTopTabletLight,
        linesTopTabletDark,
        linesBottomTabletLight,
        linesBottomTabletDark,
      } = data;
      return {
        topTabletLight: linesTopTabletLight,
        topTabletDark: linesTopTabletDark,
        bottomTabletLight: linesBottomTabletLight,
        bottomTabletDark: linesBottomTabletDark,
      };
    }
    default: {
      return {};
    }
  }
};

const useTopImageStyle = function useTopImageStylesForImagesType(imagesType) {
  switch (imagesType) {
    case 'lens':
      return {};
    case 'lines':
      return { top: 0, right: 0 };
    default:
      return {};
  }
};

const useBottomImageStyle = function useTopImageStylesForImagesType(imagesType) {
  switch (imagesType) {
    case 'lens':
      return { bottom: 0, right: 0 };
    case 'lines':
      return { bottom: 0, left: 0 };
    default:
      return {};
  }
};

const propTypes = {
  children: PropTypes.node.isRequired,
  imagesType: PropTypes.string.isRequired,
  rule: PropTypes.shape({
    color: PropTypes.string.isRequired,
    ignoreColorScheme: PropTypes.bool,
    mode: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

function Cover({ children, imagesType, rule, title }) {
  const { topTabletLight, topTabletDark, bottomTabletLight, bottomTabletDark } =
    useCoverImages(imagesType);

  const topStyles = useTopImageStyle(imagesType);
  const bottomStyles = useBottomImageStyle(imagesType);

  return (
    <Section>
      <TopRuleWrapper>
        {(() => {
          if (rule.ignoreColorScheme) {
            return <Rule color={rule.color} mode={rule.mode} ignoreColorScheme />;
          }

          return <Rule color={rule.color} mode={rule.mode} />;
        })()}
      </TopRuleWrapper>
      <ImageWrapper
        right={topStyles.right !== undefined ? topStyles.right : undefined}
        top={topStyles.top !== undefined ? topStyles.top : undefined}
      >
        <Image
          alt=""
          dark={getImage(topTabletDark)!}
          light={getImage(topTabletLight)!}
          objectFit="cover"
        />
      </ImageWrapper>
      <Inner>
        <header>
          <Title>{title}</Title>
        </header>
        <Content>{children}</Content>
      </Inner>
      <ImageWrapper
        bottom={bottomStyles.bottom !== undefined ? bottomStyles.bottom : undefined}
        left={bottomStyles.left !== undefined ? bottomStyles.left : undefined}
        right={bottomStyles.right !== undefined ? bottomStyles.right : undefined}
      >
        <Image
          alt=""
          dark={getImage(bottomTabletDark)!}
          light={getImage(bottomTabletLight)!}
          objectFit="cover"
        />
      </ImageWrapper>
    </Section>
  );
}

Cover.propTypes = propTypes;

export default Cover;
