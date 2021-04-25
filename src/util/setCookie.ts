// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { Cookie, CookieSetOptions } from 'universal-cookie';

export default function setCookie(
  cookies,
  name: string,
  value: Cookie,
  options?: CookieSetOptions,
): void {
  cookies.set(name, value, options);
}
