import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import OceanWave from '@src/components/animations/OceanWave';

import { colors } from '@src/constants';
import { RootStackParams, useScreenRoute } from '@src/navigations';

interface Props {
  style?: StyleProp<ViewStyle>;
  actionAfterAnimation?: (e: {
    message: RouteProp<RootStackParams, keyof RootStackParams>;
  }) => void;
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

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
const WaveView: FunctionComponent<Props> = function WaveView(props) {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isRender, setIsRender] = useState<boolean>(true);
  const { style, children, actionAfterAnimation } = props;
  const route = useScreenRoute();
  const wave1Position = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      left: '40%',
      bottom: '45%',
    }),
    [],
  );
  const wave1BorderPosition = useMemo<StyleProp<ViewStyle>>(() => {
    return {
      position: 'absolute',
      left: '30%',
      bottom: '45%',
    };
  }, []);
  const wave2Position = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      right: '50%',
      bottom: '45%',
    }),
    [],
  );
  const wave2BorderPosition = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      right: '40%',
      bottom: '45%',
    }),
    [],
  );
  const wave3Position = useMemo<StyleProp<ViewStyle>>(
    () => ({ position: 'absolute', left: '50%', top: '45%' }),
    [],
  );
  const wave3BorderPosition = useMemo<StyleProp<ViewStyle>>(
    () => ({ position: 'absolute', left: '46%', top: '40%' }),
    [],
  );
  const wave4Position = useMemo<StyleProp<ViewStyle>>(
    () => ({ position: 'absolute', right: '50%', top: '45%' }),
    [],
  );
  const wave4BorderPosition = useMemo<StyleProp<ViewStyle>>(
    () => ({ position: 'absolute', right: '45%', top: '43%' }),
    [],
  );
  useEffect(() => {
    if (isOn) {
      if (actionAfterAnimation) actionAfterAnimation({ message: route });
      setTimeout(() => {
        setIsRender(false);
      }, 1000);
    }
  }, [isOn, actionAfterAnimation, route]);

  return (
    <Pressable
      onPress={() => {
        setIsOn(true);
      }}
      style={{ backgroundColor: colors.PRIMARY1 }}
    >
      <View
        style={[
          {
            width: windowWidth,
            height: windowHeight,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          },
        ]}
      >
        {children}
      </View>
      {isRender && (
        <View style={[style, styles.container]}>
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
            style={[
              styles.wave,
              { width: divWidth - 30, height: divWidth - 30 },
            ]}
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
        </View>
      )}
    </Pressable>
  );
};

export default WaveView;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    position: 'absolute',
    top: 0,
    width: windowWidth,
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
