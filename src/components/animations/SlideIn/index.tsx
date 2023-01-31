import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react';
import { StyleProp, ViewStyle, Animated, Easing } from 'react-native';

type Direction = 'TL' | 'TR' | 'T' | 'R' | 'L' | 'BR' | 'BL' | 'B';
interface Props {
  positionStyle?: StyleProp<ViewStyle>;
  initialValue: number;
  isOn?: boolean;
  direction: Direction;
  initialPosition?: number;
  destination?: number;
  delay?: number;
}

const SlideIn: FunctionComponent<Props> = function SlideIn(props) {
  const {
    initialValue,
    children,
    isOn,
    direction,
    positionStyle,
    destination,
    initialPosition,
    delay = 300,
  } = props;
  const animationValue = useRef(new Animated.Value(initialValue || 0)).current;

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
        return '0deg';
      case 'BL':
        return '225deg';
      default:
        return '0deg';
    }
  }, [direction]);
  const viewLocation = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      initialPosition === 0 ? 0 : initialPosition || 1,
      destination === 0 ? 0 : destination || 0,
    ],
  });
  useEffect(() => {
    if (isOn) {
      Animated.timing(animationValue, {
        toValue: 1,
        easing: Easing.cubic,
        useNativeDriver: true,
        delay,
        duration: 1000,
      }).start();
    }
  }, [isOn, delay, animationValue]);

  return (
    <Animated.View
      style={[
        positionStyle,
        {
          transform: [
            { rotate: directionPoints },
            { translateY: viewLocation },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default SlideIn;
