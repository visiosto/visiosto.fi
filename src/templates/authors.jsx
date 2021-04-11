// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import LocalizedLink from '../components/link/LocalizedLink';
import Rule from '../components/Rule';
import SchemedImage from '../components/SchemedImage';
import Theme from '../components/Theme';

import createIntl from '../util/createIntl';

const Separator = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em 0;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 4em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 5em 0;
  }
`;

const Div = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const Author = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    grid-template-columns: 1fr 1fr 1fr;
    text-align: left;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Image = styled(GatsbyImage)`
  justify-self: center;
  align-self: center;

  > * {
    border-radius: 50%;
  }
`;

const AuthorInfo = styled.div`
  margin: 0;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 0 0 0 4rem;
  }
`;

const H2 = styled.h2``;

const Link = styled(LocalizedLink)`
  text-decoration: none;
  color: var(--color-text);

  &:visited {
    color: var(--color-text);
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
    color: var(--color-link-text);
  }
`;

const SocialMediaDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialMediaImage = styled(SchemedImage)`
  margin: 1rem;
`;

const GithubImage = styled(SocialMediaImage)`
  filter: brightness(0) saturate(100%) invert(24%) sepia(50%) saturate(252%) hue-rotate(166deg)
    brightness(93%) contrast(88%);

  @media screen and (prefers-color-scheme: dark) {
    filter: brightness(0) saturate(100%) invert(100%);
  }
`;

const InstagramImage = styled(SocialMediaImage)`
  @media screen and (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
`;

const LinkedinImage = styled(SocialMediaImage)`
  @media screen and (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
`;

const TwitterImage = styled(SocialMediaImage)`
  @media screen and (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
`;

function Page(props) {
  const i = createIntl(useIntl());

  const { edges: authors } = props.data.allContentfulAuthor;

  return (
    <Layout
      title={i('authorsTitle')}
      locale={props.pageContext.locale}
      pageID={props.pageContext.pageID}
      description={props.data.contentfulIndexPage.description.description}
    >
      <Separator>
        <Rule color="peach" mode={2} />
      </Separator>
      <Div>
        {authors.map(({ node: author }) => (
          <Fragment key={author.slug}>
            <Author>
              <Image alt={author.name} image={getImage(author.profileImage)} />
              <AuthorInfo>
                <H2>
                  <Link to={author.contentful_id} locale={props.pageContext.locale}>
                    {author.name}
                  </Link>
                </H2>
                <p>{author.job}</p>
                {author.position.map((position) => (
                  <p key={position}>{position}</p>
                ))}
              </AuthorInfo>
              <SocialMediaDiv>
                {(() => {
                  if (author.instagram) {
                    return (
                      <a
                        href={`https://instagram.com/${author.instagram}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <InstagramImage
                          alt={i('footerInstagramAlt')}
                          light={getImage(props.data.instagramColor)}
                          dark={getImage(props.data.instagram)}
                        />
                      </a>
                    );
                  }
                })()}
                {(() => {
                  if (author.facebook) {
                    return (
                      <a
                        href={`https://facebook.com/${author.facebook}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <SocialMediaImage
                          alt={i('footerFacebookAlt')}
                          light={getImage(props.data.facebookColor)}
                          dark={getImage(props.data.facebook)}
                        />
                      </a>
                    );
                  }
                })()}
                {(() => {
                  if (author.twitter) {
                    return (
                      <a
                        href={`https://twitter.com/${author.twitter}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <TwitterImage
                          alt={i('footerTwitterAlt')}
                          light={getImage(props.data.twitterColor)}
                          dark={getImage(props.data.twitter)}
                        />
                      </a>
                    );
                  }
                })()}
                {(() => {
                  if (author.linkedin) {
                    return (
                      <a
                        href={`https://linkedin.com/${author.linkedin}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <LinkedinImage
                          alt={i('footerLinkedinAlt')}
                          light={getImage(props.data.linkedinColor)}
                          dark={getImage(props.data.linkedin)}
                        />
                      </a>
                    );
                  }
                })()}
                {(() => {
                  if (author.github) {
                    return (
                      <a
                        href={`https://github.com/${author.github}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <GithubImage
                          alt={i('footerGithubAlt')}
                          light={getImage(props.data.github)}
                          dark={getImage(props.data.github)}
                        />
                      </a>
                    );
                  }
                })()}
              </SocialMediaDiv>
            </Author>
            <Separator>
              <Rule color="blue" mode={2} />
            </Separator>
          </Fragment>
        ))}
      </Div>
    </Layout>
  );
}

export default function Authors(props) {
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
  query AuthorsQuery($locale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    allContentfulAuthor(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          contentful_id
          job
          name
          position
          slug
          twitter
          profileImage {
            gatsbyImageData(quality: 100, width: 170)
          }
        }
      }
    }
    facebook: file(relativePath: { eq: "footer/facebook.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32)
      }
    }
    facebookColor: file(relativePath: { eq: "footer/facebook-color.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32)
      }
    }
    github: file(relativePath: { eq: "footer/github.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32)
      }
    }
    instagram: file(relativePath: { eq: "footer/instagram.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32)
      }
    }
    instagramColor: file(relativePath: { eq: "footer/instagram-color.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32)
      }
    }
    linkedin: file(relativePath: { eq: "footer/linkedin.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32)
      }
    }
    linkedinColor: file(relativePath: { eq: "footer/linkedin-color.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32)
      }
    }
    twitter: file(relativePath: { eq: "footer/twitter.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32)
      }
    }
    twitterColor: file(relativePath: { eq: "footer/twitter-color.png" }) {
      childImageSharp {
        gatsbyImageData(width: 32)
      }
    }
    contentfulIndexPage(node_locale: { eq: $locale }) {
      description {
        description
      }
    }
  }
`;
