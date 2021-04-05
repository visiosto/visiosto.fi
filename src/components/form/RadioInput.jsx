// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import { FORM_CLASS_ERROR_MESSAGE } from '../../constants';

const RadioDiv = styled.div`
  margin: 0.5rem 0;

  label {
    display: inline-block;
  }
`;

const RadioInput = (props) => (
  <>
    {props.title ? <h3>{props.title}</h3> : null}
    {props.description ? <p>{props.description}</p> : null}
    {'errorMessage' in props ? (
      <p className={FORM_CLASS_ERROR_MESSAGE} hidden={!props.displayError}>
        {props.errorMessage}
      </p>
    ) : null}
    {props.inputs.map(({ id, label, value }) => (
      <RadioDiv key={id}>
        <input
          type="radio"
          name={props.name}
          id={`radio-${id}`}
          value={value}
          checked={props.value === value}
          onChange={() => props.handleChange(value)}
        />
        <label for={`radio-${id}`}>{label}</label>
      </RadioDiv>
    ))}
  </>
);

export default RadioInput;
