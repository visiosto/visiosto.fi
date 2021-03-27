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
import FeatureCard from '../components/FeatureCard';
import IndexCover from '../components/IndexCover';
import Intl from '../components/Intl';
import LayoutIndex from '../components/layout/LayoutIndex';
import StoryCover from '../components/StoryCover';
import Theme from '../components/Theme';
import createIntl from '../util/createIntl';
import { useIntl } from 'react-intl';

const H2 = styled.h2`
  font-size: 2.2rem;
  text-align: center;
`;

const Section = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and ${(props) => props.theme.devices.mobileL} {
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

  @media screen and ${(props) => props.theme.devices.mobileL} {
    grid-template-columns: 1fr;
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

const H3 = styled.h3`
  margin: 2rem 0;
  text-align: center;

  @media screen and ${(props) => props.theme.devices.mobileL} {
    margin: 2rem 0;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 4rem 0;
  }
`;

const FormContainer = styled.div`
  text-align: center;
`;

const FormDiv = styled.div`
  input,
  textarea {
    margin: 0.6em 0;
    border: none;
    border-radius: 0.25rem;
    padding: 0.4rem 1rem;
    box-shadow: var(--color-box-shadow);
    transition: box-shadow 75ms ease-in;
    background: var(--color-background);
    color: var(--color-text);

    &:focus {
      box-shadow: var(--color-box-shadow-hover);
      outline: none;
    }
  }

  input[type='submit'] {
    display: inline-block;
    border-style: none;
    border-radius: 3rem;
    border: 3px solid transparent;
    padding: 1rem 1.5rem;
    cursor: pointer;
    box-shadow: none;
    transition: all 100ms ease-in;
    background-color: var(--color-link);
    background-clip: padding-box;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    color: var(--color-text-button);

    &:hover {
      background-color: var(--color-link-hover);
    }
  }

  label {
    display: block;
    margin: 1rem 0 0;
  }
`;

const Page = (props) => {
  const i = createIntl(useIntl());

  const { contentfulIndexPage: page } = props.data;

  return (
    <LayoutIndex
      title={page.title}
      locale={props.pageContext.locale}
      pageId={props.pageContext.pageId}
      description={page.description.description}
      image={page.image}
    >
      <IndexCover title={page.introTitle} htmlTitle>
        <div dangerouslySetInnerHTML={{ __html: page.introBody.childMarkdownRemark.html }} />
      </IndexCover>
      <StoryCover title={page.storyTitle}>
        <div dangerouslySetInnerHTML={{ __html: page.storyBody.childMarkdownRemark.html }} />
      </StoryCover>
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
        <FormContainer>
          <form name="contact" action="/" method="POST" netlify-honeypot="bot-field" netlify data-netlify="true">
            {/* This input field is required by Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <FormDiv hidden>
              <label>{i('indexContactFormHoneypot')}</label>
              <input name="bot-field" />
            </FormDiv>
            <FormDiv>
              <label for="name">{i('indexContactFormName')}</label>
              <input type="text" name="name" id="name" required />
            </FormDiv>
            <FormDiv>
              <label for="email">{i('indexContactFormEmail')}</label>
              <input type="email" name="email" id="email" />
            </FormDiv>
            <FormDiv>
              <p>
                {i('indexContactFormOr')}
              </p>
            </FormDiv>
            <FormDiv>
              <label for="tel">{i('indexContactFormTel')}</label>
              <input type="tel" name="tel" id="tel" />
            </FormDiv>
            <FormDiv>
              <label for="message">{i('indexContactFormMessage')}</label>
              <textarea id="message" name="message" rows="5" cols="40" />
            </FormDiv>
            <FormDiv>
              <input type="submit" value={i('indexContactFormSend')} />
            </FormDiv>
          </form>
        </FormContainer>
      </Section>
    </LayoutIndex>
  );
};

const Index = (props) => (
  <Intl
    locale={props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]}
  >
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

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
