// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import LanguageSwitcher from './LanguageSwitcher';
import SchemedImage from './SchemedImage';

import createIntl from '../utils/createIntl';

export default (props) => {
  const i = createIntl(useIntl());

  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            defaultEmail
            businessId
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
            gatsbyImageData(width: 160)
          }
        }
        logoDark: file(relativePath: { eq: "footer/logo-dark-2.png" }) {
          childImageSharp {
            gatsbyImageData(width: 160)
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

  const { defaultEmail, businessId, vatNumber, socialMedia } = data.site.siteMetadata;

  const Footer = styled.footer`
    margin: 2em 0;
    background: var(--color-background);
    color: var(--color-text);
  `;

  const Div = styled.div`
    margin: 1em ${(props) => props.theme.layout.marginPhone};
    text-align: center;

    @media screen and ${(props) => props.theme.devices.phoneL} {
      margin: 1em ${(props) => props.theme.layout.marginTablet};
    }

    @media screen and ${(props) => props.theme.devices.tablet} {
      margin: 1em ${(props) => props.theme.layout.marginDesktop};
    }
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

  const SocialMediaDiv = styled(Div)`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const SocialMediaImage = styled(SchemedImage)`
    margin: 1rem;
  `;

  const GithubImage = styled(SocialMediaImage)`
    filter: invert(24%) sepia(50%) saturate(252%) hue-rotate(166deg) brightness(93%) contrast(88%);

    @media screen and (prefers-color-scheme: dark) {
      filter: invert(100%);
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

  return (
    <Footer>
      <CompanyDiv>
        <LogoImage light={getImage(data.logoLight)} dark={getImage(data.logoDark)} />
        <h2>{i('footerCompanyName')}</h2>
        <CompanyP>
          {i('footerBusinessId')} {businessId}
        </CompanyP>
        <CompanyP>
          {i('footerVatNumber')} {vatNumber}
        </CompanyP>
        <CompanyP>
          <a href={`mailto:${defaultEmail}`}>{defaultEmail}</a>
        </CompanyP>
      </CompanyDiv>
      {(() => {
        if (!props.noLanguageSwitcher) {
          return (
            <Div>
              <LanguageSwitcher {...props} />
            </Div>
          );
        }
      })()}
      <SocialMediaDiv>
        <a href={socialMedia.instagram} rel="noopener noreferrer" target="_blank">
          <InstagramImage light={getImage(data.instagramColor)} dark={getImage(data.instagram)} />
        </a>
        <a href={socialMedia.facebook} rel="noopener noreferrer" target="_blank">
          <SocialMediaImage light={getImage(data.facebookColor)} dark={getImage(data.facebook)} />
        </a>
        <a href={socialMedia.twitter} rel="noopener noreferrer" target="_blank">
          <TwitterImage light={getImage(data.twitterColor)} dark={getImage(data.twitter)} />
        </a>
        <a href={socialMedia.linkedin} rel="noopener noreferrer" target="_blank">
          <LinkedinImage light={getImage(data.linkedinColor)} dark={getImage(data.linkedin)} />
        </a>
        <a href={socialMedia.github} rel="noopener noreferrer" target="_blank">
          <GithubImage light={getImage(data.github)} dark={getImage(data.github)} />
        </a>
      </SocialMediaDiv>
      <Div dangerouslySetInnerHTML={{ __html: i('footerOcticons') }} />
      <Div dangerouslySetInnerHTML={{ __html: i('footerCopyright') }} />
    </Footer>
  );
};
