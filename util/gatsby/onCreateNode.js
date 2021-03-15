// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createAuthorSlug = require('./pages/createAuthorSlug');
const createBlogPostSlug = require('./pages/createBlogPostSlug');
const createSlug = require('./pages/createSlug');

// Parse information out of blog post filename.
const blogPostFilenameRegex = /(.+)\/(\d{4})-(\d{2})-(\d{2})-(.+)\.(.{2})\.md$/;
const filenameRegex = /(.+)\/(.+)\.(.{2})\.md$/;
const indexFilenameRegex = /(.+)\/(\d+)-(.+)\.(.{2})\.md$/;

module.exports = ({ node, actions, getNode, reporter }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, frontmatterLocale } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      reporter.verbose(`The relative path for the current node is ${relativePath}`);
      // reporter.verbose(`The parent for the current node is ${JSON.stringify(getNode(node.parent))}`);
      console.log(getNode(getNode(node.parent).parent));

      if (!relativePath) {
        break;
      }

      let slug = permalink;
      let keySlug = permalink;
      let locale = frontmatterLocale;

      // TODO Have separate handling for the key slugs.
      if (!slug) {
        if (relativePath.includes('blog')) {
          reporter.verbose(`Creating node for '${relativePath}'`);

          // Blog posts don't have embedded permalinks.
          // Their slugs follow a pattern: /blog/<year>/<month>/<day>/<slug>
          // The date portion comes from the file name: <date>-<title>.md
          const match = blogPostFilenameRegex.exec(relativePath);
          const [, , , , , filename] = match;

          [, , , , , , locale] = match;

          reporter.verbose(`The filename is ${filename}`);
          reporter.verbose(`The locale is ${locale}`);

          slug = createBlogPostSlug(locale, filename, reporter);

          keySlug = `/blog/${filename}`;
        } else if (relativePath.includes('author')) {
          reporter.verbose(`Creating node for '${relativePath}'`);

          const match = filenameRegex.exec(relativePath);
          const [, , filename] = match;

          [, , , locale] = match;

          reporter.verbose(`The filename is ${filename}`);
          reporter.verbose(`The locale is ${locale}`);

          slug = createAuthorSlug(locale, filename, reporter);

          keySlug = `/author/${filename}`;
        } else if (relativePath.includes('index')) {
          reporter.verbose(`Creating node for '${relativePath}'`);

          const match = indexFilenameRegex.exec(relativePath);
          const [, , , filename] = match;

          [, , , , locale] = match;

          reporter.verbose(`The filename is ${filename}`);
          reporter.verbose(`The locale is ${locale}`);

          slug = `index/${filename}`;

          keySlug = `/index/${filename}`;
        }
      }

      if (!slug) {
        const match = /(.+)\.(.{2})\.md$/.exec(relativePath);
        const [, filename] = match;

        [, , locale] = match;

        reporter.verbose(`The filename is ${filename}`);
        reporter.verbose(`The locale is ${locale}`);

        slug = createSlug(locale, filename, reporter);

        keySlug = `/${filename}`;
      }

      reporter.verbose(`The slug is ${slug}`);

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });

      reporter.verbose(`The key slug is ${keySlug}`);

      // Used to generate the key slug that is used to create localized links to the content.
      createNodeField({
        node,
        name: 'keySlug',
        value: keySlug,
      });

      reporter.verbose(`The final locale is ${locale}`);

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
