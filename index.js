/* eslint-disable */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import CodePush from 'react-native-code-push';
import App from './src/App';
import { name as appName } from './app.json';

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
};

AppRegistry.registerComponent(appName, () => CodePush(codePushOptions)(App));
