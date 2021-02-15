// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createAuthorSlug = require('./pages/createAuthorSlug');
const createBlogPostSlug = require('./pages/createBlogPostSlug');

// Parse date information out of blog post filename.
const blogPostFilenameRegex = /([0-9]+)-([0-9]+)-([0-9]+)-(.+)\.md$/;

const pageKeySlashIndex = 1;

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, locale } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;
      let keySlug = permalink;

      // TODO Have separate handling for the key slugs.
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

          keySlug = `/blog/${year}/${month}/${day}/${filename}`;

          const date = new Date(year, month, day);

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
        } else if (relativePath.includes('author')) {
          console.log(`Creating node for '${relativePath}'`);

          const filename = relativePath.substr(pageKeySlashIndex).split('/')[1].split('.')[0];

          slug = createAuthorSlug(locale, filename);

          console.log('The slug created is', slug);

          keySlug = `/author/${filename}`;

          createNodeField({
            node,
            name: 'filename',
            value: filename,
          });
        }
      }

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}`;
      }

      if (!keySlug) {
        keySlug = `/${relativePath.replace('.md', '')}`;
      }

      console.log('The slug is', slug);

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });

      console.log('The key slug is', keySlug);

      // Used to generate the key slug that is used to create localized links to the content.
      createNodeField({
        node,
        name: 'keySlug',
        value: keySlug,
      });

      break;
    }

    default:
      break;
  }
};
