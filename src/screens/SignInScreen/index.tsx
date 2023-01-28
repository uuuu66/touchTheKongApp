import React, { FunctionComponent } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { icons } from '@src/assets';
import { SafeContainer, Typo } from '@src/components/atoms';
import { colors, strings } from '@src/constants';
import { SOCIAL_LIST } from '@src/data/Social';
import { useScreenNavigation } from '@src/navigations';
import * as Styled from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const SignInScreen: FunctionComponent<Props> = function SignInScreen() {
  const navigation = useScreenNavigation();

  const renderSocialButtons = () =>
    SOCIAL_LIST.map(social => (
      <Styled.SocialButton
        key={social}
        social={social}
        onPress={() => navigation.navigate('SignUp')}
        style={styles.button}
        topGap={social === 'naver' ? 0 : 16}
        bottomGap={social === 'apple' ? 24 : 0}
      />
    ));

  return (
    <SafeContainer>
      <View style={styles.topContainer}>
        <Image source={icons.APP_LOGO} style={styles.logo} />
        <Typo style={styles.labelWrapper}>
          <Typo type={'BODY4_R'}>{strings.WELCOME_MESSAGE_LEFT}&nbsp;</Typo>
          <Typo type={'H5'} style={styles.labelAccent}>
            {strings.WELCOME_MESSAGE_CENTER}
          </Typo>
          <Typo type={'BODY4_R'}>&nbsp;{strings.WELCOME_MESSAGE_RIGHT}</Typo>
        </Typo>
      </View>
      {renderSocialButtons()}
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 88,
    height: 80,
  },
  labelWrapper: {
    marginTop: 24,
  },
  labelAccent: {
    color: colors.PRIMARY3,
  },
  button: {
    marginHorizontal: 20,
  },
});

export default SignInScreen;
