// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import createPagePath from '../createPagePath';

describe('function for creating paths of pages', () => {
  const defaultLocale = 'fi';
  const localePaths = { fi: '', en_GB: 'en' };

  it('creates Finnish path without parents correctly', () => {
    const node = { slug: 'testi' };
    const path = createPagePath(node, 'fi', defaultLocale, localePaths);

    expect(path).toBe('/testi');
  });

  it('creates Finnish path with undefined parents in node correctly', () => {
    const node = { slug: 'testi', parentPath: undefined };
    const path = createPagePath(node, 'fi', defaultLocale, localePaths);

    expect(path).toBe('/testi');
  });

  it('creates Finnish path with one parent in node correctly', () => {
    const node = { slug: 'testi', parentPath: { slug: 'vanhempi' } };
    const path = createPagePath(node, 'fi', defaultLocale, localePaths);

    expect(path).toBe('/vanhempi/testi');
  });

  it('creates Finnish path with two parents in node correctly', () => {
    const node = {
      slug: 'testi',
      parentPath: { slug: 'vanhempi', parentPath: { slug: 'isovanhempi' } },
    };
    const path = createPagePath(node, 'fi', defaultLocale, localePaths);

    expect(path).toBe('/isovanhempi/vanhempi/testi');
  });

  it('creates English path without parents correctly', () => {
    const node = { slug: 'test' };
    const path = createPagePath(node, 'en-GB', defaultLocale, localePaths);

    expect(path).toBe('/en/test');
  });

  it('creates English path with undefined parents in node correctly', () => {
    const node = { slug: 'test', parentPath: undefined };
    const path = createPagePath(node, 'en-GB', defaultLocale, localePaths);

    expect(path).toBe('/en/test');
  });

  it('creates English path with one parent in node correctly', () => {
    const node = { slug: 'test', parentPath: { slug: 'parent' } };
    const path = createPagePath(node, 'en-GB', defaultLocale, localePaths);

    expect(path).toBe('/en/parent/test');
  });

  it('creates English path with two parents in node correctly', () => {
    const node = {
      slug: 'test',
      parentPath: { slug: 'parent', parentPath: { slug: 'grandparent' } },
    };
    const path = createPagePath(node, 'en-GB', defaultLocale, localePaths);

    expect(path).toBe('/en/grandparent/parent/test');
  });
});
