// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { Component } from 'react';
import styled from 'styled-components';
import { PaperAirplaneIcon } from '@primer/octicons-react';
import { injectIntl } from 'react-intl';

import { CONTACT_FORM_NAME } from '../constants';

import createIntl from '../util/createIntl';

const FormContainer = styled.div`
  text-align: center;
`;

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

const ButtonDiv = styled.div``;

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', tel: '', email: '', message: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': CONTACT_FORM_NAME, ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    event.preventDefault();
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const i = createIntl(this.props.intl);

    return (
      <FormContainer>
        <form
          name={CONTACT_FORM_NAME}
          onSubmit={this.handleSubmit}
          action="/"
          method="POST"
          netlify-honeypot="bot-field"
          netlify
          data-netlify="true"
        >
          {/* This input field is required by Netlify */}
          <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
          <FormDiv hidden>
            <label>{i('contactFormHoneypot')}</label>
            <input name="bot-field" />
          </FormDiv>
          <FormDiv>
            <label for="name">{i('contactFormName')}</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
          </FormDiv>
          <FormDiv>
            <p>{i('contactFormEither')}</p>
          </FormDiv>
          <FormDiv>
            <label for="email">{i('contactFormEmail')}</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </FormDiv>
          <FormDiv>
            <p>{i('contactFormOr')}</p>
          </FormDiv>
          <FormDiv>
            <label for="tel">{i('contactFormTel')}</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </FormDiv>
          <FormDiv>
            <label for="message">{i('contactFormMessage')}</label>
            <textarea
              id="message"
              name="message"
              // rows="5"
              // cols="40"
              onChange={this.handleChange}
              value={this.state.message}
            />
          </FormDiv>
          <FormDiv>
            <ButtonDiv>
              <button type="submit">
                <PaperAirplaneIcon size={24} /> {i('contactFormSend')}
              </button>
            </ButtonDiv>
          </FormDiv>
        </form>
      </FormContainer>
    );
  }
}

export default injectIntl(ContactForm);
