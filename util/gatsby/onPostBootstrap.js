// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const fs = require('fs');
const path = require('path');

const sitePaths = require('../sitePaths');

// Writes all of the paths to the generated file for link creation.
module.exports = () => {
  const generated = path.join(__dirname, '..', '..', 'src', '__generated__');

  if (!fs.existsSync(generated)) {
    fs.mkdirSync(generated);
  }

  const allPagesPath = path.join(generated, 'all-pages.js');

  fs.writeFileSync(
    allPagesPath,
    `// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Generated during bootstrapping via gatsby-node.js

export default ['${sitePaths.join("', '")}'];
`,
  );
};
