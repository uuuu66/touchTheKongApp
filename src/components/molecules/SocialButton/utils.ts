import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { icons } from '@src/assets';
import { colors, strings } from '@src/constants';
import { Social } from '@src/data/Social';

// eslint-disable-next-line import/prefer-default-export
export const getSocialButtonInfos = (social: Social) => {
  let icon: ImageSourcePropType | undefined;
  let label: string | undefined;
  const buttonStyle: StyleProp<ViewStyle> = {};
  const labelStyle: StyleProp<TextStyle> = {};

  switch (social) {
    case 'naver':
      icon = icons.NAVER_FILL_ACTIVATED;
      label = strings.SIGN_IN_NAVER;
      buttonStyle.backgroundColor = colors.NAVER_GREEN;
      labelStyle.color = colors.GRAY1;
      break;
    case 'kakao':
      icon = icons.KAKAO;
      label = strings.SIGN_IN_KAKAO;
      buttonStyle.backgroundColor = colors.KAKAO_YELLOW;
      break;
    case 'google':
      icon = icons.GOOGLE;
      label = strings.SIGN_IN_GOOGLE;
      buttonStyle.backgroundColor = colors.GRAY1;
      buttonStyle.borderColor = colors.GRAY5;
      buttonStyle.borderWidth = 1;
      break;
    case 'apple':
      icon = icons.APPLE_WHITE;
      label = strings.SIGN_IN_APPLE;
      buttonStyle.backgroundColor = colors.APPLE_BLACK;
      labelStyle.color = colors.GRAY1;
      break;
    default:
      break;
  }
  return {
    socialIcon: icon,
    socialLabel: label,
    buttonStyle,
    labelStyle,
  };
};
