// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { Component } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { injectIntl } from 'react-intl';

import Button from '../Button';
import LocalizedAnchorLink from '../link/LocalizedAnchorLink';
import LocalizedLink from '../link/LocalizedLink';

import createIntl from '../../util/createIntl';

import {
  COOKIES_ACCEPTED_COOKIE_NAME,
  DISABLE_ANALYTICS_COOKIE_NAME,
  GOOGLE_ANALYTICS_TRACKING_ID,
} from '../../constants';

const cookies = new Cookies();

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-items: center;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 999;
  width: 90vw;
  margin: 0 0 2rem -45vw;
  border-radius: 0.5rem;
  padding: 1em ${(props) => props.theme.layout.marginMobile};
  background: var(--color-background);
  box-shadow: var(--color-box-shadow);
  text-align: left;

  @media screen and ${(props) => props.theme.devices.tablet} {
    grid-template-columns: 2fr 1fr;
    gap: 2rem 1rem;
  }
`;

const Text = styled.div``;

const BannerTitle = styled.h2`
  font-size: 2rem;

  @media screen and ${(props) => props.theme.devices.mobileL} {
    font-size: 2rem;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    font-size: 3rem;
  }
`;

const Buttons = styled.div`
  place-self: center;
  text-align: center;
`;

const Settings = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  text-align: left;

  &::before {
    content: '';
    position: fixed;
    display: block;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
    background: var(--color-background);
    z-index: -1;
  }
`;

const SettingsContainer = styled.div`
  overflow: auto;
  max-height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 100rem;
`;

