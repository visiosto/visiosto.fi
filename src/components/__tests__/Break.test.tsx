// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import Break from '../Break';

import ruleQuery from '../../../test/data/ruleQuery';

describe('Break component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(ruleQuery));

  it('renders correctly with first blue rule', () => {
    const { container } = render(<Break color="blue" mode={1} />);

    expect(container).toMatchSnapshot();
  });

  it('renders correctly with second blue rule', () => {
    const { container } = render(<Break color="blue" mode={2} />);

    expect(container).toMatchSnapshot();
  });

  it('renders correctly with third blue rule', () => {
    const { container } = render(<Break color="blue" mode={3} />);

    expect(container).toMatchSnapshot();
  });

  it('renders correctly with first peach rule', () => {
    const { container } = render(<Break color="peach" mode={1} />);

    expect(container).toMatchSnapshot();
  });

  it('renders correctly with second peach rule', () => {
    const { container } = render(<Break color="peach" mode={2} />);

    expect(container).toMatchSnapshot();
  });

  it('renders correctly with third peach rule', () => {
    const { container } = render(<Break color="peach" mode={3} />);

    expect(container).toMatchSnapshot();
  });
});
