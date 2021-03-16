// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import {
  CalendarIcon,
  DeviceDesktopIcon,
  NorthStarIcon,
  PaperAirplaneIcon,
  PencilIcon,
} from '@primer/octicons-react';

import AuthorContactCard from '../components/AuthorContactCard';
import Break from '../components/Break';
import FeatureCard from '../components/FeatureCard';
import IndexCover from '../components/IndexCover';
import Intl from '../components/Intl';
import LayoutIndex from '../components/layout/LayoutIndex';
import StoryCover from '../components/StoryCover';
import Theme from '../components/Theme';

import createIntl from '../utils/createIntl';

const H2 = styled.h2`
  font-size: 2.2rem;
  text-align: center;
`;

const Section = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginPhone};

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 4em
      ${(props) =>
        props.lesserMargin ? props.theme.layout.marginTablet : props.theme.layout.marginDesktop};
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
  margin: 2em 0;

  @media screen and ${(props) => props.theme.devices.phoneL} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
  }
`;

const Icon = styled.div`
  text-align: center;
`;

const Centered = styled.div`
  text-align: center;
`;

const Page = (props) => {
  const i = createIntl(useIntl());

  const { contentfulIndexPage: page } = props.data;

  return (
    <LayoutIndex title={page.title} lang={props.pageContext.lang} pageKey={props.pageContext.key}>
      <IndexCover title={page.introTitle} htmlTitle>
        <div dangerouslySetInnerHTML={{ __html: page.introBody.childMarkdownRemark.html }} />
      </IndexCover>
      <StoryCover title={page.storyTitle}>
        <div dangerouslySetInnerHTML={{ __html: page.storyBody.childMarkdownRemark.html }} />
      </StoryCover>
      <Break color={'peach'} mode={1} />
      <Section lesserMargin>
        <H2 id={page.productsId}>{page.productsTitle}</H2>
        <Cards>
          <FeatureCard title={page.products[0].title} icon={<DeviceDesktopIcon size={'large'} />}>
            <div
              dangerouslySetInnerHTML={{
                __html: page.products[0].description.childMarkdownRemark.html,
              }}
            />
          </FeatureCard>
          <FeatureCard title={page.products[1].title} icon={<PencilIcon size={'large'} />}>
            <div
              dangerouslySetInnerHTML={{
                __html: page.products[1].description.childMarkdownRemark.html,
              }}
            />
          </FeatureCard>
          <FeatureCard title={page.products[2].title} icon={<CalendarIcon size={'large'} />}>
            <div
              dangerouslySetInnerHTML={{
                __html: page.products[2].description.childMarkdownRemark.html,
              }}
            />
          </FeatureCard>
        </Cards>
      </Section>
      <Break color={'blue'} mode={1} />
      <Section>
        <Icon>
          <NorthStarIcon size={'large'} />
        </Icon>
        <H2 id={page.portfolioId}>{page.portfolioTitle}</H2>
      </Section>
      <Break color={'peach'} mode={3} />
      <Section lesserMargin>
        <Icon>
          <PaperAirplaneIcon size={'large'} />
        </Icon>
        <H2 id={page.contactId}>{page.contactTitle}</H2>
        <Centered dangerouslySetInnerHTML={{ __html: page.contactBody.childMarkdownRemark.html }} />
        <Cards>
          {page.contacts.map((contact) => {
            return <AuthorContactCard key={contact.id} author={contact} />;
          })}
        </Cards>
      </Section>
    </LayoutIndex>
  );
};

const Index = (props) => (
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default Index;

export const pageQuery = graphql`
  query IndexQuery($locale: String) {
    contentfulIndexPage(node_locale: { eq: $locale }) {
      contactId
      contactTitle
      introTitle
      portfolioId
      portfolioTitle
      productsId
      productsTitle
      storyTitle
      title
      contactBody {
        childMarkdownRemark {
          html
        }
      }
      contacts {
        email
        id
        job
        name
        profileImage {
          gatsbyImageData(width: 200)
        }
      }
      introBody {
        childMarkdownRemark {
          html
        }
      }
      products {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
      }
      storyBody {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
