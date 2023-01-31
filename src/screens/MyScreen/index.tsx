/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const MyScreen: FunctionComponent<Props> = function MyScreen() {
  /* navigation & route */

  return (
    <View style={{ paddingTop: 60 }}>
      <Text>{'MyScreen'}</Text>
    </View>
  );
};

export default MyScreen;
