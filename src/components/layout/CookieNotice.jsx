// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { Component } from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import Button from '../Button';
import LocalizedLink from '../link/LocalizedLink';

import createIntl from '../../util/createIntl';

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-items: center;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 0;
  width: 90vw;
  margin: 0 0 2rem -45vw;
  border-radius: 0.5rem;
  padding: 1em ${(props) => props.theme.layout.marginMobile};
  background: var(--color-background);
  box-shadow: var(--color-box-shadow);

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
`;

const Settings = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;

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

const WhatLink = styled(LocalizedLink)`
  margin: 0 0 0 2rem;
  text-align: right;
`;

const SettingButtons = styled.div``;

class CookieNotice extends Component {
  state = {
    isOpen: false,
  };

  constructor(props) {
    super(props);

    this.handleClickInfo = this.handleClickInfo.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleClickInfo = () => {
    document.body.classList.toggle('cookie-settings-open');
    this.setState({ isOpen: true });
  };

  handleClickClose = () => {
    document.body.classList.toggle('cookie-settings-open');
    this.setState({ isOpen: false });
  };

  render() {
    const i = createIntl(this.props.intl);

    if (this.state.isOpen) {
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
                    <H3>{i('cookieNoticeTrackingTitle')}</H3>
                    <FeatureContainer>
                      <h4>{i('cookieNoticeGoogleAnalytics')}</h4>
                      <WhatLink to="/" locale={this.props.locale}>
                        {i('cookieNoticeGoogleAnalyticsInfo')}
                      </WhatLink>
                    </FeatureContainer>
                    <p>{i('cookieNoticeTrackingDescription')}</p>
                  </Section>
                  <Section>
                    <p>{i('cookieNoticeDataProtection')}</p>
                  </Section>
                  <SettingButtons>
                    <Button accept>{i('cookieNoticeSave')}</Button>
                    <Button onClick={this.handleClickClose}>{i('cookieNoticeCancel')}</Button>
                  </SettingButtons>
                </Content>
              </SettingsContent>
            </Container>
          </SettingsContainer>
        </Settings>
      );
    }

    return (
      <Div>
        <Text>
          <BannerTitle>{i('cookieNoticeTitle')}</BannerTitle>
          <p>{i('cookieNoticeDescription')}</p>
        </Text>
        <Buttons>
          <Button accept>{i('cookieNoticeAccept')}</Button>
          <Button onClick={this.handleClickInfo}>{i('cookieNoticeReject')}</Button>
        </Buttons>
      </Div>
    );
  }
}

export default injectIntl(CookieNotice);
