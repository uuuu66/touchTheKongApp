import React, { FunctionComponent } from 'react';
import {
  View,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Image,
} from 'react-native';
import { Pressable, Typo } from '@src/components/atoms';
import { ButtonSize, ButtonType } from '../Button/types';
import { getIconStyle, getLabelStyle } from '../Button/utils';

interface Props {
  disabled?: boolean;
  label?: string;
  type?: ButtonType;
  icon?: ImageSourcePropType;
  size: ButtonSize;
  style?: StyleProp<ViewStyle>;
  contentsStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  isSelect?: boolean;
}

const TabButton: FunctionComponent<Props> = function TabButton({
  disabled,
  label,
  icon,
  type,
  style,
  contentsStyle,
  size,
  onPress,
  isSelect,
}) {
  const labelStyle = getLabelStyle(type, disabled, isSelect);

  return (
    <Pressable style={style} onPress={disabled ? onPress : undefined}>
      <View style={[styles.contents, contentsStyle]}>
        {icon && <Image source={icon} style={getIconStyle(size, true)} />}
        {label && <Typo style={labelStyle}>{label}</Typo>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contents: {
    flexDirection: 'column',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default TabButton;
