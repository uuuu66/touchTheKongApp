/* eslint-disable no-console */
import React, { FunctionComponent, useMemo } from 'react';
import { View } from 'react-native';
import { Typo } from '@src/components/atoms';

interface Props {
  label?: string;
  count: number;
}

const Label: FunctionComponent<Props> = function Label({ label, count }) {
  console.log('π ~ render Child');

  /**
   * μ΅μ ν μμ
   */
  // const getLabelText = () => {
  //   console.log('π ~ getLabel', label);
  //   return `Label: ${label ?? ''}`;
  // };

  // const getCountText = () => {
  //   console.log('π ~ getCountText', count);
  //   return `Count: ${count}`;
  // };

  /**
   * useMemo:
   * κ°μ κΈ°μ΅
   * λΌλ²¨μ΄ λ°λλ©΄ λΌλ²¨λ§ λ λ, μΉ΄μ΄νΈκ° λ°λλ©΄ μΉ΄μ΄νΈλ§ λ λ
   */
  const getLabelText = useMemo(() => {
    console.log('π ~ getLabel', label);
    return `Label: ${label ?? ''}`;
  }, [label]);

  const getCountText = useMemo(() => {
    console.log('π ~ getCountText', count);
    return `Count: ${count}`;
  }, [count]);

  return (
    <View style={{ padding: 8 }}>
      <Typo type={'H2'}>{getLabelText}</Typo>
      <Typo type={'H2'}>{getCountText}</Typo>
    </View>
  );
};

export default Label;
