import React, { FunctionComponent, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { Text } from '@rneui/base';
import { icons } from '@src/assets';
import SlideIn from '@src/components/animations/SlideInY';
import { SafeContainer, Typo } from '@src/components/atoms';
import WaveView from '@src/components/atoms/WaveView';
import { Button } from '@src/components/molecules';
import SocialButton from '@src/components/molecules/SocialButton';
import { colors } from '@src/constants';
import { useRootScreenNavigation } from '@src/navigations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');
const SignInScreen: FunctionComponent<Props> = function SignInScreen() {
  const navigation = useRootScreenNavigation();
  const [isOn, setIsOn] = useState<boolean>(false);
  const openSignInModal = () => {
    setTimeout(() => {
      setIsOn(true);
    }, 100);
  };
  const style: StyleProp<ViewStyle> = {
    transform: [{ rotate: '270deg' }, { translateY: 1000 }],
  };
  return (
    <SafeContainer>
      <WaveView actionAfterAnimation={openSignInModal}>
        <View style={[styles.topContainer]}>
          <Text />
        </View>

        <SlideIn
          direction="T"
          initialValue={0}
          isOn={isOn}
          initialPosition={-windowHeight}
          destination={40}
          positionStyle={[styles.slideIn]}
        >
          <View style={[styles.card]}>
            <Image source={icons.APPLE} style={styles.logo} />
            <Typo type="H1" style={{ textAlign: 'center', marginBottom: 20 }}>
              집고.길고.
            </Typo>
            <SlideIn
              initialValue={0}
              positionStyle={[style]}
              isOn={isOn}
              initialPosition={1000}
              delay={1100}
              destination={0}
              direction="B"
              isRotateAfterSlideIn
              duration={500}
            >
              <SocialButton
                social={'google'}
                style={[styles.button]}
                onPress={() => {
                  navigation.navigate('MainTab');
                }}
              />
            </SlideIn>
            <SlideIn
              positionStyle={[style]}
              initialValue={0}
              isOn={isOn}
              initialPosition={1000}
              delay={1300}
              destination={0}
              direction="B"
              isRotateAfterSlideIn
              duration={500}
            >
              <SocialButton
                social={'kakao'}
                style={[styles.button]}
                onPress={() => {
                  navigation.navigate('MainTab');
                }}
              />
            </SlideIn>
            <SlideIn
              positionStyle={[style]}
              initialValue={0}
              initialPosition={1000}
              isOn={isOn}
              delay={1400}
              destination={0}
              direction="B"
              isRotateAfterSlideIn
              duration={500}
            >
              <Button
                label="sss"
                style={[styles.button]}
                onPress={() => {
                  navigation.navigate('MainTab');
                }}
              />
            </SlideIn>
          </View>
        </SlideIn>
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
    paddingTop: 100,
    paddingBottom: 100,
  },

  slideIn: {
    transform: [{ translateY: windowHeight + 1000 }],
    position: 'absolute',

    left: 20,
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
