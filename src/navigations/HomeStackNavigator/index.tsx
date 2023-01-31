import React, { CSSProperties, FunctionComponent, useCallback } from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Header from '@src/components/atoms/Header';
import HomeScreen from '@src/screens/HomeScreen';
import SignInScreen from '@src/screens/SignInScreen';
import SignUpScreen from '@src/screens/SignUpScreen';
import { HomeStackParams } from '../types';

interface Props {
  style: CSSProperties;
}
const Stack = createNativeStackNavigator<HomeStackParams>();

const HomeStackNavigator: FunctionComponent<Props> =
  function HomeStackNavigator() {
    const renderHeader = useCallback(
      (props: NativeStackHeaderProps, title?: string) => {
        return <Header title={title} />;
      },
      [],
    );
    const getOptions = (title?: string): NativeStackNavigationOptions => {
      return { header: props => renderHeader(props, title) };
    };
    return (
      <Stack.Navigator
        screenOptions={{
          header: props => renderHeader(props, ''),
        }}
      >
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'SignIn'}
          component={SignInScreen}
          options={getOptions('회원가입')}
        />
        <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      </Stack.Navigator>
    );
  };

export default HomeStackNavigator;
