// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import createLanguageLink from './createLanguageLink';

export default (props) => {
  const LanguageLink = createLanguageLink(props.pageKey);

  const Link = styled(LanguageLink)`
    clear: both;
    margin: 0 1rem;
    text-align: center;
  `;

  return (
    <>
      {(() => {
        if (props.lang !== 'fi') {
          return (
            <>
              <Link to="fi">Suomeksi</Link>
              <br />
            </>
          );
        }

        return <></>;
      })()}
      {(() => {
        if (props.lang !== 'en') {
          return (
            <>
              <Link to="en">In English</Link>
            </>
          );
        }

        return <></>;
      })()}
    </>
  );
};
