// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { PaperAirplaneIcon } from '@primer/octicons-react';
import { IntlShape, injectIntl } from 'react-intl';

import FormDiv from './FormDiv';
import LocalizedLink from '../link/LocalizedLink';

import {
  CONTACT_FORM_NAME,
  FORM_POST_STATUS_ERROR,
  FORM_POST_STATUS_SUCCESS,
  FORM_POST_STATUS_TIMEOUT,
} from '../../constants';

import { marketingRegisterPrivacyPolicyPageID } from '../../entryIDs';

import createInternationalization from '../../util/createInternationalization';
import encodeFormState from '../../util/encodeFormState';

const FormContainer = styled.div`
  text-align: center;
`;

const ButtonDiv = styled.div``;

type Props = {
  intl: IntlShape;
  locale: string;
};

type Errors = {
  name?: string;
  tel?: string;
  message?: string;
};

type State = {
  name?: string;
  email?: string;
  tel?: string;
  message?: string;
  postStatus?: string;
  errorMessage?: string;
  errors?: Errors;
};

class ContactForm extends React.Component<Props, State> {
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

  handleSubmit(event) {
    if (this.validateFormData()) {
      const { name, email, tel, message } = this.state;
      const formData = { name, email, tel, message };

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
  }

  handleChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  }

  validateFormData() {
    const { intl: intlObject } = this.props;
    const { name, tel, email, message } = this.state;
    const intl = createInternationalization(intlObject);
    const errors: Errors = {};
    let isValid = true;

    if (name === '') {
      isValid = false;
      errors.name = intl('contactFormErrorMissingName');
    }

    if (email === '') {
      if (tel === '') {
        isValid = false;
        errors.tel = intl('contactFormErrorMissingEmailOrPhone');
      }
    }

    if (message === '') {
      isValid = false;
      errors.message = intl('contactFormErrorMissingMessage');
    }

    this.setState({ errors });

    return isValid;
  }

  render() {
    const { intl: intlObject, locale } = this.props;
    const { email, errorMessage, errors, message, name, postStatus, tel } = this.state;
    const intl = createInternationalization(intlObject);

    return (
      <FormContainer>
        <form
          action="/"
          data-netlify="true"
          method="POST"
          name={CONTACT_FORM_NAME}
          netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* This input field is required by Netlify */}
          <input name="form-name" type="hidden" value={CONTACT_FORM_NAME} />
          <FormDiv hidden>
            <label htmlFor="bot-field">{intl('contactFormHoneypot')}</label>
            <input name="bot-field" />
          </FormDiv>
          <FormDiv>
            <label htmlFor="name">{intl('contactFormName')}</label>
            <label className="error-message" hidden={!errors!.name} htmlFor="name">
              {errors!.name}
            </label>
            <input id="name" name="name" onChange={this.handleChange} type="text" value={name} />
          </FormDiv>
          <FormDiv>
            <label htmlFor="email">{intl('contactFormEmail')}</label>
            <label className="error-message" hidden={!errors!.tel} htmlFor="email">
              {errors!.tel}
            </label>
            <input
              id="email"
              name="email"
              onChange={this.handleChange}
              type="email"
              value={email}
            />
          </FormDiv>
          <FormDiv>
            <p>{intl('contactFormOr')}</p>
          </FormDiv>
          <FormDiv>
            <label htmlFor="tel">{intl('contactFormTel')}</label>
            <label className="error-message" hidden={!errors!.tel} htmlFor="tel">
              {errors!.tel}
            </label>
            <input id="tel" name="tel" onChange={this.handleChange} type="tel" value={tel} />
          </FormDiv>
          <FormDiv>
            <label htmlFor="message">{intl('contactFormMessage')}</label>
            <label className="error-message" hidden={!errors!.message} htmlFor="message">
              {errors!.message}
            </label>
            <textarea id="message" name="message" onChange={this.handleChange} value={message} />
          </FormDiv>
          <FormDiv>
            <p>
              {intl('contactFormSendConsent', {
                a: (...chunk) => (
                  <LocalizedLink locale={locale} to={marketingRegisterPrivacyPolicyPageID}>
                    {chunk}
                  </LocalizedLink>
                ),
              })}
            </p>
          </FormDiv>
          <FormDiv>
            <ButtonDiv>
              <button type="submit">
                <PaperAirplaneIcon size={24} /> {intl('contactFormSend')}
              </button>
            </ButtonDiv>
          </FormDiv>
          <FormDiv hidden={postStatus !== FORM_POST_STATUS_SUCCESS}>
            <p>{intl('contactFormSuccess')}</p>
          </FormDiv>
          <FormDiv hidden={postStatus !== FORM_POST_STATUS_ERROR}>
            <p>{intl('contactFormError')}</p>
            <p>{errorMessage === '' ? intl('contactFormErrorNoErrorMessage') : errorMessage}</p>
          </FormDiv>
        </form>
      </FormContainer>
    );
  }
}

export default injectIntl(ContactForm);
