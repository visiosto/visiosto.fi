// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import createLocaleURL from '../createLocaleURL';

import entryIDs from '../../entryIDs';
import headQuery from '../../../test/data/headQuery';

describe('function for creating localized URLs of pages', () => {
  const data = {
    ...headQuery,
    site: { siteMetadata: { defaultLocale: 'fi', localePaths: { fi: '', en_GB: 'en' } } },
  };
  const baseURL = 'https://visiosto.fi';
  const { clientRegisterPrivacyPolicyPageID, indexPageID, managementPageID } = entryIDs;

  it('creates Finnish index URL correctly', () => {
    expect(createLocaleURL(baseURL, indexPageID, 'fi', data)).toBe('https://visiosto.fi');
  });

  it('creates English index URL correctly', () => {
    expect(createLocaleURL(baseURL, indexPageID, 'en-GB', data)).toBe('https://visiosto.fi/en');
  });

  it('creates Finnish management page URL correctly', () => {
    expect(createLocaleURL(baseURL, managementPageID, 'fi', data)).toBe(
      'https://visiosto.fi/hallinto',
    );
  });

  it('creates English management page URL correctly', () => {
    expect(createLocaleURL(baseURL, managementPageID, 'en-GB', data)).toBe(
      'https://visiosto.fi/en/management',
    );
  });

  it('creates Finnish client register privacy policy page URL correctly', () => {
    expect(createLocaleURL(baseURL, clientRegisterPrivacyPolicyPageID, 'fi', data)).toBe(
      'https://visiosto.fi/tietosuoja/asiakasrekisterin-tietosuojaseloste',
    );
  });

  it('creates English client register privacy policy page URL correctly', () => {
    expect(createLocaleURL(baseURL, clientRegisterPrivacyPolicyPageID, 'en-GB', data)).toBe(
      'https://visiosto.fi/en/data-protection/client-register-privacy-policy',
    );
  });
});
