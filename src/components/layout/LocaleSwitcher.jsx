// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import LocaleLink from '../link/LocaleLink';

const Link = styled(LocaleLink)`
  text-decoration: none;
`;

export default function LocaleSwitcher(props) {
  return (
    <>
      {(() => {
        if (props.locale !== 'fi') {
          return (
            <>
              <Link to="fi" pageId={props.pageId}>
                <Button>Suomeksi</Button>
              </Link>
              <br />
            </>
          );
        }

        return <></>;
      })()}
      {(() => {
        if (props.locale !== 'en-GB') {
          return (
            <>
              <Link to="en-GB" pageId={props.pageId}>
                <Button>In English</Button>
              </Link>
              <br />
            </>
          );
        }

        return <></>;
      })()}
    </>
  );
}
