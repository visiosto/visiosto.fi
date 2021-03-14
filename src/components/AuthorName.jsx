// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import authorNames from '../../data/author-names.json';

const AuthorName = (props) => {
  const localizedName = authorNames[props.name][props.lang];

  return <>{localizedName}</>;
};

export default AuthorName;
