// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import Intl from '../Intl';

import intlQuery from '../../../test/data/intlQuery';

describe('Intl component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(intlQuery));

  it('renders Finnish correctly', () => {
    const { container, getByText } = render(<Intl locale="fi">Content</Intl>);

    expect(container).toMatchSnapshot();

    expect(getByText('Content')).toBeInTheDocument();
  });

  it('renders English correctly', () => {
    const { container, getByText } = render(<Intl locale="en">Content</Intl>);

    expect(container).toMatchSnapshot();

    expect(getByText('Content')).toBeInTheDocument();
  });
});
