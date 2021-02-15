// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createAuthorPages = require('./pages/createAuthorPages');
const createBlogPages = require('./pages/createBlogPages');
const createRootPages = require('./pages/createRootPages');

module.exports = async ({ actions, graphql, reporter }) => {
  await createRootPages(actions);
  await createBlogPages(actions, graphql, reporter);
  await createAuthorPages(actions, graphql, reporter);
};
