import React, { FunctionComponent, useMemo, useState } from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Pressable,
  Dimensions,
  Text,
} from 'react-native';
import OceanWave from '@src/components/animations/OceanWave';

import SlideIn from '@src/components/animations/SlideIn';
import { colors } from '@src/constants';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const divWidth = 670;
const waveBorderRadius = {
  borderRadius: 80,
  borderBottomStartRadius: 300,
  borderBottomEndRadius: 278,
  borderTopLeftRadius: 280,
  borderTopRightRadius: 256,
  borderBottomRightRadius: 295,
  borderBottomLeftRadius: 300,
  borderTopEndRadius: 277,
  borderTopStartRadius: 288,
};
const { height: windowheight, width: windowWidth } = Dimensions.get('window');

const WaveView: FunctionComponent<Props> = function WaveView() {
  const [isOn, setIsOn] = useState<boolean>(false);
  const wave1Position = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      right: -400,
      top: -300,
    }),
    [],
  );
  const wave1BorderPosition = useMemo<StyleProp<ViewStyle>>(() => {
    return {
      position: 'absolute',
      right: -400,
      top: -300,
    };
  }, []);
  const wave2Position = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      left: -400,
      top: -300,
    }),
    [],
  );
  const wave2BorderPosition = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      left: -400,
      top: -300,
    }),
    [],
  );
  const wave3Position = useMemo<StyleProp<ViewStyle>>(
    () => ({ position: 'absolute', left: 100, bottom: -250 }),
    [],
  );
  const wave3BorderPosition = useMemo<StyleProp<ViewStyle>>(
    () => ({ position: 'absolute', left: 100, bottom: -250 }),
    [],
  );
  const wave4Position = useMemo<StyleProp<ViewStyle>>(
    () => ({ position: 'absolute', right: 100, bottom: -250 }),
    [],
  );
  const wave4BorderPosition = useMemo<StyleProp<ViewStyle>>(
    () => ({ position: 'absolute', right: 90, bottom: -250 }),
    [],
  );
  const SlideInViewBottomToTopPositon = useMemo<StyleProp<ViewStyle>>(
    () => ({
      width: windowWidth,
      height: windowheight,
      backgroundColor: colors.BLUE,
      transform: [{ translateY: windowheight }],
    }),
    [],
  );
  const SlideInViewTopToBottomPositon = useMemo<StyleProp<ViewStyle>>(
    () => ({
      width: windowWidth,
      height: windowheight,
      backgroundColor: colors.YELLOW,
      transform: [{ translateY: -200 }],
    }),
    [],
  );
  return (
    <Pressable
      onPress={() => {
        setIsOn(true);
      }}
    >
      <View style={styles.container}>
        <OceanWave
          isOn={isOn}
          direction="TR"
          initialValue={0}
          positionStyle={wave1BorderPosition}
          style={[
            styles.waveBorder,
            {
              width: styles.waveBorder.width + 10,
              height: styles.waveBorder.height + 10,
            },
          ]}
        />
        <OceanWave
          isOn={isOn}
          direction="TR"
          initialValue={0}
          positionStyle={wave1Position}
          style={[styles.wave, { backgroundColor: 'red' }]}
        />

        <OceanWave
          isOn={isOn}
          direction="TL"
          initialValue={0}
          positionStyle={wave2BorderPosition}
          style={[styles.waveBorder]}
        />
        <OceanWave
          isOn={isOn}
          direction="TL"
          initialValue={0}
          positionStyle={wave2Position}
          style={[styles.wave, { backgroundColor: 'yellow' }]}
        />

        <OceanWave
          direction="BR"
          isOn={isOn}
          initialValue={0}
          positionStyle={wave3BorderPosition}
          style={[
            styles.waveBorder,
            { width: divWidth + 10, height: divWidth + 10 },
          ]}
        />
        <OceanWave
          direction="BR"
          isOn={isOn}
          initialValue={0}
          positionStyle={wave3Position}
          style={[styles.wave, { width: divWidth - 30, height: divWidth - 30 }]}
        />
        <OceanWave
          direction="BL"
          isOn={isOn}
          initialValue={0}
          positionStyle={wave4BorderPosition}
          style={[styles.waveBorder]}
        />
        <OceanWave
          direction="BL"
          isOn={isOn}
          initialValue={0}
          positionStyle={wave4Position}
          style={[
            styles.wave,
            {
              backgroundColor: 'green',
            },
          ]}
        />
        <SlideIn
          initialPosition={-windowheight}
          destination={0}
          direction="B"
          isOn={isOn}
          delay={700}
          initialValue={0}
          positionStyle={SlideInViewTopToBottomPositon}
        />
        <SlideIn
          initialPosition={windowheight}
          destination={0}
          direction="T"
          isOn={isOn}
          initialValue={0}
          positionStyle={SlideInViewBottomToTopPositon}
        />
      </View>
    </Pressable>
  );
};

export default WaveView;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.PINK,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  wave: {
    height: divWidth,

    width: divWidth,
    backgroundColor: colors.BLUE,
    ...waveBorderRadius,
  },
  waveBorder: {
    height: divWidth + 24,

    width: divWidth + 24,

    backgroundColor: colors.APPLE_BLACK,
    ...waveBorderRadius,
  },
});
