// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, withArtDirection } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Rule from './Rule';
import SchemedImage from './SchemedImage';

import theme from '../theme';

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

const Image = styled(SchemedImage)`
  display: none;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    display: inline-block;
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
        lensTopPhoneSmallLight: file(
          relativePath: { eq: "front-page/cover/phone-small-up-left-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        lensTopPhoneSmallDark: file(
          relativePath: { eq: "front-page/cover/phone-small-up-left-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        lensTopTabletLight: file(
          relativePath: { eq: "front-page/cover/tablet-up-left-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        lensTopTabletDark: file(relativePath: { eq: "front-page/cover/tablet-up-left-dark.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        lensBottomPhoneSmallLight: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        lensBottomPhoneSmallDark: file(
          relativePath: { eq: "front-page/cover/phone-small-down-right-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        lensBottomTabletLight: file(
          relativePath: { eq: "front-page/cover/tablet-down-right-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        lensBottomTabletDark: file(
          relativePath: { eq: "front-page/cover/tablet-down-right-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        linesTopPhoneSmallLight: file(
          relativePath: { eq: "front-page/story/phone-small-up-right-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        linesTopPhoneSmallDark: file(
          relativePath: { eq: "front-page/story/phone-small-up-right-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        linesTopTabletLight: file(
          relativePath: { eq: "front-page/story/tablet-up-right-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        linesTopTabletDark: file(
          relativePath: { eq: "front-page/story/tablet-up-right-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        linesBottomPhoneSmallLight: file(
          relativePath: { eq: "front-page/story/phone-small-down-left-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        linesBottomPhoneSmallDark: file(
          relativePath: { eq: "front-page/story/phone-small-down-left-dark.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
        linesBottomTabletLight: file(
          relativePath: { eq: "front-page/story/tablet-down-left-light.png" }
        ) {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        linesBottomTabletDark: file(
          relativePath: { eq: "front-page/story/tablet-down-left-dark.png" }
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
      const {
        lensTopPhoneSmallLight,
        lensTopPhoneSmallDark,
        lensTopTabletLight,
        lensTopTabletDark,
        lensBottomPhoneSmallLight,
        lensBottomPhoneSmallDark,
        lensBottomTabletLight,
        lensBottomTabletDark,
      } = data;
      return {
        topPhoneSmallLight: lensTopPhoneSmallLight,
        topPhoneSmallDark: lensTopPhoneSmallDark,
        topTabletLight: lensTopTabletLight,
        topTabletDark: lensTopTabletDark,
        bottomPhoneSmallLight: lensBottomPhoneSmallLight,
        bottomPhoneSmallDark: lensBottomPhoneSmallDark,
        bottomTabletLight: lensBottomTabletLight,
        bottomTabletDark: lensBottomTabletDark,
      };
    }
    case 'lines': {
      const {
        linesTopPhoneSmallLight,
        linesTopPhoneSmallDark,
        linesTopTabletLight,
        linesTopTabletDark,
        linesBottomPhoneSmallLight,
        linesBottomPhoneSmallDark,
        linesBottomTabletLight,
        linesBottomTabletDark,
      } = data;
      return {
        topPhoneSmallLight: linesTopPhoneSmallLight,
        topPhoneSmallDark: linesTopPhoneSmallDark,
        topTabletLight: linesTopTabletLight,
        topTabletDark: linesTopTabletDark,
        bottomPhoneSmallLight: linesBottomPhoneSmallLight,
        bottomPhoneSmallDark: linesBottomPhoneSmallDark,
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
    mode: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

function Cover({ children, imagesType, rule, title }) {
  const {
    topPhoneSmallLight,
    topPhoneSmallDark,
    topTabletLight,
    topTabletDark,
    bottomPhoneSmallLight,
    bottomPhoneSmallDark,
    bottomTabletLight,
    bottomTabletDark,
  } = useCoverImages(imagesType);

  const imagesTopLight = withArtDirection(getImage(topPhoneSmallLight)!, [
    {
      media: `(${theme.devices.tablet})`,
      image: getImage(topTabletLight)!,
    },
  ]);
  const imagesTopDark = withArtDirection(getImage(topPhoneSmallDark)!, [
    {
      media: `(${theme.devices.tablet})`,
      image: getImage(topTabletDark)!,
    },
  ]);

  const imagesBottomLight = withArtDirection(getImage(bottomPhoneSmallLight)!, [
    {
      media: `(${theme.devices.tablet})`,
      image: getImage(bottomTabletLight)!,
    },
  ]);
  const imagesBottomDark = withArtDirection(getImage(bottomPhoneSmallDark)!, [
    {
      media: `(${theme.devices.tablet})`,
      image: getImage(bottomTabletDark)!,
    },
  ]);

  const imageStyles = {
    position: 'absolute',
    zIndex: -1,
  };

  const topStyles = useTopImageStyle(imagesType);
  const bottomStyles = useBottomImageStyle(imagesType);

  return (
    <Section>
      <TopRuleWrapper>
        <Rule color={rule.color} mode={rule.mode} />
      </TopRuleWrapper>
      <Image
        alt=""
        light={imagesTopLight}
        dark={imagesTopDark}
        style={{ ...topStyles, ...imageStyles }}
        objectFit="cover"
      />
      <Inner>
        <header>
          <Title>{title}</Title>
        </header>
        <Content>{children}</Content>
      </Inner>
      <Image
        alt=""
        light={imagesBottomLight}
        dark={imagesBottomDark}
        style={{ ...bottomStyles, ...imageStyles }}
        objectFit="cover"
      />
    </Section>
  );
}

Cover.propTypes = propTypes;

export default Cover;
