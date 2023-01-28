import React, { FunctionComponent } from 'react';
import { View, Text, Button } from 'react-native';
import {
  MainTabParams,
  useScreenNavigation,
  useScreenRoute,
} from '@src/navigations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const MyScreen: FunctionComponent<Props> = function MyScreen() {
  /* navigation & route */
  const navigation = useScreenNavigation();
  const { params } = useScreenRoute<'My', MainTabParams>();

  return (
    <View style={{ paddingTop: 60 }}>
      <Text>{'MyScreen'}</Text>
      <Text>{params?.message}</Text>
      <Button
        onPress={() =>
          navigation.navigate('SignIn', { message: 'FROM MY SCREEN' })
        }
        title={'GO TO SIGN IN'}
      />
      <Button
        onPress={() =>
          navigation.navigate('MainTab', {
            screen: 'Home',
            params: { message: 'FROM MY SCREEN' },
          })
        }
        title={'GO TO HOME'}
      />
    </View>
  );
};

export default MyScreen;
