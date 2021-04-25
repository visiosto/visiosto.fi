// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery } from 'gatsby';

import Head from '../Head';

import headQuery from '../../../../test/data/headQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Head component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(headQuery));

  it('renders the tests correctly for Finnish index page', () => {
    const mockTitle = 'Visiosto - Sinun visiosi - linssimme läpi';
    const mockDescription =
      'Pilvilinnojen maalauksen aika on ohi, me rakennamme sen, mitä toivot. Taitamme sinun visiosi – linssimme läpi.';

    const { container } = renderWithProviders(
      <Head
        description="Pilvilinnojen maalauksen aika on ohi, me rakennamme sen, mitä toivot. Taitamme sinun visiosi – linssimme läpi."
        locale="fi"
        pageID="rXFgpak6HKjCuUXjFo9KW"
        title="Etusivu"
        home
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    const { title, metaTags } = Helmet.peek();

    expect(title).toBe(mockTitle);
    expect(metaTags[0].content).toBe(mockDescription);
    expect(metaTags.length).toBe(16);
  });

  it('renders the tests correctly for English index page', () => {
    const mockTitle = 'Visiosto - Your vision - through our lens';
    const mockDescription =
      'It’s time to stop building castles in the air: we construct what you want. We refract a picture from your vision – through our lens.';

    const { container } = renderWithProviders(
      <Head
        description="It’s time to stop building castles in the air: we construct what you want. We refract a picture from your vision – through our lens."
        locale="en-GB"
        pageID="rXFgpak6HKjCuUXjFo9KW"
        title="Front Page"
        home
      />,
      'en',
    );

    expect(container).toMatchSnapshot();

    const { title, metaTags } = Helmet.peek();

    expect(title).toBe(mockTitle);
    expect(metaTags[0].content).toBe(mockDescription);
    expect(metaTags.length).toBe(16);
  });
});
