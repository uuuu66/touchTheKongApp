import React, { FunctionComponent } from 'react';
import {
  Pressable as RNPressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Props extends PressableProps {
  opacity?: number;
  style?: StyleProp<ViewStyle>;
}

const Pressable: FunctionComponent<Props> = function Pressable({
  hitSlop = 8,
  opacity = 0.6,
  style,
  onPress,
  ...rest
}) {
  return (
    <RNPressable
      hitSlop={hitSlop}
      style={({ pressed }) => [pressed ? { opacity } : undefined, style]}
      onPress={onPress}
      {...rest}
    />
  );
};

export default Pressable;
