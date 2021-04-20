// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

export default function encodeFormState(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}
