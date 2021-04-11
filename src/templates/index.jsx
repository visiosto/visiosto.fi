// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import {
  CalendarIcon,
  DeviceDesktopIcon,
  NorthStarIcon,
  PaperAirplaneIcon,
  PencilIcon,
} from '@primer/octicons-react';

import AuthorContactCard from '../components/AuthorContactCard';
import Break from '../components/Break';
import ContactForm from '../components/form/ContactForm';
import Cover from '../components/Cover';
import FeatureCard from '../components/FeatureCard';
import Intl from '../components/Intl';
import LayoutIndex from '../components/layout/LayoutIndex';
import Theme from '../components/Theme';

const H2 = styled.h2`
  font-size: 2.2rem;
  text-align: center;
`;

const Section = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
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

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    grid-template-columns: 1fr;
    gap: 2em;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
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

const H3 = styled.h3`
  margin: 2rem 0;
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2rem 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 4rem 0;
  }
`;

function Page(props) {
  const { contentfulIndexPage: page } = props.data;

  return (
    <LayoutIndex
      title={page.title}
      locale={props.pageContext.locale}
      pageId={props.pageContext.pageId}
      description={page.description.description}
      image={page.image}
    >
      <Cover title={page.introTitle} imagesType="lens" rule={{ color: 'peach', mode: 3 }} htmlTitle>
        <div dangerouslySetInnerHTML={{ __html: page.introBody.childMarkdownRemark.html }} />
      </Cover>
      <Cover title={page.storyTitle} imagesType="lines" rule={{ color: 'blue', mode: 3 }}>
        <div dangerouslySetInnerHTML={{ __html: page.storyBody.childMarkdownRemark.html }} />
      </Cover>
      <Break color={'peach'} mode={1} />
      <Section lesserMargin>
        <H2>{page.productsTitle}</H2>
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
        <H2 id={page.portfolioId.slug}>{page.portfolioTitle}</H2>
      </Section>
      <Break color={'peach'} mode={3} />
      <Section lesserMargin>
        <Icon>
          <PaperAirplaneIcon size={'large'} />
        </Icon>
        <H2 id={page.contactId.slug}>{page.contactTitle}</H2>
        <Centered dangerouslySetInnerHTML={{ __html: page.contactBody.childMarkdownRemark.html }} />
        <Cards>
          {page.contacts.map((contact) => {
            return <AuthorContactCard key={contact.id} author={contact} />;
          })}
        </Cards>
        <H3>{page.contactFormTitle}</H3>
        <ContactForm locale={props.pageContext.locale} />
      </Section>
    </LayoutIndex>
  );
}

export default function Index(props) {
  return (
    <Intl
      locale={
        props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]
      }
    >
      <Theme>
        <Page {...props} />
      </Theme>
    </Intl>
  );
}

export const pageQuery = graphql`
  query IndexQuery($locale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    contentfulIndexPage(node_locale: { eq: $locale }) {
      contactFormTitle
      contactTitle
      introTitle
      portfolioTitle
      productsTitle
      storyTitle
      title
      contactBody {
        childMarkdownRemark {
          html
        }
      }
      contactId {
        slug
      }
      contacts {
        email
        id
        job
        name
        profileImage {
          gatsbyImageData(quality: 100, width: 200)
        }
      }
      description {
        description
      }
      image {
        description
        file {
          contentType
          url
        }
      }
      introBody {
        childMarkdownRemark {
          html
        }
      }
      portfolioId {
        slug
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
