// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import LocaleLink from '../link/LocaleLink';

const Link = styled(LocaleLink)`
  text-decoration: none;
`;

const propTypes = {
  locale: PropTypes.string.isRequired,
  pageID: PropTypes.string.isRequired,
};

function LocaleSwitcher({ locale, pageID }) {
  return (
    <>
      {(() => {
        if (locale !== 'fi') {
          return (
            <>
              <Link to="fi" pageID={pageID}>
                <Button>Suomeksi</Button>
              </Link>
              <br />
            </>
          );
        }

        return <></>;
      })()}
      {(() => {
        if (locale !== 'en-GB') {
          return (
            <>
              <Link to="en-GB" pageID={pageID}>
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

LocaleSwitcher.propTypes = propTypes;

export default LocaleSwitcher;
