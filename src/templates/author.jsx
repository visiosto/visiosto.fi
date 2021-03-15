// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import Layout from '../components/layout/Layout';
import Theme from '../components/Theme';

import createIntl from '../utils/createIntl';

const P = styled.p`
  text-align: center;
`;

const Page = (props) => {
  const i = createIntl(useIntl());

  return <Layout title={''} lang={props.pageContext.lang} pageKey={props.pageContext.key}></Layout>;
};

const Author = (props) => (
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default Author;
