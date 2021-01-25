// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

export const createIntl = intlUseEffect => (k, obj) =>
  intlUseEffect.formatMessage({id: k}, obj); // eslint-disable-line implicit-arrow-linebreak
