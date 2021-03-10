// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { getImage, withArtDirection } from 'gatsby-plugin-image';
import styled from 'styled-components';

import SchemedImage from './SchemedImage';

import theme from '../theme';

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

  const Section = styled.section`
    overflow: hidden;
    position: relative;
    min-width: 100%;
    min-height: 100%;
    margin: 0 0 2em;
  `;

  const Inner = styled.div`
    margin: 2em ${(props) => props.theme.layout.marginPhone};
    padding: 0.5em 0 1em;

    @media screen and ${(props) => props.theme.devices.phoneL} {
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

  const Image = styled(SchemedImage)`
    @media screen and ${(props) => props.theme.devices.tablet} {
      width: ${(props) => props.tablet.width};
      height: ${(props) => props.tablet.height};
    }
  `;

  const imageStyles = {
    position: 'absolute',
    zIndex: -1,
  };

  return (
    <Section>
      <Image
        light={imagesTopLight}
        dark={imagesTopDark}
        style={{ ...props.style.top, ...imageStyles }}
        objectFit="cover"
        tablet={{ ...props.tablet }}
      />
      <Inner>
        <header>
          {(() => {
            if (props.htmlTitle) {
              return <Title dangerouslySetInnerHTML={{ __html: props.title }} />;
            } else {
              return <Title>{props.title}</Title>;
            }
          })()}
        </header>
        <Content>{props.children}</Content>
      </Inner>
      <Image
        light={imagesBottomLight}
        dark={imagesBottomDark}
        style={{ ...props.style.bottom, ...imageStyles }}
        objectFit="cover"
        tablet={{ ...props.tablet }}
      />
    </Section>
  );
};

export default Cover;
