// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Intl from '../components/Intl';
import LayoutPost from '../components/layout/LayoutPost';
import Rule from '../components/Rule';
import Theme from '../components/Theme';

const Separator = styled.div`
  margin: 3em 0;

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 4em 0;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 5em 0;
  }
`;

const PostDiv = styled.div`
  margin: 1em ${(props) => props.theme.layout.marginPhone};

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 1em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 1em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const Page = (props) => {
  const { contentfulBlogPost: post } = props.data;

  return (
    <LayoutPost
      title={post.title}
      post={post}
      lang={props.pageContext.lang}
      pageKey={post.contentful_id}
    >
      <Separator>
        <Rule color="blue" mode={1} />
      </Separator>
      <PostDiv dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
    </LayoutPost>
  );
};

const BlogPost = (props) => (
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostQuery($key: String, $nodeLocale: String, $momentJsLocale: String) {
    contentfulBlogPost(contentful_id: { eq: $key }, node_locale: { eq: $nodeLocale }) {
      contentful_id
      date: date(formatString: "LL", locale: $momentJsLocale)
      datetime: date
      title
      author {
        contentful_id
        name
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      category {
        contentful_id
        name
      }
    }
  }
`;
