// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { Theme } from '@visiosto/components';

import Intl from '../components/Intl';
import LayoutError from '../components/layout/LayoutError';
import Rule from '../components/Rule';

import createInternationalization from '../util/createInternationalization';

import theme from '../theme';

const Separator = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em 0;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 4em 0;
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 5em 0;
  }
`;

const Div = styled.div`
  margin: 2em ${(props) => props.theme.layout.marginMobile};
  text-align: center;

  @media screen and (${(props) => props.theme.devices.mobileL}) {
    margin: 2em ${(props) => props.theme.layout.marginTablet};
  }

  @media screen and (${(props) => props.theme.devices.tablet}) {
    margin: 2em ${(props) => props.theme.layout.marginDesktop};
  }
`;

const propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string,
    pageID: PropTypes.string,
  }).isRequired,
};

function Page({ pageContext }) {
  const intl = createInternationalization(useIntl());
  const { locale, pageID } = pageContext;

  return (
    <LayoutError errorCode="404" locale={locale} pageID={pageID} title={intl('notFoundTitle')}>
      <Separator>
        <Rule color="peach" mode={2} />
      </Separator>
      <Div>
        <p>{intl('notFoundContent')}</p>
      </Div>
    </LayoutError>
  );
}

Page.propTypes = propTypes;

function NotFound({ data, pageContext }) {
  const { simpleLocales } = data.site.siteMetadata;
  const { locale } = pageContext;
  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme theme={theme}>
        <Page pageContext={pageContext} />
      </Theme>
    </Intl>
  );
}

// eslint-disable-next-line react/forbid-prop-types
NotFound.propTypes = { data: PropTypes.object.isRequired, ...propTypes };

export default NotFound;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        simpleLocales {
          en_GB
          fi
        }
      }
    }
  }
`;
