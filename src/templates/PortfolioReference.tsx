// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import Theme from '../components/Theme';

import createInternationalization from '../util/createInternationalization';

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled(GatsbyImage)`
  * {
    border-radius: 0.5rem;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em ${(props) => props.theme.layout.marginMobile};
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const TitleP = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string,
    momentJSLocale: PropTypes.string,
    pageID: PropTypes.string,
  }).isRequired,
};

function Page({ data, pageContext }) {
  const intl = createInternationalization(useIntl());

  const { contentfulPortfolioReference: reference } = data;
  const { locale, pageID } = pageContext;

  return (
    <Layout locale={locale} pageID={pageID} title={`${intl('portfolioTitle')} ${reference.name}`}>
      <Div>
        <TitleP>{reference.subtitle}</TitleP>
      </Div>
      <ImageDiv>
        <Image alt={reference.name} image={getImage(reference.image)!} />
      </ImageDiv>
      <Div dangerouslySetInnerHTML={{ __html: reference.description.childMarkdownRemark.html }} />
    </Layout>
  );
}

Page.propTypes = propTypes;

function PortfolioReference({ data, pageContext }) {
  const { simpleLocales } = data.site.siteMetadata;
  const { locale } = pageContext;
  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
        <Page data={data} pageContext={pageContext} />
      </Theme>
    </Intl>
  );
}

PortfolioReference.propTypes = propTypes;

export default PortfolioReference;

export const pageQuery = graphql`
  query PortfolioReferenceQuery($pageID: String, $locale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    contentfulPortfolioReference(contentful_id: { eq: $pageID }, node_locale: { eq: $locale }) {
      description {
        childMarkdownRemark {
          html
        }
      }
      name
      subtitle
      image {
        gatsbyImageData(quality: 100, height: 500)
      }
    }
  }
`;
