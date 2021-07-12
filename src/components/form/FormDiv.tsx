// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import styled from 'styled-components';

import boxShadowHoverStyle from '../../styles/boxShadowHoverStyle';
import boxShadowStyle from '../../styles/boxShadowStyle';
import buttonDefaultStyle from '../../styles/buttonDefaultStyle';
import buttonStyle from '../../styles/buttonStyle';

import { FORM_CLASS_ERROR_MESSAGE } from '../../constants';

const FormDiv = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  input {
    text-align: center;
  }

  textarea {
    @media screen and (${(props) => props.theme.devices.tablet}) {
      min-width: 20rem;
      min-height: 10rem;
    }
  }

  input[type='email'],
  input[type='tel'],
  input[type='text'],
  textarea {
    margin: 0.6em 0;
    border: none;
    border-radius: 0.25rem;
    padding: 0.4rem 1rem;
    transition: box-shadow 75ms ease-in;
    background: var(--color-background);
    color: var(--color-text);

    ${boxShadowStyle}

    appearance: none;

    &:focus {
      outline: none;

      ${boxShadowHoverStyle}
    }
  }

  input[type='radio'] {
    margin: 0 0.5rem;
  }

  input[type='submit'],
  button[type='submit'] {
    box-shadow: none;
    background-color: var(--color-link);
    color: var(--color-text-button);

    ${buttonStyle}
    ${buttonDefaultStyle}
  }

  label {
    display: block;
    margin: 1rem 0 0;
  }

  input.medium {
    min-width: 20vw;
  }

  input.wider {
    min-width: 30vw;
  }

  .${FORM_CLASS_ERROR_MESSAGE} {
    font-style: italic;
    color: var(--color-text);
  }
`;

export default FormDiv;
