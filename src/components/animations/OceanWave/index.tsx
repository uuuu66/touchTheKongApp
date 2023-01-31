import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react';
import { StyleProp, ViewStyle, Animated, Easing } from 'react-native';

type Direction = 'TL' | 'TR' | 'T' | 'R' | 'L' | 'BR' | 'BL' | 'B';
interface Props {
  style?: StyleProp<ViewStyle>;
  positionStyle?: StyleProp<ViewStyle>;
  initialValue: number;
  isOn?: boolean;
  direction: Direction;
}

const OceanWave: FunctionComponent<Props> = function OceanWave(props) {
  const { initialValue, style, isOn, direction, positionStyle } = props;
  const animationValue = useRef(new Animated.Value(initialValue || 0)).current;
  const directionValue = useRef(new Animated.Value(initialValue || 0)).current;
  const spin = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [`0deg`, `${360}deg`],
  });
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

  const locationX = directionValue.interpolate({
    inputRange: [0, 0.3, 0.7, 1],
    outputRange: [0, 300, 600, 2000],
  });
  // const locationY = directionValue.interpolate({
  //   inputRange: [0, 0.3, 0.7, 1],
  //   outputRange: [
  //     directionPoints[1] * 0,
  //     directionPoints[1] * 300,
  //     directionPoints[1] * 600,
  //     directionPoints[1] * 2000,
  //   ],
  // });

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
        easing: Easing.cubic,
        useNativeDriver: true,
        duration: 1000,
      }).start();
      animationValue.stopAnimation();
    }
  }, [isOn, directionValue, animationValue]);

  return (
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
