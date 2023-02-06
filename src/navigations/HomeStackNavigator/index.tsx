import React, { FunctionComponent, useCallback } from 'react';

import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import Header from '@src/components/atoms/Header';

import HomeScreen from '@src/screens/FeedScreen';

import SignInScreen from '@src/screens/SignInScreen';
import SignUpScreen from '@src/screens/SignUpScreen';
import MainTabNavigator from '../MainTabNavigator';
import { HomeStackParmas } from '../types';

const Stack = createNativeStackNavigator<HomeStackParmas>();

const RootStackNavigator: FunctionComponent = function RootStackNavigator() {
  const renderHeader = useCallback(
    (props: NativeStackHeaderProps, title?: string) => {
      return <Header title={title} />;
    },
    [],
  );

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => renderHeader(props, ''),
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name={'SignIn'}
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'MainTab'}
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
