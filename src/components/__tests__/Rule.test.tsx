// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import Rule from '../Rule';

import ruleQuery from '../../../test/data/ruleQuery';

describe('Rule component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(ruleQuery));

  it('renders first blue correctly', () => {
    const { container } = render(<Rule color="blue" mode={1} />);

    expect(container).toMatchSnapshot();
  });

  it('renders second blue correctly', () => {
    const { container } = render(<Rule color="blue" mode={2} />);

    expect(container).toMatchSnapshot();
  });

  it('renders third blue correctly', () => {
    const { container } = render(<Rule color="blue" mode={3} />);

    expect(container).toMatchSnapshot();
  });

  it('renders first peach correctly', () => {
    const { container } = render(<Rule color="peach" mode={1} />);

    expect(container).toMatchSnapshot();
  });

  it('renders second peach correctly', () => {
    const { container } = render(<Rule color="peach" mode={2} />);

    expect(container).toMatchSnapshot();
  });

  it('renders third peach correctly', () => {
    const { container } = render(<Rule color="peach" mode={3} />);

    expect(container).toMatchSnapshot();
  });
});
