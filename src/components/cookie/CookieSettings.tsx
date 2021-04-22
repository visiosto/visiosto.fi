// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import Cookies from 'universal-cookie';
import styled from 'styled-components';
import { IntlShape, injectIntl } from 'react-intl';

import Button from '../Button';
import LocalizedAnchorLink from '../link/LocalizedAnchorLink';
import LocalizedLink from '../link/LocalizedLink';

import createInternationalization from '../../util/createInternationalization';
import getCookie from '../../util/getCookie';
import setCookie from '../../util/setCookie';

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

  @media screen and (${(props) => props.theme.devices.tablet}) {
    grid-template-columns: 2fr 1fr;
    gap: 2rem 1rem;
  }
`;

const Text = styled.div``;

const BannerTitle = styled.h2`
  font-size: 2rem;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    font-size: 2rem;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
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

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    padding: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 0;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    width: 66.6%;
    padding: 0 0 0 2rem;
  }
`;

const H2 = styled.h2`
  font-size: 2.5rem;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    font-size: 2.5rem;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    font-size: 3.5rem;
  }
`;

const Section = styled.div``;

const H3 = styled.h3`
  font-size: 2rem;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    font-size: 2rem;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
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

const handleAnalyticsToggle = function handleAnalyticsToggleAndCreateCookies() {
  const expires = new Date();

  expires.setMonth(new Date().getMonth() + 1);

  const isDisabled = getCookie(cookies, DISABLE_ANALYTICS_COOKIE_NAME) === 'true';

  setCookie(cookies, DISABLE_ANALYTICS_COOKIE_NAME, !isDisabled, { expires });
};

type Props = {
  intl: IntlShape;
  locale: string;
  settingsOpen: boolean;
  toggleSettings: (boolean) => void;
};

type State = {
  showBanner: boolean;
  isAnalyticsEnabled: boolean;
};

class CookieSettings extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      showBanner: false,
      isAnalyticsEnabled: getCookie(cookies, DISABLE_ANALYTICS_COOKIE_NAME) === 'false',
    };

    this.handleCookieChange = this.handleCookieChange.bind(this);
    this.handleInfoClick = this.handleInfoClick.bind(this);
    this.handleClosingClick = this.handleClosingClick.bind(this);
    this.handleAcceptClick = this.handleAcceptClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      showBanner: getCookie(cookies, COOKIES_ACCEPTED_COOKIE_NAME) === 'false',
    });
  }

  componentDidUpdate() {
    cookies.addChangeListener(this.handleCookieChange);
  }

  componentWillUnmount() {
    cookies.removeChangeListener(this.handleCookieChange);
  }

  handleCookieChange(options) {
    if (options.name === DISABLE_ANALYTICS_COOKIE_NAME) {
      this.setState({ isAnalyticsEnabled: !options.value });
    }
  }

  handleInfoClick() {
    document.body.classList.toggle('cookie-settings-open');

    const { toggleSettings } = this.props;

    toggleSettings(true);

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  handleClosingClick() {
    document.body.classList.toggle('cookie-settings-open');

    const { toggleSettings } = this.props;

    toggleSettings(false);
  }

  handleAcceptClick() {
    const expires = new Date();

    expires.setMonth(new Date().getMonth() + 1);

    setCookie(cookies, COOKIES_ACCEPTED_COOKIE_NAME, true, { expires });
    setCookie(cookies, DISABLE_ANALYTICS_COOKIE_NAME, false, { expires });

    window[`ga-disable-${GOOGLE_ANALYTICS_TRACKING_ID}`] = false;

    this.setState({ showBanner: false });
  }

  handleSaveClick() {
    document.body.classList.toggle('cookie-settings-open');

    const expires = new Date();

    expires.setMonth(new Date().getMonth() + 1);

    // The cookie that determines whether the tracking is disabled may not be
    // set if the user has not touched the toggle.
    if (getCookie(cookies, DISABLE_ANALYTICS_COOKIE_NAME) === '') {
      setCookie(cookies, DISABLE_ANALYTICS_COOKIE_NAME, false, { expires });
    }

    setCookie(cookies, COOKIES_ACCEPTED_COOKIE_NAME, true, { expires });

    window[`ga-disable-${GOOGLE_ANALYTICS_TRACKING_ID}`] =
      getCookie(cookies, DISABLE_ANALYTICS_COOKIE_NAME) === 'true';

    const { toggleSettings } = this.props;

    toggleSettings(false);

    this.setState({ showBanner: false });
  }

  handlePageChange() {
    document.body.classList.toggle('cookie-settings-open');

    const { toggleSettings } = this.props;

    toggleSettings(false);
  }

  render() {
    const { intl: intlObject, locale, settingsOpen } = this.props;
    const { isAnalyticsEnabled, showBanner } = this.state;
    const intl = createInternationalization(intlObject);

    if (settingsOpen) {
      return (
        <Settings>
          <SettingsContainer>
            <Container>
              <SettingsContent>
                <Content>
                  <H2>{intl('cookieNoticeSettings')}</H2>
                  <Section>
                    <H3>{intl('cookieNoticeFunctionalTitle')}</H3>
                    <p>{intl('cookieNoticeFunctionalDescription')}</p>
                  </Section>
                  <Section>
                    <H3>{intl('cookieNoticeAnonymizedTrackingTitle')}</H3>
                    <FeatureContainer>
                      <h4>{intl('cookieNoticeGoogleAnalytics')}</h4>
                      <WhatLink>
                        <LocalizedAnchorLink locale={locale} to="/data-protection#google-analytics">
                          <span
                            onClick={this.handlePageChange}
                            onKeyPress={this.handlePageChange}
                            role="button"
                            tabIndex={0}
                          >
                            {intl('cookieNoticeGoogleAnalyticsInfo')}
                          </span>
                        </LocalizedAnchorLink>
                      </WhatLink>
                    </FeatureContainer>
                    <p>{intl('cookieNoticeAnonymizedTrackingDescription')}</p>
                    <SwitchLabel>
                      <SwitchInput
                        checked={isAnalyticsEnabled}
                        onChange={handleAnalyticsToggle}
                        type="checkbox"
                      />
                      <SwitchSpan />
                    </SwitchLabel>
                  </Section>
                  <Section>
                    <p>
                      <LocalizedLink
                        locale={locale}
                        onClick={this.handlePageChange}
                        to="/data-protection"
                      >
                        {intl('cookieNoticeDataProtection')}
                      </LocalizedLink>
                    </p>
                  </Section>
                  <SettingButtons>
                    <Button color="green" onClick={this.handleSaveClick}>
                      {intl('cookieNoticeSave')}
                    </Button>
                    <Button onClick={this.handleClosingClick}>{intl('cookieNoticeCancel')}</Button>
                  </SettingButtons>
                </Content>
              </SettingsContent>
            </Container>
          </SettingsContainer>
        </Settings>
      );
    }

    if (!showBanner) {
      return null;
    }

    return (
      <Div>
        <Text>
          <BannerTitle>{intl('cookieNoticeTitle')}</BannerTitle>
          <p>{intl('cookieNoticeDescription')}</p>
        </Text>
        <Buttons>
          <Button color="green" onClick={this.handleAcceptClick}>
            {intl('cookieNoticeAccept')}
          </Button>
          <Button onClick={this.handleInfoClick}>{intl('cookieNoticeReject')}</Button>
        </Buttons>
      </Div>
    );
  }
}

export default injectIntl(CookieSettings);
