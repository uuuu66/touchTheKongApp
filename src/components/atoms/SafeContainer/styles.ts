import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)<{ backgroundColor?: string }>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const SafeArea = styled(View)<{ height: number; color?: string }>`
  height: ${({ height }) => `${height}px`};
  background-color: ${({ color }) => color};
`;
