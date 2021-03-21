// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon } from '@primer/octicons-react';

import Intl from '../components/Intl';
import LayoutPost from '../components/layout/LayoutPost';
import LocalizedLink from '../components/link/LocalizedLink';
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

const NavLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2em;
  margin: 2em ${(props) => props.theme.layout.marginPhone};

  @media screen and ${(props) => props.theme.devices.phoneL} {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }
`;

const Previous = styled.div``;

const Next = styled.div`
  text-align: end;
`;

const ArrowLeft = styled(ArrowLeftIcon)`
  margin: 0 0.2rem 0.1rem 0;
`;

const ArrowRight = styled(ArrowRightIcon)`
  margin: 0 0 0.1rem 0.2rem;
`;

const Page = (props) => {
  const { contentfulBlogPost: post, allContentfulBlogPost: posts } = props.data;

  const previousEdges = posts.edges.filter(
    ({ node }) => node.contentful_id === props.pageContext.pageId,
  );
  const nextEdges = posts.edges.filter(
    ({ node }) => node.contentful_id === props.pageContext.pageId,
  );

  const previous = previousEdges.length > 0 ? previousEdges[0].previous : null;
  const next = nextEdges.length > 0 ? nextEdges[0].next : null;

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
      <NavLinks>
        <Previous>
          {(() => {
            if (previous) {
              return (
                <>
                  <ArrowLeft />
                  <LocalizedLink to={previous.contentful_id} locale={props.pageContext.locale}>
                    {previous.title}
                  </LocalizedLink>
                </>
              );
            }
          })()}
        </Previous>
        <Next>
          {(() => {
            if (next) {
              return (
                <>
                  <LocalizedLink to={next.contentful_id} locale={props.pageContext.locale}>
                    {next.title}
                  </LocalizedLink>
                  <ArrowRight />
                </>
              );
            }
          })()}
        </Next>
      </NavLinks>
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
  query BlogPostQuery(
    $pageId: String
    $locale: String
    $momentJsLocale: String
    $management: Boolean
  ) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    contentfulBlogPost(contentful_id: { eq: $pageId }, node_locale: { eq: $locale }) {
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
    allContentfulBlogPost(
      filter: { management: { eq: $management }, node_locale: { eq: $locale } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        next {
          contentful_id
          title
        }
        node {
          contentful_id
          title
        }
        previous {
          contentful_id
          title
        }
      }
    }
  }
`;
