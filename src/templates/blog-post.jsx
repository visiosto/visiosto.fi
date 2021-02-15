// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import LayoutPost from '../components/LayoutPost';
import Theme from '../components/Theme';

import createIntl from '../utils/createIntl';

const BlogPost = (props) => {
  const { markdownRemark: post } = props.data;

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

  const PostDiv = styled.div`
    margin: 1em ${(props) => props.theme.layout.marginPhone};

    @media screen and ${(props) => props.theme.devices.phoneLarge} {
      margin: 1em ${(props) => props.theme.layout.marginTablet};
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 1em ${(props) => props.theme.layout.marginDesktop};
    }
  `;

  return (
    <LayoutPost
      title={post.frontmatter.title}
      frontmatter={post.frontmatter}
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
      <PostDiv dangerouslySetInnerHTML={{ __html: post.html }} />
    </LayoutPost>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($path: String, $momentJsLocale: String) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        author
        datetime: date
        date: date(formatString: "LL", locale: $momentJsLocale)
      }
    }
  }
`;

export default (props) => (
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <BlogPost {...props} />
    </Theme>
  </Intl>
);
