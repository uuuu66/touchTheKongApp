import React, { FunctionComponent, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import { icons } from '@src/assets';
import SlideIn from '@src/components/animations/SlideInY';
import { SafeContainer } from '@src/components/atoms';
import WaveView from '@src/components/atoms/WaveView';
import { Button } from '@src/components/molecules';
import SocialButton from '@src/components/molecules/SocialButton';
import { colors } from '@src/constants';
import { useRootScreenNavigation } from '@src/navigations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const { width: windowWidth } = Dimensions.get('window');
const SignInScreen: FunctionComponent<Props> = function SignInScreen() {
  const navigation = useRootScreenNavigation();
  const [isOn, setIsOn] = useState<boolean>(false);
  const openSignInModal = () => {
    setTimeout(() => {
      setIsOn(true);
    }, 100);
  };

  return (
    <SafeContainer>
      <WaveView actionAfterAnimation={openSignInModal}>
        <View style={[styles.topContainer]}>
          <SlideIn
            direction="T"
            isOn={isOn}
            duration={3000}
            initialValue={0}
            initialPosition={1200}
            destination={0}
          >
            <View style={[styles.card, { backgroundColor: colors.GREEN }]}>
              <Image source={icons.APPLE} style={styles.logo} />
            </View>
          </SlideIn>
          <SlideIn
            direction="T"
            isOn={isOn}
            delay={1000}
            duration={3000}
            initialValue={0}
            initialPosition={-1200}
            destination={10}
          >
            <View style={[styles.card, { backgroundColor: colors.BLUE }]}>
              <SocialButton
                social={'google'}
                style={[styles.button]}
                onPress={() => {
                  navigation.navigate('MainTab');
                }}
              />

              <SocialButton
                social={'kakao'}
                style={[styles.button]}
                onPress={() => {
                  navigation.navigate('MainTab');
                }}
              />

              <Button
                label="sss"
                style={[styles.button]}
                onPress={() => {
                  navigation.navigate('MainTab');
                }}
              />
            </View>
          </SlideIn>
        </View>
      </WaveView>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.PRIMARY3,
  },
  logo: {
    width: 200,
    height: 200,
  },
  labelWrapper: {
    marginTop: 24,
  },
  labelAccent: {
    color: colors.PRIMARY3,
  },
  button: {
    marginBottom: 20,
    width: 300,
  },
  card: {
    borderRadius: 20,
    backgroundColor: 'white',
    width: windowWidth - 40,

    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },

  slideIn: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 8.12,
    elevation: 16,
  },
});

export default SignInScreen;
