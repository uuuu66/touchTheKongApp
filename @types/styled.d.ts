import { fonts } from '@src/assets';
import { colors } from '@src/constants';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
  }
}
