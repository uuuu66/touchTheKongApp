import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';

import { Text } from '@rneui/base';
import BackgroundColorChangeView from '@src/components/animations/BackgroundChangeView';
import Fade from '@src/components/animations/Fade';

import SlideY from '@src/components/animations/SlideY';
import { SafeContainer, Typo } from '@src/components/atoms';
import AnimatedLogo from '@src/components/atoms/Logo/AnimatedLogo';
import WaveView from '@src/components/atoms/WaveView';

import globalStyles from '@src/components/styles';
import { colors } from '@src/constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const { width: windowWidth } = Dimensions.get('window');
const SignInScreen: FunctionComponent<Props> = function SignInScreen() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const [isReverse, setIsReverse] = useState<boolean>(false);
  const [stage, setStage] = useState<number>(-1);
  const actionAfterAnimation = () => {
    setTimeout(() => {
      // setIsOn(false);
      // setIsReverse(true);
    }, 10000);
  };

  const sentences: string[][] = useMemo(
    () => [
      ['계정 정보가 있는지 확인중입니다.', '조금만', '기다려주세요'],
      ['계정정보를 못찾았어요.', '로그인하시거나', '회원가입해주세요'],
    ],
    [],
  );
  const delays: number[][] = useMemo(() => {
    return [
      [2400, 0],
      [2700, 200],
      [3000, 400],
    ];
  }, []);
  const renderSentences = useCallback(() => {
    return (
      <>
        <Fade
          style={[styles.button, globalStyles.boxShadow]}
          isIn
          isOn={stage >= 0}
          delay={delays[0][stage]}
          initialValue={0}
          duration={1000}
          resetTrigger={stage}
        >
          <Text>{sentences[stage][0] || ''}</Text>
        </Fade>
        <Fade
          style={[styles.button, globalStyles.boxShadow]}
          isIn
          isOn={stage >= 0}
          delay={delays[1][stage]}
          initialValue={0}
          duration={1000}
          resetTrigger={stage}
        >
          <Text>{sentences[stage][1] || ''}</Text>
        </Fade>
        <Fade
          style={[styles.button, globalStyles.boxShadow]}
          isIn
          isOn={stage >= 0}
          delay={delays[2][stage]}
          initialValue={0}
          duration={1000}
          resetTrigger={stage}
        >
          <Text>{sentences[stage][2] || ''}</Text>
        </Fade>
      </>
    );
  }, [stage, sentences, delays]);
  useEffect(() => {
    if (isOn) {
      setStage(prev => prev + 1);
    }
  }, [isOn]);
  useEffect(() => {
    if (stage === sentences.length) {
      setIsOn(false);
      setIsReverse(true);
    }
  }, [stage, sentences]);
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
            isOn={isOn}
            delay={1500}
            initialValue={0}
            initialPosition={0}
            destination={10000}
          >
            <AnimatedLogo isOn={isOn} isReverse={isReverse} />
          </SlideY>

          <Fade
            style={[globalStyles.boxShadow, { position: 'absolute', top: 40 }]}
            isIn
            isOn={stage === 0}
            delay={2000}
            initialValue={0}
            duration={1000}
          >
            <Pressable
              style={[styles.card]}
              onPress={() => {
                if (stage < sentences.length) setStage(prev => prev + 1);
              }}
            >
              {stage >= 0 && stage < sentences.length && renderSentences()}
            </Pressable>
          </Fade>
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
    padding: 24,
    borderRadius: 20,
    backgroundColor: colors.GRAY3,
    width: windowWidth - 40,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
