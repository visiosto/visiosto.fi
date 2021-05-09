// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon } from '@primer/octicons-react';
import { Theme } from '@visiosto/components';

import Intl from '../components/Intl';
import LayoutPost from '../components/layout/LayoutPost';
import LocalizedLink from '../components/link/LocalizedLink';
import Rule from '../components/Rule';

import theme from '../theme';

const Separator = styled.div`
  margin: 3em 0;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 4em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 5em 0;
  }
`;

const PostDiv = styled.div`
  margin: 1em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 1em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 1em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const NavLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2em;
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 3em ${(props) => props.theme.layout.marginTablet};
  }
`;

const Previous = styled.div`
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
`;

const Next = styled.div`
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
  text-align: end;
`;

const ArrowLeft = styled(ArrowLeftIcon)`
  margin: 0 0.2rem 0.1rem 0;
`;

const ArrowRight = styled(ArrowRightIcon)`
  margin: 0 0 0.1rem 0.2rem;
`;

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string,
    management: PropTypes.bool,
    momentJSLocale: PropTypes.string,
    pageID: PropTypes.string,
  }).isRequired,
};

function Page({ data, pageContext }) {
  const { contentfulBlogPost: post, allContentfulBlogPost: posts } = data;
  const { locale, pageID } = pageContext;

  const previousEdges = posts.edges.filter(({ node }) => node.contentful_id === pageID);
  const nextEdges = posts.edges.filter(({ node }) => node.contentful_id === pageID);

  const previous = previousEdges.length > 0 ? previousEdges[0].previous : null;
  const next = nextEdges.length > 0 ? nextEdges[0].next : null;

  return (
    <LayoutPost
      description={post.body.childMarkdownRemark.excerpt}
      locale={locale}
      pageID={pageID}
      post={post}
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
                  <LocalizedLink locale={locale} to={previous.contentful_id}>
                    {previous.title}
                  </LocalizedLink>
                </>
              );
            }

            return null;
          })()}
        </Previous>
        <Next>
          {(() => {
            if (next) {
              return (
                <>
                  <LocalizedLink locale={locale} to={next.contentful_id}>
                    {next.title}
                  </LocalizedLink>
                  <ArrowRight />
                </>
              );
            }

            return null;
          })()}
        </Next>
      </NavLinks>
    </LayoutPost>
  );
}

Page.propTypes = propTypes;

function BlogPost({ data, pageContext }) {
  const { simpleLocales } = data.site.siteMetadata;
  const { locale } = pageContext;
  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme theme={theme}>
        <Page data={data} pageContext={pageContext} />
      </Theme>
    </Intl>
  );
}

BlogPost.propTypes = propTypes;

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostQuery(
    $pageID: String
    $locale: String
    $momentJSLocale: String
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
    contentfulBlogPost(contentful_id: { eq: $pageID }, node_locale: { eq: $locale }) {
      contentful_id
      date: date(formatString: "LL", locale: $momentJSLocale)
      datetime: date
      title
      author {
        contentful_id
        name
        twitter
      }
      body {
        childMarkdownRemark {
          excerpt
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
