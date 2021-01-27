// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import Cover from '../components/Cover';
import Intl from '../components/Intl';
import Layout from '../components/Layout';

import createIntl from '../utils/createIntl';

import coverImagePhoneSmall from '../assets/front-page/cover-phone-small.png';
import coverImageTablet from '../assets/front-page/cover-tablet.png';
import coverImageLaptopSmall from '../assets/front-page-cover-laptop-small.png';
import coverImageDesktopSmall from '../assets/front-page-cover-desktop-small.png';
import coverImageDesktopMedium from '../assets/front-page-cover-desktop-medium.png';

import storyImageDesktopMedium from '../assets/story-cover-desktop-medium.png';

const IndexPage = (props) => {
  const i = createIntl(useIntl());

  return (
    <Layout
      title={i('indexTitle')}
      home
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
      <Cover
        title={i('indexCoverTitle')}
        backgrounds={{
          default: coverImagePhoneSmall,
          phoneSmall: coverImagePhoneSmall,
          // TODO The images below must still be fixed.
          tablet: coverImageTablet,
          desktopSmall: coverImageDesktopSmall,
          desktopMedium: coverImageDesktopMedium,
        }}
      >
        <p>{i('indexCoverContent')}</p>
      </Cover>
      <Cover
        title={i('indexStoryTitle')}
        backgrounds={{
          default: storyImageDesktopMedium,
          desktopMedium: storyImageDesktopMedium,
        }}
      >
        <p>{i('indexStoryContent')}</p>
        <Link to="#">Kokeilulinkki</Link>
      </Cover>
    </Layout>
  );
};

const Index = (props) => (
  <Intl locale={props.pageContext.lang}>
    <IndexPage {...props} />
  </Intl>
);

export default Index;

export const query = graphql`
  query IndexPage {
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
  }
`;
