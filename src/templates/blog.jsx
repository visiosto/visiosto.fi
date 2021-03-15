// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
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

import createIntl from '../utils/createIntl';

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

const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
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

const Page = (props) => {
  const i = createIntl(useIntl());

  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <Layout title={i('blogTitle')} lang={props.pageContext.lang} pageKey={props.pageContext.key}>
      <Separator>
        <Rule color="peach" mode={2} />
      </Separator>
      {posts.map(({ node: post }) => {
        return (
          <Post>
            <PostHeader>
              <H2>
                <Link to={post.fields.keySlug} locale={props.pageContext.lang}>
                  {post.frontmatter.title}
                </Link>
              </H2>
              <PostMeta>
                <time datetime={post.frontmatter.datetime}>{post.frontmatter.date}</time>
                <PostAuthor>
                  <AuthorName name={post.frontmatter.author} locale={props.pageContext.lang} />
                </PostAuthor>
                <PostCategory>
                  {i('blogCategory')}{' '}
                  <CategoryName name={post.frontmatter.category} locale={props.pageContext.lang} />
                </PostCategory>
              </PostMeta>
            </PostHeader>
            <PostContent>
              <p>{post.excerpt}</p>
            </PostContent>
            <Center>
              <Button to={post.fields.keySlug} lang={props.pageContext.lang}>
                {i('blogReadMore')}
              </Button>
            </Center>
            <Separator>
              <Rule color="blue" mode={2} />
            </Separator>
          </Post>
        );
      })}
    </Layout>
  );
};

const Blog = (props) => (
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default Blog;

export const pageQuery = graphql`
  query BlogQuery($lang: String, $momentJsLocale: String) {
    allMarkdownRemark(
      filter: {
        fields: { keySlug: { glob: "**/blog/**" }, locale: { eq: $lang } }
        frontmatter: { management: { eq: false } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 500)
          frontmatter {
            author
            category
            date: date(formatString: "LL", locale: $momentJsLocale)
            datetime: date
            title
          }
          fields {
            keySlug
          }
        }
      }
    }
  }
`;
