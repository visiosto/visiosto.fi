// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import LocaleLink from '../link/LocaleLink';

const Span = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;
  border-style: none;
  border-radius: 3rem;
  border: 3px solid transparent;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 100ms ease-in;
  background-clip: padding-box;
  background-color: var(--color-link);
  color: var(--color-text-button);
  font-weight: 600;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: var(--color-link-hover);
  }
`;

export default (props) => {
  console.log('Page key is', props.pageKey);
  return (
    <>
      {(() => {
        if (props.lang !== 'fi') {
          return (
            <>
              <LocaleLink to="fi" pageKey={props.pageKey}>
                <Span>Suomeksi</Span>
              </LocaleLink>
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
              <LocaleLink to="en" pageKey={props.pageKey}>
                <Span>In English</Span>
              </LocaleLink>
              <br />
            </>
          );
        }

        return <></>;
      })()}
    </>
  );
};
