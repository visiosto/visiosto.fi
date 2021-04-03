// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon, PaperAirplaneIcon } from '@primer/octicons-react';

import Button from './Button';
import LocalizedLink from './link/LocalizedLink';

import createIntl from '../util/createIntl';
import { useIntl } from 'react-intl';

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

const RegisterForm = (props) => {
  const i = createIntl(useIntl());

  const [currentPage, setCurrentPage] = useState(0);
  const [differentBillingAddress, setDifferentBillingAddress] = useState(false);
  const [billingMethod, setBillingMethod] = useState(undefined);

  const handleToggleClick = () => {
    setDifferentBillingAddress(!differentBillingAddress);
  };

  const moveToPreviousPage = () => {
    if (currentPage === 2 && !differentBillingAddress) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const moveToNextPage = () => {
    if (currentPage === 0 && !differentBillingAddress) {
      setCurrentPage(2);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

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
        <FormPage hidden={currentPage !== 0}>
          <FormDiv>
            <label for="first-name">{i('clientRegisterFormFirstName')}</label>
            <input type="text" name="first-name" id="first-name" required />
          </FormDiv>
          <FormDiv>
            <label for="surname">{i('clientRegisterFormSurname')}</label>
            <input type="text" name="surname" id="surname" required />
          </FormDiv>
          <FormDiv>
            <label for="email">{i('clientRegisterFormEmail')}</label>
            <input className="medium" type="email" name="email" id="email" required />
            <p>{i('indexContactFormEmailForBilling')}</p>
          </FormDiv>
          <FormDiv>
            <label for="address-line-1">{i('clientRegisterFormAddressLine1')}</label>
            <input
              className="wider"
              type="text"
              name="address-line-1"
              id="address-line-1"
              required
            />
          </FormDiv>
          <FormDiv>
            <label for="address-line-2">{i('clientRegisterFormAddressLine2')}</label>
            <input
              className="wider"
              type="text"
              name="address-line-2"
              id="address-line-2"
              required
            />
          </FormDiv>
          <FormDiv>
            <label for="postcode">{i('clientRegisterFormPostcode')}</label>
            <input type="text" name="postcode" id="postcode" required />
          </FormDiv>
          <FormDiv>
            <label for="post-office">{i('clientRegisterFormPostOffice')}</label>
            <input type="text" name="post-office" id="post-office" required />
          </FormDiv>
          <FormDiv>
            <label for="same-billing-address">{i('clientRegisterFormSameBillingAddress')}</label>
            <SwitchInputSpan onClick={handleToggleClick}>
              <input
                key={Math.random()}
                type="checkbox"
                name="same-billing-address"
                id="same-billing-address"
                defaultChecked={!differentBillingAddress}
              />
              <SwitchSpan />
            </SwitchInputSpan>
          </FormDiv>
        </FormPage>

        {/* TODO Make the inputs on the billing address page required only if the page is opened */}
        {/* The form page for giving the possible billing address */}
        <FormPage hidden={currentPage !== 1}>
          <h3>{i('clientRegisterFormBillingAddress')}</h3>
          <FormDiv>
            <label for="billing-address-line-1">{i('clientRegisterFormBillingAddressLine1')}</label>
            <input
              className="wider"
              type="text"
              name="billing-address-line-1"
              id="billing-address-line-1"
              required={differentBillingAddress}
            />
          </FormDiv>
          <FormDiv>
            <label for="billing-address-line-2">{i('clientRegisterFormBillingAddressLine2')}</label>
            <input
              className="wider"
              type="text"
              name="billing-address-line-2"
              id="billing-address-line-2"
              required={differentBillingAddress}
            />
          </FormDiv>
          <FormDiv>
            <label for="billing-postcode">{i('clientRegisterFormBillingPostcode')}</label>
            <input
              type="text"
              name="billing-postcode"
              id="billing-postcode"
              required={differentBillingAddress}
            />
          </FormDiv>
          <FormDiv>
            <label for="billing-post-office">{i('clientRegisterFormBillingPostOffice')}</label>
            <input
              type="text"
              name="billing-post-office"
              id="billing-post-office"
              required={differentBillingAddress}
            />
          </FormDiv>
        </FormPage>

        {/* The form page for selecting the billing method */}
        <FormPage hidden={currentPage !== 2}>
          <FormDiv>
            <h3>{i('clientRegisterFormBillingMethod')}</h3>
            <p>
              {i('clientRegisterFormBillingMethodContent', {
                a: (...chunk) => (
                  <LocalizedLink to="/pricing" locale={props.locale}>
                    {chunk}
                  </LocalizedLink>
                ),
              })}
            </p>
            <RadioDiv>
              <input type="radio" name="billing-method" id="email" value="email" />
              <label for="email">{i('clientRegisterFormBillingMethodEmail')}</label>
            </RadioDiv>
            <RadioDiv>
              <input type="radio" name="billing-method" id="paper" value="paper" />
              <label for="paper">{i('clientRegisterFormBillingMethodPaper')}</label>
            </RadioDiv>
          </FormDiv>
        </FormPage>

        <FormDiv>
          <ButtonDiv hidden={currentPage === 0}>
            <Button onClick={moveToPreviousPage}>
              <ArrowLeft size={24} />{' '}<span>{i('clientRegisterFormPrevious')}</span>
            </Button>
          </ButtonDiv>
          <ButtonDiv hidden={currentPage === 2}>
            <Button onClick={moveToNextPage}>
              <span>{i('clientRegisterFormNext')}</span>{' '}<ArrowRight size={24} />
            </Button>
          </ButtonDiv>
          <ButtonDiv hidden={currentPage !== 2}>
            <button type="submit">
              <PaperAirplane size={24} />{' '}{i('clientRegisterFormSend')}
            </button>
          </ButtonDiv>
        </FormDiv>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;
