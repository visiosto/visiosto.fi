// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Rule from './Rule';

const Hr = styled.hr`
  visibility: hidden;
`;

const propTypes = {
  color: PropTypes.oneOf(['blue', 'turquoise', 'brown', 'peach']),
  ignoreColorScheme: PropTypes.bool,
  mode: PropTypes.oneOf([1, 2, 3]),
};

const defaultProps = { color: 'blue', ignoreColorScheme: false, mode: 1 };

function Break({ color, ignoreColorScheme, mode }) {
  return (
    <>
      <Rule color={color} ignoreColorScheme={ignoreColorScheme} mode={mode} />
      <Hr />
    </>
  );
}

Break.propTypes = propTypes;
Break.defaultProps = defaultProps;

export default Break;
