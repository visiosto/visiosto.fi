// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const { addPathToSite } = require('../sitePaths');

module.exports = ({ page, actions }) => {
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

  addPathToSite(page.path);
};
