// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createAuthorPages = require('./pages/createAuthorPages');
const createBlogPages = require('./pages/createBlogPages');
const createCategoryPages = require('./pages/createCategoryPages');
const createPages = require('./pages/createPages');
const createRootPages = require('./pages/createRootPages');

module.exports = async ({ actions, graphql, reporter }) => {
  await createRootPages(actions, graphql, reporter);
  await createPages(actions, graphql, reporter);
  await createBlogPages(actions, graphql, reporter);
  await createAuthorPages(actions, graphql, reporter);
  await createCategoryPages(actions, graphql, reporter);
};
