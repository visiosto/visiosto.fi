// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import '../../../test/matchMedia';

import React, { useContext } from 'react';

import ThemeContext from '../ThemeContext';

import renderWithProviders from '../../../test/renderWithProviders';

function Component() {
  const { colorMode } = useContext(ThemeContext);

  return <div>{colorMode}</div>;
}

describe('Theme context component', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(<Component />, 'fi');

    expect(container).toMatchSnapshot();
  });
});
