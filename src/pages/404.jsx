// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import Intl from '../components/Intl';
import LayoutError from '../components/LayoutError';
import Theme from '../components/Theme';

import createIntl from '../utils/createIntl';

const P = styled.p`
  text-align: center;
`;

const NotFoundPage = (props) => {
  const i = createIntl(useIntl());

  return (
    <LayoutError
      errorCode="404"
      title={i('notFoundTitle')}
      lang="fi"
      pageKey={props.pageContext.key}
    >
      <P>{i('notFoundContent')}</P>
    </LayoutError>
  );
};

const NotFound = (props) => (
  <Intl locale="fi">
    <Theme>
      <NotFoundPage {...props} />
    </Theme>
  </Intl>
);

export default NotFound;
