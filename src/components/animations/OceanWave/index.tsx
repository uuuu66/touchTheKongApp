import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react';
import { StyleProp, ViewStyle, Animated, Easing } from 'react-native';

type Direction = 'TL' | 'TR' | 'T' | 'R' | 'L' | 'BR' | 'BL' | 'B';
interface Props {
  style?: StyleProp<ViewStyle>;
  positionStyle?: StyleProp<ViewStyle>;
  initialValue: number;
  isOn?: boolean;
  isReverseOn?: boolean;

  direction: Direction;
}

const OceanWave: FunctionComponent<Props> = function OceanWave(props) {
  const { initialValue, style, isOn, isReverseOn, direction, positionStyle } =
    props;
  const rotationValue = useRef(new Animated.Value(initialValue || 0)).current;
  const animationValue = useRef(new Animated.Value(initialValue || 1)).current;
  const directionValue = useRef(new Animated.Value(initialValue || 0)).current;
  const reveseDirectionValue = useRef(new Animated.Value(0)).current;

  const directionPoints = useMemo<string>(() => {
    switch (direction) {
      case 'TR':
        return '45deg';
      case 'TL':
        return '-45deg';
      case 'T':
        return '0deg';
      case 'L':
        return '90deg';
      case 'R':
        return '270deg';
      case 'BR':
        return '135deg';
      case 'B':
        return '180deg';
      case 'BL':
        return '225deg';
      default:
        return '0deg';
    }
  }, [direction]);

  const spin = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [`0deg`, `${360}deg`],
  });

  const locationX = directionValue.interpolate({
    inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.8, 0.9, 1],
    outputRange: [2000, 1400, 900, 600, 300, 0, 300, 600, 2000],
  });
  const reverseLocationX = reveseDirectionValue.interpolate({
    inputRange: [0, 0.3, 0.7, 1],
    outputRange: [2000, 600, 300, 0],
  });
  const rotateAnim = Animated.loop(
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  );

  const translate = Animated.timing(directionValue, {
    toValue: 1,
    easing: Easing.elastic(1),
    useNativeDriver: true,
    duration: 1000,
  });
  const translateReverse = Animated.timing(reveseDirectionValue, {
    toValue: 1,
    easing: Easing.elastic(1),
    useNativeDriver: true,
    duration: 1000,
  });
  const initialTranslate = Animated.timing(directionValue, {
    toValue: 0.5,
    easing: Easing.elastic(1),
    useNativeDriver: true,
    delay: 500,
    duration: 2000,
  });
  useEffect(() => {
    initialTranslate.start();
    rotateAnim.start();

    // translate.start();
  }, [rotateAnim, initialTranslate, translate]);
  useEffect(() => {
    if (isOn) {
      translate.start();
    }
  }, [isOn, translate, animationValue]);

  useEffect(() => {
    if (isReverseOn) {
      translateReverse.start();
    }
  }, [isReverseOn, translateReverse]);

  return isReverseOn ? (
    <Animated.View
      style={[
        positionStyle,
        {
          position: 'absolute',
          transform: [
            { rotate: directionPoints },
            { translateX: reverseLocationX },
          ],
        },
      ]}
    >
      <Animated.View
        style={[
          style,
          {
            transform: [{ rotateZ: spin }],
          },
        ]}
      />
    </Animated.View>
  ) : (
    <Animated.View
      style={[
        positionStyle,
        {
          position: 'absolute',
          transform: [{ rotate: directionPoints }, { translateX: locationX }],
        },
      ]}
    >
      <Animated.View
        style={[
          style,
          {
            transform: [{ rotateZ: spin }],
          },
        ]}
      />
    </Animated.View>
  );
};

export default OceanWave;
