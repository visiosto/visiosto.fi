// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

export default function createINTL(intlUseEffect) {
  return (k, obj) => intlUseEffect.formatMessage({ id: k }, obj);
}
