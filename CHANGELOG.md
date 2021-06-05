# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]

### Changed

- Brand colours of the company.
- Background images of the navigation to the new brand colours.
- Background colours of the switch inputs.
- Colours of the images in the cover components to the new brand colours.

## [0.22.0] - 2021-06-04

### Added

- Automatic inverted colours for each colour of the theme.

### Changed

- Default Open Graph image of the site.

## [0.21.0] - 2021-04-27

### Changed

- Made-by text in the footer.
- Name of the project from `visiosto.fi` to `visiosto-website`.
- Netlify site name from `visiosto` to `visiosto-website-main`.

## [0.20.1] - 2021-04-25

### Fixed

- Main navigation on iOS devices by not having the background image show on hover.

## [0.20.0] - 2021-04-25

### Added

- Unit tests for the components.
- Unit tests for the utilities.
- Multiple Node version to the main workflow.
- Image as the hover background for the main navigation.
- Inverted colour for every colour in the theme.
- Common style files for some components.
- Automatic inverted versions of the theme colours.

### Changed

- All of the translations with the ending `ALT` to have the ending `Text`.
- Project to use TypeScript.
- ESLint to lint JSX files in addition to JS files.
- Main workflow to be run in multiple different jobs.
- Links and elements to use the brand colours.
- Button component to use prop `action` instead of `color` to determine the style of the button.

### Removed

- Unnecessary colours from the theme.

### Fixed

- Order of the site URL redirects.
- Border radii of the images for Gatsby v3.3.
- Cover images showing on small screens when they should be hidden.

## [0.19.1] - 2021-04-11

### Fixed

- Index layout properties by removing the `errorCode` property.
- Page title that included the name of the site twice.
- Prop types of `ThemeContextProvider`.
- Missing Open Graph image text translations.

## [0.19.0] - 2021-04-11

### Added

- `prop-types` as a dependency.
- Prop types and default props to the components.
- Support for creating links to the `404` error page, mainly for creating the link to change langauge.
- Prop types and default props to the page template components.
- Explicit Babel configration.

### Changed

- Navigation component to a class to better comply with the coding standards.
- Side margins of the element wrapping the header component to `0`.
- Theme colour in the web app manifest.
- Different cover elements into single cover element controlled by props.
- Variable `siteUrl` to `siteURL` to match coding standards.
- Variable `alternativeUrls` to `alternativeURL` to match coding standards.
- `Id` in various business ID variables to `ID` to match coding standards.
- Variable `pageId` to `pageID` to match coding standards.
- Function `createIntl` to `createInternationalization` to match coding standards.
- All of the variables `e` to `event` to match coding standards.
- All of the functions `i` to `intl` to match coding standards.
- `meta` translations to `head`.

### Fixed

- Community file links in the README.
- `for` to `htmlFor` in JSX as the DOM attribute `for` is reserved for JavaScript.
- Missing `key`s in the posts on the category pages.

## [0.18.1] - 2021-04-07

### Fixed

- Description of the project in the README.

## [0.18.0] - 2021-04-07

### Added

- Success and error messages to the contact form.
- Timeout for the status messages of the contact form.
- Validation for the input of the contact form.
- Validation for the input of the client register forms.
- Component for checkbox inputs styled as switches.
- Component for radio inputs.
- Option for explicitly giving consent for processing personal data before submitting the forms.
- Information about giving consent before submitting the front page contact form.
- Separate translations for personal and business client register forms.

### Changed

- Client register forms for people and businesses to separate components.
- Code related to the Gatsby APIs to comply better with the coding standards.
- Utility code to comply better with the coding standards.
- Page template components to comply better with the coding standards.
- Components to comply better with the coding standards.

### Removed

- Alert messages from the contact form.

### Fixed

- Cases of the front page contact form.
- Flashing cookie banner when cookies have already been accepted by determining whether the banner should be shown after the component has mounted.
- JSX Fragments that should be keyed by explicitly using `React.Fragment`.
- Style of the locale files.

## [0.17.0] - 2021-04-04

### Added

- Stateful contact form component for the front page contact form.

### Removed

- Unused constants.

## [0.16.1] - 2021-04-04

### Fixed

- Art direction of the images that use media queries.

## [0.16.0] - 2021-04-04

### Added

- Deploy status to the README.
- Localized `404` error pages.
- Redirects for different URLs.
- Form component for submitting data to the client register for both businesses and persons.

### Changed

- Name of the form `contact` to `Front page contact`.
- Project name in the Netlify URL from `practical-ptolemy-144432` to `visiosto`.

### Fixed

- Site title component that was created inside another component.
- Page title in the head.
- Page title stylings.
- Page title components that were defined inside other components.
- Format of the device media queries to follow CSS syntax more closely.

## [0.15.4] - 2021-03-27

### Added

- Honeypot field to the contact form.
- Word ‘or’ between email and phone number in the contact form to indicate that one of them is required.

## [0.15.3] - 2021-03-27

### Added

- Hidden form field required by Netlify.

## [0.15.2] - 2021-03-27

### Added

- Action to the contact form.

## [0.15.1] - 2021-03-27

### Added

- Input button to the contact form.

## [0.15.0] - 2021-03-27

### Added

- Link to the terms of use to the footer.
- Contact for to the front page.

### Changed

- Button colour to be set by using an explicit colour option.
- Colour of the green buttons to be a bit darker.
- Placeholder for some of the images to be blurred instead of single colour.
- Search box to always have a shadow.
- Box shadows to show better in dark mode.

## [0.14.2] - 2021-03-27

### Fixed

- Colours of the green buttons to be more accessible.

## [0.14.1] - 2021-03-27

### Changed

- Cookies to expire in one month.

## [0.14.0] - 2021-03-27

