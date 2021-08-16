// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Span = styled.span<{ size: number }>`
  ${(props) => {
    if (props.size === 24) {
      return css`
        margin: 0 0 0 -4px;
        vertical-align: -6px;
      `;
    }

    return null;
  }}
`;

const propTypes = {
  icon: PropTypes.oneOf(['cancel', 'check', 'done', 'tune']).isRequired,
  size: PropTypes.oneOf([18, 24, 36, 48]),
};

const defaultProps = { size: 24 };

function Icon({ icon, size }) {
  return (
    <Span className={`material-icons md-${size}`} size={size}>
      {icon}
    </Span>
  );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
