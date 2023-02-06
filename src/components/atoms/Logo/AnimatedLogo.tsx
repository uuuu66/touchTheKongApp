import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import BackgroundColorChangeView from '@src/components/animations/BackgroundChangeView';
import { colors } from '@src/constants';

interface Props {
  width?: number;
  isOn?: boolean;
  isReverse?: boolean;
  changedBackgroundColors?: string[];
  reverseChangedBackgroundColors?: string[];
}
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const AnimatedLogo: FunctionComponent<Props> = function AnimatedLogo(props) {
  const {
    width,
    isOn,
    isReverse,
    changedBackgroundColors,
    reverseChangedBackgroundColors,
  } = props;
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
      width: width || windowWidth - 40,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 60,
      position: 'relative',
      overflow: 'hidden',
    },
    circleMaker: {
      borderRadius: windowWidth * 2,
      width: width || windowWidth * 2,
      height: width || windowWidth * 2,
      position: 'absolute',
      backgroundColor: colors.PRIMARY3,
      bottom: 0,
    },
    card: {
      borderRadius: 20,
      backgroundColor: colors.GRAY1,
      width: width || windowWidth - 40,
      height: width || windowHeight - 100,
    },
    logoText: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <BackgroundColorChangeView
      isOn={isOn}
      isReverse={isReverse}
      changedBackgroundColors={
        changedBackgroundColors || [colors.PRIMARY3, colors.GRAY1]
      }
      reverseChangedBackgroundColors={
        reverseChangedBackgroundColors || [colors.GRAY1, colors.PRIMARY3]
      }
      style={[styles.bar]}
    >
      <View style={[styles.circleMaker]} />
    </BackgroundColorChangeView>
  );
};

export default AnimatedLogo;
