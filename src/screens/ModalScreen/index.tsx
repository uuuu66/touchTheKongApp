import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { colors } from '@src/constants';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const { width: windowWidth, height: windowHeight } = Dimensions.get('screen');

const ModalScreen: FunctionComponent<Props> = function ModalScreen() {
  return (
    <View style={[styleSheet.container]}>
      <Text>{'ModalScreen'}</Text>
    </View>
  );
};

export default ModalScreen;

const styleSheet = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GRAY1,
    width: windowWidth - 100,
    height: windowHeight - 100,
  },
});
