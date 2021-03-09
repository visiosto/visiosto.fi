# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]

### Added

- Workflow status badge to the README.
- Lint for CSS-in-JS.
- Internationalization of the markdown page links.

### Changed

- Gatsby to v3.
- Cover component to handle the functionality of the index page cover elements.

### Removed

- Query string `colorscheme` for setting the colour scheme on landing.

## [0.5.1] - 2021-02-16

### Fixed

- Size of the page titles on mobile by making them smaller.

## [0.5.0] - 2021-02-16

### Added

- Card component.
- Button component.
- Thematic break component.
- Horizontal rule component with multiple different alternative images.
- Cards containing services of the company.
- Anchor link for smoothly scrolling to an `id` on a page.
- Internationalization of the ID anchor links.
- Query string `colorscheme` for setting the colour scheme on landing.
- Support for dark mode that is based on the use of CSS variables and React context.
- Own components for all of the different covers on the index page.
- Copyright to the generated files.
- Page for 404 error.
- Blog posts page.
- Localized paths for blog posts.
- Language switcher to the footer of the site.
- Support for English site.
- Use of semantic HTML elements to the site.
- Support for language switcher on the blog pages.
- Support for adding simple pages using Markdown.
- Required files and dependencies for implementing unit tests.

### Changed

- Colours of the site to the brand colours.
- Font family of heading 3 and below to the main paragraph font family.

### Fixed

- Flickering of the site when switching page.

## [0.4.1] - 2021-01-30

### Fixed

- Changelog for `v0.4.0`.

## [0.4.0] - 2021-01-30

### Changed

- Background images to use `gatsby-image`.

### Fixed

- Margins of the site title.

## [0.3.2] - 2021-01-27

### Fixed

- Weight of the site title when it’s a paragraph.

## [0.3.1] - 2021-01-27

### Fixed

- Changelog for `v0.3.0`.
- Margins for the site title.

## [0.3.0] - 2021-01-27

### Added

- Temporary `robots.txt` for disallowing all robots to index the site.

### Changed

- Site title from first-level heading to paragraph on pages other than index page.
- Texts on the site to be placeholder texts while the site is still in development.

## [0.2.0] - 2021-01-27

### Added

- Script for automatically deploying releases.

## [0.1.0] - 2021-01-27

### Added

- Basic Gatsby site infrastructure.
- Layout component and components used in the layout that are common to every page of the site.
- Template for the index pages of the site.
- Support for internationalizing pages.
- Both light and dark themes for the site.

[unreleased]: https://github.com/visiosto/visiosto.github.io/compare/v0.5.1...HEAD
[0.5.1]: https://github.com/visiosto/visiosto.github.io/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/visiosto/visiosto.github.io/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/visiosto/visiosto.github.io/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/visiosto/visiosto.github.io/compare/v0.3.2...v0.4.0
[0.3.2]: https://github.com/visiosto/visiosto.github.io/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/visiosto/visiosto.github.io/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/visiosto/visiosto.github.io/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/visiosto/visiosto.github.io/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/visiosto/visiosto.github.io/releases/tag/v0.1.0
