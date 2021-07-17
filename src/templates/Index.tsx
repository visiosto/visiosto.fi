// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
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
import PortfolioCard from '../components/PortfolioCard';
import Theme from '../components/Theme';

const H2 = styled.h2`
  font-size: 2.2rem;
  text-align: center;
`;

const Section = styled.div<{ lesserMargin?: boolean }>`
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

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string,
    pageID: PropTypes.string,
  }).isRequired,
};

function Page({ data, pageContext }) {
  const { contentfulIndexPage: page } = data;
  const { locale, pageID } = pageContext;

  return (
    <LayoutIndex
      description={page.description.description}
      image={page.image}
      locale={locale}
      pageID={pageID}
      title={page.title}
    >
      <Cover
        imagesType="lens"
        rule={{ color: 'peach', ignoreColorScheme: true, mode: 3 }}
        title={page.introTitle}
      >
        <div dangerouslySetInnerHTML={{ __html: page.introBody.childMarkdownRemark.html }} />
      </Cover>
      {/* <Cover imagesType="lines" rule={{ color: 'blue', mode: 3 }} title={page.storyTitle}>
        <div dangerouslySetInnerHTML={{ __html: page.storyBody.childMarkdownRemark.html }} />
      </Cover>
      <Break color="peach" mode={1} ignoreColorScheme /> */}
      <Section lesserMargin>
        <H2>{page.productsTitle}</H2>
        <Cards>
          <FeatureCard icon={<DeviceDesktopIcon size="large" />} title={page.products[0].title}>
            <div
              dangerouslySetInnerHTML={{
                __html: page.products[0].description.childMarkdownRemark.html,
              }}
            />
          </FeatureCard>
          <FeatureCard icon={<PencilIcon size="large" />} title={page.products[1].title}>
            <div
              dangerouslySetInnerHTML={{
                __html: page.products[1].description.childMarkdownRemark.html,
              }}
            />
          </FeatureCard>
          <FeatureCard icon={<CalendarIcon size="large" />} title={page.products[2].title}>
            <div
              dangerouslySetInnerHTML={{
                __html: page.products[2].description.childMarkdownRemark.html,
              }}
            />
          </FeatureCard>
        </Cards>
      </Section>
      <Break color="blue" mode={1} />
      <Section lesserMargin>
        <Icon>
          <NorthStarIcon size="large" />
        </Icon>
        <H2 id={page.portfolioId.slug}>{page.portfolioTitle}</H2>
        <Centered
          dangerouslySetInnerHTML={{ __html: page.portfolioBody.childMarkdownRemark.html }}
        />
        <Cards>
          {page.portfolio.map((reference) => {
            return <PortfolioCard key={reference.id} locale={locale} reference={reference} />;
          })}
        </Cards>
      </Section>
      <Break color="peach" mode={3} ignoreColorScheme />
      <Section lesserMargin>
        <Icon>
          <PaperAirplaneIcon size="large" />
        </Icon>
        <H2 id={page.contactId.slug}>{page.contactTitle}</H2>
        <Centered dangerouslySetInnerHTML={{ __html: page.contactBody.childMarkdownRemark.html }} />
        <Cards>
          {page.contacts.map((contact) => {
            return <AuthorContactCard key={contact.id} author={contact} />;
          })}
        </Cards>
        <H3>{page.contactFormTitle}</H3>
        <ContactForm locale={locale} />
      </Section>
    </LayoutIndex>
  );
}

Page.propTypes = propTypes;

function Index({ data, pageContext }) {
  const { simpleLocales } = data.site.siteMetadata;
  const { locale } = pageContext;
  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
        <Page data={data} pageContext={pageContext} />
      </Theme>
    </Intl>
  );
}

Index.propTypes = propTypes;

export default Index;

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
          gatsbyImageData(quality: 100, width: 200, placeholder: BLURRED)
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
      portfolio {
        contentful_id
        id
        name
        subtitle
        image {
          gatsbyImageData(quality: 100, width: 500, placeholder: BLURRED)
        }
      }
      portfolioBody {
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
