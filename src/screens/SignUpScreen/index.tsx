/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-plusplus */
import React, { FunctionComponent, useCallback, useState } from 'react';
import { TextInput, View } from 'react-native';
import { SafeContainer } from '@src/components/atoms';
import { typoStyles } from '@src/components/atoms/Typo/types';
import { Button } from '@src/components/molecules';
import Label from './Label';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const SignUpScreen: FunctionComponent<Props> = function SignUpScreen() {
  console.log('🚀 ~ render SignUpScreen');

  const [input, setInput] = useState<string>();
  const [count, setCount] = useState<number>(0);
  let localCount = 0;

  /**
   *  최적화 없음
   */
  const handleInputChange = (text: string) => {
    console.log('\n🚀 ~ handleInputChange', `${text} - ${localCount}`);
    localCount++;
    setInput(text);
  };

  // const handleOnPlus = () => {
  //   console.log('\n🚀 ~ handleOnPlus');
  //   setCount(count + 1);
  // };

  // const handleOnMinus = () => {
  //   console.log('\n🚀 ~ handleOnMinus');
  //   setCount(count - 1);
  // };

  /**
   * useCallback: callback함수를 기억
   * 실행될때 localCount가 기억됨
   *
   * 디펜던시에 아무것도 없을때 ([]) -> 바뀐 카운트는 반영되지 않고, localCount는 내부에서 캐시되어 수가 올라감
   */
  const handleOnPlus = useCallback(() => {
    console.log(
      '\n🚀 ~ handleOnPlus',
      `count: ${count} localCount: ${localCount}`,
    );
    localCount++;
    setCount(count + 1);
  }, []);

  const handleOnMinus = useCallback(() => {
    console.log(
      '\n🚀 ~ handleOnMinus',
      `count: ${count} localCount: ${localCount}`,
    );
    localCount--;
    setCount(count - 1);
  }, []);

  return (
    <SafeContainer style={{ padding: 8 }}>
      <TextInput
        value={input}
        onChangeText={handleInputChange}
        placeholder={'placeholder'}
        style={{
          padding: 8,
          borderWidth: 1,
          borderColor: 'black',
          ...typoStyles.H1,
        }}
      />
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <Button
          style={{ marginEnd: 8 }}
          label={'PLUS'}
          onPress={handleOnPlus}
        />
        <Button label={'MINUS'} onPress={handleOnMinus} />
      </View>

      <Label label={input} count={count} />
    </SafeContainer>
  );
};

export default SignUpScreen;
