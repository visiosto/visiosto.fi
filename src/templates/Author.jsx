// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import AuthorName from '../components/AuthorName';
import CategoryName from '../components/CategoryName';
import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import LocalizedLink from '../components/link/LocalizedLink';
import LocalizedLinkButton from '../components/link/LocalizedLinkButton';
import Rule from '../components/Rule';
import SchemedImage from '../components/SchemedImage';
import Theme from '../components/Theme';

import createInternationalization from '../util/createInternationalization';

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled(GatsbyImage)`
  > * {
    border-radius: 50%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em ${(props) => props.theme.layout.marginMobile};
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const SocialMediaDiv = styled(Div)`
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

const H2 = styled.h2`
  margin: 2em ${(props) => props.theme.layout.marginMobile};
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const Post = styled.article`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const PostHeader = styled.header``;

const H3 = styled.h3`
  text-align: center;
  font-size: 1.2rem;
`;

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

const PostMeta = styled.div`
  margin: 2em 0;
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em 0;
  }
`;

const PostAuthor = styled.span`
  clear: both;
  display: block;
`;

const PostCategory = styled.span`
  clear: both;
  display: block;
`;

const PostContent = styled.div``;

const Center = styled.div`
  text-align: center;
`;

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

const propTypes = {
  children: PropTypes.node,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
  pageContext: PropTypes.object.isRequired,
  pageResources: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};

const defaultProps = { children: undefined };

function Page({ data, pageContext }) {
  const intl = createInternationalization(useIntl());

  const { contentfulAuthor: author } = data;
  const { edges: posts } = data.allContentfulBlogPost;
  const { locale, pageID } = pageContext;

  return (
    <Layout author={author} locale={locale} pageID={pageID} title={author.name}>
      <ImageDiv>
        <Image alt={author.name} image={getImage(author.profileImage)} />
      </ImageDiv>
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
                  alt={intl('footerInstagramImageText')}
                  light={getImage(data.instagramColor)}
                  dark={getImage(data.instagram)}
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
                  alt={intl('footerFacebookImageText')}
                  light={getImage(data.facebookColor)}
                  dark={getImage(data.facebook)}
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
                  alt={intl('footerTwitterImageText')}
                  light={getImage(data.twitterColor)}
                  dark={getImage(data.twitter)}
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
                  alt={intl('footerLinkedinImageText')}
                  light={getImage(data.linkedinColor)}
                  dark={getImage(data.linkedin)}
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
                  alt={intl('footerGithubImageText')}
                  light={getImage(data.github)}
                  dark={getImage(data.github)}
                />
              </a>
            );
          }
        })()}
      </SocialMediaDiv>
      <Div>
        <p>{author.job}</p>
        {author.position.map((position) => (
          <p key={position}>{position}</p>
        ))}
      </Div>
      <Div dangerouslySetInnerHTML={{ __html: author.description.childMarkdownRemark.html }} />
      <H2>{intl('authorBlogTitle')}</H2>
      {posts.map(({ node: post }) => {
        return (
          <Post>
            <PostHeader>
              <H3>
                <Link to={post.contentful_id} locale={locale}>
                  {post.title}
                </Link>
              </H3>
              <PostMeta>
                <time dateTime={post.datetime}>{post.date}</time>
                <PostAuthor>
                  <AuthorName author={post.author} locale={locale} />
                </PostAuthor>
                <PostCategory>
                  {intl('blogCategory')} <CategoryName category={post.category} locale={locale} />
                </PostCategory>
              </PostMeta>
            </PostHeader>
            <PostContent>
              <p>{post.body.childMarkdownRemark.excerpt}</p>
            </PostContent>
            <Center>
              <LocalizedLinkButton to={post.contentful_id} locale={locale}>
                {intl('blogReadMore')}
              </LocalizedLinkButton>
            </Center>
            <Separator>
              <Rule color="blue" mode={2} />
            </Separator>
          </Post>
        );
      })}
    </Layout>
  );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

function Author(props) {
  const { simpleLocales } = props.data.site.siteMetadata;
  const { locale } = props.pageContext;
  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
        <Page {...props} />
      </Theme>
    </Intl>
  );
}

Author.propTypes = propTypes;
Author.defaultProps = defaultProps;

export default Author;

export const pageQuery = graphql`
  query AuthorQuery($pageID: String, $locale: String, $momentJsLocale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    contentfulAuthor(contentful_id: { eq: $pageID }, node_locale: { eq: $locale }) {
      description {
        childMarkdownRemark {
          html
        }
      }
      job
      name
      position
      twitter
      profileImage {
        gatsbyImageData(quality: 100, width: 200)
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
    allContentfulBlogPost(
      filter: { author: { contentful_id: { eq: $pageID } }, node_locale: { eq: $locale } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          contentful_id
          date: date(formatString: "LL", locale: $momentJsLocale)
          datetime: date
          slug
          node_locale
          title
          author {
            contentful_id
            name
          }
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 500)
            }
          }
          category {
            contentful_id
            name
          }
        }
      }
    }
  }
`;
