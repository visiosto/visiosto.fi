// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createAuthorSlug = require('./pages/createAuthorSlug');
const createBlogPostSlug = require('./pages/createBlogPostSlug');

// Parse information out of blog post filename.
const blogPostFilenameRegex = /(.+)\/(.+)\.(.{2})\.md$/;

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, frontmatterLocale } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;
      let keySlug = permalink;
      let locale = frontmatterLocale;

      // TODO Have separate handling for the key slugs.
      if (!slug) {
        if (relativePath.includes('blog')) {
          console.log(`Creating node for '${relativePath}'`);

          // Blog posts don't have embedded permalinks.
          // Their slugs follow a pattern: /blog/<year>/<month>/<day>/<slug>
          // The date portion comes from the file name: <date>-<title>.md
          const match = blogPostFilenameRegex.exec(relativePath);
          const [, , filename] = match;

          [, , , locale] = match;

          console.log('The filename is', filename);
          console.log('The locale is', locale);

          slug = createBlogPostSlug(locale, filename);

          keySlug = `/blog/${filename}`;
        } else if (relativePath.includes('author')) {
          console.log(`Creating node for '${relativePath}'`);

          const match = blogPostFilenameRegex.exec(relativePath);
          const [, , filename] = match;

          [, , , locale] = match;

          console.log('The filename is', filename);
          console.log('The locale is', locale);

          slug = createAuthorSlug(locale, filename);

          keySlug = `/author/${filename}`;
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

      createNodeField({
        node,
        name: 'locale',
        value: locale,
      });

      break;
    }

    default:
      break;
  }
};
