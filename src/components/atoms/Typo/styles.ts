import { Text } from 'react-native';
import styled from 'styled-components/native';

// eslint-disable-next-line import/prefer-default-export
export const Typo = styled(Text)<{
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
}>`
  font-family: ${({ fontFamily, theme }) => fontFamily ?? theme.fonts.REGULAR};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : 'undefined')};
  line-height: ${({ lineHeight }) =>
    lineHeight ? `${lineHeight}px` : 'undefined'};
`;
