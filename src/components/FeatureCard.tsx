// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from './Card';

const Icon = styled.div`
  text-align: center;
`;

const H3 = styled.h3`
  clear: none;
  margin: 2rem 0;
  font-size: 1.5rem;
  text-align: center;
`;

const propTypes = {
  button: PropTypes.element,
  children: PropTypes.node.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = { button: null };

function FeatureCard({ button, children, icon, title }) {
  return (
    <Card centered>
      <Icon>{icon}</Icon>
      <H3>{title}</H3>
      {children}
      {button}
    </Card>
  );
}

FeatureCard.propTypes = propTypes;
FeatureCard.defaultProps = defaultProps;

export default FeatureCard;
