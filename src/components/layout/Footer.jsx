// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import CookieNotice from '../cookie/CookieNotice';
import LocaleSwitcher from './LocaleSwitcher';
import LocalizedLink from '../link/LocalizedLink';
import SchemedImage from '../SchemedImage';
import Search from '../search/Search';

import createInternationalization from '../../util/createInternationalization';

const FooterElement = styled.footer`
  margin: 4em ${(props) => props.theme.layout.marginMobile} 2em;
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 4em ${(props) => props.theme.layout.marginTablet} 2em;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 4em ${(props) => props.theme.layout.marginDesktop} 2em;
  }
`;

const Div = styled.div`
  margin: 2em 0;
`;

const CompanyDiv = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 0;
`;

const LogoImage = styled(SchemedImage)`
  margin: 1rem;
`;

const CompanyP = styled.p`
  margin: 0;
`;

const ManagementP = styled.p`
  margin: 2rem 0 0;
`;

const PricingP = styled.p`
  margin: 2rem 0 1rem;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 0;
  }
`;

const SocialMediaTitle = styled.h3`
  margin: 2rem 0 0;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 3rem 0 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 4rem 0 0;
  }
`;

const SocialMediaDiv = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialMediaImage = styled(SchemedImage)`
  margin: 1rem;
`;

const GithubImage = styled(SocialMediaImage)`
  filter: brightness(0) saturate(100%) invert(24%) sepia(50%) saturate(252%) hue-rotate(166deg)
    brightness(93%) contrast(88%);

  @media screen and (prefers-color-scheme: dark) {
    filter: brightness(0) saturate(100%) invert(100%);
  }
`;

const InstagramImage = styled(SocialMediaImage)`
  @media screen and (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
`;

const LinkedinImage = styled(SocialMediaImage)`
  @media screen and (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
`;

const TwitterImage = styled(SocialMediaImage)`
  @media screen and (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
`;

const DataProtectionP = styled.p`
  margin: 2rem 0 0;
`;

const CookieSettings = styled.div`
  margin: 2rem 0 1rem;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 0;
  }
`;

const TermsOfUseP = styled.p`
  margin: 2rem 0 1rem;

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 0;
  }
`;

const propTypes = {
  locale: PropTypes.string.isRequired,
  pageID: PropTypes.string.isRequired,
};

function Footer({ locale, pageID }) {
  const intl = createInternationalization(useIntl());

  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            defaultEmail
            businessID
            vatNumber
            socialMedia {
              facebook
              github
              instagram
              linkedin
              twitter
            }
          }
        }
        logoLight: file(relativePath: { eq: "footer/logo-light.png" }) {
          childImageSharp {
            gatsbyImageData(width: 160, placeholder: BLURRED)
          }
        }
        logoDark: file(relativePath: { eq: "footer/logo-dark-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 160, placeholder: BLURRED)
          }
        }
        facebook: file(relativePath: { eq: "footer/facebook.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        facebookColor: file(relativePath: { eq: "footer/facebook-color.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        github: file(relativePath: { eq: "footer/github.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        instagram: file(relativePath: { eq: "footer/instagram.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        instagramColor: file(relativePath: { eq: "footer/instagram-color.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        linkedin: file(relativePath: { eq: "footer/linkedin.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        linkedinColor: file(relativePath: { eq: "footer/linkedin-color.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        twitter: file(relativePath: { eq: "footer/twitter.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
        twitterColor: file(relativePath: { eq: "footer/twitter-color.png" }) {
          childImageSharp {
            gatsbyImageData(width: 32)
          }
        }
      }
    `,
  );

  const { defaultEmail, businessID, vatNumber, socialMedia } = data.site.siteMetadata;

  return (
    <FooterElement>
      <Search locale={locale} />
      <CompanyDiv>
        <LogoImage
          alt={intl('footerLogoImageText')}
          light={getImage(data.logoLight)}
          dark={getImage(data.logoDark)}
        />
        <h2>{intl('footerCompanyName')}</h2>
        <CompanyP>
          {intl('footerBusinessID')} {businessID}
        </CompanyP>
        <CompanyP>
          {intl('footerVatNumber')} {vatNumber}
        </CompanyP>
        <CompanyP>
          <a href={`mailto:${defaultEmail}`}>{defaultEmail}</a>
        </CompanyP>
        <ManagementP>
          <LocalizedLink to="/management" locale={locale}>
            {intl('footerManagement')}
          </LocalizedLink>
        </ManagementP>
        <PricingP>
          <LocalizedLink to="/pricing" locale={locale}>
            {intl('footerPricing')}
          </LocalizedLink>
        </PricingP>
      </CompanyDiv>
      <Div>
        <LocaleSwitcher locale={locale} pageID={pageID} />
      </Div>
      <SocialMediaTitle>{intl('footerSocialMediaTitle')}</SocialMediaTitle>
      <Div>
        <p dangerouslySetInnerHTML={{ __html: intl('footerHashtag') }} />
      </Div>
      <SocialMediaDiv>
        <a href={socialMedia.instagram} rel="noopener noreferrer" target="_blank">
          <InstagramImage
            alt={intl('footerInstagramImageText')}
            light={getImage(data.instagramColor)}
            dark={getImage(data.instagram)}
          />
        </a>
        <a href={socialMedia.facebook} rel="noopener noreferrer" target="_blank">
          <SocialMediaImage
            alt={intl('footerFacebookImageText')}
            light={getImage(data.facebookColor)}
            dark={getImage(data.facebook)}
          />
        </a>
        <a href={socialMedia.twitter} rel="noopener noreferrer" target="_blank">
          <TwitterImage
            alt={intl('footerTwitterImageText')}
            light={getImage(data.twitterColor)}
            dark={getImage(data.twitter)}
          />
        </a>
        <a href={socialMedia.linkedin} rel="noopener noreferrer" target="_blank">
          <LinkedinImage
            alt={intl('footerLinkedinImageText')}
            light={getImage(data.linkedinColor)}
            dark={getImage(data.linkedin)}
          />
        </a>
        <a href={socialMedia.github} rel="noopener noreferrer" target="_blank">
          <GithubImage
            alt={intl('footerGithubImageText')}
            light={getImage(data.github)}
            dark={getImage(data.github)}
          />
        </a>
      </SocialMediaDiv>
      <Div>
        <DataProtectionP>
          <LocalizedLink to="/data-protection" locale={locale}>
            {intl('footerDataProtection')}
          </LocalizedLink>
        </DataProtectionP>
        <CookieSettings>
          <CookieNotice locale={locale} />
        </CookieSettings>
        <TermsOfUseP>
          <LocalizedLink to="/terms-of-use" locale={locale}>
            {intl('footerTermsOfUse')}
          </LocalizedLink>
        </TermsOfUseP>
      </Div>
      <Div>
        <p dangerouslySetInnerHTML={{ __html: intl('footerOcticons') }} />
      </Div>
      <Div>
        <p dangerouslySetInnerHTML={{ __html: intl('footerCopyright') }} />
      </Div>
      <Div>
        <p>
          {intl('footerMadeBy', {
            a: (...chunk) => (
              <LocalizedLink to="/" locale={locale}>
                {chunk}
              </LocalizedLink>
            ),
          })}
        </p>
      </Div>
    </FooterElement>
  );
}

Footer.propTypes = propTypes;

export default Footer;
