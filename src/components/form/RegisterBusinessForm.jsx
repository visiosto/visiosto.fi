// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
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

import createINTL from '../../util/createINTL';
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

const propTypes = { intl: PropTypes.object.isRequired, locale: PropTypes.string.isRequired };

class RegisterBusinessForm extends React.Component {
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

  validatePageData() {
    const intl = createINTL(this.props.intl);
    const errors = {};
    let isValid = true;

    switch (this.state.currentPage) {
      case 0:
        if (!this.state.businessID) {
          isValid = false;
          errors.businessID = intl('clientRegisterBusinessFormErrorMissingBusinessID');
        }
        if (!this.state.businessName) {
          isValid = false;
          errors.businessName = intl('clientRegisterBusinessFormErrorMissingBusinessName');
        }
        if (!this.state.addressLine1) {
          isValid = false;
          errors.addressLine1 = intl('clientRegisterBusinessFormErrorMissingAddressLine1');
        }
        if (!this.state.postcode) {
          isValid = false;
          errors.postcode = intl('clientRegisterBusinessFormErrorMissingPostcode');
        }
        if (!this.state.postOffice) {
          isValid = false;
          errors.postOffice = intl('clientRegisterBusinessFormErrorMissingPostOffice');
        }
        break;

      case 1:
        if (!this.state.billingAddressLine1) {
          isValid = false;
          errors.billingAddressLine1 = intl(
            'clientRegisterBusinessFormErrorMissingBillingAddressLine1',
          );
        }
        if (!this.state.billingPostcode) {
          isValid = false;
          errors.billingPostcode = intl('clientRegisterBusinessFormErrorMissingBillingPostcode');
        }
        if (!this.state.billingPostOffice) {
          isValid = false;
          errors.billingPostOffice = intl(
            'clientRegisterBusinessFormErrorMissingBillingPostOffice',
          );
        }
        break;

      case 2:
        if (!this.state.billingMethod) {
          isValid = false;
          errors.billingMethod = intl('clientRegisterBusinessFormErrorMissingBillingMethod');
        }
        break;

      case 3:
        switch (this.state.billingMethod) {
          case FORM_BILLING_E_INVOICE:
            if (!this.state.eInvoiceAddress) {
              isValid = false;
              errors.eInvoiceAddress = intl(
                'clientRegisterBusinessFormErrorMissingEInvoiceAddress',
              );
            }
            if (!this.state.eInvoiceOperator) {
              isValid = false;
              errors.eInvoiceOperator = intl(
                'clientRegisterBusinessFormErrorMissingEInvoiceOperator',
              );
            }
            break;

          case FORM_BILLING_EMAIL:
            if (!this.state.billingEmail) {
              isValid = false;
              errors.billingEmail = intl('clientRegisterBusinessFormErrorMissingBillingEmail');
            }
            break;
        }
        break;

      case 4:
        if (!this.state.firstName) {
          isValid = false;
          errors.firstName = intl('clientRegisterBusinessFormErrorMissingFirstName');
        }
        if (!this.state.surname) {
          isValid = false;
          errors.surname = intl('clientRegisterBusinessFormErrorMissingSurname');
        }
        if (!this.state.email) {
          isValid = false;
          errors.email = intl('clientRegisterBusinessFormErrorMissingEmail');
        }
        if (!this.state.tel) {
          isValid = false;
          errors.tel = intl('clientRegisterBusinessFormErrorMissingTel');
        }
        if (!this.state.acceptTerms) {
          isValid = false;
          errors.acceptTerms = intl('clientRegisterBusinessFormErrorTermsNotAccepted');
        }
        break;
    }

    this.setState({ errors });

    return isValid;
  }

