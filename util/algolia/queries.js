// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const escapeStringRegexp = require('escape-string-regexp');

const pagePath = `content`;

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
