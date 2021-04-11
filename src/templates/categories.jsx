// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import LocalizedLink from '../components/link/LocalizedLink';
import Rule from '../components/Rule';
import Theme from '../components/Theme';

import createINTL from '../util/createINTL';

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

const Div = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const Category = styled.div`
  text-align: center;
`;

const H2 = styled.h2``;

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

const Post = styled.article`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

function Page(props) {
  const i = createINTL(useIntl());

  const { edges: categories } = props.data.allContentfulCategory;
  const { edges: posts } = props.data.allContentfulBlogPost;

  return (
    <Layout
      title={i('categoriesTitle')}
      locale={props.pageContext.locale}
      pageID={props.pageContext.pageID}
      description={props.data.contentfulIndexPage.description.description}
    >
      <Separator>
        <Rule color="peach" mode={2} />
      </Separator>
      <Div>
        {categories.map(({ node: category }) => (
          <Fragment key={category.slug}>
            <Category>
              <H2>
                <Link to={category.contentful_id} locale={props.pageContext.locale}>
                  {`${i('blogCategory')} ${category.name}`}
                </Link>
              </H2>
              <p>{i('blogPosts')}</p>
              {posts
                .filter(({ node: post }) => post.category.contentful_id === category.contentful_id)
                .map(({ node: post }) => {
                  return (
                    <Post key={post.slug}>
                      <header>
                        <p>
                          <Link to={post.contentful_id} locale={props.pageContext.locale}>
                            {post.title}
                          </Link>
                        </p>
                      </header>
                    </Post>
                  );
                })}
            </Category>
            <Separator>
              <Rule color="blue" mode={2} />
            </Separator>
          </Fragment>
        ))}
      </Div>
    </Layout>
  );
}

export default function Categories(props) {
  return (
    <Intl
      locale={
        props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]
      }
    >
      <Theme>
        <Page {...props} />
      </Theme>
    </Intl>
  );
}

export const pageQuery = graphql`
  query CategoriesQuery($locale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    allContentfulCategory(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          contentful_id
          name
          node_locale
          slug
        }
      }
    }
    allContentfulBlogPost(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          contentful_id
          slug
          title
          category {
            contentful_id
            name
          }
        }
      }
    }
    contentfulIndexPage(node_locale: { eq: $locale }) {
      description {
        description
      }
    }
  }
`;
