import React, { FunctionComponent, useState } from 'react';
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import OceanWave from '@src/components/animations/OceanWave';

import { colors } from '@src/constants';
import Pressable from '../Pressable';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const divWidth = 670;
const LoadingVew: FunctionComponent<Props> = function LoadingVew() {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <Pressable
      onPress={() => {
        setIsOn(true);
      }}
    >
      <View style={styles.container}>
        <OceanWave
          isOn={isOn}
          direction="R"
          initialValue={0}
          style={[styles.wave2, { left: 100, bottom: 470 }]}
        />
        <OceanWave
          initialValue={0}
          isOn={isOn}
          direction="R"
          style={[
            styles.wave1,
            { left: 115, bottom: 485, backgroundColor: 'red' },
          ]}
        />

        <OceanWave
          isOn={isOn}
          direction="T"
          initialValue={0}
          style={[styles.wave2, { left: -450, bottom: 400 }]}
        />
        <OceanWave
          isOn={isOn}
          direction="T"
          initialValue={0}
          style={[
            styles.wave1,
            { left: -470, bottom: 420, backgroundColor: 'yellow' },
          ]}
        />

        <OceanWave
          direction="B"
          isOn={isOn}
          initialValue={0}
          style={[styles.wave2]}
        />
        <OceanWave
          direction="B"
          isOn={isOn}
          initialValue={0}
          style={[styles.wave1]}
        />
        <OceanWave
          direction="R"
          isOn={isOn}
          initialValue={0}
          style={[
            styles.wave2,
            { left: -335, bottom: -300, width: 740, height: 740 },
          ]}
        />
        <OceanWave
          direction="R"
          isOn={isOn}
          initialValue={0}
          style={[
            styles.wave1,
            {
              left: -345,
              bottom: -320,
              backgroundColor: 'green',
              width: 740,
              height: 740,
            },
          ]}
        />
      </View>
    </Pressable>
  );
};

export default LoadingVew;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.PINK,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  wave1: {
    height: divWidth,
    position: 'absolute',
    left: 165,
    bottom: -200,
    width: divWidth,
    borderRadius: 80,
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 278,
    borderTopLeftRadius: 280,
    borderTopRightRadius: 256,
    borderBottomRightRadius: 295,
    borderBottomLeftRadius: 300,
    borderTopEndRadius: 277,
    borderTopStartRadius: 288,
    backgroundColor: colors.BLUE,
  },
  wave2: {
    height: divWidth,
    position: 'absolute',
    left: 150,
    bottom: -185,
    width: divWidth,
    borderRadius: 80,
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 278,
    borderTopLeftRadius: 280,
    borderTopRightRadius: 256,
    borderBottomRightRadius: 295,
    borderBottomLeftRadius: 300,
    borderTopEndRadius: 277,
    borderTopStartRadius: 288,
    backgroundColor: colors.APPLE_BLACK,
  },
});
