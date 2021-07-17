// Coypright (c) 2021 Visiosto oy
// Licensed under the MIT License

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      heading: string;
      main: string;
      code: string;
    };

    sizes: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      fourK: string;
    };

    devices: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      fourK: string;
    };

    layout: {
      marginMobile: string;
      marginTablet: string;
      marginDesktop: string;
      marginTitleMobile: string;
      marginTitleTablet: string;
    };

    borders: {
      commonRadius: string;
      cardRadius: string;
    };
  }
}
