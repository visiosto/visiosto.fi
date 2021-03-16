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
  const { contentfulBlogPost: post } = props.data;

  return (
    <LayoutPost
      title={post.title}
      post={post}
      locale={props.pageContext.locale}
      pageId={props.pageContext.pageId}
    >
      <Separator>
        <Rule color="blue" mode={1} />
      </Separator>
      <PostDiv dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
    </LayoutPost>
  );
};

const BlogPost = (props) => (
  <Intl
    locale={props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]}
  >
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostQuery($pageId: String, $locale: String, $momentJsLocale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    contentfulBlogPost(contentful_id: { eq: $pageId }, node_locale: { eq: $nodeLocale }) {
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
