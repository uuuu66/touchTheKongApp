import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

// eslint-disable-next-line import/prefer-default-export
export const ActivityIndicator = styled(RNActivityIndicator)<{
  backgroundColor?: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
