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
import * as Styled from './styles';
import { ButtonSize, ButtonType } from './types';
import {
  getButtonStyle,
  getIconStyle,
  getLabelStyle,
  getLabelTypo,
} from './utils';

interface Props {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  label: string;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  contentsStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  isLoading?: boolean;
}

const Button: FunctionComponent<Props> = function Button({
  type = 'solid-primary',
  size = 'large',
  disabled,
  label,
  leftIcon,
  rightIcon,
  style,
  contentsStyle,
  onPress,
  isLoading,
}) {
  const buttonStyle = getButtonStyle(type, size, disabled);
  const labelStyle = getLabelStyle(type, disabled);
  const labelTypo = getLabelTypo(size);

  return (
    <Pressable style={style} onPress={onPress}>
      <View style={[styles.contents, buttonStyle, contentsStyle]}>
        {leftIcon && (
          <Image source={leftIcon} style={getIconStyle(size, true)} />
        )}
        {label && (
          <Typo type={labelTypo} style={labelStyle}>
            {label}
          </Typo>
        )}
        {rightIcon && (
          <Image source={rightIcon} style={getIconStyle(size, false)} />
        )}
        {isLoading && (
          <Styled.ActivityIndicator
            size={size === 'small' ? 'small' : 'large'}
            color={labelStyle.color}
            style={[StyleSheet.absoluteFill]}
            backgroundColor={buttonStyle.backgroundColor as string}
          />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contents: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

export default Button;
