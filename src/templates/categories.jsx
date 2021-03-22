// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import AuthorName from '../components/AuthorName';
import Button from '../components/Button';
import CategoryName from '../components/CategoryName';
import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import LocalizedLink from '../components/link/LocalizedLink';
import Rule from '../components/Rule';
import Theme from '../components/Theme';

import createIntl from '../util/createIntl';

const Separator = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em 0;

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 4em 0;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 5em 0;
  }
`;

const Div = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginPhone};

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const Category = styled.div`
  text-align: center;
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

  @media screen and ${(props) => props.theme.devices.phoneL} {
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

const Post = styled.article`
  margin: 2em ${(props) => props.theme.layout.marginPhone};

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const PostHeader = styled.header``;

const H3 = styled.h3`
  text-align: center;
  font-size: 1.2rem;
`;

const PostMeta = styled.div`
  margin: 2em 0;
  text-align: center;

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 2em 0;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
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

const Page = (props) => {
  const i = createIntl(useIntl());

  const { edges: categories } = props.data.allContentfulCategory;
  const { edges: posts } = props.data.allContentfulBlogPost;

  console.log('Categories page ID is', props.pageContext.pageId)

  return (
    <Layout
      title={i('categoriesTitle')}
      locale={props.pageContext.locale}
      pageId={props.pageContext.pageId}
      description={props.data.contentfulIndexPage.description.description}
    >
      <Separator>
        <Rule color="peach" mode={2} />
      </Separator>
      <Div>
        {categories.map(({ node: category }) => (
          <>
            <Category key={category.slug}>
              <H2>
                <Link to={category.contentful_id} locale={props.pageContext.locale}>
                  {category.name}
                </Link>
              </H2>
              {posts
                .filter(({ node: post }) => post.category.contentful_id === category.contentful_id)
                .map(({ node: post }) => {
                  return (
                    <Post key={post.slug}>
                      <PostHeader>
                        <H3>
                          <Link to={post.contentful_id} locale={props.pageContext.locale}>
                            {post.title}
                          </Link>
                        </H3>
                      </PostHeader>
                    </Post>
                  );
                })}
            </Category>
            <Separator>
              <Rule color="blue" mode={2} />
            </Separator>
          </>
        ))}
      </Div>
    </Layout>
  );
};

const Categories = (props) => (
  <Intl
    locale={props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]}
  >
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default Categories;

export const pageQuery = graphql`
  query CategoriesQuery($locale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    allContentfulCategory(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          contentful_id
          name
          node_locale
          slug
        }
      }
    }
    allContentfulBlogPost(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          contentful_id
          slug
          title
          category {
            contentful_id
            name
          }
        }
      }
    }
    contentfulIndexPage(node_locale: { eq: $locale }) {
      description {
        description
      }
    }
  }
`;
