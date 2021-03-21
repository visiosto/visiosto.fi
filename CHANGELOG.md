# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## [0.12.0] - 2021-03-21

### Added

- Links to the next and previous blog posts to the blog post pages.
- Breadcrumbs to pages that are deeper in the tree.
- Main navigation of the site to be read from Contentful.
- Netlify plugin to generate Netlify headers.
- More margin between the links in the footer on mobile.
- Open Graph image.
- Support for custom descriptions for each page.

### Changed

- Colour of the links.

## [0.11.2] - 2021-03-21

### Changed

- Typekit project.

## [0.11.1] - 2021-03-21

### Fixed

- Alternate links in the head.

## [0.11.0] - 2021-03-21

### Added

- Support for new all-Contentful content into the localized links.
- Support for new all-Contentful content into the locale links.
- Support for new all-Contentful content into the localized anchor links.
- Support for new all-Contentful content into the alternative links in the head for each page.
- Support for search when using Contentful.
- Possibility to create localized links using slugs.

### Changed

- All of the localized links to be contained in one component.
- All `lang` properties to `locale` properties.
- All pages to be constructed by using Contentful data.

## [0.10.3] - 2021-03-16

### Fixed

- `parents` node to the new `parentPath` node that can only hold one value.

## [0.10.2] - 2021-03-16

### Fixed

- Name of the parents node that was changed in Contentful.

## [0.10.1] - 2021-03-16

### Fixed

- Quality of the images got from Contentful.

## [0.10.0] - 2021-03-16

### Added

- General pages from Contentful.
- Generation of the slugs of the pages from Contentful by using parent pages.

### Changed

- Front page data to be read from Contentful.
- Author data to be read from Contentful.

### Removed

- Generation of the search index as long as the transition to Contentful is in progress.

## [0.9.0] - 2021-03-15

### Added

- Hovering effect for the search box only when it has focus or text.
- Messages when the search index is still loading and when the loading has failed.
- Information that the site is made by Visiosto to the footer.
- Company hashtag to the footer of the site.
- ‘Read more’ button to blog posts.
- More space between blog posts in the blog page.
- Localized author names and links to author pages to the blog posts.
- Pricing page that is dynamically generated from pricing data.
- Anchor link button.
- Page containing the terms of Visiosto server and domain service.
- Category to the blog posts.
- Blog post flag telling whether or not the post is meant to be shown only on the management page.
- Management news to the management page.
- Contentful as the source for blog posts, categories, and authors.

## [0.8.2] - 2021-03-12

### Fixed

- Lint error.

## [0.8.1] - 2021-03-12

### Added

- Message that is shown when nothing is found.

### Fixed

- Search results disappearing when clicked on.
- Translations of the search texts.

## [0.8.0] - 2021-03-12

### Added

- Search box to the site.
- Automatic indexing of the pages of the site on build.

## [0.7.2] - 2021-03-11

### Changed

- Story cover top image into a reflection.

## [0.7.1] - 2021-03-11

### Changed

- Cover images on mobile to be only simple rule elements.

## [0.7.0] - 2021-03-11

### Added

- `alt` tags to the image elements.

### Changed

- Name of the project from `visiosto.github.io` to `visiosto.fi`.
- Deployment of the site to external repository.

### Removed

- Transitions from the navigation as they don't work.

### Fixed

- Colour filter of the GitHub footer icon as it wasn't completely black.

## [0.6.2] - 2021-03-10

### Removed

- Placeholder button from the website design card.

### Fixed

- Border radii of the author images on the front page.

## [0.6.1] - 2021-03-10

### Changed

- Favicon of the site to the actual brand colour icon.
- Name and description of the site.
- Page title for the home page.

## [0.6.0] - 2021-03-10

### Added

- Workflow status badge to the README.
- Lint for CSS-in-JS.
- Internationalization of the markdown page links.
- Company logo to the header of the site.
- Localizations of the footer.
- Support for giving page sections in markdown.
- Support for using HTML for titles of Covers and Cards.
- Content for the front page.
- Page for the client register privacy policy.
- Contact details to the front page.
- All three of the company’s people to the contact details.
- Social media links to the footer of the site.
- Logo and company information to the footer of the site.
- Missing blog post to the site.

### Changed

- Gatsby to v3.
- Cover component to handle the functionality of the index page cover elements.
- Language switcher to use a button that can be spotted more easily.

### Removed

- Query string `colorscheme` for setting the colour scheme on landing.
- Generated list of the pages.
- Checking the colour scheme from the local storage.

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

[unreleased]: https://github.com/visiosto/visiosto.fi/compare/v0.12.0...HEAD
[0.12.0]: https://github.com/visiosto/visiosto.fi/compare/v0.11.2...v0.12.0
[0.11.2]: https://github.com/visiosto/visiosto.fi/compare/v0.11.1...v0.11.2
[0.11.1]: https://github.com/visiosto/visiosto.fi/compare/v0.11.0...v0.11.1
[0.11.0]: https://github.com/visiosto/visiosto.fi/compare/v0.10.3...v0.11.0
[0.10.3]: https://github.com/visiosto/visiosto.fi/compare/v0.10.2...v0.10.3
[0.10.2]: https://github.com/visiosto/visiosto.fi/compare/v0.10.1...v0.10.2
[0.10.1]: https://github.com/visiosto/visiosto.fi/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/visiosto/visiosto.fi/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/visiosto/visiosto.fi/compare/v0.8.2...v0.9.0
[0.8.2]: https://github.com/visiosto/visiosto.fi/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/visiosto/visiosto.fi/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/visiosto/visiosto.fi/compare/v0.7.2...v0.8.0
[0.7.2]: https://github.com/visiosto/visiosto.fi/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/visiosto/visiosto.fi/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/visiosto/visiosto.fi/compare/v0.6.2...v0.7.0
[0.6.2]: https://github.com/visiosto/visiosto.fi/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/visiosto/visiosto.fi/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/visiosto/visiosto.fi/compare/v0.5.1...v0.6.0
[0.5.1]: https://github.com/visiosto/visiosto.fi/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/visiosto/visiosto.fi/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/visiosto/visiosto.fi/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/visiosto/visiosto.fi/compare/v0.3.2...v0.4.0
[0.3.2]: https://github.com/visiosto/visiosto.fi/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/visiosto/visiosto.fi/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/visiosto/visiosto.fi/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/visiosto/visiosto.fi/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/visiosto/visiosto.fi/releases/tag/v0.1.0
