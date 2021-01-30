// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useIntl } from 'react-intl';

import Cover from '../components/Cover';
import Intl from '../components/Intl';
import Layout from '../components/Layout';

import createIntl from '../utils/createIntl';

import theme from '../theme';

const IndexPage = (props) => {
  const i = createIntl(useIntl());

  const imgStyles = {
    position: 'absolute',
    zIndex: -1,
  };

  const sourcesCoverTop = [
    props.data.topCoverPhoneSmall.childImageSharp.fixed,
    {
      ...props.data.topCoverTablet.childImageSharp.fixed,
      media: theme.devices.tablet,
    },
  ];

  const sourcesCoverBottom = [
    props.data.bottomCoverPhoneSmall.childImageSharp.fixed,
    {
      ...props.data.bottomCoverTablet.childImageSharp.fixed,
      media: theme.devices.tablet,
    },
  ];

  const sourcesStoryTop = [
    props.data.topStoryPhoneSmall.childImageSharp.fixed,
    {
      ...props.data.topStoryTablet.childImageSharp.fixed,
      media: theme.devices.tablet,
    },
  ];

  const sourcesStoryBottom = [
    props.data.bottomStoryPhoneSmall.childImageSharp.fixed,
    {
      ...props.data.bottomStoryTablet.childImageSharp.fixed,
      media: theme.devices.tablet,
    },
  ];

  return (
    <Layout
      title={i('indexTitle')}
      home
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
      <Cover
        title={i('indexCoverTitle')}
        imgTop={<Img fixed={sourcesCoverTop} style={imgStyles} objectFit="cover" />}
        imgBottom={
          <Img
            fixed={sourcesCoverBottom}
            style={{ bottom: 0, right: 0, ...imgStyles }}
            objectFit="cover"
          />
        }
      >
        <p>{i('indexCoverContent')}</p>
      </Cover>
      <Cover title={i('indexStoryTitle')}
        imgTop={<Img fixed={sourcesStoryTop} style={{ top: 0, right: 0, ...imgStyles }} objectFit="cover" />}
        imgBottom={
          <Img
            fixed={sourcesStoryBottom}
            style={{ bottom: 0, left: 0, ...imgStyles }}
            objectFit="cover"
          />
        }>
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
    topCoverPhoneSmall: file(relativePath: { eq: "front-page/cover-phone-small-up-left.png" }) {
      childImageSharp {
        fixed(width: 300, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bottomCoverPhoneSmall: file(
      relativePath: { eq: "front-page/cover-phone-small-down-right.png" }
    ) {
      childImageSharp {
        fixed(width: 300, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    topCoverTablet: file(relativePath: { eq: "front-page/cover-tablet-up-left.png" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bottomCoverTablet: file(relativePath: { eq: "front-page/cover-tablet-down-right.png" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    topStoryPhoneSmall: file(relativePath: { eq: "front-page/story-phone-small-up-right.png" }) {
      childImageSharp {
        fixed(width: 300, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bottomStoryPhoneSmall: file(
      relativePath: { eq: "front-page/story-phone-small-down-left.png" }
    ) {
      childImageSharp {
        fixed(width: 300, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    topStoryTablet: file(relativePath: { eq: "front-page/story-tablet-up-right.png" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bottomStoryTablet: file(relativePath: { eq: "front-page/story-tablet-down-left.png" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
