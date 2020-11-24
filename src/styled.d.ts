import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    root: {
      contentPadding: string;
    };

    colors: {
      white: string;
      darkPrimary: string;
      primary: string;
      yellow: string;
      black: string;
      primaryHalf: string;
    };
  }
}
