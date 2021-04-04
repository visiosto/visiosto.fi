// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import styled from 'styled-components';

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
    box-shadow: var(--color-box-shadow);
    transition: box-shadow 75ms ease-in;
    background: var(--color-background);
    color: var(--color-text);

    &:focus {
      box-shadow: var(--color-box-shadow-hover);
      outline: none;
    }
  }

  input[type='radio'] {
    margin: 0 0.5rem;
  }

  input[type='submit'],
  button[type='submit'] {
    display: inline-block;
    border-style: none;
    border-radius: 3rem;
    border: 3px solid transparent;
    padding: 1rem 1.5rem;
    cursor: pointer;
    box-shadow: none;
    transition: all 100ms ease-in;
    background-color: var(--color-link);
    background-clip: padding-box;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    color: var(--color-text-button);

    &:hover {
      background-color: var(--color-link-hover);
    }
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
`;

export default FormDiv;
