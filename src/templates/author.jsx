// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import Layout from '../components/Layout';
import Theme from '../components/Theme';

import createIntl from '../utils/createIntl';

const Author = (props) => {
  return (
    <Intl locale={props.pageContext.lang}>
      <Theme>
        <Layout title={''} lang={props.pageContext.lang} pageKey={props.pageContext.key} />
      </Theme>
    </Intl>
  );
};

export default Author;
