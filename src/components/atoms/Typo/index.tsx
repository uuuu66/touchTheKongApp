import React, { FunctionComponent } from 'react';
import { TextProps } from 'react-native';
import * as Styled from './styles';
import { TypoKey, typoStyles } from './types';

interface Props extends TextProps {
  type?: TypoKey;
}

const Typo: FunctionComponent<Props> = function Typo({ type, ...rest }) {
  const typoStyle = type ? typoStyles[type] : undefined;

  return (
    <Styled.Typo
      fontFamily={typoStyle?.fontFamily}
      fontSize={typoStyle?.fontSize}
      lineHeight={typoStyle?.lineHeight}
      {...rest}
    />
  );
};

export default Typo;
