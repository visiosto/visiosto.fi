// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const encodeFormState = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

export default encodeFormState;
