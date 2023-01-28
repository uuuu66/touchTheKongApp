/* eslint-disable no-console */
import React, { FunctionComponent, useMemo } from 'react';
import { View } from 'react-native';
import { Typo } from '@src/components/atoms';

interface Props {
  label?: string;
  count: number;
}

const Label: FunctionComponent<Props> = function Label({ label, count }) {
  console.log('🚀 ~ render Child');

  /**
   * 최적화 없음
   */
  // const getLabelText = () => {
  //   console.log('🚀 ~ getLabel', label);
  //   return `Label: ${label ?? ''}`;
  // };

  // const getCountText = () => {
  //   console.log('🚀 ~ getCountText', count);
  //   return `Count: ${count}`;
  // };

  /**
   * useMemo:
   * 값을 기억
   * 라벨이 바뀌면 라벨만 렌더, 카운트가 바뀌면 카운트만 렌더
   */
  const getLabelText = useMemo(() => {
    console.log('🚀 ~ getLabel', label);
    return `Label: ${label ?? ''}`;
  }, [label]);

  const getCountText = useMemo(() => {
    console.log('🚀 ~ getCountText', count);
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
