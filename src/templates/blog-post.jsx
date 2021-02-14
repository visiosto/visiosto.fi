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

const BlogPostPage = (props) => {
  const i = createIntl(useIntl());

  const P = styled.p`
    text-align: center;
  `;

  return (
    <Layout
      title={''}
      lang={props.pageContext.lang}
      pageKey={props.pageContext.key}
    >
    </Layout>
  );
};

const BlogPost = (props) => (
  <Intl locale={props.pageContext.lang}>
    <Theme>
      <BlogPostPage {...props} />
    </Theme>
  </Intl>
);

export default BlogPost;
