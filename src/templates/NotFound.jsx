// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import LayoutError from '../components/layout/LayoutError';
import Rule from '../components/Rule';
import Theme from '../components/Theme';

import createInternationalization from '../util/createInternationalization';

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
  children: PropTypes.node,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
  pageContext: PropTypes.object.isRequired,
  pageResources: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};

const defaultProps = { children: undefined };

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
Page.defaultProps = defaultProps;

function NotFound(props) {
  const { simpleLocales } = props.data.site.siteMetadata;
  const { locale } = props.pageContext;
  return (
    <Intl locale={simpleLocales[locale.replace('-', '_')]}>
      <Theme>
        <Page {...props} />
      </Theme>
    </Intl>
  );
}

NotFound.propTypes = propTypes;
NotFound.defaultProps = defaultProps;

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
