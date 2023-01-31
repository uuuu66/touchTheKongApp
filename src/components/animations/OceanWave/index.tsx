import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react';
import { StyleProp, ViewStyle, Animated, Easing } from 'react-native';

type Direction = 'TL' | 'TR' | 'T' | 'R' | 'L' | 'BR' | 'BL' | 'B';
interface Props {
  style?: StyleProp<ViewStyle>;

  initialValue: number;
  isOn?: boolean;
  direction: Direction;
}

const OceanWave: FunctionComponent<Props> = function OceanWave(props) {
  const { initialValue, style, isOn, direction } = props;
  const animationValue = useRef(new Animated.Value(initialValue || 0)).current;
  const directionValue = useRef(new Animated.Value(initialValue || 0)).current;
  const spin = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [`0deg`, `${360}deg`],
  });
  const directionPoints = useMemo<number[]>(() => {
    switch (direction) {
      case 'TR':
        return [1, 1];
      case 'TL':
        return [-1, 1];
      case 'T':
        return [0, 1];
      case 'R':
        return [1, 0];
      case 'L':
        return [-1, 0];
      case 'BR':
        return [1, -1];
      case 'B':
        return [0, -1];
      case 'BL':
        return [-1, -1];
      default:
        return [0, 0];
    }
  }, [direction]);

  const locationX = directionValue.interpolate({
    inputRange: [0, 0.3, 0.7, 1],
    outputRange: [
      directionPoints[0] * 0,
      directionPoints[0] * 300,
      directionPoints[0] * 600,
      directionPoints[0] * 2000,
    ],
  });
  const locationY = directionValue.interpolate({
    inputRange: [0, 0.3, 0.7, 1],
    outputRange: [
      directionPoints[1] * 0,
      directionPoints[1] * 300,
      directionPoints[1] * 600,
      directionPoints[1] * 2000,
    ],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [animationValue]);

  useEffect(() => {
    if (isOn) {
      Animated.timing(directionValue, {
        toValue: 1,
        easing: Easing.bounce,
        useNativeDriver: true,
        duration: 1000,
      }).start();
      animationValue.stopAnimation();
    }
  }, [isOn, directionValue, animationValue]);

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            { rotateZ: spin },
            { translateX: locationX },
            { translateY: locationY },
          ],
        },
      ]}
    />
  );
};

export default OceanWave;
