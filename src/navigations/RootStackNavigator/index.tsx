import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { typoStyles } from '@src/components/atoms/Typo/types';
import { colors } from '@src/constants';
import SignInScreen from '@src/screens/SignInScreen';
import SignUpScreen from '@src/screens/SignUpScreen';
import MainTabNavigator from '../MainTabNavigator';
import { RootStackParams } from '../types';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigator = function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        animation: Platform.select({
          ios: 'simple_push',
          android: 'slide_from_right',
        }),
        headerTitleStyle: {
          color: colors.GRAY10,
          ...typoStyles.H5,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name={'SignIn'}
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={'SignUp'} component={SignUpScreen} />
      <Stack.Screen
        name={'MainTab'}
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
