import React, { useCallback } from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Header from '@src/components/atoms/Header';

import SignInScreen from '@src/screens/SignInScreen';
import SignUpScreen from '@src/screens/SignUpScreen';
import MainTabNavigator from '../MainTabNavigator';
import { FeedStackParams } from '../types';

const Stack = createNativeStackNavigator<FeedStackParams>();

const FeedStackNavigator = function FeedStackNavigator() {
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
        name={'SignIn'}
        component={SignInScreen}
        options={getOptions('회원가입')}
      />
      <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      <Stack.Screen
        name={'MainTab'}
        component={MainTabNavigator}
        options={getOptions('회원가입')}
      />
    </Stack.Navigator>
  );
};

export default FeedStackNavigator;
