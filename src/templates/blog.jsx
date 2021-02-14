// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import Layout from '../components/Layout';
import Theme from '../components/Theme';

import createIntl from '../utils/createIntl';

const BlogPage = (props) => {
  const i = createIntl(useIntl());

  const { edges: posts } = props.data.allMarkdownRemark;

  const Post = styled.article`
    margin: 2em ${(props) => props.theme.layout.marginPhone};

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      margin: 2em ${(props) => props.theme.layout.marginTablet};
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 2em
        ${(props) =>
          props.lesserMargin ? props.theme.layout.marginTablet : props.theme.layout.marginDesktop};
    }
  `;

  const H2 = styled.h2`
    text-align: center;
    font-size: 2rem;
  `;

  const P = styled.p`
    text-align: center;
  `;

  return (
    <Layout title={i('blogTitle')} lang={props.pageContext.lang} pageKey={props.pageContext.key}>
      {posts
        .filter((post) => post.node.frontmatter.locale === props.pageContext.lang)
        .map(({ node: post }) => {
          return (
            <Post>
              <H2>{post.frontmatter.title}</H2>
              <P>{post.excerpt}</P>
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
            date(formatString: "MMMM DD, YYYY")
            locale
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Blog;
