// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { Component } from 'react';
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
  FORM_BILLING_E_INVOICE,
  FORM_BILLING_PAPER,
  FORM_POST_STATUS_ERROR,
  FORM_POST_STATUS_SUCCESS,
  FORM_POST_STATUS_TIMEOUT,
  REGISTER_BUSINESS_FORM_NAME,
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

class RegisterBusinessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businessID: '',
      businessName: '',
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
      eInvoiceAddress: '',
      eInvoiceOperator: '',
      billingEmail: '',
      firstName: '',
      surname: '',
      tel: '',
      email: '',
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

  validatePageData = () => {
    const i = createIntl(this.props.intl);
    const errors = {};
    let isValid = true;

    switch (this.state.currentPage) {
      case 0:
        if (!this.state.businessID) {
          isValid = false;
          errors.businessID = i('clientRegisterFormErrorMissingBusinessID');
        }
        if (!this.state.businessName) {
          isValid = false;
          errors.businessName = i('clientRegisterFormErrorMissingBusinessName');
        }
        if (!this.state.addressLine1) {
          isValid = false;
          errors.addressLine1 = i('clientRegisterFormErrorMissingAddressLine1');
        }
        if (!this.state.postcode) {
          isValid = false;
          errors.postcode = i('clientRegisterFormErrorMissingPostcode');
        }
        if (!this.state.postOffice) {
          isValid = false;
          errors.postOffice = i('clientRegisterFormErrorMissingPostOffice');
        }
        break;

      case 1:
        if (!this.state.billingAddressLine1) {
          isValid = false;
          errors.billingAddressLine1 = i('clientRegisterFormErrorMissingBillingAddressLine1');
        }
        if (!this.state.billingPostcode) {
          isValid = false;
          errors.billingPostcode = i('clientRegisterFormErrorMissingBillingPostcode');
        }
        if (!this.state.billingPostOffice) {
          isValid = false;
          errors.billingPostOffice = i('clientRegisterFormErrorMissingBillingPostOffice');
        }
        break;

      case 2:
        if (!this.state.billingMethod) {
          isValid = false;
          errors.billingMethod = i('clientRegisterFormErrorMissingBillingMethod');
        }
        break;

      case 3:
        switch (this.state.billingMethod) {
          case FORM_BILLING_E_INVOICE:
            if (!this.state.eInvoiceAddress) {
              isValid = false;
              errors.eInvoiceAddress = i('clientRegisterFormErrorMissingEInvoiceAddress');
            }
            if (!this.state.eInvoiceOperator) {
              isValid = false;
              errors.eInvoiceOperator = i('clientRegisterFormErrorMissingEInvoiceOperator');
            }
            break;

          case FORM_BILLING_EMAIL:
            if (!this.state.billingEmail) {
              isValid = false;
              errors.billingEmail = i('clientRegisterFormErrorMissingBillingEmail');
            }
            break;
        }
        break;

      case 4:
        if (!this.state.firstName) {
          isValid = false;
          errors.firstName = i('clientRegisterFormErrorMissingFirstName');
        }
        if (!this.state.surname) {
          isValid = false;
          errors.surname = i('clientRegisterFormErrorMissingSurname');
        }
        if (!this.state.email) {
          isValid = false;
          errors.email = i('clientRegisterFormErrorMissingEmail');
        }
        if (!this.state.tel) {
          isValid = false;
          errors.tel = i('clientRegisterFormErrorMissingTel');
        }
        if (!this.state.acceptTerms) {
          isValid = false;
          errors.acceptTerms = i('clientRegisterFormErrorTermsNotAccepted');
        }
        break;
    }

    this.setState({ errors });

    return isValid;
  };

  handleSubmit = (event) => {
    if (this.validatePageData()) {
      const formData = {
        businessID: this.state.businessID,
        businessName: this.state.businessName,
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
        eInvoiceAddress: this.state.eInvoiceAddress,
        eInvoiceOperator: this.state.eInvoiceOperator,
        billingEmail: this.state.billingEmail,
        firstName: this.state.firstName,
        surname: this.state.surname,
        tel: this.state.tel,
        email: this.state.email,
        acceptTerms: this.state.acceptTerms,
      };

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormState({ 'form-name': REGISTER_BUSINESS_FORM_NAME, ...formData }),
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

  handleBillingAddressToggleClick = () => {
    this.setState((state, props) => ({ isSameBillingAddress: !state.isSameBillingAddress }));
  };

  handleAcceptTermsToggleClick = () => {
    this.setState((state, props) => ({ acceptTerms: !state.acceptTerms }));
  };

  handleBillingMethodClick = (value) => {
    this.setState({ billingMethod: value });
  };

  moveToPreviousPage = () => {
    if (this.state.currentPage === 2 && this.state.isSameBillingAddress) {
      this.setState({ currentPage: 0 });
    } else if (
      this.state.currentPage === 4 &&
      this.state.billingMethod !== FORM_BILLING_E_INVOICE &&
      this.state.billingMethod !== FORM_BILLING_EMAIL
    ) {
      this.setState({ currentPage: 2 });
    } else {
      this.setState((state, props) => ({ currentPage: state.currentPage - 1 }));
    }
  };

  moveToNextPage = () => {
    if (this.validatePageData()) {
      if (this.state.currentPage === 0 && this.state.isSameBillingAddress) {
        this.setState({ currentPage: 2 });
      } else if (
        this.state.currentPage === 2 &&
        this.state.billingMethod !== FORM_BILLING_E_INVOICE &&
        this.state.billingMethod !== FORM_BILLING_EMAIL
      ) {
        this.setState({ currentPage: 4 });
      } else {
        this.setState((state, props) => ({ currentPage: state.currentPage + 1 }));
      }
    }
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
          name={REGISTER_BUSINESS_FORM_NAME}
          onSubmit={this.handleSubmit}
          action="/"
          method="POST"
          netlify-honeypot="bot-field"
          netlify
          data-netlify="true"
        >
          {/* This input field is required by Netlify */}
          <input type="hidden" name="form-name" value={REGISTER_BUSINESS_FORM_NAME} />
          <FormDiv hidden>
            <label>{i('clientRegisterFormHoneypot')}</label>
            <input name="bot-field" />
          </FormDiv>

          {/* The client's basic information */}
          <FormPage hidden={this.state.currentPage !== 0}>
            <FormDiv>
              <label for="business-id">{i('clientRegisterFormBusinessID')}</label>
              <label
                for="business-id"
                className="error-message"
                hidden={!this.state.errors.businessID}
              >
                {this.state.errors.businessID}
              </label>
              <input
                type="text"
                name="businessID"
                id="business-id"
                value={this.state.businessID}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label for="business-name">{i('clientRegisterFormBusinessName')}</label>
              <label
                for="business-name"
                className="error-message"
                hidden={!this.state.errors.businessName}
              >
                {this.state.errors.businessName}
              </label>
              <input
                type="text"
                name="businessName"
                id="business-name"
                value={this.state.businessName}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv>
              <label for="address-line-1">{i('clientRegisterFormAddressLine1')}</label>
              <label
                for="address-line-1"
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
              <label for="address-line-2">{i('clientRegisterFormAddressLine2')}</label>
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
              <label for="postcode">{i('clientRegisterFormPostcode')}</label>
              <label for="postcode" className="error-message" hidden={!this.state.errors.postcode}>
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
              <label for="post-office">{i('clientRegisterFormPostOffice')}</label>
              <label
                for="post-office"
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
                label={i('clientRegisterFormSameBillingAddress')}
              />
            </FormDiv>
          </FormPage>

          {/* The form page for giving the possible billing address */}
          <FormPage hidden={this.state.currentPage !== 1}>
            <h3>{i('clientRegisterFormBillingAddress')}</h3>
            <FormDiv>
              <label for="billing-address-line-1">
                {i('clientRegisterFormBillingAddressLine1')}
              </label>
              <label
                for="billing-address-line-1"
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
              <label for="billing-address-line-2">
                {i('clientRegisterFormBillingAddressLine2')}
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
              <label for="billing-postcode">{i('clientRegisterFormBillingPostcode')}</label>
              <label
                for="billing-postcode"
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
              <label for="billing-post-office">{i('clientRegisterFormBillingPostOffice')}</label>
              <label
                for="billing-post-office"
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
                title={i('clientRegisterFormBillingMethod')}
                description={i('clientRegisterFormBillingMethodContent', {
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
                    id: FORM_BILLING_E_INVOICE,
                    label: i('clientRegisterFormBillingMethodEInvoice'),
                    value: FORM_BILLING_E_INVOICE,
                  },
                  {
                    id: FORM_BILLING_EMAIL,
                    label: i('clientRegisterFormBillingMethodEmail'),
                    value: FORM_BILLING_EMAIL,
                  },
                  {
                    id: FORM_BILLING_PAPER,
                    label: i('clientRegisterFormBillingMethodPaper'),
                    value: FORM_BILLING_PAPER,
                  },
                ]}
              />
            </FormDiv>
          </FormPage>

          {/* The billing information: either e-invoice info or email for billing */}
          <FormPage hidden={this.state.currentPage !== 3}>
            <FormDiv hidden={this.state.billingMethod !== FORM_BILLING_E_INVOICE}>
              <label for="e-invoice-address">{i('clientRegisterFormEInvoiceAddress')}</label>
              <label
                for="e-invoice-address"
                className="error-message"
                hidden={!this.state.errors.eInvoiceAddress}
              >
                {this.state.errors.eInvoiceAddress}
              </label>
              <input
                className="medium"
                type="text"
                name="eInvoiceAddress"
                id="e-invoice-address"
                value={this.state.eInvoiceAddress}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv hidden={this.state.billingMethod !== FORM_BILLING_E_INVOICE}>
              <label for="e-invoice-operator">{i('clientRegisterFormEInvoiceOperator')}</label>
              <label
                for="e-invoice-operator"
                className="error-message"
                hidden={!this.state.errors.eInvoiceOperator}
              >
                {this.state.errors.eInvoiceOperator}
              </label>
              <input
                className="medium"
                type="text"
                name="eInvoiceOperator"
                id="e-invoice-operator"
                value={this.state.eInvoiceOperator}
                onChange={this.handleChange}
              />
            </FormDiv>
            <FormDiv hidden={this.state.billingMethod !== FORM_BILLING_EMAIL}>
              <label for="billing-email">{i('clientRegisterFormBillingEmail')}</label>
              <label
                for="billing-email"
                className="error-message"
                hidden={!this.state.errors.billingEmail}
              >
                {this.state.errors.billingEmail}
              </label>
              <input
                className="medium"
                type="email"
                name="billingEmail"
                id="billing-email"
                value={this.state.billingEmail}
                onChange={this.handleChange}
              />
            </FormDiv>
          </FormPage>

          {/* The client's contact person's information */}
          <FormPage hidden={this.state.currentPage !== 4}>
            <FormDiv>
              <label for="first-name">{i('clientRegisterFormFirstName')}</label>
              <label
                for="first-name"
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
              <label for="surname">{i('clientRegisterFormSurname')}</label>
              <label for="surname" className="error-message" hidden={!this.state.errors.surname}>
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
              <label for="tel">{i('clientRegisterFormTel')}</label>
              <label for="tel" className="error-message" hidden={!this.state.errors.tel}>
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
              <label for="email">{i('clientRegisterFormEmail')}</label>
              <label for="email" className="error-message" hidden={!this.state.errors.email}>
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
            </FormDiv>
            <FormDiv>
              <SwitchCheckbox
                id="accept-terms"
                name="acceptTerms"
                errorMessage={this.state.errors.acceptTerms}
                handleClick={this.handleAcceptTermsToggleClick}
                checked={this.state.acceptTerms}
                label={i('clientRegisterFormAcceptTerms')}
              />
            </FormDiv>
          </FormPage>

          <FormDiv>
            <ButtonDiv hidden={this.state.currentPage === 0}>
              <Button onClick={this.moveToPreviousPage}>
                <ArrowLeft size={24} /> <span>{i('clientRegisterFormPrevious')}</span>
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={this.state.currentPage === 4}>
              <Button onClick={this.moveToNextPage}>
                <span>{i('clientRegisterFormNext')}</span> <ArrowRight size={24} />
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={this.state.currentPage !== 4}>
              <button type="submit">
                <PaperAirplane size={24} /> {i('clientRegisterFormSend')}
              </button>
            </ButtonDiv>
          </FormDiv>
          <FormDiv hidden={this.state.postStatus !== FORM_POST_STATUS_SUCCESS}>
            <p>{i('clientRegisterFormSuccess')}</p>
          </FormDiv>
          <FormDiv hidden={this.state.postStatus !== FORM_POST_STATUS_ERROR}>
            <p>{i('clientRegisterFormError')}</p>
            <p>
              {this.state.errorMessage
                ? this.state.errorMessage
                : i('clientRegisterFormErrorNoErrorMessage')}
            </p>
          </FormDiv>
        </form>
      </FormContainer>
    );
  }
}

export default injectIntl(RegisterBusinessForm);
