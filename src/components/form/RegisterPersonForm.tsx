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
  FORM_BILLING_METHOD_INVOICE_PAPER,
  FORM_POST_STATUS_ERROR,
  FORM_POST_STATUS_SUCCESS,
  FORM_POST_STATUS_TIMEOUT,
  REGISTER_PERSON_FORM_NAME,
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
  billingMethod?: string;
  billingPostcode?: string;
  billingPostOffice?: string;
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
  billingMethod?: string;
  billingPostcode?: string;
  billingPostOffice?: string;
  currentPage?: number;
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

class RegisterPersonForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      acceptTerms: false,
      addressLine1: '',
      addressLine2: '',
      billingAddressLine1: '',
      billingAddressLine2: '',
      billingMethod: '',
      billingPostcode: '',
      billingPostOffice: '',
      currentPage: 0,
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
        billingMethod,
        billingPostcode,
        billingPostOffice,
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
        billingMethod,
        billingPostcode,
        billingPostOffice,
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

    this.setState({
      [name]: value,
    });
  }

  moveToPreviousPage() {
    const { currentPage, isSameBillingAddress } = this.state;

    if (currentPage === 2 && isSameBillingAddress) {
      this.setState({ currentPage: 0 });
    } else {
      this.setState((state) => ({ currentPage: state.currentPage! - 1 }));
    }
  }

  moveToNextPage() {
    const { currentPage, isSameBillingAddress } = this.state;

    if (this.validatePageData()) {
      if (currentPage === 0 && isSameBillingAddress) {
        this.setState({ currentPage: 2 });
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
      billingMethod,
      billingPostcode,
      billingPostOffice,
      currentPage,
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
        if (firstName === '') {
          isValid = false;
          errors.firstName = intl('clientRegisterPersonFormErrorMissingFirstName');
        }
        if (surname === '') {
          isValid = false;
          errors.surname = intl('clientRegisterPersonFormErrorMissingSurname');
        }
        if (tel === '') {
          isValid = false;
          errors.tel = intl('clientRegisterPersonFormErrorMissingTel');
        }
        if (email === '') {
          isValid = false;
          errors.email = intl('clientRegisterPersonFormErrorMissingEmail');
        }
        if (addressLine1 === '') {
          isValid = false;
          errors.addressLine1 = intl('clientRegisterPersonFormErrorMissingAddressLine1');
        }
        if (postcode === '') {
          isValid = false;
          errors.postcode = intl('clientRegisterPersonFormErrorMissingPostcode');
        }
        if (postOffice === '') {
          isValid = false;
          errors.postOffice = intl('clientRegisterPersonFormErrorMissingPostOffice');
        }
        break;
      }

      case 1: {
        if (billingAddressLine1 === '') {
          isValid = false;
          errors.billingAddressLine1 = intl(
            'clientRegisterPersonFormErrorMissingBillingAddressLine1',
          );
        }
        if (billingPostcode === '') {
          isValid = false;
          errors.billingPostcode = intl('clientRegisterPersonFormErrorMissingBillingPostcode');
        }
        if (billingPostOffice === '') {
          isValid = false;
          errors.billingPostOffice = intl('clientRegisterPersonFormErrorMissingBillingPostOffice');
        }
        break;
      }

      case 2: {
        if (billingMethod === '') {
          isValid = false;
          errors.billingMethod = intl('clientRegisterPersonFormErrorMissingBillingMethod');
        }
        if (!acceptTerms) {
          isValid = false;
          errors.acceptTerms = intl('clientRegisterPersonFormErrorTermsNotAccepted');
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
      billingMethod,
      billingPostcode,
      billingPostOffice,
      currentPage,
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
          name={REGISTER_PERSON_FORM_NAME}
          netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* This input field is required by Netlify */}
          <input name="form-name" type="hidden" value={REGISTER_PERSON_FORM_NAME} />
          <FormDiv hidden>
            <label htmlFor="bot-field">{intl('clientRegisterPersonFormHoneypot')}</label>
            <input name="bot-field" />
          </FormDiv>

          {/* The client's basic information */}
          <FormPage hidden={currentPage !== 0}>
            <FormDiv>
              <h3>{intl('clientRegisterPersonFormBasicInfo')}</h3>
            </FormDiv>
            <FormDiv>
              <label htmlFor="first-name">{intl('clientRegisterPersonFormFirstName')}</label>
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
              <label htmlFor="surname">{intl('clientRegisterPersonFormSurname')}</label>
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
              <label htmlFor="tel">{intl('clientRegisterPersonFormTel')}</label>
              <label className="error-message" hidden={!errors!.tel} htmlFor="tel">
                {errors!.tel}
              </label>
              <input id="tel" name="tel" onChange={this.handleChange} type="tel" value={tel} />
            </FormDiv>
            <FormDiv>
              <label htmlFor="email">{intl('clientRegisterPersonFormEmail')}</label>
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
              <p>{intl('clientRegisterPersonFormEmailForBilling')}</p>
            </FormDiv>
            <FormDiv>
              <label htmlFor="address-line-1">{intl('clientRegisterPersonFormAddressLine1')}</label>
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
              <label htmlFor="address-line-2">{intl('clientRegisterPersonFormAddressLine2')}</label>
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
              <label htmlFor="postcode">{intl('clientRegisterPersonFormPostcode')}</label>
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
              <label htmlFor="post-office">{intl('clientRegisterPersonFormPostOffice')}</label>
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
                label={intl('clientRegisterPersonFormSameBillingAddress')}
                name="isSameBillingAddress"
              />
            </FormDiv>
          </FormPage>

          {/* The form page for giving the possible billing address */}
          <FormPage hidden={currentPage !== 1}>
            <h3>{intl('clientRegisterPersonFormBillingAddress')}</h3>
            <FormDiv>
              <label htmlFor="billing-address-line-1">
                {intl('clientRegisterPersonFormBillingAddressLine1')}
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
                {intl('clientRegisterPersonFormBillingAddressLine2')}
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
                {intl('clientRegisterPersonFormBillingPostcode')}
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
                {intl('clientRegisterPersonFormBillingPostOffice')}
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
                description={intl('clientRegisterPersonFormBillingMethodContent', {
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
                    id: FORM_BILLING_METHOD_INVOICE_EMAIL,
                    label: intl('clientRegisterPersonFormBillingMethodEmail'),
                    value: FORM_BILLING_METHOD_INVOICE_EMAIL,
                  },
                  {
                    id: FORM_BILLING_METHOD_INVOICE_PAPER,
                    label: intl('clientRegisterPersonFormBillingMethodPaper'),
                    value: FORM_BILLING_METHOD_INVOICE_PAPER,
                  },
                ]}
                name="billingMethod"
                title={intl('clientRegisterPersonFormBillingMethod')}
                value={billingMethod}
              />
            </FormDiv>
            <FormDiv>
              <SwitchCheckbox
                checked={acceptTerms}
                errorMessage={errors!.acceptTerms}
                handleClick={this.handleAcceptTermsToggleClick}
                id="accept-terms"
                label={intl('clientRegisterPersonFormAcceptTerms')}
                name="acceptTerms"
              />
            </FormDiv>
            <FormDiv>
              <p>
                {intl('clientRegisterPersonFormPrivacyInfo', {
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
                <ArrowLeft size={24} /> <span>{intl('clientRegisterPersonFormPrevious')}</span>
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={currentPage === 2}>
              <Button onClick={this.moveToNextPage}>
                <span>{intl('clientRegisterPersonFormNext')}</span> <ArrowRight size={24} />
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={currentPage !== 2}>
              <button type="submit">
                <PaperAirplane size={24} /> {intl('clientRegisterPersonFormSend')}
              </button>
            </ButtonDiv>
          </FormDiv>
          <FormDiv hidden={postStatus !== FORM_POST_STATUS_SUCCESS}>
            <p>{intl('clientRegisterPersonFormSuccess')}</p>
          </FormDiv>
          <FormDiv hidden={postStatus !== FORM_POST_STATUS_ERROR}>
            <p>{intl('clientRegisterPersonFormError')}</p>
            <p>
              {errorMessage === ''
                ? intl('clientRegisterPersonFormErrorNoErrorMessage')
                : errorMessage}
            </p>
          </FormDiv>
        </form>
      </FormContainer>
    );
  }
}

export default injectIntl(RegisterPersonForm);
