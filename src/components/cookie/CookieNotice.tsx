// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { IntlShape, injectIntl } from 'react-intl';

import CookieSettings from './CookieSettings';

import createInternationalization from '../../util/createInternationalization';

const Link = styled.span`
  text-align: center;
  text-decoration: underline;
  color: var(--color-link);
  cursor: pointer;

  &:visited {
    color: var(--color-link);
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--color-link-hover);
  }
`;

const Wrapper = styled.div`
  text-align: left;
`;

type Props = {
  intl: IntlShape;
  locale: string;
};

type State = {
  isOpen: boolean;
};

class CookieNotice extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.handleSettingsToggle = this.handleSettingsToggle.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  handleSettingsToggle(open) {
    this.setState({ isOpen: open });
  }

  onLinkClick() {
    document.body.classList.toggle('cookie-settings-open');

    this.setState({ isOpen: true });

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const intl = createInternationalization(this.props.intl);
    const { locale } = this.props;

    return (
      <>
        <Link onClick={this.onLinkClick}>{intl('cookieSettingsLink')}</Link>
        <Wrapper>
          <CookieSettings
            locale={locale}
            settingsOpen={this.state.isOpen}
            toggleSettings={this.handleSettingsToggle}
          />
        </Wrapper>
      </>
    );
  }
}

export default injectIntl(CookieNotice);