const SettingsContent = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and ${(props) => props.theme.devices.mobileL} {
    padding: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 0;

  @media screen and ${(props) => props.theme.devices.tablet} {
    width: 66.6%;
    padding: 0 0 0 2rem;
  }
`;

const H2 = styled.h2`
  font-size: 2.5rem;

  @media screen and ${(props) => props.theme.devices.mobileL} {
    font-size: 2.5rem;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    font-size: 3.5rem;
  }
`;

const Section = styled.div``;

const H3 = styled.h3`
  font-size: 2rem;

  @media screen and ${(props) => props.theme.devices.mobileL} {
    font-size: 2rem;
  }

  @media screen and ${(props) => props.theme.devices.tablet} {
    font-size: 2.5rem;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 1.5rem;
  border: 0 solid var(--color-text);
  border-width: 2px 0;
  font-size: 1.2rem;
`;

const WhatLink = styled.span`
  margin: 0 0 0 2rem;
  text-align: right;
`;

const SwitchLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 34px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: var(--color-primary);
  }

  &:checked + span::before {
    transform: translateX(26px);
  }

  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
`;

const SwitchSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: var(--color-text-weak);
  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: var(--color-background);
    transition: 0.4s;
  }
`;

const SettingButtons = styled.div``;

class CookieSettings extends Component {
  state = {
    showBanner:
      !cookies.get(COOKIES_ACCEPTED_COOKIE_NAME) ||
      cookies.get(COOKIES_ACCEPTED_COOKIE_NAME) == 'false',
    isAnalyticsEnabled:
      !cookies.get(DISABLE_ANALYTICS_COOKIE_NAME) ||
      cookies.get(DISABLE_ANALYTICS_COOKIE_NAME) == 'false',
  };

  constructor(props) {
    super(props);

    this.handleCookieChange = this.handleCookieChange.bind(this);
    this.handleClickInfo = this.handleClickInfo.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickAccept = this.handleClickAccept.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
    this.handleToggleAnalytics = this.handleToggleAnalytics.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidUpdate() {
    cookies.addChangeListener(this.handleCookieChange);
  }

  componentWillUnmount() {
    cookies.removeChangeListener(this.handleCookieChange);
  }

  handleCookieChange = (options) => {
    if (options.name === DISABLE_ANALYTICS_COOKIE_NAME) {
      this.setState({ isAnalyticsEnabled: !options.value });
    }
  };

  handleClickInfo = () => {
    document.body.classList.toggle('cookie-settings-open');
    this.props.toggleSettings(true);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  handleClickClose = () => {
    document.body.classList.toggle('cookie-settings-open');
    this.props.toggleSettings(false);
  };

  handleClickAccept = () => {
    const expires = new Date();

    expires.setMonth(new Date().getMonth() + 1);

    cookies.set(COOKIES_ACCEPTED_COOKIE_NAME, true, { expires });
    cookies.set(DISABLE_ANALYTICS_COOKIE_NAME, false, { expires });

    window[`ga-disable-${GOOGLE_ANALYTICS_TRACKING_ID}`] = false;

    this.setState({ showBanner: false });
  };

  handleClickSave = () => {
    document.body.classList.toggle('cookie-settings-open');

    const expires = new Date();

    expires.setMonth(new Date().getMonth() + 1);

    // The cookie that determines whether the tracking is disabled may not be set if the user has not touched the toggle.
    if (cookies.get(DISABLE_ANALYTICS_COOKIE_NAME) === undefined) {
      cookies.set(DISABLE_ANALYTICS_COOKIE_NAME, false, { expires });
    }

    cookies.set(COOKIES_ACCEPTED_COOKIE_NAME, true, { expires });

    window[`ga-disable-${GOOGLE_ANALYTICS_TRACKING_ID}`] = cookies.get(
      DISABLE_ANALYTICS_COOKIE_NAME,
    );

    this.props.toggleSettings(false);
    this.setState({ showBanner: false });
  };

  handleToggleAnalytics = () => {
    const expires = new Date();

    expires.setMonth(new Date().getMonth() + 1);

    const isDisabled = cookies.get(DISABLE_ANALYTICS_COOKIE_NAME) == 'true';

    cookies.set(DISABLE_ANALYTICS_COOKIE_NAME, !isDisabled, { expires });
  };

  handleChangePage = () => {
    document.body.classList.toggle('cookie-settings-open');
    this.props.toggleSettings(false);
  };

  render() {
    const i = createIntl(this.props.intl);

    if (this.props.settingsOpen) {
      return (
        <Settings>
          <SettingsContainer>
            <Container>
              <SettingsContent>
                <Content>
                  <H2>{i('cookieNoticeSettings')}</H2>
                  <Section>
                    <H3>{i('cookieNoticeFunctionalTitle')}</H3>
                    <p>{i('cookieNoticeFunctionalDescription')}</p>
                  </Section>
                  <Section>
                    <H3>{i('cookieNoticeAnonymizedTrackingTitle')}</H3>
                    <FeatureContainer>
                      <h4>{i('cookieNoticeGoogleAnalytics')}</h4>
                      <WhatLink>
                        <LocalizedAnchorLink
                          to="/data-protection#google-analytics"
                          locale={this.props.locale}
                        >
                          <span onClick={this.handleChangePage}>
                            {i('cookieNoticeGoogleAnalyticsInfo')}
                          </span>
                        </LocalizedAnchorLink>
                      </WhatLink>
                    </FeatureContainer>
                    <p>{i('cookieNoticeAnonymizedTrackingDescription')}</p>
                    <SwitchLabel>
                      <SwitchInput
                        type="checkbox"
                        onChange={this.handleToggleAnalytics}
                        checked={this.state.isAnalyticsEnabled}
                      />
                      <SwitchSpan />
                    </SwitchLabel>
                  </Section>
                  <Section>
                    <p>
                      <LocalizedLink
                        to="/data-protection"
                        locale={this.props.locale}
                        onClick={this.handleChangePage}
                      >
                        {i('cookieNoticeDataProtection')}
                      </LocalizedLink>
                    </p>
                  </Section>
                  <SettingButtons>
                    <Button onClick={this.handleClickSave} accept>
                      {i('cookieNoticeSave')}
                    </Button>
                    <Button onClick={this.handleClickClose}>{i('cookieNoticeCancel')}</Button>
                  </SettingButtons>
                </Content>
              </SettingsContent>
            </Container>
          </SettingsContainer>
        </Settings>
      );
    }

    if (!this.state.showBanner) {
      return null;
    }

    return (
      <Div>
        <Text>
          <BannerTitle>{i('cookieNoticeTitle')}</BannerTitle>
          <p>{i('cookieNoticeDescription')}</p>
        </Text>
        <Buttons>
          <Button onClick={this.handleClickAccept} accept>
            {i('cookieNoticeAccept')}
          </Button>
          <Button onClick={this.handleClickInfo}>{i('cookieNoticeReject')}</Button>
        </Buttons>
      </Div>
    );
  }
}

export default injectIntl(CookieSettings);
