// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FORM_CLASS_ERROR_MESSAGE } from '../../constants';

const RadioDiv = styled.div`
  margin: 0.5rem 0;

  label {
    display: inline-block;
  }
`;

const propTypes = {
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  inputs: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  value: PropTypes.string,
};

const defaultProps = { description: '', errorMessage: '', title: '', value: '' };

function RadioInput({ description, errorMessage, handleChange, inputs, name, title, value }) {
  return (
    <>
      {title !== '' ? <h3>{title}</h3> : null}
      {description !== '' ? <p>{description}</p> : null}
      {errorMessage !== '' ? <p className={FORM_CLASS_ERROR_MESSAGE}>{errorMessage}</p> : null}
      {inputs.map(({ id, label, value: inputValue }) => (
        <RadioDiv key={id}>
          <input
            type="radio"
            name={name}
            id={`radio-${id}`}
            value={inputValue}
            checked={value === inputValue}
            onChange={() => handleChange(inputValue)}
          />
          <label htmlFor={`radio-${id}`}>{label}</label>
        </RadioDiv>
      ))}
    </>
  );
}

RadioInput.propTypes = propTypes;
RadioInput.defaultProps = defaultProps;

export default RadioInput;
