// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, withArtDirection } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { ChevronRightIcon } from '@primer/octicons-react';
import { useIntl } from 'react-intl';

import LocalizedAnchorLink from '../link/LocalizedAnchorLink';
import LocalizedLink from '../link/LocalizedLink';
import Navigation from './Navigation';
import SchemedImage from '../SchemedImage';

import createInternationalization from '../../util/createInternationalization';

import theme from '../../theme';

import { indexPageID, portfolioPathID } from '../../entryIDs';

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
    return createPath(pathNode.parentPath).concat([pathNode]);
  }

  return [pathNode];
};

const createBreadcrumbPath = function createBreadcrumbNodesPath(node, parentPath?) {
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
    const { node } = data.allContentfulEntry.edges.filter(
      ({ node: entryNode }) =>
        entryNode.contentful_id === pageID && entryNode.node_locale === locale,
    )[0];

    switch (node.internal.type) {
      case 'ContentfulAuthor': {
        const authorNode = data.allContentfulAuthor.edges.filter(
          ({ node: entryNode }) =>
            entryNode.contentful_id === pageID && entryNode.node_locale === locale,
        )[0].node;
        const authorPath = data.authorPaths.edges.filter(
          ({ node: entryNode }) => entryNode.node_locale === locale,
        )[0].node;

        return [authorPath, authorNode];
      }
      case 'ContentfulBlogPost': {
        const blogPostNode = data.allContentfulBlogPost.edges.filter(
          ({ node: entryNode }) =>
            entryNode.contentful_id === pageID && entryNode.node_locale === locale,
        )[0].node;
        const blogPath = data.blogPaths.edges.filter(
          ({ node: entryNode }) => entryNode.node_locale === locale,
        )[0].node;

        return [blogPath, blogPostNode];
      }
      case 'ContentfulCategory': {
        const categoryNode = data.allContentfulCategory.edges.filter(
          ({ node: entryNode }) =>
            entryNode.contentful_id === pageID && entryNode.node_locale === locale,
        )[0].node;
        const categoryPath = data.categoryPaths.edges.filter(
          ({ node: entryNode }) => entryNode.node_locale === locale,
        )[0].node;
        const { parentPath } = categoryPath;

        return [parentPath, categoryPath, categoryNode];
      }
      case 'ContentfulPage': {
        const pageNode = data.allContentfulPage.edges.filter(
          ({ node: entryNode }) =>
            entryNode.contentful_id === pageID && entryNode.node_locale === locale,
        )[0].node;
        return createBreadcrumbPath(pageNode);
      }
      case 'ContentfulIndexPage': {
        return null;
      }
      case 'ContentfulPath': {
        const pathNode = data.allContentfulPath.edges.filter(
          ({ node: entryNode }) =>
            entryNode.contentful_id === pageID && entryNode.node_locale === locale,
        )[0].node;
        return createBreadcrumbPath(pathNode);
      }
      case 'ContentfulPortfolioReference': {
        const referenceNode = data.allContentfulPortfolioReference.edges.filter(
          ({ node: entryNode }) =>
            entryNode.contentful_id === pageID && entryNode.node_locale === locale,
        )[0].node;
        const portfolioPath = data.portfolioPaths.edges.filter(
          ({ node: entryNode }) => entryNode.node_locale === locale,
        )[0].node;

        return [portfolioPath, referenceNode];
      }
      default: {
        return null;
      }
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
  const intl = createInternationalization(useIntl());

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
        logoPhoneSLight: file(relativePath: { eq: "header/logo-blue.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 301, placeholder: BLURRED)
          }
        }
        logoPhoneSDark: file(relativePath: { eq: "header/logo-peach.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 301, placeholder: BLURRED)
          }
        }
        logoTabletLight: file(relativePath: { eq: "header/logo-blue.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 301, placeholder: BLURRED)
          }
        }
        logoTabletDark: file(relativePath: { eq: "header/logo-peach.png" }) {
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
        allContentfulPortfolioReference {
          edges {
            node {
              contentful_id
              name
              node_locale
              slug
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
        portfolioPaths: allContentfulPath(
          filter: { contentful_id: { eq: "1tG1ohi0pFMwiZwtSoiAhm" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
              slug
              title
            }
          }
        }
      }
    `,
  );

  const { site, logoPhoneSLight, logoPhoneSDark, logoTabletLight, logoTabletDark } = data;

  const logosLight = withArtDirection(getImage(logoPhoneSLight)!, [
    {
      media: `(${theme.devices.tablet})`,
      image: getImage(logoTabletLight)!,
    },
  ]);
  const logosDark = withArtDirection(getImage(logoPhoneSDark)!, [
    {
      media: `(${theme.devices.tablet})`,
      image: getImage(logoTabletDark)!,
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

          return <SiteTitle role="heading">{site.siteMetadata.title}</SiteTitle>;
        })()}
        <LocalizedLink locale={locale} to="/">
          <Image alt={intl('headerLogoImageText')} dark={logosDark} light={logosLight} />
        </LocalizedLink>
      </SiteBranding>
      <Navigation locale={locale} />
      <Breadcrumb>
        {(() => {
          if (breadcrumb && breadcrumb.length > 1) {
            return breadcrumb.map((entry, index) => {
              const title = entry.name ? entry.name : entry.title;
              if (index === 0) {
                if (entry.contentful_id === portfolioPathID) {
                  return (
                    <LocalizedAnchorLink
                      key={entry.contentful_id}
                      locale={locale}
                      to={`${indexPageID}#portfolio`}
                    >
                      {title}
                    </LocalizedAnchorLink>
                  );
                }

                return (
                  <LocalizedLink key={entry.contentful_id} locale={locale} to={entry.contentful_id}>
                    {title}
                  </LocalizedLink>
                );
              }

              return (
                <Fragment key={entry.contentful_id}>
                  <ChevronIcon />
                  <LocalizedLink locale={locale} to={entry.contentful_id}>
                    {title}
                  </LocalizedLink>
                </Fragment>
              );
            });
          }

          return null;
        })()}
      </Breadcrumb>
    </HeaderElement>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
