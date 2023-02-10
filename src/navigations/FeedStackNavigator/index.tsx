import React, { FunctionComponent, useCallback } from 'react';

import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import Header from '@src/components/atoms/Header';

import HomeScreen from '@src/screens/FeedScreen';

import { HomeStackParmas } from '../types';

const Stack = createNativeStackNavigator<HomeStackParmas>();

const FeedStackNavigator: FunctionComponent = function FeedStackNavigator() {
  const renderHeader = useCallback(
    (props: NativeStackHeaderProps, title?: string) => {
      return <Header title={title} />;
    },
    [],
  );

  return (
    <Stack.Navigator>
      <Stack.Group>
        {/* <Stack.Screen
          name={'Feed'}
          component={FeedScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            header: props => renderHeader(props, '홈'),
            // headerShown: false,
          }}
        />
      </Stack.Group>
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name={'SignInModal'}
          component={ModalScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default FeedStackNavigator;
