// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import LayoutError from '../components/layout/LayoutError';
import Theme from '../components/Theme';

import createIntl from '../util/createIntl';

const P = styled.p`
  text-align: center;
`;

const Page = () => {
  const i = createIntl(useIntl());

  return (
    <LayoutError errorCode="404" title={i('notFoundTitle')} locale="fi">
      <P>{i('notFoundContent')}</P>
    </LayoutError>
  );
};

const NotFound = (props) => (
  <Intl locale="fi">
    <Theme>
      <Page {...props} />
    </Theme>
  </Intl>
);

export default NotFound;
