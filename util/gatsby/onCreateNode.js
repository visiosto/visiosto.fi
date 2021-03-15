// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createSlug = require('./pages/createSlug');

// Parse information out of blog post filename.
// const blogPostFilenameRegex = /(.+)\/(\d{4})-(\d{2})-(\d{2})-(.+)\.(.{2})\.md$/;
// const filenameRegex = /(.+)\/(.+)\.(.{2})\.md$/;
// const indexFilenameRegex = /(.+)\/(\d+)-(.+)\.(.{2})\.md$/;

module.exports = ({ node, actions, getNode, reporter }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, frontmatterLocale } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      if (!relativePath) {
        break;
      }

      let slug = permalink;
      let keySlug = permalink;
      let locale = frontmatterLocale;

      if (!slug) {
        const match = /(.+)\.(.{2})\.md$/.exec(relativePath);
        const [, filename] = match;

        [, , locale] = match;

        reporter.verbose(`The filename for the default node is ${filename}`);
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
