/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FunctionComponent, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { themes } from '@src/constants';
import useDynamicLink from './hooks/useDynamicLink';
import useInitialize from './hooks/useInitialize';
import HomeStackNavigator from './navigations/HomeStackNavigator';

const App: FunctionComponent = function App() {
  useInitialize();

  const deeplinkResult = useDynamicLink();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('deeplinkResult: ', JSON.stringify(deeplinkResult));
  }, [deeplinkResult]);

  return (
    <ThemeProvider theme={themes}>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
