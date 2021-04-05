// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createPages = require('./util/createPages');
const onCreatePage = require('./util/onCreatePage');
const onPostBuild = require('./util/onPostBuild');

exports.createPages = createPages;
exports.onCreatePage = onCreatePage;
exports.onPostBuild = onPostBuild;
