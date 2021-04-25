// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

export default function getCookie(cookies, name: string): string {
  return cookies.get(name) === undefined ? '' : String(cookies.get(name));
}