  handleSubmit(event) {
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
    } else if (
      this.state.currentPage === 4 &&
      this.state.billingMethod !== FORM_BILLING_E_INVOICE &&
      this.state.billingMethod !== FORM_BILLING_EMAIL
    ) {
      this.setState({ currentPage: 2 });
    } else {
      this.setState((state, props) => ({ currentPage: state.currentPage - 1 }));
    }
  }

  moveToNextPage() {
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
    const intl = createINTL(this.props.intl);
    const { locale } = this.props;

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
            <label>{intl('clientRegisterBusinessFormHoneypot')}</label>
            <input name="bot-field" />
          </FormDiv>

          {/* The client's basic information */}
          <FormPage hidden={this.state.currentPage !== 0}>
            <FormDiv>
              <h3>{intl('clientRegisterBusinessFormBasicInfo')}</h3>
            </FormDiv>
            <FormDiv>
              <label htmlFor="business-id">{intl('clientRegisterBusinessFormBusinessID')}</label>
              <label
                htmlFor="business-id"
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
              <label htmlFor="business-name">
                {intl('clientRegisterBusinessFormBusinessName')}
              </label>
              <label
                htmlFor="business-name"
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
              <h4>{intl('clientRegisterBusinessFormAddress')}</h4>
            </FormDiv>
            <FormDiv>
              <label htmlFor="address-line-1">
                {intl('clientRegisterBusinessFormAddressLine1')}
              </label>
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
              <label htmlFor="address-line-2">
                {intl('clientRegisterBusinessFormAddressLine2')}
              </label>
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
              <label htmlFor="postcode">{intl('clientRegisterBusinessFormPostcode')}</label>
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
              <label htmlFor="post-office">{intl('clientRegisterBusinessFormPostOffice')}</label>
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
                label={intl('clientRegisterBusinessFormSameBillingAddress')}
              />
            </FormDiv>
          </FormPage>

          {/* The form page for giving the possible billing address */}
          <FormPage hidden={this.state.currentPage !== 1}>
            <h3>{intl('clientRegisterBusinessFormBillingAddress')}</h3>
            <FormDiv>
              <label htmlFor="billing-address-line-1">
                {intl('clientRegisterBusinessFormBillingAddressLine1')}
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
                {intl('clientRegisterBusinessFormBillingAddressLine2')}
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
                {intl('clientRegisterBusinessFormBillingPostcode')}
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
                {intl('clientRegisterBusinessFormBillingPostOffice')}
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
                title={intl('clientRegisterBusinessFormBillingMethod')}
                description={intl('clientRegisterBusinessFormBillingMethodContent', {
                  a: (...chunk) => (
                    <LocalizedLink to="/pricing" locale={locale}>
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
                    label: intl('clientRegisterBusinessFormBillingMethodEInvoice'),
                    value: FORM_BILLING_E_INVOICE,
                  },
                  {
                    id: FORM_BILLING_EMAIL,
                    label: intl('clientRegisterBusinessFormBillingMethodEmail'),
                    value: FORM_BILLING_EMAIL,
                  },
                  {
                    id: FORM_BILLING_PAPER,
                    label: intl('clientRegisterBusinessFormBillingMethodPaper'),
                    value: FORM_BILLING_PAPER,
                  },
                ]}
              />
            </FormDiv>
          </FormPage>

          {/* The billing information: either e-invoice info or email for billing */}
          <FormPage hidden={this.state.currentPage !== 3}>
            <FormDiv>
              <h3>{intl('clientRegisterBusinessFormBillingInfo')}</h3>
            </FormDiv>
            <FormDiv hidden={this.state.billingMethod !== FORM_BILLING_E_INVOICE}>
              <label htmlFor="e-invoice-address">
                {intl('clientRegisterBusinessFormEInvoiceAddress')}
              </label>
              <label
                htmlFor="e-invoice-address"
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
              <label htmlFor="e-invoice-operator">
                {intl('clientRegisterBusinessFormEInvoiceOperator')}
              </label>
              <label
                htmlFor="e-invoice-operator"
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
              <label htmlFor="billing-email">
                {intl('clientRegisterBusinessFormBillingEmail')}
              </label>
              <label
                htmlFor="billing-email"
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
              <h3>{intl('clientRegisterBusinessFormContactPerson')}</h3>
            </FormDiv>
            <FormDiv>
              <label htmlFor="first-name">{intl('clientRegisterBusinessFormFirstName')}</label>
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
              <label htmlFor="surname">{intl('clientRegisterBusinessFormSurname')}</label>
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
              <label htmlFor="tel">{intl('clientRegisterBusinessFormTel')}</label>
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
              <label htmlFor="email">{intl('clientRegisterBusinessFormEmail')}</label>
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
            </FormDiv>
            <FormDiv>
              <SwitchCheckbox
                id="accept-terms"
                name="acceptTerms"
                errorMessage={this.state.errors.acceptTerms}
                handleClick={this.handleAcceptTermsToggleClick}
                checked={this.state.acceptTerms}
                label={intl('clientRegisterBusinessFormAcceptTerms')}
              />
            </FormDiv>
            <FormDiv>
              <p>
                {intl('clientRegisterBusinessFormPrivacyInfo', {
                  a: (...chunk) => (
                    <LocalizedLink to="6a7fVb49Zf79FTetXflVFL" locale={locale}>
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
                <ArrowLeft size={24} /> <span>{intl('clientRegisterBusinessFormPrevious')}</span>
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={this.state.currentPage === 4}>
              <Button onClick={this.moveToNextPage}>
                <span>{intl('clientRegisterBusinessFormNext')}</span> <ArrowRight size={24} />
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={this.state.currentPage !== 4}>
              <button type="submit">
                <PaperAirplane size={24} /> {intl('clientRegisterBusinessFormSend')}
              </button>
            </ButtonDiv>
          </FormDiv>
          <FormDiv hidden={this.state.postStatus !== FORM_POST_STATUS_SUCCESS}>
            <p>{intl('clientRegisterBusinessFormSuccess')}</p>
          </FormDiv>
          <FormDiv hidden={this.state.postStatus !== FORM_POST_STATUS_ERROR}>
            <p>{intl('clientRegisterBusinessFormError')}</p>
            <p>
              {this.state.errorMessage
                ? this.state.errorMessage
                : intl('clientRegisterBusinessFormErrorNoErrorMessage')}
            </p>
          </FormDiv>
        </form>
      </FormContainer>
    );
  }
}

RegisterBusinessForm.propTypes = propTypes;

export default injectIntl(RegisterBusinessForm);
