// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useState } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import CookieNoticeBanner from './CookieNoticeBanner';

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

const CookieNotice = (props) => {
  const i = createIntl(useIntl());

  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleSettingsToggle = () => {
    document.body.classList.toggle('cookie-settings-open');
    setSettingsOpen(true);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <Link onClick={handleSettingsToggle}>{i('cookieSettingsLink')}</Link>
      <Wrapper>
        <CookieNoticeBanner
          settingsOpen={settingsOpen}
          toggleSettings={setSettingsOpen}
          {...props}
        />
      </Wrapper>
    </>
  );
};

export default CookieNotice;
