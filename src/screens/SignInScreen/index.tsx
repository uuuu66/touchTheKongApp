import React, { FunctionComponent, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import BackgroundColorChangeView from '@src/components/animations/BackgroundChangeView';
import { SafeContainer } from '@src/components/atoms';
import WaveView from '@src/components/atoms/WaveView';

import { colors } from '@src/constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const { width: windowWidth } = Dimensions.get('window');
const SignInScreen: FunctionComponent<Props> = function SignInScreen() {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isReverse, setIsReverse] = useState<boolean>(false);
  const actionAfterAnimation = () => {
    setTimeout(() => {
      setIsOn(false);
      setIsReverse(true);
    }, 3000);
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
        />
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
