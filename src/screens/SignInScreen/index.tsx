import React, { FunctionComponent, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import BackgroundColorChangeView from '@src/components/animations/BackgroundChangeView';
import SlideY from '@src/components/animations/SlideY';
import { SafeContainer, Typo } from '@src/components/atoms';
import AnimatedLogo from '@src/components/atoms/Logo/AnimatedLogo';
import WaveView from '@src/components/atoms/WaveView';

import { colors } from '@src/constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
const SignInScreen: FunctionComponent<Props> = function SignInScreen() {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isReverse, setIsReverse] = useState<boolean>(false);

  const actionAfterAnimation = () => {
    setTimeout(() => {
      setIsOn(false);
      setIsReverse(true);
    }, 10000);
  };

  return (
    <SafeContainer>
      <WaveView
        onPress={() => {
          if (!isReverse) setIsOn(true);
        }}
        isOn={isOn}
        isReverse={isReverse}
        actionAfterAnimation={actionAfterAnimation}
      >
        <BackgroundColorChangeView
          style={[styles.topContainer]}
          isOn={isOn}
          isReverse={isReverse}
          changedBackgroundColors={[colors.PRIMARY3, colors.GRAY1]}
          reverseChangedBackgroundColors={[colors.GRAY1, colors.PRIMARY3]}
        >
          <View style={[styles.logoText]}>
            <SlideY
              direction="T"
              isOn={isOn}
              delay={1650}
              initialValue={0}
              initialPosition={0}
              destination={10000}
              positionStyle={[]}
            >
              <Typo type="H1" style={[styles.text]}>
                S
              </Typo>
            </SlideY>
            <SlideY
              direction="T"
              isOn={isOn}
              delay={1720}
              initialValue={0}
              initialPosition={0}
              destination={10000}
              positionStyle={[]}
            >
              <Typo type="H2" style={[styles.text]}>
                M
              </Typo>
            </SlideY>
            <SlideY
              direction="T"
              isOn={isOn}
              delay={1600}
              initialValue={0}
              initialPosition={0}
              destination={10000}
              positionStyle={[]}
            >
              <Typo type="H2" style={[styles.text]}>
                A
              </Typo>
            </SlideY>
          </View>
          <SlideY
            direction="T"
            isOn={isOn}
            delay={1500}
            initialValue={0}
            initialPosition={0}
            destination={10000}
          >
            <AnimatedLogo isOn={isOn} isReverse={isReverse} />
          </SlideY>
        </BackgroundColorChangeView>
      </WaveView>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.PRIMARY3,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.PRIMARY3,
  },
  logo: {
    width: 300,
    height: 300,
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
  bar: {
    borderRadius: 40,
    backgroundColor: colors.PRIMARY3,
    width: windowWidth - 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    position: 'relative',
    overflow: 'hidden',
  },
  circleMaker: {
    borderRadius: windowWidth * 2,
    width: windowWidth * 2,
    height: windowWidth * 2,
    position: 'absolute',
    backgroundColor: colors.PRIMARY3,
    bottom: 0,
  },
  card: {
    borderRadius: 20,
    backgroundColor: colors.GRAY1,
    width: windowWidth - 40,
    height: windowHeight - 100,
  },
  logoText: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
