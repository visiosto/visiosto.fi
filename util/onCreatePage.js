// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

module.exports = function onCreatePage({ page, actions }) {
  const { createPage, deletePage } = actions;

  if (page.path === '/404/') {
    const oldPage = { ...page };

    // eslint-disable-next-line no-param-reassign
    page.path = '/404';

    if (page.path !== oldPage.path) {
      deletePage(oldPage);
      createPage(page);
    }
  }
};
