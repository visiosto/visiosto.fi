// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import LayoutError from '../components/layout/LayoutError';
import Rule from '../components/Rule';
import Theme from '../components/Theme';

import createIntl from '../util/createIntl';

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

function Page(props) {
  const i = createIntl(useIntl());

  return (
    <LayoutError
      errorCode="404"
      pageID={props.pageContext.pageID}
      title={i('notFoundTitle')}
      locale={props.pageContext.locale}
    >
      <Separator>
        <Rule color="peach" mode={2} />
      </Separator>
      <Div>
        <p>{i('notFoundContent')}</p>
      </Div>
    </LayoutError>
  );
}

function NotFound(props) {
  return (
    <Intl
      locale={
        props.data.site.siteMetadata.simpleLocales[props.pageContext.locale.replace('-', '_')]
      }
    >
      <Theme>
        <Page {...props} />
      </Theme>
    </Intl>
  );
}

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
