// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import AuthorName from '../components/AuthorName';
import CategoryName from '../components/CategoryName';
import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import LocalizedLink from '../components/link/LocalizedLink';
import LocalizedLinkButton from '../components/link/LocalizedLinkButton';
import Rule from '../components/Rule';
import Theme from '../components/Theme';

import createINTL from '../util/createINTL';

const Div = styled.div`
  margin: 1em ${(props) => props.theme.layout.marginMobile};

  .centered {
    text-align: center;
  }

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 1em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 1em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

const Post = styled.article`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const PostHeader = styled.header``;

const H3 = styled.h3`
  text-align: center;
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.heading};
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

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
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

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 4em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 5em 0;
  }
`;

const propTypes = {
  children: PropTypes.node,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
  pageContext: PropTypes.object.isRequired,
  pageResources: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};

const defaultProps = { children: undefined };

function Page({ data, pageContext }) {
  const intl = createINTL(useIntl());

  const { contentfulPage: page, allContentfulBlogPost: posts } = data;
  const { locale, pageID } = pageContext;

  return (
    <Layout
      description={page.description.description}
      image={page.image}
      locale={locale}
      pageID={pageID}
      title={page.title}
    >
      <Div dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
      <H2>{intl('managementNewsTitle')}</H2>
      <Separator>
        <Rule color="peach" mode={2} />
      </Separator>
      {posts.edges.map(({ node: post }) => {
        return (
          <Post>
            <PostHeader>
              <H3>
                <Link to={post.contentful_id} locale={locale}>
                  {post.title}
                </Link>
              </H3>
              <PostMeta>
                <time dateTime={post.datetime}>{post.date}</time>
                <PostAuthor>
                  <AuthorName author={post.author} locale={locale} />
                </PostAuthor>
                <PostCategory>
                  {intl('blogCategory')} <CategoryName category={post.category} locale={locale} />
                </PostCategory>
              </PostMeta>
            </PostHeader>
            <PostContent>
              <p>{post.body.childMarkdownRemark.excerpt}</p>
            </PostContent>
            <Center>
              <LocalizedLinkButton to={post.contentful_id} locale={locale}>
                {intl('blogReadMore')}
              </LocalizedLinkButton>
            </Center>
            <Separator>
              <Rule color="blue" mode={2} />
            </Separator>
          </Post>
        );
      })}
    </Layout>
  );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

function Management(props) {
  const { simpleLocales } = props.data.site.siteMetadata;
  const { locale } = props.pageContext;
  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
        <Page {...props} />
      </Theme>
    </Intl>
  );
}

Management.propTypes = propTypes;
Management.defaultProps = defaultProps;

export default Management;

export const pageQuery = graphql`
  query ManagementQuery($pageID: String, $locale: String, $momentJsLocale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    contentfulPage(contentful_id: { eq: $pageID }, node_locale: { eq: $locale }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      description {
        description
      }
      image {
        description
        file {
          contentType
          url
        }
      }
    }
    allContentfulBlogPost(
      filter: { management: { eq: true }, node_locale: { eq: $locale } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          contentful_id
          date: date(formatString: "LL", locale: $momentJsLocale)
          datetime: date
          slug
          node_locale
          title
          author {
            contentful_id
            name
          }
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 500)
            }
          }
          category {
            contentful_id
            name
          }
        }
      }
    }
  }
`;
