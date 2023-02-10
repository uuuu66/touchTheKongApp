import React, { FunctionComponent } from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Image,
  ImageStyle,
} from 'react-native';
import { Pressable } from '@src/components/atoms';

import { colors } from '@src/constants';

interface Props {
  disabled?: boolean;
  windowWidth?: number;
  tabHeight?: number;
  icon?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  contentsStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const TabMiddleButton: FunctionComponent<Props> = function TabMiddleButton({
  disabled,
  icon,
  style,
  windowWidth = 0,

  tabHeight = 0,
  contentsStyle,
  onPress,
}) {
  const ButtonPositionStyle: StyleProp<ViewStyle> = {
    top: -1 * (tabHeight / 2),
    left: windowWidth / 2 - tabHeight / 2,
  };
  const ButtonStyle: StyleProp<ViewStyle> = {
    backgroundColor: colors.GRAY1,
    width: tabHeight,
    height: tabHeight,
    borderTopColor: 'black',

    transform: [{ rotate: '90deg' }],
  };

  const IconStyle: StyleProp<ImageStyle> = {
    width: tabHeight / 1.5,
    height: tabHeight / 1.5,
  };
  return (
    <Pressable
      style={[
        styles.container,
        style,
        ButtonStyle,
        ButtonPositionStyle,
        contentsStyle,
      ]}
      onPress={disabled ? onPress : undefined}
    >
      {icon && <Image source={icon} style={[IconStyle]} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'column',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 100,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
export default TabMiddleButton;
