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
  FORM_BILLING_METHOD_CREDIT_CARD,
  FORM_BILLING_METHOD_INVOICE_EMAIL,
  FORM_BILLING_METHOD_INVOICE_PAPER,
  FORM_BILLING_PERIOD_ONE_MONTH,
  FORM_BILLING_PERIOD_TWO_MONTHS,
  FORM_BILLING_PERIOD_THREE_MONTHS,
  FORM_BILLING_PERIOD_FOUR_MONTHS,
  FORM_BILLING_PERIOD_SIX_MONTHS,
  FORM_BILLING_PERIOD_ONE_YEAR,
  FORM_POST_STATUS_ERROR,
  FORM_POST_STATUS_SUCCESS,
  FORM_POST_STATUS_TIMEOUT,
  SERVER_DOMAIN_SERVICE_REGISTRATION_FORM_NAME,
} from '../../constants';

import {
  clientRegisterPrivacyPolicyPageID,
  personalServerDomainServiceTermsPageID,
} from '../../entryIDs';

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
  acceptAdditionalAgreements?: string;
  acceptPrivacyPolicy?: string;
  acceptTerms?: string;
  addressLine1?: string;
  billingAddressLine1?: string;
  billingMethod?: string;
  billingPeriod?: string;
  billingPostcode?: string;
  billingPostOffice?: string;
  domain?: string;
  email?: string;
  firstName?: string;
  postcode?: string;
  postOffice?: string;
  surname?: string;
  tel?: string;
};

