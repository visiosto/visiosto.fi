// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import Theme from '../components/Theme';

const Page = (props) => {
  const { contentfulAuthor: author } = props.data;

  return (
    <Layout
      title={author.name}
      locale={props.pageContext.locale}
      pageId={props.pageContext.pageId}
      author
    ></Layout>
  );
};

const Author = (props) => (
  <Intl
    locale={props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]}
  >
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default Author;

export const pageQuery = graphql`
  query AuthorQuery($pageId: String, $locale: String) {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
    contentfulAuthor(contentful_id: { eq: $pageId }, node_locale: { eq: $locale }) {
      contentful_id
      name
    }
  }
`;
