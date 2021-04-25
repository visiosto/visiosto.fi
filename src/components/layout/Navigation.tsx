// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';

import LocalizedAnchorLink from '../link/LocalizedAnchorLink';
import LocalizedLink from '../link/LocalizedLink';
import SchemedImage from '../SchemedImage';

const Nav = styled.nav`
  margin: 2rem auto;
`;

const Toggle = styled.div`
  clear: both;
  display: block;
  margin: 1rem auto;
  width: 40px;
  height: 32px;
  cursor: pointer;
  user-select: none;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    display: none;
  }
`;

const ToggleBar = styled.div<{ toggled: boolean }>`
  display: block;
  width: 33px;
  height: 4px;
  margin: 0 auto 5px;
  border-radius: 3px;
  transform-origin: 4px 0;
  z-index: 1;
  background: var(--color-text);

  ${(props) =>
    props.toggled &&
    css`
      opacity: 1;
      transform: translate(4px) translate(4px, -1px) rotate(45deg) translate(-2px, -1px);
    `};

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-child(2) {
    transform-origin: 0% 100%;

    ${(props) =>
      props.toggled &&
      css`
        opacity: 0;
        transform: translate(4px) rotate(0deg) scale(0.2, 0.2);
      `};
  }

  &:last-child {
    ${(props) =>
      props.toggled &&
      css`
        transform: translate(4px) rotate(-45deg) translate(0, -1px);
      `};
  }
`;

const Ul = styled.ul<{ toggled: boolean }>`
  overflow: hidden;
  display: block;
  max-height: 0;
  margin: 0;
  padding-left: 0;
  list-style: none;
  text-align: center;

  ${(props) =>
    props.toggled &&
    css`
      overflow: visible;
      max-height: none;
    `};

  @media screen and (${(props) => props.theme.devices.tablet}) {
    overflow: visible;
    display: flex;
    justify-content: center;
    max-height: none;
  }
`;

const Li = styled.li`
  position: relative;
  margin: 2rem 0;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 0;
  }
`;

const ImageDiv = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
`;

const BackgroundImage = styled(SchemedImage)`
  position: relative;
  left: -50%;
  z-index: -1;
  margin: -2.3rem 0 0;
`;

const linkStyle = css`
  position: relative;
  margin: 0 auto;
  border-radius: ${(props) => props.theme.borders.commonRadius};
  padding: 2rem 3rem;
  background: transparent;
  font-size: 1.1rem;
  font-weight: 400;
  text-decoration: none;
  color: var(--color-text);

  &:visited {
    color: var(--color-text);
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--color-text);

    div {
      display: inline-block;
    }
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 0 auto;
    padding: 1rem 3rem;
  }
`;

const Link = styled(LocalizedLink)`${linkStyle}`;

const AnchorLink = styled(LocalizedAnchorLink)`${linkStyle}`;

const createBackgroundImage = function createSchemedBackgroundImage(imageDataLight, imageDataDark) {
  return (
    <ImageDiv>
      <BackgroundImage
        dark={getImage(imageDataDark)!}
        light={getImage(imageDataLight)!}
        loading="eager"
      />
    </ImageDiv>
  )
}

const propTypes = { locale: PropTypes.string.isRequired };

function Navigation({ locale }) {
  const data = useStaticQuery(
    graphql`
      query {
        backgroundHoverLight1: file(relativePath: { eq: "navigation/background-hover-light-1.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150, placeholder: BLURRED, quality: 100)
          }
        }
        backgroundHoverDark1: file(relativePath: { eq: "navigation/background-hover-dark-1.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150, placeholder: BLURRED, quality: 100)
          }
        }
        backgroundHoverLight2: file(relativePath: { eq: "navigation/background-hover-light-2.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150, placeholder: BLURRED, quality: 100)
          }
        }
        backgroundHoverDark2: file(relativePath: { eq: "navigation/background-hover-dark-2.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150, placeholder: BLURRED, quality: 100)
          }
        }
        backgroundHoverLight3: file(relativePath: { eq: "navigation/background-hover-light-3.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150, placeholder: BLURRED, quality: 100)
          }
        }
        backgroundHoverDark3: file(relativePath: { eq: "navigation/background-hover-dark-3.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150, placeholder: BLURRED, quality: 100)
          }
        }
        backgroundHoverLight4: file(relativePath: { eq: "navigation/background-hover-light-4.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150, placeholder: BLURRED, quality: 100)
          }
        }
        backgroundHoverDark4: file(relativePath: { eq: "navigation/background-hover-dark-4.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150, placeholder: BLURRED, quality: 100)
          }
        }
        allContentfulMenu(filter: { contentful_id: { eq: "7oKEb5SnrTGF1vbDGwfBbr" } }) {
          edges {
            node {
              node_locale
              links {
                ... on ContentfulIndexPage {
                  contentful_id
                  title
                  internal {
                    type
                  }
                }
                ... on ContentfulId {
                  contentful_id
                  slug
                  title
                  internal {
                    type
                  }
                }
                ... on ContentfulPath {
                  contentful_id
                  title
                  internal {
                    type
                  }
                }
              }
            }
          }
        }
      }
    `,
  );

  const [toggled, setToggled] = useState(false);

  const {
    backgroundHoverLight1,
    backgroundHoverDark1,
    backgroundHoverLight2,
    backgroundHoverDark2,
    backgroundHoverLight3,
    backgroundHoverDark3,
    backgroundHoverLight4,
    backgroundHoverDark4,
  } = data;

  const backgrounds = {
    image1: createBackgroundImage(backgroundHoverLight1!, backgroundHoverDark1!),
    image2: createBackgroundImage(backgroundHoverLight2!, backgroundHoverDark2!),
    image3: createBackgroundImage(backgroundHoverLight3!, backgroundHoverDark3!),
    image4: createBackgroundImage(backgroundHoverLight4!, backgroundHoverDark4!),
  }

  return (
    <Nav>
      <Toggle
        aria-controls="primary-menu"
        aria-expanded={toggled}
        onClick={() => setToggled(!toggled)}
      >
        <ToggleBar toggled={toggled} />
        <ToggleBar toggled={toggled} />
        <ToggleBar toggled={toggled} />
      </Toggle>
      <Ul id="primary-menu" toggled={toggled}>
        {data.allContentfulMenu.edges
          .filter(({ node }) => node.node_locale === locale)[0]
          .node.links.map((link, index) => {
            switch (link.internal.type) {
              case 'ContentfulIndexPage':
                return (
                  <Li key={link.contentful_id}>
                    <Link locale={locale} to={link.contentful_id}>
                      {link.title}
                      {backgrounds[`image${++index}`]}
                    </Link>
                  </Li>
                );
              case 'ContentfulId':
                return (
                  <Li key={link.contentful_id}>
                    <AnchorLink locale={locale} to={`/#${link.slug}`}>
                      {link.title}
                      {backgrounds[`image${++index}`]}
                    </AnchorLink>
                  </Li>
                );
              case 'ContentfulPath':
                return (
                  <Li key={link.contentful_id}>
                    <Link locale={locale} to={link.contentful_id}>
                      {link.title}
                      {backgrounds[`image${++index}`]}
                    </Link>
                  </Li>
                );
              default:
                return null;
            }
          })}
      </Ul>
    </Nav>
  );
}

Navigation.propTypes = propTypes;

export default Navigation;
