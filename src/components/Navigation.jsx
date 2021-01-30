// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useState } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import createLink from './createLink';

import createIntl from '../utils/createIntl';

export default (props) => {
  const i = createIntl(useIntl());
  const LanguageLink = createLink(props.lang);

  const [toggled, setToggled] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setToggled(!toggled);
  };

  const Nav = styled.nav`
    margin: 0 auto;
  `;

  const Toggle = styled.div`
    clear: both;
    display: block;
    margin: 1rem auto;
    width: 40px;
    height: 32px;
    cursor: pointer;
    user-select: none;

    @media screen and ${(props) => props.theme.devices.laptopSmall} {
      display: none;
    }
  `;

  const ToggleBar = styled.div`
    display: block;
    width: 33px;
    height: 4px;
    margin: 0 auto 5px;
    border-radius: 3px;
    transform-origin: 4px 0;
    z-index: 1;
    transition: transform 0.2s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.2s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.25s ease;
    background: ${(props) => props.theme.colors.textMain};

    ${(props) => {
      if (props.toggled) {
        return 'opacity: 1;';
      }
    }}
    ${(props) => {
      if (props.toggled) {
        return 'transform: translate(4px) translate(4px, -1px) rotate(45deg) translate(-2px, -1px);';
      }
    }}

    &:first-child {
      transform-origin: 0% 0%;
    }

    &:nth-child(2) {
      transform-origin: 0% 100%;

      ${(props) => {
        if (props.toggled) {
          return 'opacity: 0;';
        }
      }}
      ${(props) => {
        if (props.toggled) {
          return 'transform: translate(4px) rotate(0deg) scale(0.2, 0.2);';
        }
      }}
    }

    &:last-child {
      ${(props) => {
        if (props.toggled) {
          return 'transform: translate(4px) rotate(-45deg) translate(0, -1px);';
        }
      }}
    }
  `;

  const Ul = styled.ul`
    display: ${(props) => (props.toggled ? 'block' : 'none')};
    list-style: none;
    margin: 0;
    padding-left: 0;
    text-align: center;

    @media screen and ${(props) => props.theme.devices.laptopSmall} {
      display: flex;
      justify-content: center;
    }
  `;

  const Li = styled.li`
    margin: 1em;
  `;

  const Link = styled(LanguageLink)`
    position: relative;
    margin: 1rem auto 0;
    border-radius: ${(props) => props.theme.borders.commonRadius};
    padding: 0.7rem 1rem;
    background: transparent;
    font-weight: 600;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textMain};

    &:visited {
      color: ${(props) => props.theme.colors.textMain};
    }

    &:hover,
    &:focus,
    &:active {
      background: ${(props) => props.theme.colors.navHover};
      color: ${(props) => props.theme.colors.textMain};
    }
  `;

  return (
    <Nav>
      <Toggle aria-controls="primary-menu" aria-expanded={toggled.toString()} onClick={handleClick}>
        <ToggleBar toggled={toggled} />
        <ToggleBar toggled={toggled} />
        <ToggleBar toggled={toggled} />
      </Toggle>
      <Ul id="primary-menu" toggled={toggled}>
        <Li>
          <Link to="/">{i('indexTitle')}</Link>
        </Li>
        <Li>
          <Link to="/blog">{i('blogTitle')}</Link>
        </Li>
      </Ul>
    </Nav>
  );
};
