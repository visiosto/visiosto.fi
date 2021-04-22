// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FORM_CLASS_ERROR_MESSAGE } from '../../constants';

const SwitchInputSpan = styled.span`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 34px;

  input {
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

const propTypes = {
  checked: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const defaultProps = { checked: false, errorMessage: '' };

function SwitchCheckbox({ checked, errorMessage, handleClick, id, label, name }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {errorMessage !== '' ? (
        <label className={FORM_CLASS_ERROR_MESSAGE} htmlFor={id}>
          {errorMessage}
        </label>
      ) : null}
      <SwitchInputSpan onClick={handleClick}>
        <input key={Math.random()} defaultChecked={checked} id={id} name={name} type="checkbox" />
        <SwitchSpan />
      </SwitchInputSpan>
    </>
  );
}

SwitchCheckbox.propTypes = propTypes;
SwitchCheckbox.defaultProps = defaultProps;

export default SwitchCheckbox;
