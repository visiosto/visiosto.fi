// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { Component } from 'react';
import styled from 'styled-components';
import { PaperAirplaneIcon } from '@primer/octicons-react';
import { injectIntl } from 'react-intl';

import FormDiv from './FormDiv';

import {
  CONTACT_FORM_NAME,
  FORM_POST_STATUS_ERROR,
  FORM_POST_STATUS_SUCCESS,
  FORM_POST_STATUS_TIMEOUT,
} from '../../constants';

import createIntl from '../../util/createIntl';
import encodeFormState from '../../util/encodeFormState';

const FormContainer = styled.div`
  text-align: center;
`;

const ButtonDiv = styled.div``;

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      tel: '',
      message: '',
      postStatus: '',
      errorMessage: '',
      errors: {},
    };

    this.validateFormData = this.validateFormData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateFormData = () => {
    const i = createIntl(this.props.intl);
    const errors = {};
    let isValid = true;

    if (!this.state.name) {
      isValid = false;
      errors.name = i('contactFormErrorMissingName');
    }

    if (!this.state.email) {
      if (!this.state.tel) {
        isValid = false;
        errors.tel = i('contactFormErrorMissingEmailOrPhone');
      }
    }

    if (!this.state.message) {
      isValid = false;
      errors.message = i('contactFormErrorMissingMessage');
    }

    this.setState({ errors });

    return isValid;
  };

  handleSubmit = (event) => {
    if (this.validateFormData()) {
      const formData = {
        name: this.state.name,
        email: this.state.email,
        tel: this.state.tel,
        message: this.state.message,
      };

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormState({ 'form-name': CONTACT_FORM_NAME, ...formData }),
      })
        .then(() =>
          this.setState({ postStatus: FORM_POST_STATUS_SUCCESS }, () =>
            setTimeout(() => this.setState({ postStatus: '' }), FORM_POST_STATUS_TIMEOUT),
          ),
        )
        .catch((error) =>
          this.setState({ postStatus: FORM_POST_STATUS_ERROR, errorMessage: error }, () =>
            setTimeout(
              () => this.setState({ postStatus: '', errorMessage: '' }),
              FORM_POST_STATUS_TIMEOUT,
            ),
          ),
        );
    }

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
            <label for="name" className="error-message" hidden={!this.state.errors.name}>
              {this.state.errors.name}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </FormDiv>
          <FormDiv>
            <p>{i('contactFormEither')}</p>
          </FormDiv>
          <FormDiv>
            <label for="email">{i('contactFormEmail')}</label>
            <label for="email" className="error-message" hidden={!this.state.errors.tel}>
              {this.state.errors.tel}
            </label>
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
            <label for="tel" className="error-message" hidden={!this.state.errors.tel}>
              {this.state.errors.tel}
            </label>
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
            <label for="message" className="error-message" hidden={!this.state.errors.message}>
              {this.state.errors.message}
            </label>
            <textarea
              id="message"
              name="message"
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
          <FormDiv hidden={this.state.postStatus !== FORM_POST_STATUS_SUCCESS}>
            <p>{i('contactFormSuccess')}</p>
          </FormDiv>
          <FormDiv hidden={this.state.postStatus !== FORM_POST_STATUS_ERROR}>
            <p>{i('contactFormError')}</p>
            <p>
              {this.state.errorMessage
                ? this.state.errorMessage
                : i('contactFormErrorNoErrorMessage')}
            </p>
          </FormDiv>
        </form>
      </FormContainer>
    );
  }
}

export default injectIntl(ContactForm);
