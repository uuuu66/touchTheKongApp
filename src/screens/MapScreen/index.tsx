import React, { FunctionComponent } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const MapScreen: FunctionComponent<Props> = function MapScreen() {
  return (
    <View>
      <Text>{'MapScreen'}</Text>
    </View>
  );
};

export default MapScreen;
