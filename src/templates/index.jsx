// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useIntl } from 'react-intl';
import { CalendarIcon, DeviceDesktopIcon, NorthStarIcon, PencilIcon } from '@primer/octicons-react';

import Break from '../components/Break';
import Button from '../components/Button';
import Card from '../components/Card';
import Cover from '../components/Cover';
import IndexCover from '../components/IndexCover';
import Intl from '../components/Intl';
import Layout from '../components/Layout';
import Theme from '../components/Theme';

import createIntl from '../utils/createIntl';

import theme from '../theme';

const IndexPage = (props) => {
  const i = createIntl(useIntl());

  const H2 = styled.h2`
    font-size: 2.2rem;
    text-align: center;
  `;

  const Section = styled.section`
    margin: 2em ${(props) => props.theme.layout.marginPhone};

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      margin: 2em ${(props) => props.theme.layout.marginTablet};
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 2em
        ${(props) =>
          props.lesserMargin ? props.theme.layout.marginTablet : props.theme.layout.marginDesktop};
    }
  `;

  const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2em;
    justify-items: center;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2em;
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 2em;
    }
  `;

  const Icon = styled.div`
    text-align: center;
  `;

  const imgStyles = {
    position: 'absolute',
    zIndex: -1,
  };

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
      <IndexCover title={i('indexCoverTitle')}>
        <p>{i('indexCoverContent')}</p>
      </IndexCover>
      <Cover
        title={i('indexStoryTitle')}
        imgTop={
          <Img
            fixed={sourcesStoryTop}
            style={{ top: 0, right: 0, ...imgStyles }}
            objectFit="cover"
          />
        }
        imgBottom={
          <Img
            fixed={sourcesStoryBottom}
            style={{ bottom: 0, left: 0, ...imgStyles }}
            objectFit="cover"
          />
        }
      >
        <p>{i('indexStoryContent')}</p>
        <Link to="#">Kokeilulinkki</Link>
      </Cover>
      <Break color={'orange'} />
      <Section lesserMargin={true}>
        <H2 id={i('indexServicesId')}>{i('indexServicesTitle')}</H2>
        <Cards>
          <Card title={i('indexServicesWebTitle')} icon={<DeviceDesktopIcon size={'large'} />}>
            <p>{i('indexServicesWebContent')}</p>
            <Button to="#">Lue lisää</Button>
          </Card>
          <Card title={i('indexServicesDesignTitle')} icon={<PencilIcon size={'large'} />}>
            <p>{i('indexServicesDesignContent')}</p>
          </Card>
          <Card title={i('indexServicesEventsTitle')} icon={<CalendarIcon size={'large'} />}>
            <p>{i('indexServicesEventsContent')}</p>
          </Card>
        </Cards>
      </Section>
      <Break color={'turquoise'} />
      <Section>
        <Icon>
          <NorthStarIcon size={'large'} />
        </Icon>
        <H2 id={i('indexPortfolioId')}>{i('indexPortfolioTitle')}</H2>
      </Section>
    </Layout>
  );
};

const Index = (props) => (
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <IndexPage {...props} />
    </Theme>
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
    orangeLine: file(relativePath: { eq: "orange-line.png" }) {
      childImageSharp {
        fixed(width: 250, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
