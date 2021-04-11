// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, withArtDirection } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { ChevronRightIcon } from '@primer/octicons-react';
import { useIntl } from 'react-intl';

import LocalizedLink from '../link/LocalizedLink';
import Navigation from './Navigation';
import SchemedImage from '../SchemedImage';

import createIntl from '../../util/createIntl';

import theme from '../../theme';

const HeaderElement = styled.header`
  margin: 2em 0;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em 0;
  }
`;

const HomeTitle = styled.h1`
  display: none;
`;

const SiteTitle = styled.p`
  display: none;
`;

const SiteBranding = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 3rem auto;
  }
`;

const Image = styled(SchemedImage)`
  @media screen and (${(props) => props.theme.devices.tablet}) {
    width: 300px;
    height: auto;
  }
`;

const Breadcrumb = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const ChevronIcon = styled(ChevronRightIcon)`
  margin: 0 0 0.1rem;
`;

const createPath = function createPathEntryForNode(pathNode) {
  if (pathNode.parentPath) {
    return concat(createPath(pathNode.parentPath)).concat([pathNode]);
  }

  return [pathNode];
};

const createBreadcrumbPath = function createBreadcrumbNodesPath(node, parentPath) {
  let pagePath = [node];

  if (parentPath) {
    if (node.parentPath) {
      pagePath = createPath(parentPath).concat(createPath(node.parentPath)).concat(pagePath);
    } else {
      pagePath = createPath(parentPath).concat(pagePath);
    }
  } else if (node.parentPath) {
    pagePath = createPath(node.parentPath).concat(pagePath);
  }

  return pagePath;
};

const createBreadcrumb = function createBreadcrumbFromQueryData(data, errorPage, locale, pageID) {
  if (!errorPage) {
    const node = data.allContentfulEntry.edges.filter(
      ({ node }) => node.contentful_id === pageID && node.node_locale === locale,
    )[0].node;

    switch (node.internal.type) {
      case 'ContentfulAuthor': {
        const authorNode = data.allContentfulAuthor.edges.filter(
          ({ node }) => node.contentful_id === pageID && node.node_locale === locale,
        )[0].node;
        const authorPath = data.authorPaths.edges.filter(
          ({ node }) => node.node_locale === locale,
        )[0].node;

        return [authorPath, authorNode];
      }
      case 'ContentfulBlogPost': {
        const blogPostNode = data.allContentfulBlogPost.edges.filter(
          ({ node }) => node.contentful_id === pageID && node.node_locale === locale,
        )[0].node;
        const blogPath = data.blogPaths.edges.filter(({ node }) => node.node_locale === locale)[0]
          .node;

        return [blogPath, blogPostNode];
      }
      case 'ContentfulCategory': {
        const categoryNode = data.allContentfulCategory.edges.filter(
          ({ node }) => node.contentful_id === pageID && node.node_locale === locale,
        )[0].node;
        const categoryPath = data.categoryPaths.edges.filter(
          ({ node }) => node.node_locale === locale,
        )[0].node;
        const parentPath = categoryPath.parentPath;

        return [parentPath, categoryPath, categoryNode];
      }
      case 'ContentfulPage': {
        const pageNode = data.allContentfulPage.edges.filter(
          ({ node }) => node.contentful_id === pageID && node.node_locale === locale,
        )[0].node;
        return createBreadcrumbPath(pageNode);
      }
      case 'ContentfulIndexPage': {
        return null;
      }
      case 'ContentfulPath': {
        const pathNode = data.allContentfulPath.edges.filter(
          ({ node }) => node.contentful_id === pageID && node.node_locale === locale,
        )[0].node;
        return createBreadcrumbPath(pathNode);
      }
      default:
        return null;
    }
  }
  return null;
};

const propTypes = {
  errorPage: PropTypes.bool,
  home: PropTypes.bool,
  locale: PropTypes.string.isRequired,
  pageID: PropTypes.string.isRequired,
};

const defaultProps = { errorPage: false, home: false };

function Header({ errorPage, home, locale, pageID }) {
  const i = createIntl(useIntl());

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
            title
            localePaths {
              en_GB
              fi
            }
          }
        }
        logoPhoneSLight: file(relativePath: { eq: "header/logo-light.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 301, placeholder: BLURRED)
          }
        }
        logoPhoneSDark: file(relativePath: { eq: "header/logo-dark.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 301, placeholder: BLURRED)
          }
        }
        logoTabletLight: file(relativePath: { eq: "header/logo-light.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 301, placeholder: BLURRED)
          }
        }
        logoTabletDark: file(relativePath: { eq: "header/logo-dark.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 301, placeholder: BLURRED)
          }
        }
        allContentfulEntry {
          edges {
            node {
              contentful_id
              node_locale
              internal {
                type
              }
            }
          }
        }
        allContentfulAuthor {
          edges {
            node {
              contentful_id
              node_locale
              name
            }
          }
        }
        allContentfulBlogPost {
          edges {
            node {
              contentful_id
              node_locale
              title
            }
          }
        }
        allContentfulCategory {
          edges {
            node {
              contentful_id
              node_locale
              name
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              contentful_id
              node_locale
              title
              parentPath {
                contentful_id
                title
                parentPath {
                  contentful_id
                  title
                }
              }
            }
          }
        }
        allContentfulPath {
          edges {
            node {
              contentful_id
              node_locale
              title
              parentPath {
                contentful_id
                title
                parentPath {
                  contentful_id
                  title
                }
              }
            }
          }
        }
        authorPaths: allContentfulPath(
          filter: { contentful_id: { eq: "4uEZ43he1uPiXUzzZUuedS" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
              title
            }
          }
        }
        blogPaths: allContentfulPath(filter: { contentful_id: { eq: "2zOhJf5PQ1SzUJhT37Cnb2" } }) {
          edges {
            node {
              contentful_id
              node_locale
              title
            }
          }
        }
        categoryPaths: allContentfulPath(
          filter: { contentful_id: { eq: "54IoCQAEBdBmvFfVtUeegI" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
              title
              parentPath {
                contentful_id
                title
                parentPath {
                  contentful_id
                  title
                }
              }
            }
          }
        }
      }
    `,
  );

  const { site, logoPhoneSLight, logoPhoneSDark, logoTabletLight, logoTabletDark } = data;

  const logosLight = withArtDirection(getImage(logoPhoneSLight), [
    {
      media: `(${theme.devices.tablet})`,
      image: getImage(logoTabletLight),
    },
  ]);
  const logosDark = withArtDirection(getImage(logoPhoneSDark), [
    {
      media: `(${theme.devices.tablet})`,
      image: getImage(logoTabletDark),
    },
  ]);

  const breadcrumb = createBreadcrumb(data, errorPage, locale, pageID);

  return (
    <HeaderElement>
      <SiteBranding>
        {(() => {
          if (home) {
            return <HomeTitle>{site.siteMetadata.title}</HomeTitle>;
          }

          return <SiteTitle>{site.siteMetadata.title}</SiteTitle>;
        })()}
        <LocalizedLink to="/" locale={locale}>
          <Image alt={i('headerLogoAlt')} light={logosLight} dark={logosDark} />
        </LocalizedLink>
      </SiteBranding>
      <Navigation locale={locale} />
      <Breadcrumb>
        {(() => {
          if (breadcrumb && breadcrumb.length > 1) {
            return breadcrumb.map((entry, index) => {
              const title = entry.name ? entry.name : entry.title;
              if (index === 0) {
                return (
                  <LocalizedLink to={entry.contentful_id} locale={locale}>
                    {title}
                  </LocalizedLink>
                );
              }
              return (
                <>
                  <ChevronIcon />
                  <LocalizedLink to={entry.contentful_id} locale={locale}>
                    {title}
                  </LocalizedLink>
                </>
              );
            });
          }
        })()}
      </Breadcrumb>
    </HeaderElement>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
