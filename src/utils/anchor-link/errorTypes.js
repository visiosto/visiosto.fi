// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

// prettier-ignore
const IMPROPPER_FORMATTING = 'Anchor path should contain an absolute root path `/` and selector `#` Ex: `/about#team`';

const INVALID_HASH = 'Anchor Links plugin attempted to scroll to an invalid hash on route change.';

export default { IMPROPPER_FORMATTING, INVALID_HASH };
