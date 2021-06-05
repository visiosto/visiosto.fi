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

  it('renders first blue correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="blue" mode={1} ignoreColorScheme />);

    expect(container).toMatchSnapshot();
  });

  it('renders second blue correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="blue" mode={2} ignoreColorScheme />);

    expect(container).toMatchSnapshot();
  });

  it('renders third blue correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="blue" mode={3} ignoreColorScheme />);

    expect(container).toMatchSnapshot();
  });

  it('renders first turquoise correctly', () => {
    const { container } = render(<Rule color="turquoise" mode={1} />);

    expect(container).toMatchSnapshot();
  });

  it('renders second turquoise correctly', () => {
    const { container } = render(<Rule color="turquoise" mode={2} />);

    expect(container).toMatchSnapshot();
  });

  it('renders third turquoise correctly', () => {
    const { container } = render(<Rule color="turquoise" mode={3} />);

    expect(container).toMatchSnapshot();
  });

  it('renders first turquoise correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="turquoise" mode={1} ignoreColorScheme />);

    expect(container).toMatchSnapshot();
  });

  it('renders second turquoise correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="turquoise" mode={2} ignoreColorScheme />);

    expect(container).toMatchSnapshot();
  });

  it('renders third turquoise correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="turquoise" mode={3} ignoreColorScheme />);

    expect(container).toMatchSnapshot();
  });

  it('renders first brown correctly', () => {
    const { container } = render(<Rule color="brown" mode={1} />);

    expect(container).toMatchSnapshot();
  });

  it('renders second brown correctly', () => {
    const { container } = render(<Rule color="brown" mode={2} />);

    expect(container).toMatchSnapshot();
  });

  it('renders third brown correctly', () => {
    const { container } = render(<Rule color="brown" mode={3} />);

    expect(container).toMatchSnapshot();
  });

  it('renders first brown correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="brown" mode={1} ignoreColorScheme />);

    expect(container).toMatchSnapshot();
  });

  it('renders second brown correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="brown" mode={2} ignoreColorScheme />);

    expect(container).toMatchSnapshot();
  });

  it('renders third brown correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="brown" mode={3} ignoreColorScheme />);

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

  it('renders first peach correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="peach" mode={1} ignoreColorScheme />);

    expect(container).toMatchSnapshot();
  });

  it('renders second peach correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="peach" mode={2} ignoreColorScheme />);

    expect(container).toMatchSnapshot();
  });

  it('renders third peach correctly with colour scheme ignored', () => {
    const { container } = render(<Rule color="peach" mode={3} ignoreColorScheme />);

    expect(container).toMatchSnapshot();
  });
});
