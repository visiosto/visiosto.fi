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

  const {
    coverMarkdownRemark: cover,
    storyMarkdownRemark: story,
    serviceWebsitesMarkdownRemark: websites,
    serviceDesignMarkdownRemark: design,
    serviceEventsMarkdownRemark: events,
    sectionContactMarkdownRemark: contact,
    allContentfulAuthor: authors,
  } = props.data;

  return (
    <LayoutIndex
      title={i('indexTitle')}
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
      <IndexCover title={cover.frontmatter.title} htmlTitle>
        <div dangerouslySetInnerHTML={{ __html: cover.html }} />
      </IndexCover>
      <StoryCover title={story.frontmatter.title}>
        <div dangerouslySetInnerHTML={{ __html: story.html }} />
      </StoryCover>
      <Break color={'peach'} mode={1} />
      <Section lesserMargin>
        <H2 id={i('indexServicesId')}>{i('indexServicesTitle')}</H2>
        <Cards>
          <FeatureCard
            title={websites.frontmatter.title}
            icon={<DeviceDesktopIcon size={'large'} />}
          >
            <div dangerouslySetInnerHTML={{ __html: websites.html }} />
          </FeatureCard>
          <FeatureCard title={design.frontmatter.title} icon={<PencilIcon size={'large'} />}>
            <div dangerouslySetInnerHTML={{ __html: design.html }} />
          </FeatureCard>
          <FeatureCard title={events.frontmatter.title} icon={<CalendarIcon size={'large'} />}>
            <div dangerouslySetInnerHTML={{ __html: events.html }} />
          </FeatureCard>
        </Cards>
      </Section>
      <Break color={'blue'} mode={1} />
      <Section>
        <Icon>
          <NorthStarIcon size={'large'} />
        </Icon>
        <H2 id={i('indexPortfolioId')}>{i('indexPortfolioTitle')}</H2>
      </Section>
      <Break color={'peach'} mode={3} />
      <Section lesserMargin>
        <Icon>
          <PaperAirplaneIcon size={'large'} />
        </Icon>
        <H2 id={i('indexContactId')}>{contact.frontmatter.title}</H2>
        <Centered dangerouslySetInnerHTML={{ __html: contact.html }} />
        <Cards>
          {authors.edges.map(({ node: author }) => {
            return <AuthorContactCard key={author.id} author={author} />;
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
  query IndexQuery($lang: String, $locale: String) {
    coverMarkdownRemark: markdownRemark(
      fields: { slug: { eq: "index/cover" }, locale: { eq: $lang } }
    ) {
      html
      frontmatter {
        title
      }
    }
    storyMarkdownRemark: markdownRemark(
      fields: { slug: { eq: "index/story" }, locale: { eq: $lang } }
    ) {
      html
      frontmatter {
        title
      }
    }
    serviceWebsitesMarkdownRemark: markdownRemark(
      fields: { slug: { eq: "index/websites" }, locale: { eq: $lang } }
    ) {
      html
      frontmatter {
        title
      }
    }
    serviceDesignMarkdownRemark: markdownRemark(
      fields: { slug: { eq: "index/design" }, locale: { eq: $lang } }
    ) {
      html
      frontmatter {
        title
      }
    }
    serviceEventsMarkdownRemark: markdownRemark(
      fields: { slug: { eq: "index/events" }, locale: { eq: $lang } }
    ) {
      html
      frontmatter {
        title
      }
    }
    sectionContactMarkdownRemark: markdownRemark(
      fields: { slug: { eq: "index/contact" }, locale: { eq: $lang } }
    ) {
      html
      frontmatter {
        title
      }
    }
    allContentfulAuthor(filter: { node_locale: { eq: $locale } }) {
      edges {
        node {
          email
          id
          job
          name
          profileImage {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`;