### Added

- Explicit anonymization of IP addresses.
- Cookie notice banner.
- Cookie settings overlay when user chooses to adjust their cookie preferences.
- Ability to toggle tracking on and off.
- Link to the data protection page to the footer.

### Changed

- Cards on the front page to take up the whole width on tablet.
- Button to single component that is used inside other components.
- Google Analytics tracking to use Google Tag Manager for setting the scripts.

### Fixed

- Wrong theme variable used to make the layout responsive.

## [0.13.0] - 2021-03-22

### Added

- Facebook App ID.
- Twitter creator information.
- Open Graph type to `article` for blog post articles.
- Open Graph site name.
- Open Graph locale property.
- Open Graph alternative locales.
- Possibility to use Open Graph image that is set in Contentful.
- Vector variant of the favicon that has different colour when device uses dark mode.
- Author information on author pages.
- Author blog posts on author pages.
- Page for all authors on the site.
- Page for all categories on the site.
- Google Analytics tracking.

### Changed

- To large summary card on Twitter.
- Name of the site in the manifest file.
- Border radii of the card to result in more round corners.

## [0.12.3] - 2021-03-21

### Added

- Secure alternative to the Open Graph image.

### Changed

- Site thumbnail image to look better in Facebook preview.

## [0.12.2] - 2021-03-21

### Fixed

- URL of the Open Graph image.

## [0.12.1] - 2021-03-21

### Changed

- Site URL to the Netlify URL.

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

[unreleased]: https://github.com/visiosto/visiosto-website/compare/v0.22.0...HEAD
[0.22.0]: https://github.com/visiosto/visiosto-website/compare/v0.21.0...v0.22.0
[0.21.0]: https://github.com/visiosto/visiosto-website/compare/v0.20.1...v0.21.0
[0.20.1]: https://github.com/visiosto/visiosto-website/compare/v0.20.0...v0.20.1
[0.20.0]: https://github.com/visiosto/visiosto-website/compare/v0.19.1...v0.20.0
[0.19.1]: https://github.com/visiosto/visiosto-website/compare/v0.19.0...v0.19.1
[0.19.0]: https://github.com/visiosto/visiosto-website/compare/v0.18.1...v0.19.0
[0.18.1]: https://github.com/visiosto/visiosto-website/compare/v0.18.0...v0.18.1
[0.18.0]: https://github.com/visiosto/visiosto-website/compare/v0.17.0...v0.18.0
[0.17.0]: https://github.com/visiosto/visiosto-website/compare/v0.16.1...v0.17.0
[0.16.1]: https://github.com/visiosto/visiosto-website/compare/v0.16.0...v0.16.1
[0.16.0]: https://github.com/visiosto/visiosto-website/compare/v0.15.4...v0.16.0
[0.15.4]: https://github.com/visiosto/visiosto-website/compare/v0.15.3...v0.15.4
[0.15.3]: https://github.com/visiosto/visiosto-website/compare/v0.15.2...v0.15.3
[0.15.2]: https://github.com/visiosto/visiosto-website/compare/v0.15.1...v0.15.2
[0.15.1]: https://github.com/visiosto/visiosto-website/compare/v0.15.0...v0.15.1
[0.15.0]: https://github.com/visiosto/visiosto-website/compare/v0.14.2...v0.15.0
[0.14.2]: https://github.com/visiosto/visiosto-website/compare/v0.14.1...v0.14.2
[0.14.1]: https://github.com/visiosto/visiosto-website/compare/v0.14.0...v0.14.1
[0.14.0]: https://github.com/visiosto/visiosto-website/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/visiosto/visiosto-website/compare/v0.12.3...v0.13.0
[0.12.3]: https://github.com/visiosto/visiosto-website/compare/v0.12.2...v0.12.3
[0.12.2]: https://github.com/visiosto/visiosto-website/compare/v0.12.1...v0.12.2
[0.12.1]: https://github.com/visiosto/visiosto-website/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/visiosto/visiosto-website/compare/v0.11.2...v0.12.0
[0.11.2]: https://github.com/visiosto/visiosto-website/compare/v0.11.1...v0.11.2
[0.11.1]: https://github.com/visiosto/visiosto-website/compare/v0.11.0...v0.11.1
[0.11.0]: https://github.com/visiosto/visiosto-website/compare/v0.10.3...v0.11.0
[0.10.3]: https://github.com/visiosto/visiosto-website/compare/v0.10.2...v0.10.3
[0.10.2]: https://github.com/visiosto/visiosto-website/compare/v0.10.1...v0.10.2
[0.10.1]: https://github.com/visiosto/visiosto-website/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/visiosto/visiosto-website/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/visiosto/visiosto-website/compare/v0.8.2...v0.9.0
[0.8.2]: https://github.com/visiosto/visiosto-website/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/visiosto/visiosto-website/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/visiosto/visiosto-website/compare/v0.7.2...v0.8.0
[0.7.2]: https://github.com/visiosto/visiosto-website/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/visiosto/visiosto-website/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/visiosto/visiosto-website/compare/v0.6.2...v0.7.0
[0.6.2]: https://github.com/visiosto/visiosto-website/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/visiosto/visiosto-website/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/visiosto/visiosto-website/compare/v0.5.1...v0.6.0
[0.5.1]: https://github.com/visiosto/visiosto-website/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/visiosto/visiosto-website/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/visiosto/visiosto-website/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/visiosto/visiosto-website/compare/v0.3.2...v0.4.0
[0.3.2]: https://github.com/visiosto/visiosto-website/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/visiosto/visiosto-website/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/visiosto/visiosto-website/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/visiosto/visiosto-website/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/visiosto/visiosto-website/releases/tag/v0.1.0
