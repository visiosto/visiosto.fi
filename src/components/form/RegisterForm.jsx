// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon, PaperAirplaneIcon } from '@primer/octicons-react';
import { injectIntl } from 'react-intl';

import Button from '../Button';
import LocalizedLink from '../link/LocalizedLink';

import createIntl from '../../util/createIntl';

const FormContainer = styled.div`
  text-align: center;
`;

const FormPage = styled.div`
  /* display: none; */
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

const SwitchInputSpan = styled.span`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: var(--color-primary);
    }

    &:checked + span::before {
      transform: translateX(26px);
    }

    &:focus + span {
      box-shadow: 0 0 1px #2196f3;
    }
  }
`;

const SwitchSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: var(--color-text-weak);
  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: var(--color-background);
    transition: 0.4s;
  }
`;

const RadioDiv = styled.div`
  margin: 0.5rem 0;

  label {
    display: inline-block;
  }
`;

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

class RegisterForm extends Component {
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
      currentPage: 0,
    };

    this.handleBillingAddressToggleClick = this.handleBillingAddressToggleClick.bind(this);
    this.moveToPreviousPage = this.moveToPreviousPage.bind(this);
    this.moveToNextPage = this.moveToNextPage.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleBillingAddressToggleClick = () => {
    this.setState({ isSameBillingAddress: !this.state.isSameBillingAddress });
  };

  moveToPreviousPage = () => {
    if (this.props.clientType === 'business') {
      if (this.state.currentPage === 2 && this.state.isSameBillingAddress) {
        this.setState({ currentPage: 0 });
      } else if (
        this.state.currentPage === 4 &&
        this.state.billingMethod !== 'e-invoice' &&
        this.state.billingMethod !== 'email'
      ) {
        this.setState({ currentPage: 2 });
      } else {
        this.setState({ currentPage: this.state.currentPage - 1 });
      }
    } else if (this.props.clientType === 'person') {
      if (this.state.currentPage === 2 && this.state.isSameBillingAddress) {
        this.setState({ currentPage: 0 });
      } else {
        this.setState({ currentPage: this.state.currentPage - 1 });
      }
    }
  };

  moveToNextPage = () => {
    if (this.props.clientType === 'business') {
      if (this.state.currentPage === 0 && this.state.isSameBillingAddress) {
        this.setState({ currentPage: 2 });
      } else if (
        this.state.currentPage === 2 &&
        this.state.billingMethod !== 'e-invoice' &&
        this.state.billingMethod !== 'email'
      ) {
        this.setState({ currentPage: 4 });
      } else {
        this.setState({ currentPage: this.state.currentPage + 1 });
      }
    } else if (this.props.clientType === 'person') {
      if (this.state.currentPage === 0 && this.state.isSameBillingAddress) {
        this.setState({ currentPage: 2 });
      } else {
        this.setState({ currentPage: this.state.currentPage + 1 });
      }
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const i = createIntl(this.props.intl);

    if (this.props.clientType === 'business') {
      return (
        <FormContainer>
          <form
            name="Business data for client register"
            action="/"
            method="POST"
            netlify-honeypot="bot-field"
            netlify
            data-netlify="true"
          >
            {/* This input field is required by Netlify */}
            <input type="hidden" name="form-name" value="Business data for client register" />
            <FormDiv hidden>
              <label>{i('clientRegisterFormHoneypot')}</label>
              <input name="bot-field" />
            </FormDiv>

            {/* The client's basic information */}
            <FormPage hidden={this.state.currentPage !== 0}>
              <FormDiv>
                <label for="business-id">{i('clientRegisterFormBusinessID')}</label>
                <input
                  type="text"
                  name="businessID"
                  id="business-id"
                  value={this.state.businessID}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="business-name">{i('clientRegisterFormBusinessName')}</label>
                <input
                  type="text"
                  name="businessName"
                  id="business-name"
                  value={this.state.businessName}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="address-line-1">{i('clientRegisterFormAddressLine1')}</label>
                <input
                  className="wider"
                  type="text"
                  name="addressLine1"
                  id="address-line-1"
                  value={this.state.addressLine1}
                  onChange={this.handleInputChange}
                  required
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
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="postcode">{i('clientRegisterFormPostcode')}</label>
                <input
                  type="text"
                  name="postcode"
                  id="postcode"
                  value={this.state.postcode}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="post-office">{i('clientRegisterFormPostOffice')}</label>
                <input
                  type="text"
                  name="postOffice"
                  id="post-office"
                  value={this.state.postOffice}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="same-billing-address">
                  {i('clientRegisterFormSameBillingAddress')}
                </label>
                <SwitchInputSpan onClick={this.handleBillingAddressToggleClick}>
                  <input
                    key={Math.random()}
                    type="checkbox"
                    name="isSameBillingAddress"
                    id="same-billing-address"
                    defaultChecked={this.state.isSameBillingAddress}
                  />
                  <SwitchSpan />
                </SwitchInputSpan>
              </FormDiv>
            </FormPage>

            {/* The form page for giving the possible billing address */}
            <FormPage hidden={this.state.currentPage !== 1}>
              <h3>{i('clientRegisterFormBillingAddress')}</h3>
              <FormDiv>
                <label for="billing-address-line-1">
                  {i('clientRegisterFormBillingAddressLine1')}
                </label>
                <input
                  className="wider"
                  type="text"
                  name="billingAddressLine1"
                  id="billing-address-line-1"
                  value={this.state.billingAddressLine1}
                  onChange={this.handleInputChange}
                  required={!this.state.isSameBillingAddress}
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
                  onChange={this.handleInputChange}
                  required={!this.state.isSameBillingAddress}
                />
              </FormDiv>
              <FormDiv>
                <label for="billing-postcode">{i('clientRegisterFormBillingPostcode')}</label>
                <input
                  type="text"
                  name="billingPostcode"
                  id="billing-postcode"
                  value={this.state.billingPostcode}
                  onChange={this.handleInputChange}
                  required={!this.state.isSameBillingAddress}
                />
              </FormDiv>
              <FormDiv>
                <label for="billing-post-office">{i('clientRegisterFormBillingPostOffice')}</label>
                <input
                  type="text"
                  name="billingPostOffice"
                  id="billing-post-office"
                  value={this.state.billingPostOffice}
                  onChange={this.handleInputChange}
                  required={!this.state.isSameBillingAddress}
                />
              </FormDiv>
            </FormPage>

            {/* The form page for selecting the billing method */}
            <FormPage hidden={this.state.currentPage !== 2}>
              <FormDiv>
                <h3>{i('clientRegisterFormBillingMethod')}</h3>
                <p>
                  {i('clientRegisterFormBillingMethodContent', {
                    a: (...chunk) => (
                      <LocalizedLink to="/pricing" locale={this.props.locale}>
                        {chunk}
                      </LocalizedLink>
                    ),
                  })}
                </p>
                <RadioDiv>
                  <input
                    type="radio"
                    name="billingMethod"
                    id="radio-e-invoice"
                    value="e-invoice"
                    checked={this.state.billingMethod === 'e-invoice'}
                    onChange={this.handleInputChange}
                  />
                  <label for="radio-e-invoice">
                    {i('clientRegisterFormBillingMethodEInvoice')}
                  </label>
                </RadioDiv>
                <RadioDiv>
                  <input
                    type="radio"
                    name="billingMethod"
                    id="radio-email"
                    value="email"
                    checked={this.state.billingMethod === 'email'}
                    onChange={this.handleInputChange}
                  />
                  <label for="radio-email">{i('clientRegisterFormBillingMethodEmail')}</label>
                </RadioDiv>
                <RadioDiv>
                  <input
                    type="radio"
                    name="billingMethod"
                    id="radio-paper"
                    value="paper"
                    checked={this.state.billingMethod === 'paper'}
                    onChange={this.handleInputChange}
                  />
                  <label for="radio-paper">{i('clientRegisterFormBillingMethodPaper')}</label>
                </RadioDiv>
              </FormDiv>
            </FormPage>

            {/* The billing information: either e-invoice info or email for billing */}
            <FormPage hidden={this.state.currentPage !== 3}>
              <FormDiv hidden={this.state.billingMethod !== 'e-invoice'}>
                <label for="e-invoice-address">{i('clientRegisterFormEInvoiceAddress')}</label>
                <input
                  className="medium"
                  type="text"
                  name="eInvoiceAddress"
                  id="e-invoice-address"
                  value={this.state.eInvoiceAddress}
                  onChange={this.handleInputChange}
                  required={this.state.billingMethod === 'e-invoice'}
                />
              </FormDiv>
              <FormDiv hidden={this.state.billingMethod !== 'e-invoice'}>
                <label for="e-invoice-operator">{i('clientRegisterFormEInvoiceOperator')}</label>
                <input
                  className="medium"
                  type="text"
                  name="eInvoiceOperator"
                  id="e-invoice-operator"
                  value={this.state.eInvoiceOperator}
                  onChange={this.handleInputChange}
                  required={this.state.billingMethod === 'e-invoice'}
                />
              </FormDiv>
              <FormDiv hidden={this.state.billingMethod !== 'email'}>
                <label for="billing-email">{i('clientRegisterFormBillingEmail')}</label>
                <input
                  className="medium"
                  type="email"
                  name="billingEmail"
                  id="billing-email"
                  value={this.state.billingEmail}
                  onChange={this.handleInputChange}
                  required={this.state.billingMethod === 'email'}
                />
              </FormDiv>
            </FormPage>

            {/* The client's contact person's information */}
            <FormPage hidden={this.state.currentPage !== 4}>
              <FormDiv>
                <label for="first-name">{i('clientRegisterFormFirstName')}</label>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="surname">{i('clientRegisterFormSurname')}</label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  value={this.state.surname}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="tel">{i('clientRegisterFormTel')}</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  value={this.state.tel}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="email">{i('clientRegisterFormEmail')}</label>
                <input
                  className="medium"
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
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
          </form>
        </FormContainer>
      );
    } else if (this.props.clientType === 'person') {
      return (
        <FormContainer>
          <form
            name="Personal data for client register"
            action="/"
            method="POST"
            netlify-honeypot="bot-field"
            netlify
            data-netlify="true"
          >
            {/* This input field is required by Netlify */}
            <input type="hidden" name="form-name" value="Personal data for client register" />
            <FormDiv hidden>
              <label>{i('clientRegisterFormHoneypot')}</label>
              <input name="bot-field" />
            </FormDiv>

            {/* The client's basic information */}
            <FormPage hidden={this.state.currentPage !== 0}>
              <FormDiv>
                <label for="first-name">{i('clientRegisterFormFirstName')}</label>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="surname">{i('clientRegisterFormSurname')}</label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  value={this.state.surname}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="tel">{i('clientRegisterFormTel')}</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  value={this.state.tel}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="email">{i('clientRegisterFormEmail')}</label>
                <input
                  className="medium"
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
                <p>{i('indexContactFormEmailForBilling')}</p>
              </FormDiv>
              <FormDiv>
                <label for="address-line-1">{i('clientRegisterFormAddressLine1')}</label>
                <input
                  className="wider"
                  type="text"
                  name="addressLine1"
                  id="address-line-1"
                  value={this.state.addressLine1}
                  onChange={this.handleInputChange}
                  required
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
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="postcode">{i('clientRegisterFormPostcode')}</label>
                <input
                  type="text"
                  name="postcode"
                  id="postcode"
                  value={this.state.postcode}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="post-office">{i('clientRegisterFormPostOffice')}</label>
                <input
                  type="text"
                  name="postOffice"
                  id="post-office"
                  value={this.state.postOffice}
                  onChange={this.handleInputChange}
                  required
                />
              </FormDiv>
              <FormDiv>
                <label for="same-billing-address">
                  {i('clientRegisterFormSameBillingAddress')}
                </label>
                <SwitchInputSpan onClick={this.handleBillingAddressToggleClick}>
                  <input
                    key={Math.random()}
                    type="checkbox"
                    name="isSameBillingAddress"
                    id="same-billing-address"
                    defaultChecked={this.state.isSameBillingAddress}
                  />
                  <SwitchSpan />
                </SwitchInputSpan>
              </FormDiv>
            </FormPage>

            {/* The form page for giving the possible billing address */}
            <FormPage hidden={this.state.currentPage !== 1}>
              <h3>{i('clientRegisterFormBillingAddress')}</h3>
              <FormDiv>
                <label for="billing-address-line-1">
                  {i('clientRegisterFormBillingAddressLine1')}
                </label>
                <input
                  className="wider"
                  type="text"
                  name="billingAddressLine1"
                  id="billing-address-line-1"
                  value={this.state.billingAddressLine1}
                  onChange={this.handleInputChange}
                  required={!this.state.isSameBillingAddress}
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
                  onChange={this.handleInputChange}
                  required={!this.state.isSameBillingAddress}
                />
              </FormDiv>
              <FormDiv>
                <label for="billing-postcode">{i('clientRegisterFormBillingPostcode')}</label>
                <input
                  type="text"
                  name="billingPostcode"
                  id="billing-postcode"
                  value={this.state.billingPostcode}
                  onChange={this.handleInputChange}
                  required={!this.state.isSameBillingAddress}
                />
              </FormDiv>
              <FormDiv>
                <label for="billing-post-office">{i('clientRegisterFormBillingPostOffice')}</label>
                <input
                  type="text"
                  name="billingPostOffice"
                  id="billing-post-office"
                  value={this.state.billingPostOffice}
                  onChange={this.handleInputChange}
                  required={!this.state.isSameBillingAddress}
                />
              </FormDiv>
            </FormPage>

            {/* The form page for selecting the billing method */}
            <FormPage hidden={this.state.currentPage !== 2}>
              <FormDiv>
                <h3>{i('clientRegisterFormBillingMethod')}</h3>
                <p>
                  {i('clientRegisterFormBillingMethodContent', {
                    a: (...chunk) => (
                      <LocalizedLink to="/pricing" locale={this.props.locale}>
                        {chunk}
                      </LocalizedLink>
                    ),
                  })}
                </p>
                <RadioDiv>
                  <input
                    type="radio"
                    name="billingMethod"
                    id="radio-email"
                    value="email"
                    checked={this.state.billingMethod === 'email'}
                    onChange={this.handleInputChange}
                  />
                  <label for="radio-email">{i('clientRegisterFormBillingMethodEmail')}</label>
                </RadioDiv>
                <RadioDiv>
                  <input
                    type="radio"
                    name="billingMethod"
                    id="radio-paper"
                    value="paper"
                    checked={this.state.billingMethod === 'paper'}
                    onChange={this.handleInputChange}
                  />
                  <label for="radio-paper">{i('clientRegisterFormBillingMethodPaper')}</label>
                </RadioDiv>
              </FormDiv>
            </FormPage>

            <FormDiv>
              <ButtonDiv hidden={this.state.currentPage === 0}>
                <Button onClick={this.moveToPreviousPage}>
                  <ArrowLeft size={24} /> <span>{i('clientRegisterFormPrevious')}</span>
                </Button>
              </ButtonDiv>
              <ButtonDiv hidden={this.state.currentPage === 2}>
                <Button onClick={this.moveToNextPage}>
                  <span>{i('clientRegisterFormNext')}</span> <ArrowRight size={24} />
                </Button>
              </ButtonDiv>
              <ButtonDiv hidden={this.state.currentPage !== 2}>
                <button type="submit">
                  <PaperAirplane size={24} /> {i('clientRegisterFormSend')}
                </button>
              </ButtonDiv>
            </FormDiv>
          </form>
        </FormContainer>
      );
    }

    return null;
  }
}

export default injectIntl(RegisterForm);
