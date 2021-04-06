// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import CookieSettings from './CookieSettings';

import createIntl from '../../util/createIntl';

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

class CookieNotice extends React.Component {
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
    const i = createIntl(this.props.intl);

    return (
      <>
        <Link onClick={this.onLinkClick}>{i('cookieSettingsLink')}</Link>
        <Wrapper>
          <CookieSettings
            settingsOpen={this.state.isOpen}
            toggleSettings={this.handleSettingsToggle}
            {...this.props}
          />
        </Wrapper>
      </>
    );
  }
}

export default injectIntl(CookieNotice);
