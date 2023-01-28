import React, { FunctionComponent } from 'react';
import { ViewStyle, StyleProp, View, StyleSheet, Image } from 'react-native';
import { Pressable, Typo } from '@src/components/atoms';
import { Social } from '@src/data/Social';
import { getSocialButtonInfos } from './utils';

interface Props {
  social: Social;
  style?: StyleProp<ViewStyle>;
  onPress?: (social: Social) => void;
}

const SocialButton: FunctionComponent<Props> = function SocialButton({
  social,
  onPress,
  style,
}) {
  const { socialIcon, socialLabel, buttonStyle, labelStyle } =
    getSocialButtonInfos(social);

  return (
    <Pressable
      onPress={onPress ? () => onPress(social) : undefined}
      style={style}
    >
      <View style={[styles.container, buttonStyle]}>
        {socialIcon && <Image source={socialIcon} style={styles.icon} />}
        <Typo type={'BUTTON1'} style={labelStyle}>
          {socialLabel}
        </Typo>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    position: 'absolute',
    start: 16,
    alignSelf: 'center',
  },
});

export default SocialButton;