type State = {
  acceptAdditionalAgreements?: boolean;
  acceptPrivacyPolicy?: boolean;
  acceptTerms?: boolean;
  addressLine1?: string;
  addressLine2?: string;
  billingAddressLine1?: string;
  billingAddressLine2?: string;
  billingMethod?: string;
  billingPeriod?: string;
  billingPostcode?: string;
  billingPostOffice?: string;
  currentPage?: number;
  domain?: string;
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

class PersonalServerDomainServiceRegistrationForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      acceptAdditionalAgreements: false,
      acceptPrivacyPolicy: false,
      acceptTerms: false,
      addressLine1: '',
      addressLine2: '',
      billingAddressLine1: '',
      billingAddressLine2: '',
      billingMethod: '',
      billingPeriod: '',
      billingPostcode: '',
      billingPostOffice: '',
      currentPage: 0,
      domain: '',
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

    this.handleAcceptAdditionalAgreementsToggleClick =
      this.handleAcceptAdditionalAgreementsToggleClick.bind(this);
    this.handleAcceptPrivacyPolicyToggleClick =
      this.handleAcceptPrivacyPolicyToggleClick.bind(this);
    this.handleAcceptTermsToggleClick = this.handleAcceptTermsToggleClick.bind(this);
    this.handleBillingAddressToggleClick = this.handleBillingAddressToggleClick.bind(this);
    this.handleBillingMethodClick = this.handleBillingMethodClick.bind(this);
    this.handleBillingPeriodClick = this.handleBillingPeriodClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.moveToPreviousPage = this.moveToPreviousPage.bind(this);
    this.moveToNextPage = this.moveToNextPage.bind(this);
    this.validatePageData = this.validatePageData.bind(this);
  }

  handleSubmit(event) {
    if (this.validatePageData()) {
      const {
        acceptAdditionalAgreements,
        acceptPrivacyPolicy,
        acceptTerms,
        addressLine1,
        addressLine2,
        billingAddressLine1,
        billingAddressLine2,
        billingMethod,
        billingPeriod,
        billingPostcode,
        billingPostOffice,
        domain,
        email,
        firstName,
        isSameBillingAddress,
        postcode,
        postOffice,
        surname,
        tel,
      } = this.state;

      const formData = {
        acceptAdditionalAgreements,
        acceptPrivacyPolicy,
        acceptTerms,
        addressLine1,
        addressLine2,
        billingAddressLine1,
        billingAddressLine2,
        billingMethod,
        billingPeriod,
        billingPostcode,
        billingPostOffice,
        domain,
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
        body: encodeFormState({
          'form-name': SERVER_DOMAIN_SERVICE_REGISTRATION_FORM_NAME,
          ...formData,
        }),
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

  handleAcceptAdditionalAgreementsToggleClick() {
    this.setState((state) => ({ acceptAdditionalAgreements: !state.acceptAdditionalAgreements }));
  }

  handleAcceptPrivacyPolicyToggleClick() {
    this.setState((state) => ({ acceptPrivacyPolicy: !state.acceptPrivacyPolicy }));
  }

  handleAcceptTermsToggleClick() {
    this.setState((state) => ({ acceptTerms: !state.acceptTerms }));
  }

  handleBillingAddressToggleClick() {
    this.setState((state) => ({ isSameBillingAddress: !state.isSameBillingAddress }));
  }

  handleBillingMethodClick(value) {
    this.setState({ billingMethod: value });
  }

  handleBillingPeriodClick(value) {
    this.setState({ billingPeriod: value });
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
    const { billingMethod, currentPage, isSameBillingAddress } = this.state;

    if (currentPage === 2 && isSameBillingAddress) {
      this.setState({ currentPage: 0 });
    } else if (
      currentPage === 4 &&
      billingMethod !== FORM_BILLING_METHOD_INVOICE_EMAIL &&
      billingMethod !== FORM_BILLING_METHOD_INVOICE_PAPER
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
        billingMethod !== FORM_BILLING_METHOD_INVOICE_EMAIL &&
        billingMethod !== FORM_BILLING_METHOD_INVOICE_PAPER
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
      acceptAdditionalAgreements,
      acceptPrivacyPolicy,
      acceptTerms,
      addressLine1,
      billingAddressLine1,
      billingMethod,
      billingPeriod,
      billingPostcode,
      billingPostOffice,
      currentPage,
      domain,
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
          errors.firstName = intl(
            'serviceRegistrationPersonalServerDomainFormErrorMissingFirstName',
          );
        }
        if (surname === '') {
          isValid = false;
          errors.surname = intl('serviceRegistrationPersonalServerDomainFormErrorMissingSurname');
        }
        if (tel === '') {
          isValid = false;
          errors.tel = intl('serviceRegistrationPersonalServerDomainFormErrorMissingTel');
        }
        if (email === '') {
          isValid = false;
          errors.email = intl('serviceRegistrationPersonalServerDomainFormErrorMissingEmail');
        }
        if (addressLine1 === '') {
          isValid = false;
          errors.addressLine1 = intl(
            'serviceRegistrationPersonalServerDomainFormErrorMissingAddressLine1',
          );
        }
        if (postcode === '') {
          isValid = false;
          errors.postcode = intl('serviceRegistrationPersonalServerDomainFormErrorMissingPostcode');
        }
        if (postOffice === '') {
          isValid = false;
          errors.postOffice = intl(
            'serviceRegistrationPersonalServerDomainFormErrorMissingPostOffice',
          );
        }
        break;
      }

      case 1: {
        if (billingAddressLine1 === '') {
          isValid = false;
          errors.billingAddressLine1 = intl(
            'serviceRegistrationPersonalServerDomainFormErrorMissingBillingAddressLine1',
          );
        }
        if (billingPostcode === '') {
          isValid = false;
          errors.billingPostcode = intl(
            'serviceRegistrationPersonalServerDomainFormErrorMissingBillingPostcode',
          );
        }
        if (billingPostOffice === '') {
          isValid = false;
          errors.billingPostOffice = intl(
            'serviceRegistrationPersonalServerDomainFormErrorMissingBillingPostOffice',
          );
        }
        break;
      }

      case 2: {
        if (billingMethod === '') {
          isValid = false;
          errors.billingMethod = intl(
            'serviceRegistrationPersonalServerDomainFormErrorMissingBillingMethod',
          );
        }
        break;
      }

      case 3: {
        if (billingPeriod === '') {
          isValid = false;
          errors.billingPeriod = intl(
            'serviceRegistrationPersonalServerDomainFormErrorMissingBillingPeriod',
          );
        }
        break;
      }

      case 4: {
        if (domain === '') {
          isValid = false;
          errors.domain = intl('serviceRegistrationPersonalServerDomainFormErrorMissingDomain');
        }
        break;
      }

      case 5: {
        if (!acceptPrivacyPolicy) {
          isValid = false;
          errors.acceptPrivacyPolicy = intl(
            'serviceRegistrationPersonalServerDomainFormErrorPrivacyPolicyNotAccepted',
          );
        }
        if (!acceptAdditionalAgreements) {
          isValid = false;
          errors.acceptAdditionalAgreements = intl(
            'serviceRegistrationPersonalServerDomainFormErrorAdditionalAgreementsNotAccepted',
          );
        }
        if (!acceptTerms) {
          isValid = false;
          errors.acceptTerms = intl(
            'serviceRegistrationPersonalServerDomainFormErrorTermsNotAccepted',
          );
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
      acceptAdditionalAgreements,
      acceptPrivacyPolicy,
      acceptTerms,
      addressLine1,
      addressLine2,
      billingAddressLine1,
      billingAddressLine2,
      billingMethod,
      billingPeriod,
      billingPostcode,
      billingPostOffice,
      currentPage,
      domain,
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
          name={SERVER_DOMAIN_SERVICE_REGISTRATION_FORM_NAME}
          netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* This input field is required by Netlify */}
          <input
            name="form-name"
            type="hidden"
            value={SERVER_DOMAIN_SERVICE_REGISTRATION_FORM_NAME}
          />
          <FormDiv hidden>
            <label htmlFor="bot-field">
              {intl('serviceRegistrationPersonalServerDomainFormHoneypot')}
            </label>
            <input name="bot-field" />
          </FormDiv>

          {/* The client's basic information */}
          <FormPage hidden={currentPage !== 0}>
            <FormDiv>
              <h3>{intl('serviceRegistrationPersonalServerDomainFormBasicInfo')}</h3>
            </FormDiv>
            <FormDiv>
              <label htmlFor="first-name">
                {intl('serviceRegistrationPersonalServerDomainFormFirstName')}
              </label>
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
              <label htmlFor="surname">
                {intl('serviceRegistrationPersonalServerDomainFormSurname')}
              </label>
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
              <label htmlFor="tel">{intl('serviceRegistrationPersonalServerDomainFormTel')}</label>
              <label className="error-message" hidden={!errors!.tel} htmlFor="tel">
                {errors!.tel}
              </label>
              <input id="tel" name="tel" onChange={this.handleChange} type="tel" value={tel} />
            </FormDiv>
            <FormDiv>
              <label htmlFor="email">
                {intl('serviceRegistrationPersonalServerDomainFormEmail')}
              </label>
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
              <p>{intl('serviceRegistrationPersonalServerDomainFormEmailForBilling')}</p>
            </FormDiv>
            <FormDiv>
              <label htmlFor="address-line-1">
                {intl('serviceRegistrationPersonalServerDomainFormAddressLine1')}
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
                {intl('serviceRegistrationPersonalServerDomainFormAddressLine2')}
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
              <label htmlFor="postcode">
                {intl('serviceRegistrationPersonalServerDomainFormPostcode')}
              </label>
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
              <label htmlFor="post-office">
                {intl('serviceRegistrationPersonalServerDomainFormPostOffice')}
              </label>
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
                label={intl('serviceRegistrationPersonalServerDomainFormSameBillingAddress')}
                name="isSameBillingAddress"
              />
            </FormDiv>
          </FormPage>

          {/* The form page for giving the possible billing address */}
          <FormPage hidden={currentPage !== 1}>
            <h3>{intl('serviceRegistrationPersonalServerDomainFormBillingAddress')}</h3>
            <FormDiv>
              <label htmlFor="billing-address-line-1">
                {intl('serviceRegistrationPersonalServerDomainFormBillingAddressLine1')}
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
                {intl('serviceRegistrationPersonalServerDomainFormBillingAddressLine2')}
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
                {intl('serviceRegistrationPersonalServerDomainFormBillingPostcode')}
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
                {intl('serviceRegistrationPersonalServerDomainFormBillingPostOffice')}
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
                description={intl(
                  'serviceRegistrationPersonalServerDomainFormBillingMethodContent',
                  {
                    a: (...chunk) => (
                      <LocalizedLink locale={locale} to="/pricing">
                        {chunk}
                      </LocalizedLink>
                    ),
                  },
                )}
                errorMessage={errors!.billingMethod}
                handleChange={this.handleBillingMethodClick}
                inputs={[
                  {
                    hidden: true,
                    id: FORM_BILLING_METHOD_CREDIT_CARD,
                    label: intl(
                      'serviceRegistrationPersonalServerDomainFormBillingMethodCreditCard',
                    ),
                    value: FORM_BILLING_METHOD_CREDIT_CARD,
                  },
                  {
                    id: FORM_BILLING_METHOD_INVOICE_EMAIL,
                    label: intl('serviceRegistrationPersonalServerDomainFormBillingMethodEmail'),
                    value: FORM_BILLING_METHOD_INVOICE_EMAIL,
                  },
                  {
                    id: FORM_BILLING_METHOD_INVOICE_PAPER,
                    label: intl('serviceRegistrationPersonalServerDomainFormBillingMethodPaper'),
                    value: FORM_BILLING_METHOD_INVOICE_PAPER,
                  },
                ]}
                name="billingMethod"
                title={intl('serviceRegistrationPersonalServerDomainFormBillingMethod')}
                value={billingMethod}
              />
            </FormDiv>
          </FormPage>

          {/* The form page for selecting the billing period */}
          <FormPage hidden={currentPage !== 3}>
            <FormDiv>
              <RadioInput
                description={intl(
                  'serviceRegistrationPersonalServerDomainFormBillingPeriodContent',
                )}
                errorMessage={errors!.billingPeriod}
                handleChange={this.handleBillingPeriodClick}
                inputs={[
                  {
                    id: FORM_BILLING_PERIOD_ONE_MONTH,
                    label: intl('serviceRegistrationPersonalServerDomainFormBillingPeriodOneMonth'),
                    value: FORM_BILLING_PERIOD_ONE_MONTH,
                  },
                  {
                    hidden: billingMethod === FORM_BILLING_METHOD_CREDIT_CARD,
                    id: FORM_BILLING_PERIOD_TWO_MONTHS,
                    label: intl(
                      'serviceRegistrationPersonalServerDomainFormBillingPeriodTwoMonths',
                    ),
                    value: FORM_BILLING_PERIOD_TWO_MONTHS,
                  },
                  {
                    id: FORM_BILLING_PERIOD_THREE_MONTHS,
                    label: intl(
                      'serviceRegistrationPersonalServerDomainFormBillingPeriodThreeMonths',
                    ),
                    value: FORM_BILLING_PERIOD_THREE_MONTHS,
                  },
                  {
                    hidden: billingMethod === FORM_BILLING_METHOD_CREDIT_CARD,
                    id: FORM_BILLING_PERIOD_FOUR_MONTHS,
                    label: intl(
                      'serviceRegistrationPersonalServerDomainFormBillingPeriodFourMonths',
                    ),
                    value: FORM_BILLING_PERIOD_FOUR_MONTHS,
                  },
                  {
                    id: FORM_BILLING_PERIOD_SIX_MONTHS,
                    label: intl(
                      'serviceRegistrationPersonalServerDomainFormBillingPeriodSixMonths',
                    ),
                    value: FORM_BILLING_PERIOD_SIX_MONTHS,
                  },
                  {
                    id: FORM_BILLING_PERIOD_ONE_YEAR,
                    label: intl('serviceRegistrationPersonalServerDomainFormBillingPeriodOneYear'),
                    value: FORM_BILLING_PERIOD_ONE_YEAR,
                  },
                ]}
                name="billingPeriod"
                title={intl('serviceRegistrationPersonalServerDomainFormBillingPeriod')}
                value={billingPeriod}
              />
            </FormDiv>
          </FormPage>

          {/* The form page for giving the domain information */}
          <FormPage hidden={currentPage !== 4}>
            <h3>{intl('serviceRegistrationPersonalServerDomainFormDomainInformation')}</h3>
            <FormDiv>
              <label htmlFor="domain">
                {intl('serviceRegistrationPersonalServerDomainFormDomain')}
              </label>
              <label className="error-message" hidden={!errors!.domain} htmlFor="domain">
                {errors!.domain}
              </label>
              <input
                id="domain"
                name="domain"
                onChange={this.handleChange}
                type="text"
                value={domain}
              />
            </FormDiv>
          </FormPage>

          {/* The form page for accepting the terms */}
          <FormPage hidden={currentPage !== 5}>
            <h3>{intl('serviceRegistrationPersonalServerDomainFormAcceptTermsTitle')}</h3>
            <FormDiv>
              <SwitchCheckbox
                checked={acceptPrivacyPolicy}
                errorMessage={errors!.acceptPrivacyPolicy}
                handleClick={this.handleAcceptPrivacyPolicyToggleClick}
                id="accept-privacy-policy"
                label={intl('serviceRegistrationPersonalServerDomainFormAcceptPrivacyPolicy')}
                name="acceptPrivacyPolicy"
              />
              <p>
                {intl('serviceRegistrationPersonalServerDomainFormAcceptPrivacyPolicyContent', {
                  a: (...chunk) => (
                    <LocalizedLink locale={locale} to={clientRegisterPrivacyPolicyPageID}>
                      {chunk}
                    </LocalizedLink>
                  ),
                })}
              </p>
            </FormDiv>
            <FormDiv>
              <SwitchCheckbox
                checked={acceptAdditionalAgreements}
                errorMessage={errors!.acceptAdditionalAgreements}
                handleClick={this.handleBillingAddressToggleClick}
                id="accept-additional-agreements"
                label={intl(
                  'serviceRegistrationPersonalServerDomainFormAcceptAdditionalAgreements',
                )}
                name="acceptAdditionalAgreements"
              />
            </FormDiv>
            <FormDiv>
              <SwitchCheckbox
                checked={acceptTerms}
                errorMessage={errors!.acceptTerms}
                handleClick={this.handleAcceptTermsToggleClick}
                id="accept-terms"
                label={intl('serviceRegistrationPersonalServerDomainFormAcceptTerms')}
                name="acceptTerms"
              />
              <p>
                {intl('serviceRegistrationPersonalServerDomainFormAcceptTermsContent', {
                  a: (...chunk) => (
                    <LocalizedLink locale={locale} to={personalServerDomainServiceTermsPageID}>
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
                <ArrowLeft size={24} />{' '}
                <span>{intl('serviceRegistrationPersonalServerDomainFormPrevious')}</span>
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={currentPage === 5}>
              <Button onClick={this.moveToNextPage}>
                <span>{intl('serviceRegistrationPersonalServerDomainFormNext')}</span>{' '}
                <ArrowRight size={24} />
              </Button>
            </ButtonDiv>
            <ButtonDiv hidden={currentPage !== 5}>
              <button type="submit">
                <PaperAirplane size={24} />{' '}
                {intl('serviceRegistrationPersonalServerDomainFormSend')}
              </button>
            </ButtonDiv>
          </FormDiv>
          <FormDiv hidden={postStatus !== FORM_POST_STATUS_SUCCESS}>
            <p>{intl('serviceRegistrationPersonalServerDomainFormSuccess')}</p>
          </FormDiv>
          <FormDiv hidden={postStatus !== FORM_POST_STATUS_ERROR}>
            <p>{intl('serviceRegistrationPersonalServerDomainFormError')}</p>
            <p>
              {errorMessage === ''
                ? intl('serviceRegistrationPersonalServerDomainFormErrorNoErrorMessage')
                : errorMessage}
            </p>
          </FormDiv>
        </form>
      </FormContainer>
    );
  }
}

export default injectIntl(PersonalServerDomainServiceRegistrationForm);
