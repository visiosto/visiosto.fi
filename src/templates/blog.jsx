// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import Layout from '../components/Layout';
import Theme from '../components/Theme';

import createLink from '../components/createLink';

import createIntl from '../utils/createIntl';

const BlogPage = (props) => {
  const i = createIntl(useIntl());
  const LocalizedLink = createLink(props.pageContext.lang);

  const { edges: posts } = props.data.allMarkdownRemark;

  const Post = styled.article`
    margin: 2em ${(props) => props.theme.layout.marginPhone};

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
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

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
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

  const PostContent = styled.div``;

  return (
    <Layout title={i('blogTitle')} lang={props.pageContext.lang} pageKey={props.pageContext.key}>
      {posts
        .filter((post) => post.node.frontmatter.locale === props.pageContext.lang)
        .map(({ node: post }) => {
          return (
            <Post>
              <PostHeader>
                <H2>
                  <Link to={post.fields.linkPath}>{post.frontmatter.title}</Link>
                </H2>
                <PostMeta>
                  <time datetime={post.frontmatter.date}>
                    {post.frontmatter[`${post.frontmatter.locale}Date`]}
                  </time>
                  <PostAuthor>{post.frontmatter.author}</PostAuthor>
                </PostMeta>
              </PostHeader>
              <PostContent>
                <p>{post.excerpt}</p>
              </PostContent>
            </Post>
          );
        })}
    </Layout>
  );
};

const Blog = (props) => (
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <BlogPage {...props} />
    </Theme>
  </Intl>
);

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            author
            date
            fiDate: date(formatString: "LL", locale: "fi")
            enDate: date(formatString: "LL", locale: "en-gb")
            locale
          }
          fields {
            slug
            linkPath
          }
        }
      }
    }
  }
`;

export default Blog;
