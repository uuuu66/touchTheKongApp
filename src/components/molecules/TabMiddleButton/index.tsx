import React, { FunctionComponent } from 'react';
import {
  View,
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
  backgroundColor?: string;
}

const TabMiddleButton: FunctionComponent<Props> = function TabMiddleButton({
  disabled,
  icon,
  style,
  windowWidth = 0,
  backgroundColor = colors.BLUE,
  tabHeight = 0,
  contentsStyle,
  onPress,
}) {
  const ButtonPositionStyle: StyleProp<ViewStyle> = {
    top: (-1 * tabHeight) / 2,
    left: windowWidth / 2 - tabHeight / 2,
  };
  const ButtonStyle: StyleProp<ViewStyle> = {
    backgroundColor: 'white',
    width: tabHeight,
    height: tabHeight,

    transform: [{ rotate: '90deg' }],
  };
  const ButtonBackGroundStyle: StyleProp<ViewStyle> = {
    backgroundColor,
    width: tabHeight + 20,
    height: tabHeight + 20,
  };
  const ButtonBackGroundPositionStyle: StyleProp<ViewStyle> = {
    top: (-1 * (tabHeight + 20)) / 2,
    left: windowWidth / 2 - (tabHeight + 20) / 2,
  };
  const IconStyle: StyleProp<ImageStyle> = {
    width: tabHeight / 2,
    height: tabHeight / 2,
  };
  return (
    <>
      <View
        style={[
          styles.container,
          style,
          ButtonBackGroundStyle,
          ButtonBackGroundPositionStyle,
        ]}
      />
      <Pressable
        style={[styles.container, style, ButtonStyle, ButtonPositionStyle]}
        onPress={disabled ? onPress : undefined}
      >
        <View style={[styles.wrapper, contentsStyle, ButtonStyle]}>
          {icon && <Image source={icon} style={[IconStyle]} />}
        </View>
      </Pressable>
    </>
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
