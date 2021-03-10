// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import Button from './Button';

import createLanguageLink from './createLanguageLink';

export default (props) => {
  const LanguageLink = createLanguageLink(props.pageKey);

  return (
    <>
      {(() => {
        if (props.lang !== 'fi') {
          return (
            <>
              <Button to="fi" link={LanguageLink}>Suomeksi</Button>
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
              <Button to="en" link={LanguageLink}>In English</Button>
            </>
          );
        }

        return <></>;
      })()}
    </>
  );
};
