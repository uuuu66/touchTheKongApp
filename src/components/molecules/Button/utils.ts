import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { colors } from '@src/constants';
import { ButtonSize, ButtonType } from './types';

export const getButtonStyle = (
  type?: ButtonType,
  size?: ButtonSize,
  disabled?: boolean,
) => {
  const style: StyleProp<ViewStyle> = {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  };
  switch (type) {
    case 'solid-primary':
      style.backgroundColor = disabled ? colors.GRAY3 : colors.PRIMARY3;
      break;
    case 'solid-gray':
      style.backgroundColor = colors.GRAY3;
      break;
    case 'outline-primary':
      style.backgroundColor = colors.GRAY1;
      style.borderColor = disabled ? colors.GRAY6 : colors.PRIMARY3;
      style.borderWidth = 1;
      break;
    case 'outline-gray':
      style.backgroundColor = colors.GRAY1;
      style.borderColor = colors.GRAY6;
      style.borderWidth = 1;
      break;
    default:
      break;
  }
  switch (size) {
    case 'large':
      style.paddingVertical = 16;
      style.paddingHorizontal = 24;
      break;
    case 'medium':
      style.paddingVertical = 10;
      style.paddingHorizontal = 16;
      break;
    case 'small':
      style.paddingVertical = 8;
      style.paddingHorizontal = 12;
      break;
    default:
      break;
  }
  return style;
};

export const getLabelTypo = (size?: ButtonSize) => {
  if (size === 'small') {
    return 'BUTTON2';
  }
  return 'BUTTON1';
};

export const getLabelStyle = (type?: ButtonType, disabled?: boolean) => {
  const style: StyleProp<TextStyle> = {};
  switch (type) {
    case 'solid-primary':
      style.color = disabled ? colors.GRAY7 : colors.GRAY1;
      break;
    case 'solid-gray':
      style.color = disabled ? colors.GRAY7 : colors.GRAY10;
      break;
    case 'outline-primary':
      style.color = disabled ? colors.GRAY7 : colors.PRIMARY3;
      break;
    case 'outline-gray':
      style.color = disabled ? colors.GRAY7 : colors.GRAY10;
      break;
    default:
      break;
  }

  return style;
};

export const getIconStyle = (size?: ButtonSize, isLeft?: boolean) => {
  const style: StyleProp<ImageStyle> = {};
  if (size === 'small') {
    style.width = 20;
    style.height = 20;
    style.marginEnd = isLeft ? 4 : undefined;
    style.marginStart = !isLeft ? 4 : undefined;
  } else {
    style.width = 24;
    style.height = 24;
    style.marginEnd = isLeft ? 8 : undefined;
    style.marginStart = !isLeft ? 8 : undefined;
  }
  return style;
};
