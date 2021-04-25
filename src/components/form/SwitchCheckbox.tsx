// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import switchInputStyle from '../../styles/switchInputStyle';
import switchLabelStyle from '../../styles/switchLabelStyle';
import switchSpanStyle from '../../styles/switchSpanStyle';

import { FORM_CLASS_ERROR_MESSAGE } from '../../constants';

const SwitchInputSpan = styled.span`
  ${switchLabelStyle}

  input {
    ${switchInputStyle}
  }
`;

const SwitchSpan = styled.span`
  ${switchSpanStyle}
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
