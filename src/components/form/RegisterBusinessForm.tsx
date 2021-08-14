// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled, { css } from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon, PaperAirplaneIcon } from '@primer/octicons-react';
import { IntlShape, injectIntl } from 'react-intl';

import Button from '../Button';
import FormDiv from './FormDiv';
import LocalizedLink from '../link/LocalizedLink';
import RadioInput from './RadioInput';
import SwitchCheckbox from './SwitchCheckbox';

import {
  FORM_BILLING_METHOD_INVOICE_EMAIL,
  FORM_BILLING_METHOD_INVOICE_E_INVOICE,
  FORM_BILLING_METHOD_INVOICE_PAPER,
  FORM_POST_STATUS_ERROR,
  FORM_POST_STATUS_SUCCESS,
  FORM_POST_STATUS_TIMEOUT,
  REGISTER_BUSINESS_FORM_NAME,
} from '../../constants';

import { clientRegisterPrivacyPolicyPageID } from '../../entryIDs';

import createInternationalization from '../../util/createInternationalization';
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

type Props = {
  intl: IntlShape;
  locale: string;
};

type Errors = {
  acceptTerms?: string;
  addressLine1?: string;
  billingAddressLine1?: string;
  billingEmail?: string;
  billingMethod?: string;
  billingPostcode?: string;
  billingPostOffice?: string;
  businessID?: string;
  businessName?: string;
  eInvoiceAddress?: string;
  eInvoiceOperator?: string;
  email?: string;
  firstName?: string;
  postcode?: string;
  postOffice?: string;
  surname?: string;
  tel?: string;
};

type State = {
  acceptTerms?: boolean;
  addressLine1?: string;
  addressLine2?: string;
  billingAddressLine1?: string;
  billingAddressLine2?: string;
  billingEmail?: string;
  billingMethod?: string;
  billingPostcode?: string;
  billingPostOffice?: string;
  businessID?: string;
  businessName?: string;
  currentPage?: number;
  eInvoiceAddress?: string;
  eInvoiceOperator?: string;
  email?: string;
  errorMessage?: string;
  errors?: Errors;
  firstName?: string;
  isSameBillingAddress?: boolean;
  postcode?: string;
  postOffice?: string;
  postStatus?: string;
  surname?: string;
  tel?: string;
};

class RegisterBusinessForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      acceptTerms: false,
      addressLine1: '',
      addressLine2: '',
      billingAddressLine1: '',
      billingAddressLine2: '',
      billingEmail: '',
      billingMethod: '',
      billingPostcode: '',
      billingPostOffice: '',
      businessID: '',
      businessName: '',
      currentPage: 0,
      eInvoiceAddress: '',
      eInvoiceOperator: '',
      email: '',
      errorMessage: '',
      errors: {},
      firstName: '',
      isSameBillingAddress: false,
      postcode: '',
      postOffice: '',
      postStatus: '',
      surname: '',
      tel: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBillingAddressToggleClick = this.handleBillingAddressToggleClick.bind(this);
    this.handleAcceptTermsToggleClick = this.handleAcceptTermsToggleClick.bind(this);
    this.handleBillingMethodClick = this.handleBillingMethodClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.moveToPreviousPage = this.moveToPreviousPage.bind(this);
    this.moveToNextPage = this.moveToNextPage.bind(this);
    this.validatePageData = this.validatePageData.bind(this);
  }

  handleSubmit(event) {
    if (this.validatePageData()) {
      const {
        acceptTerms,
        addressLine1,
        addressLine2,
        billingAddressLine1,
        billingAddressLine2,
        billingEmail,
        billingMethod,
        billingPostcode,
        billingPostOffice,
        businessID,
        businessName,
        eInvoiceAddress,
        eInvoiceOperator,
        email,
        firstName,
        isSameBillingAddress,
        postcode,
        postOffice,
        surname,
        tel,
      } = this.state;

      const formData = {
        acceptTerms,
        addressLine1,
        addressLine2,
        billingAddressLine1,
        billingAddressLine2,
        billingEmail,
        billingMethod,
        billingPostcode,
        billingPostOffice,
        businessID,
        businessName,
        eInvoiceAddress,
        eInvoiceOperator,
        email,
        firstName,
        isSameBillingAddress,
        postcode,
        postOffice,
        surname,
        tel,
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
    this.setState((state) => ({ isSameBillingAddress: !state.isSameBillingAddress }));
  }

  handleAcceptTermsToggleClick() {
    this.setState((state) => ({ acceptTerms: !state.acceptTerms }));
  }

  handleBillingMethodClick(value) {
    this.setState({ billingMethod: value });
  }

  handleChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  }

  moveToPreviousPage() {
    const { billingMethod, currentPage, isSameBillingAddress } = this.state;

    if (currentPage === 2 && isSameBillingAddress) {
      this.setState({ currentPage: 0 });
    } else if (
      currentPage === 4 &&
      billingMethod !== FORM_BILLING_METHOD_INVOICE_E_INVOICE &&
      billingMethod !== FORM_BILLING_METHOD_INVOICE_EMAIL
    ) {
      this.setState({ currentPage: 2 });
    } else {
      this.setState((state) => ({ currentPage: state.currentPage! - 1 }));
    }
  }

  moveToNextPage() {
    const { billingMethod, currentPage, isSameBillingAddress } = this.state;

    if (this.validatePageData()) {
      if (currentPage === 0 && isSameBillingAddress) {
        this.setState({ currentPage: 2 });
      } else if (
        currentPage === 2 &&
        billingMethod !== FORM_BILLING_METHOD_INVOICE_E_INVOICE &&
        billingMethod !== FORM_BILLING_METHOD_INVOICE_EMAIL
      ) {
        this.setState({ currentPage: 4 });
      } else {
        this.setState((state) => ({ currentPage: state.currentPage! + 1 }));
      }
    }
  }

  validatePageData() {
    const { intl: intlObject } = this.props;
    const {
      acceptTerms,
      addressLine1,
      billingAddressLine1,
      billingEmail,
      billingMethod,
      billingPostcode,
      billingPostOffice,
      businessID,
      businessName,
      currentPage,
      eInvoiceAddress,
      eInvoiceOperator,
      email,
      firstName,
      postcode,
      postOffice,
      surname,
      tel,
    } = this.state;
    const intl = createInternationalization(intlObject);
    const errors: Errors = {};
    let isValid = true;

    switch (currentPage) {
      case 0: {
        if (businessID === '') {
          isValid = false;
          errors.businessID = intl('clientRegisterBusinessFormErrorMissingBusinessID');
        }
        if (businessName === '') {
          isValid = false;
          errors.businessName = intl('clientRegisterBusinessFormErrorMissingBusinessName');
        }
        if (addressLine1 === '') {
          isValid = false;
          errors.addressLine1 = intl('clientRegisterBusinessFormErrorMissingAddressLine1');
        }
        if (postcode === '') {
          isValid = false;
          errors.postcode = intl('clientRegisterBusinessFormErrorMissingPostcode');
        }
        if (postOffice === '') {
          isValid = false;
          errors.postOffice = intl('clientRegisterBusinessFormErrorMissingPostOffice');
        }
        break;
      }

      case 1: {
        if (billingAddressLine1 === '') {
          isValid = false;
          errors.billingAddressLine1 = intl(
            'clientRegisterBusinessFormErrorMissingBillingAddressLine1',
          );
        }
        if (billingPostcode === '') {
          isValid = false;
          errors.billingPostcode = intl('clientRegisterBusinessFormErrorMissingBillingPostcode');
        }
        if (billingPostOffice === '') {
          isValid = false;
          errors.billingPostOffice = intl(
            'clientRegisterBusinessFormErrorMissingBillingPostOffice',
          );
        }
        break;
      }

      case 2: {
        if (billingMethod === '') {
          isValid = false;
          errors.billingMethod = intl('clientRegisterBusinessFormErrorMissingBillingMethod');
        }
        break;
      }

      case 3: {
        switch (billingMethod) {
          case FORM_BILLING_METHOD_INVOICE_E_INVOICE: {
            if (eInvoiceAddress === '') {
              isValid = false;
              errors.eInvoiceAddress = intl(
                'clientRegisterBusinessFormErrorMissingEInvoiceAddress',
              );
            }
            if (eInvoiceOperator === '') {
              isValid = false;
              errors.eInvoiceOperator = intl(
                'clientRegisterBusinessFormErrorMissingEInvoiceOperator',
              );
            }
            break;
          }

          case FORM_BILLING_METHOD_INVOICE_EMAIL: {
            if (billingEmail === '') {
              isValid = false;
              errors.billingEmail = intl('clientRegisterBusinessFormErrorMissingBillingEmail');
            }
            break;
          }

          default: {
            break;
          }
        }
        break;
      }

      case 4: {
        if (firstName === '') {
          isValid = false;
          errors.firstName = intl('clientRegisterBusinessFormErrorMissingFirstName');
        }
        if (surname === '') {
          isValid = false;
          errors.surname = intl('clientRegisterBusinessFormErrorMissingSurname');
        }
        if (tel === '') {
          isValid = false;
          errors.tel = intl('clientRegisterBusinessFormErrorMissingTel');
        }
        if (email === '') {
          isValid = false;
          errors.email = intl('clientRegisterBusinessFormErrorMissingEmail');
        }
        if (!acceptTerms) {
          isValid = false;
          errors.acceptTerms = intl('clientRegisterBusinessFormErrorTermsNotAccepted');
        }
        break;
      }

      default: {
        break;
      }
    }

    this.setState({ errors });

    return isValid;
  }

  render() {
    const { intl: intlObject, locale } = this.props;
    const {
      acceptTerms,
      addressLine1,
      addressLine2,
      billingAddressLine1,
      billingAddressLine2,
      billingEmail,
      billingMethod,
      billingPostcode,
      billingPostOffice,
      businessID,
      businessName,
      currentPage,
      eInvoiceAddress,
      eInvoiceOperator,
      email,
      errorMessage,
      errors,
      firstName,
      isSameBillingAddress,
      postcode,
      postOffice,
      postStatus,
      surname,
      tel,
    } = this.state;
    const intl = createInternationalization(intlObject);

    return (
      <FormContainer>
        <form
          action="/"
          data-netlify="true"
          method="POST"
          name={REGISTER_BUSINESS_FORM_NAME}
          netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* This input field is required by Netlify */}
          <input name="form-name" type="hidden" value={REGISTER_BUSINESS_FORM_NAME} />
          <FormDiv hidden>
            <label htmlFor="bot-field">{intl('clientRegisterBusinessFormHoneypot')}</label>
            <input name="bot-field" />
          </FormDiv>

          {/* The client's basic information */}
          <FormPage hidden={currentPage !== 0}>
            <FormDiv>
              <h3>{intl('clientRegisterBusinessFormBasicInfo')}</h3>
            </FormDiv>
            <FormDiv>
              <label htmlFor="business-id">{intl('clientRegisterBusinessFormBusinessID')}</label>
              <label className="error-message" hidden={!errors!.businessID} htmlFor="business-id">
                {errors!.businessID}
              </label>
              <input
                id="business-id"
                name="businessID"
                onChange={this.handleChange}
                type="text"
                value={businessID}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="business-name">
                {intl('clientRegisterBusinessFormBusinessName')}
              </label>
              <label
                className="error-message"
                hidden={!errors!.businessName}
                htmlFor="business-name"
              >
                {errors!.businessName}
              </label>
              <input
                id="business-name"
                name="businessName"
                onChange={this.handleChange}
                type="text"
                value={businessName}
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
                className="error-message"
                hidden={!errors!.addressLine1}
                htmlFor="address-line-1"
              >
                {errors!.addressLine1}
              </label>
              <input
                className="wider"
                id="address-line-1"
                name="addressLine1"
                onChange={this.handleChange}
                type="text"
                value={addressLine1}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="address-line-2">
                {intl('clientRegisterBusinessFormAddressLine2')}
              </label>
              <input
                className="wider"
                id="address-line-2"
                name="addressLine2"
                onChange={this.handleChange}
                type="text"
                value={addressLine2}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="postcode">{intl('clientRegisterBusinessFormPostcode')}</label>
              <label className="error-message" hidden={!errors!.postcode} htmlFor="postcode">
                {errors!.postcode}
              </label>
              <input
                id="postcode"
                name="postcode"
                onChange={this.handleChange}
                type="text"
                value={postcode}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="post-office">{intl('clientRegisterBusinessFormPostOffice')}</label>
              <label className="error-message" hidden={!errors!.postOffice} htmlFor="post-office">
                {errors!.postOffice}
              </label>
              <input
                id="post-office"
                name="postOffice"
                onChange={this.handleChange}
                type="text"
                value={postOffice}
              />
            </FormDiv>
            <FormDiv>
              <SwitchCheckbox
                checked={isSameBillingAddress}
                handleClick={this.handleBillingAddressToggleClick}
                id="same-billing-address"
                label={intl('clientRegisterBusinessFormSameBillingAddress')}
                name="isSameBillingAddress"
              />
            </FormDiv>
          </FormPage>

          {/* The form page for giving the possible billing address */}
          <FormPage hidden={currentPage !== 1}>
            <h3>{intl('clientRegisterBusinessFormBillingAddress')}</h3>
            <FormDiv>
              <label htmlFor="billing-address-line-1">
                {intl('clientRegisterBusinessFormBillingAddressLine1')}
              </label>
              <label
                className="error-message"
                hidden={!errors!.billingAddressLine1}
                htmlFor="billing-address-line-1"
              >
                {errors!.billingAddressLine1}
              </label>
              <input
                className="wider"
                id="billing-address-line-1"
                name="billingAddressLine1"
                onChange={this.handleChange}
                type="text"
                value={billingAddressLine1}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="billing-address-line-2">
                {intl('clientRegisterBusinessFormBillingAddressLine2')}
              </label>
              <input
                className="wider"
                id="billing-address-line-2"
                name="billingAddressLine2"
                onChange={this.handleChange}
                type="text"
                value={billingAddressLine2}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="billing-postcode">
                {intl('clientRegisterBusinessFormBillingPostcode')}
              </label>
              <label
                className="error-message"
                hidden={!errors!.billingPostcode}
                htmlFor="billing-postcode"
              >
                {errors!.billingPostcode}
              </label>
              <input
                id="billing-postcode"
                name="billingPostcode"
                onChange={this.handleChange}
                type="text"
                value={billingPostcode}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="billing-post-office">
                {intl('clientRegisterBusinessFormBillingPostOffice')}
              </label>
              <label
                className="error-message"
                hidden={!errors!.billingPostOffice}
                htmlFor="billing-post-office"
              >
                {errors!.billingPostOffice}
              </label>
              <input
                id="billing-post-office"
                name="billingPostOffice"
                onChange={this.handleChange}
                type="text"
                value={billingPostOffice}
              />
            </FormDiv>
          </FormPage>

          {/* The form page for selecting the billing method */}
          <FormPage hidden={currentPage !== 2}>
            <FormDiv>
              <RadioInput
                description={intl('clientRegisterBusinessFormBillingMethodContent', {
                  a: (...chunk) => (
                    <LocalizedLink locale={locale} to="/pricing">
                      {chunk}
                    </LocalizedLink>
                  ),
                })}
                errorMessage={errors!.billingMethod}
                handleChange={this.handleBillingMethodClick}
                inputs={[
                  {
                    id: FORM_BILLING_METHOD_INVOICE_E_INVOICE,
                    label: intl('clientRegisterBusinessFormBillingMethodEInvoice'),
                    value: FORM_BILLING_METHOD_INVOICE_E_INVOICE,
                  },
                  {
                    id: FORM_BILLING_METHOD_INVOICE_EMAIL,
                    label: intl('clientRegisterBusinessFormBillingMethodEmail'),
                    value: FORM_BILLING_METHOD_INVOICE_EMAIL,
                  },
                  {
                    id: FORM_BILLING_METHOD_INVOICE_PAPER,
                    label: intl('clientRegisterBusinessFormBillingMethodPaper'),
                    value: FORM_BILLING_METHOD_INVOICE_PAPER,
                  },
                ]}
                name="billingMethod"
                title={intl('clientRegisterBusinessFormBillingMethod')}
                value={billingMethod}
              />
            </FormDiv>
          </FormPage>

          {/* The billing information: either e-invoice info or email for billing */}
          <FormPage hidden={currentPage !== 3}>
            <FormDiv>
              <h3>{intl('clientRegisterBusinessFormBillingInfo')}</h3>
            </FormDiv>
            <FormDiv hidden={billingMethod !== FORM_BILLING_METHOD_INVOICE_E_INVOICE}>
              <label htmlFor="e-invoice-address">
                {intl('clientRegisterBusinessFormEInvoiceAddress')}
              </label>
              <label
                className="error-message"
                hidden={!errors!.eInvoiceAddress}
                htmlFor="e-invoice-address"
              >
                {errors!.eInvoiceAddress}
              </label>
              <input
                className="medium"
                id="e-invoice-address"
                name="eInvoiceAddress"
                onChange={this.handleChange}
                type="text"
                value={eInvoiceAddress}
              />
            </FormDiv>
            <FormDiv hidden={billingMethod !== FORM_BILLING_METHOD_INVOICE_E_INVOICE}>
              <label htmlFor="e-invoice-operator">
                {intl('clientRegisterBusinessFormEInvoiceOperator')}
              </label>
              <label
                className="error-message"
                hidden={!errors!.eInvoiceOperator}
                htmlFor="e-invoice-operator"
              >
                {errors!.eInvoiceOperator}
              </label>
              <input
                className="medium"
                id="e-invoice-operator"
                name="eInvoiceOperator"
                onChange={this.handleChange}
                type="text"
                value={eInvoiceOperator}
              />
            </FormDiv>
            <FormDiv hidden={billingMethod !== FORM_BILLING_METHOD_INVOICE_EMAIL}>
              <label htmlFor="billing-email">
                {intl('clientRegisterBusinessFormBillingEmail')}
              </label>
              <label
                className="error-message"
                hidden={!errors!.billingEmail}
                htmlFor="billing-email"
              >
                {errors!.billingEmail}
              </label>
              <input
                className="medium"
                id="billing-email"
                name="billingEmail"
                onChange={this.handleChange}
                type="email"
                value={billingEmail}
              />
            </FormDiv>
          </FormPage>

          {/* The client's contact person's information */}
          <FormPage hidden={currentPage !== 4}>
            <FormDiv>
              <h3>{intl('clientRegisterBusinessFormContactPerson')}</h3>
            </FormDiv>
            <FormDiv>
              <label htmlFor="first-name">{intl('clientRegisterBusinessFormFirstName')}</label>
              <label className="error-message" hidden={!errors!.firstName} htmlFor="first-name">
                {errors!.firstName}
              </label>
              <input
                id="first-name"
                name="firstName"
                onChange={this.handleChange}
                type="text"
                value={firstName}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="surname">{intl('clientRegisterBusinessFormSurname')}</label>
              <label className="error-message" hidden={!errors!.surname} htmlFor="surname">
                {errors!.surname}
              </label>
              <input
                id="surname"
                name="surname"
                onChange={this.handleChange}
                type="text"
                value={surname}
              />
            </FormDiv>
            <FormDiv>
              <label htmlFor="tel">{intl('clientRegisterBusinessFormTel')}</label>
              <label className="error-message" hidden={!errors!.tel} htmlFor="tel">
                {errors!.tel}
              </label>
              <input id="tel" name="tel" onChange={this.handleChange} type="tel" value={tel} />
            </FormDiv>
            <FormDiv>
              <label htmlFor="email">{intl('clientRegisterBusinessFormEmail')}</label>
              <label className="error-message" hidden={!errors!.email} htmlFor="email">
                {errors!.email}
              </label>
              <input
                className="medium"
                id="email"
                name="email"
                onChange={this.handleChange}
                type="email"
                value={email}
              />
            </FormDiv>
            <FormDiv>
              <SwitchCheckbox
                checked={acceptTerms}
                errorMessage={errors!.acceptTerms}
                handleClick={this.handleAcceptTermsToggleClick}
                id="accept-terms"
                label={intl('clientRegisterBusinessFormAcceptTerms')}
                name="acceptTerms"
              />
            </FormDiv>
            <FormDiv>
              <p>
                {intl('clientRegisterBusinessFormPrivacyInfo', {
                  a: (...chunk) => (
                    <LocalizedLink locale={locale} to={clientRegisterPrivacyPolicyPageID}>
                      {chunk}
                    </LocalizedLink>
                  ),
                })}
              </p>
            </FormDiv>
          </FormPage>

          <FormDiv>
            <ButtonDiv hidden={currentPage === 0}>
              <Button onClick={this.moveToPreviousPage}>
                <ArrowLeft size={24} /> <span>{intl('clientRegisterBusinessFormPrevious')}</span>
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={currentPage === 4}>
              <Button onClick={this.moveToNextPage}>
                <span>{intl('clientRegisterBusinessFormNext')}</span> <ArrowRight size={24} />
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={currentPage !== 4}>
              <button type="submit">
                <PaperAirplane size={24} /> {intl('clientRegisterBusinessFormSend')}
              </button>
            </ButtonDiv>
          </FormDiv>
          <FormDiv hidden={postStatus !== FORM_POST_STATUS_SUCCESS}>
            <p>{intl('clientRegisterBusinessFormSuccess')}</p>
          </FormDiv>
          <FormDiv hidden={postStatus !== FORM_POST_STATUS_ERROR}>
            <p>{intl('clientRegisterBusinessFormError')}</p>
            <p>
              {errorMessage === ''
                ? intl('clientRegisterBusinessFormErrorNoErrorMessage')
                : errorMessage}
            </p>
          </FormDiv>
        </form>
      </FormContainer>
    );
  }
}

export default injectIntl(RegisterBusinessForm);
