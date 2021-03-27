// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
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

  @media screen and ${(props) => props.theme.devices.tablet} {
    display: none;
  }
`;

const Image = styled(SchemedImage)`
  display: none;

  @media screen and ${(props) => props.theme.devices.tablet} {
    display: inline-block;
    width: ${(props) => props.tablet.width};
    height: ${(props) => props.tablet.height};
  }
`;

const Inner = styled.div`
  margin: 0 ${(props) => props.theme.layout.marginMobile};
  padding: 0.5em 0 1em;

  @media screen and ${(props) => props.theme.devices.mobileL} {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
    padding: 2em 0;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
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

const Cover = (props) => {
  const { data } = props;

  const imagesTopLight = withArtDirection(getImage(data.topPhoneSmallLight), [
    {
      media: theme.devices.tablet,
      image: getImage(data.topTabletLight),
    },
  ]);
  const imagesTopDark = withArtDirection(getImage(data.topPhoneSmallDark), [
    {
      media: theme.devices.tablet,
      image: getImage(data.topTabletDark),
    },
  ]);

  const imagesBottomLight = withArtDirection(getImage(data.bottomPhoneSmallLight), [
    {
      media: theme.devices.tablet,
      image: getImage(data.bottomTabletLight),
    },
  ]);
  const imagesBottomDark = withArtDirection(getImage(data.bottomPhoneSmallDark), [
    {
      media: theme.devices.tablet,
      image: getImage(data.bottomTabletDark),
    },
  ]);

  const imageStyles = {
    position: 'absolute',
    zIndex: -1,
  };

  return (
    <Section>
      <TopRuleWrapper>
        <Rule color={props.rule.color} mode={props.rule.mode} />
      </TopRuleWrapper>
      <Image
        alt=""
        light={imagesTopLight}
        dark={imagesTopDark}
        style={{ ...props.style.top, ...imageStyles }}
        objectFit="cover"
        tablet={{ ...props.tabletStyle }}
      />
      <Inner>
        <header>
          {(() => {
            if (props.htmlTitle) {
              return <Title dangerouslySetInnerHTML={{ __html: props.title }} />;
            }

            return <Title>{props.title}</Title>;
          })()}
        </header>
        <Content>{props.children}</Content>
      </Inner>
      <Image
        alt=""
        light={imagesBottomLight}
        dark={imagesBottomDark}
        style={{ ...props.style.bottom, ...imageStyles }}
        objectFit="cover"
        tablet={{ ...props.tabletStyle }}
      />
    </Section>
  );
};

export default Cover;
