// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createBlogPostSlug = require('./pages/createBlogPostSlug');

// Parse date information out of blog post filename.
const blogPostFilenameRegex = /([0-9]+)-([0-9]+)-([0-9]+)-(.+)\.md$/;

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, locale } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        if (relativePath.includes('blog')) {
          console.log(`Creating node for '${relativePath}'`);

          // Blog posts don't have embedded permalinks.
          // Their slugs follow a pattern: /blog/<year>/<month>/<day>/<slug>
          // The date portion comes from the file name: <date>-<title>.md
          const match = blogPostFilenameRegex.exec(relativePath);
          const year = match[1];
          const month = match[2];
          const day = match[3];
          const filename = match[4].replace(`.${locale}`, '');

          slug = createBlogPostSlug(locale, `${year}-${month}-${day}`, filename);

          console.log('The slug created is', slug);

          const date = new Date(year, month - 1, day);

          // Blog posts are sorted by date and display the date in their header.
          createNodeField({
            node,
            name: 'date',
            value: date.toJSON(),
          });

          createNodeField({
            node,
            name: 'filename',
            value: filename,
          });

          const path = `/blog/${year}/${month}/${day}/${filename}`;

          console.log('The link path is', path);

          createNodeField({
            node,
            name: 'linkPath',
            value: path,
          });
        }
      }

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });

      break;
    }

    default:
      break;
  }
};
