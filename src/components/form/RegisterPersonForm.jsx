// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled, { css } from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon, PaperAirplaneIcon } from '@primer/octicons-react';
import { injectIntl } from 'react-intl';

import Button from '../Button';
import FormDiv from './FormDiv';
import LocalizedLink from '../link/LocalizedLink';
import RadioInput from './RadioInput';
import SwitchCheckbox from './SwitchCheckbox';

import {
  FORM_BILLING_EMAIL,
  FORM_BILLING_PAPER,
  FORM_POST_STATUS_ERROR,
  FORM_POST_STATUS_SUCCESS,
  FORM_POST_STATUS_TIMEOUT,
  REGISTER_PERSON_FORM_NAME,
} from '../../constants';

import createIntl from '../../util/createIntl';
import encodeFormState from '../../util/encodeFormState';

const FormContainer = styled.div`
  text-align: center;
`;

const FormPage = styled.div``;

const ButtonDiv = styled.div``;

const iconStyle = css`
  margin: 0;
`;

const ArrowLeft = styled(ArrowLeftIcon)`
  ${iconStyle}
`;

const ArrowRight = styled(ArrowRightIcon)`
  ${iconStyle}
`;

const PaperAirplane = styled(PaperAirplaneIcon)`
  ${iconStyle}
`;

class RegisterPersonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      surname: '',
      tel: '',
      email: '',
      addressLine1: '',
      addressLine2: '',
      postcode: '',
      postOffice: '',
      isSameBillingAddress: false,
      billingAddressLine1: '',
      billingAddressLine2: '',
      billingPostcode: '',
      billingPostOffice: '',
      billingMethod: '',
      acceptTerms: false,
      currentPage: 0,
      postStatus: '',
      errorMessage: '',
      errors: {},
    };

    this.validatePageData = this.validatePageData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBillingAddressToggleClick = this.handleBillingAddressToggleClick.bind(this);
    this.handleAcceptTermsToggleClick = this.handleAcceptTermsToggleClick.bind(this);
    this.handleBillingMethodClick = this.handleBillingMethodClick.bind(this);
    this.moveToPreviousPage = this.moveToPreviousPage.bind(this);
    this.moveToNextPage = this.moveToNextPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validatePageData() {
    const i = createIntl(this.props.intl);
    const errors = {};
    let isValid = true;

    switch (this.state.currentPage) {
      case 0:
        if (!this.state.firstName) {
          isValid = false;
          errors.firstName = i('clientRegisterPersonFormErrorMissingFirstName');
        }
        if (!this.state.surname) {
          isValid = false;
          errors.surname = i('clientRegisterPersonFormErrorMissingSurname');
        }
        if (!this.state.tel) {
          isValid = false;
          errors.tel = i('clientRegisterPersonFormErrorMissingTel');
        }
        if (!this.state.email) {
          isValid = false;
          errors.email = i('clientRegisterPersonFormErrorMissingEmail');
        }
        if (!this.state.addressLine1) {
          isValid = false;
          errors.addressLine1 = i('clientRegisterPersonFormErrorMissingAddressLine1');
        }
        if (!this.state.postcode) {
          isValid = false;
          errors.postcode = i('clientRegisterPersonFormErrorMissingPostcode');
        }
        if (!this.state.postOffice) {
          isValid = false;
          errors.postOffice = i('clientRegisterPersonFormErrorMissingPostOffice');
        }
        break;

      case 1:
        if (!this.state.billingAddressLine1) {
          isValid = false;
          errors.billingAddressLine1 = i('clientRegisterPersonFormErrorMissingBillingAddressLine1');
        }
        if (!this.state.billingPostcode) {
          isValid = false;
          errors.billingPostcode = i('clientRegisterPersonFormErrorMissingBillingPostcode');
        }
        if (!this.state.billingPostOffice) {
          isValid = false;
          errors.billingPostOffice = i('clientRegisterPersonFormErrorMissingBillingPostOffice');
        }
        break;

      case 2:
        if (!this.state.billingMethod) {
          isValid = false;
          errors.billingMethod = i('clientRegisterPersonFormErrorMissingBillingMethod');
        }
        if (!this.state.acceptTerms) {
          isValid = false;
          errors.acceptTerms = i('clientRegisterPersonFormErrorTermsNotAccepted');
        }
        break;
    }

    this.setState({ errors });

    return isValid;
  }

  handleSubmit(event) {
    if (this.validatePageData()) {
      const formData = {
        firstName: this.state.firstName,
        surname: this.state.surname,
        tel: this.state.tel,
        email: this.state.email,
        addressLine1: this.state.addressLine1,
        addressLine2: this.state.addressLine2,
        postcode: this.state.postcode,
        postOffice: this.state.postOffice,
        isSameBillingAddress: this.state.isSameBillingAddress,
        billingAddressLine1: this.state.billingAddressLine1,
        billingAddressLine2: this.state.billingAddressLine2,
        billingPostcode: this.state.billingPostcode,
        billingPostOffice: this.state.billingPostOffice,
        billingMethod: this.state.billingMethod,
        acceptTerms: this.state.acceptTerms,
      };

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormState({ 'form-name': REGISTER_PERSON_FORM_NAME, ...formData }),
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

  handleBillingAddressToggleClick() {
    this.setState((state, props) => ({ isSameBillingAddress: !state.isSameBillingAddress }));
  }

  handleAcceptTermsToggleClick() {
    this.setState((state, props) => ({ acceptTerms: !state.acceptTerms }));
  }

  handleBillingMethodClick(value) {
    this.setState({ billingMethod: value });
  }

  moveToPreviousPage() {
    if (this.state.currentPage === 2 && this.state.isSameBillingAddress) {
      this.setState({ currentPage: 0 });
    } else {
      this.setState((state, props) => ({ currentPage: state.currentPage - 1 }));
    }
  }

  moveToNextPage() {
    if (this.validatePageData()) {
      if (this.state.currentPage === 0 && this.state.isSameBillingAddress) {
        this.setState({ currentPage: 2 });
      } else {
        this.setState((state, props) => ({ currentPage: state.currentPage + 1 }));
      }
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const i = createIntl(this.props.intl);

    return (
      <FormContainer>
        <form
          name={REGISTER_PERSON_FORM_NAME}
          onSubmit={this.handleSubmit}
          action="/"
          method="POST"
          netlify-honeypot="bot-field"
          netlify
          data-netlify="true"
        >
          {/* This input field is required by Netlify */}
          <input type="hidden" name="form-name" value={REGISTER_PERSON_FORM_NAME} />
          <FormDiv hidden>
            <label>{i('clientRegisterPersonFormHoneypot')}</label>
            <input name="bot-field" />
          </FormDiv>

          {/* The client's basic information */}
          <FormPage hidden={this.state.currentPage !== 0}>
            <FormDiv>
              <h3>{i('clientRegisterPersonFormBasicInfo')}</h3>
            </FormDiv>
            <FormDiv>
              <label htmlFor="first-name">{i('clientRegisterPersonFormFirstName')}</label>
              <label
                htmlFor="first-name"
                className="error-message"
                hidden={!this.state.errors.firstName}
              >
                {this.state.errors.firstName}
              </label>
              <input
                type="text"
                name="firstName"
                id="first-name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="surname">{i('clientRegisterPersonFormSurname')}</label>
              <label
                htmlFor="surname"
                className="error-message"
                hidden={!this.state.errors.surname}
              >
                {this.state.errors.surname}
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                value={this.state.surname}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="tel">{i('clientRegisterPersonFormTel')}</label>
              <label htmlFor="tel" className="error-message" hidden={!this.state.errors.tel}>
                {this.state.errors.tel}
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                value={this.state.tel}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="email">{i('clientRegisterPersonFormEmail')}</label>
              <label htmlFor="email" className="error-message" hidden={!this.state.errors.email}>
                {this.state.errors.email}
              </label>
              <input
                className="medium"
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <p>{i('clientRegisterPersonFormEmailForBilling')}</p>
            </FormDiv>
            <FormDiv>
              <label htmlFor="address-line-1">{i('clientRegisterPersonFormAddressLine1')}</label>
              <label
                htmlFor="address-line-1"
                className="error-message"
                hidden={!this.state.errors.addressLine1}
              >
                {this.state.errors.addressLine1}
              </label>
              <input
                className="wider"
                type="text"
                name="addressLine1"
                id="address-line-1"
                value={this.state.addressLine1}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="address-line-2">{i('clientRegisterPersonFormAddressLine2')}</label>
              <input
                className="wider"
                type="text"
                name="addressLine2"
                id="address-line-2"
                value={this.state.addressLine2}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="postcode">{i('clientRegisterPersonFormPostcode')}</label>
              <label
                htmlFor="postcode"
                className="error-message"
                hidden={!this.state.errors.postcode}
              >
                {this.state.errors.postcode}
              </label>
              <input
                type="text"
                name="postcode"
                id="postcode"
                value={this.state.postcode}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="post-office">{i('clientRegisterPersonFormPostOffice')}</label>
              <label
                htmlFor="post-office"
                className="error-message"
                hidden={!this.state.errors.postOffice}
              >
                {this.state.errors.postOffice}
              </label>
              <input
                type="text"
                name="postOffice"
                id="post-office"
                value={this.state.postOffice}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <SwitchCheckbox
                id="same-billing-address"
                name="isSameBillingAddress"
                handleClick={this.handleBillingAddressToggleClick}
                checked={this.state.isSameBillingAddress}
                label={i('clientRegisterPersonFormSameBillingAddress')}
              />
            </FormDiv>
          </FormPage>

          {/* The form page for giving the possible billing address */}
          <FormPage hidden={this.state.currentPage !== 1}>
            <h3>{i('clientRegisterPersonFormBillingAddress')}</h3>
            <FormDiv>
              <label htmlFor="billing-address-line-1">
                {i('clientRegisterPersonFormBillingAddressLine1')}
              </label>
              <label
                htmlFor="billing-address-line-1"
                className="error-message"
                hidden={!this.state.errors.billingAddressLine1}
              >
                {this.state.errors.billingAddressLine1}
              </label>
              <input
                className="wider"
                type="text"
                name="billingAddressLine1"
                id="billing-address-line-1"
                value={this.state.billingAddressLine1}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="billing-address-line-2">
                {i('clientRegisterPersonFormBillingAddressLine2')}
              </label>
              <input
                className="wider"
                type="text"
                name="billingAddressLine2"
                id="billing-address-line-2"
                value={this.state.billingAddressLine2}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="billing-postcode">
                {i('clientRegisterPersonFormBillingPostcode')}
              </label>
              <label
                htmlFor="billing-postcode"
                className="error-message"
                hidden={!this.state.errors.billingPostcode}
              >
                {this.state.errors.billingPostcode}
              </label>
              <input
                type="text"
                name="billingPostcode"
                id="billing-postcode"
                value={this.state.billingPostcode}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="billing-post-office">
                {i('clientRegisterPersonFormBillingPostOffice')}
              </label>
              <label
                htmlFor="billing-post-office"
                className="error-message"
                hidden={!this.state.errors.billingPostOffice}
              >
                {this.state.errors.billingPostOffice}
              </label>
              <input
                type="text"
                name="billingPostOffice"
                id="billing-post-office"
                value={this.state.billingPostOffice}
                onChange={this.handleChange}
              />
            </FormDiv>
          </FormPage>

          {/* The form page for selecting the billing method */}
          <FormPage hidden={this.state.currentPage !== 2}>
            <FormDiv>
              <RadioInput
                title={i('clientRegisterPersonFormBillingMethod')}
                description={i('clientRegisterPersonFormBillingMethodContent', {
                  a: (...chunk) => (
                    <LocalizedLink to="/pricing" locale={this.props.locale}>
                      {chunk}
                    </LocalizedLink>
                  ),
                })}
                errorMessage={this.state.errors.billingMethod}
                value={this.state.billingMethod}
                handleChange={this.handleBillingMethodClick}
                inputs={[
                  {
                    id: FORM_BILLING_EMAIL,
                    label: i('clientRegisterPersonFormBillingMethodEmail'),
                    value: FORM_BILLING_EMAIL,
                  },
                  {
                    id: FORM_BILLING_PAPER,
                    label: i('clientRegisterPersonFormBillingMethodPaper'),
                    value: FORM_BILLING_PAPER,
                  },
                ]}
              />
            </FormDiv>
            <FormDiv>
              <SwitchCheckbox
                id="accept-terms"
                name="acceptTerms"
                errorMessage={this.state.errors.acceptTerms}
                handleClick={this.handleAcceptTermsToggleClick}
                checked={this.state.acceptTerms}
                label={i('clientRegisterPersonFormAcceptTerms')}
              />
            </FormDiv>
            <FormDiv>
              <p>
                {i('clientRegisterPersonFormPrivacyInfo', {
                  a: (...chunk) => (
                    <LocalizedLink to="6a7fVb49Zf79FTetXflVFL" locale={this.props.locale}>
                      {chunk}
                    </LocalizedLink>
                  ),
                })}
              </p>
            </FormDiv>
          </FormPage>

          <FormDiv>
            <ButtonDiv hidden={this.state.currentPage === 0}>
              <Button onClick={this.moveToPreviousPage}>
                <ArrowLeft size={24} /> <span>{i('clientRegisterPersonFormPrevious')}</span>
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={this.state.currentPage === 2}>
              <Button onClick={this.moveToNextPage}>
                <span>{i('clientRegisterPersonFormNext')}</span> <ArrowRight size={24} />
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={this.state.currentPage !== 2}>
              <button type="submit">
                <PaperAirplane size={24} /> {i('clientRegisterPersonFormSend')}
              </button>
            </ButtonDiv>
          </FormDiv>
          <FormDiv hidden={this.state.postStatus !== FORM_POST_STATUS_SUCCESS}>
            <p>{i('clientRegisterPersonFormSuccess')}</p>
          </FormDiv>
          <FormDiv hidden={this.state.postStatus !== FORM_POST_STATUS_ERROR}>
            <p>{i('clientRegisterPersonFormError')}</p>
            <p>
              {this.state.errorMessage
                ? this.state.errorMessage
                : i('clientRegisterPersonFormErrorNoErrorMessage')}
            </p>
          </FormDiv>
        </form>
      </FormContainer>
    );
  }
}

export default injectIntl(RegisterPersonForm);
