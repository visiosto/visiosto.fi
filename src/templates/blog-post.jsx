// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

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
  const { markdownRemark: post } = props.data;

  return (
    <LayoutPost
      title={post.frontmatter.title}
      frontmatter={post.frontmatter}
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
      <Separator>
        <Rule color="blue" mode={1} />
      </Separator>
      <PostDiv dangerouslySetInnerHTML={{ __html: post.html }} />
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
  query BlogPostQuery($path: String, $momentJsLocale: String) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        author
        category
        date: date(formatString: "LL", locale: $momentJsLocale)
        datetime: date
        title
      }
    }
  }
`;
