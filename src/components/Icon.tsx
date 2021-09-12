// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Span = styled.span<{ size: number }>`
  ${(props) => {
    if (props.size === 24) {
      return css`
        margin: 0;
        vertical-align: -6px;
      `;
    }

    return null;
  }}
`;

const propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(['arrow_back', 'arrow_forward', 'cancel', 'check', 'done', 'search', 'send', 'tune']).isRequired,
  size: PropTypes.oneOf([18, 24, 36, 48]),
};

const defaultProps = { className: undefined, size: 24 };

function Icon({ className, icon, size }) {
  if (className) {
    return (
      <Span className={`material-icons md-${size} ${className}`} size={size}>
        {icon}
      </Span>
    );
  }

  return (
    <Span className={`material-icons md-${size}`} size={size}>
      {icon}
    </Span>
  );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
