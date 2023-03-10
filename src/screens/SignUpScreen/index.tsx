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
  console.log('๐ ~ render SignUpScreen');

  const [input, setInput] = useState<string>();
  const [count, setCount] = useState<number>(0);
  let localCount = 0;

  /**
   *  ์ต์ ํ ์์
   */
  const handleInputChange = (text: string) => {
    console.log('\n๐ ~ handleInputChange', `${text} - ${localCount}`);
    localCount++;
    setInput(text);
  };

  // const handleOnPlus = () => {
  //   console.log('\n๐ ~ handleOnPlus');
  //   setCount(count + 1);
  // };

  // const handleOnMinus = () => {
  //   console.log('\n๐ ~ handleOnMinus');
  //   setCount(count - 1);
  // };

  /**
   * useCallback: callbackํจ์๋ฅผ ๊ธฐ์ต
   * ์คํ๋ ๋ localCount๊ฐ ๊ธฐ์ต๋จ
   *
   * ๋ํ๋์์ ์๋ฌด๊ฒ๋ ์์๋ ([]) -> ๋ฐ๋ ์นด์ดํธ๋ ๋ฐ์๋์ง ์๊ณ , localCount๋ ๋ด๋ถ์์ ์บ์๋์ด ์๊ฐ ์ฌ๋ผ๊ฐ
   */
  const handleOnPlus = useCallback(() => {
    console.log(
      '\n๐ ~ handleOnPlus',
      `count: ${count} localCount: ${localCount}`,
    );
    localCount++;
    setCount(count + 1);
  }, []);

  const handleOnMinus = useCallback(() => {
    console.log(
      '\n๐ ~ handleOnMinus',
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
