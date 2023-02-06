import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react';
import { StyleProp, ViewStyle, Animated, Easing } from 'react-native';

type Direction = 'T' | 'B';
interface Props {
  positionStyle?: StyleProp<ViewStyle>;
  initialValue: number;
  isOn?: boolean;
  direction: Direction;
  initialPosition?: number;
  destination?: number;
  delay?: number;
  duration?: number;
  afterRotateDuration?: number;
  isRotateAfterSlideIn?: boolean;
  afterRotateDeg?: string;
}

const SlideY: FunctionComponent<Props> = function SlideY(props) {
  const {
    initialValue,
    children,
    isOn,
    direction,
    positionStyle,
    destination,
    initialPosition,
    delay = 300,
    duration = 1000,
    isRotateAfterSlideIn = false,
    afterRotateDeg,
    afterRotateDuration,
  } = props;
  const animationValue = useRef(new Animated.Value(initialValue || 0)).current;
  const rotateAfterSlideValue = useRef(
    new Animated.Value(initialValue || 0),
  ).current;
  const directionPoints = useMemo<string>(() => {
    switch (direction) {
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
  const rocateAfterSlideIn = rotateAfterSlideValue.interpolate({
    inputRange: [0, 1],
    outputRange: [directionPoints, afterRotateDeg || '0deg'],
  });
  useEffect(() => {
    if (isOn) {
      Animated.timing(animationValue, {
        toValue: 1,
        easing: Easing.cubic,
        useNativeDriver: true,
        delay,
        duration,
      }).start();
      if (isRotateAfterSlideIn)
        Animated.timing(rotateAfterSlideValue, {
          toValue: 1,
          easing: Easing.cubic,
          useNativeDriver: true,
          delay: delay + duration,
          duration: afterRotateDuration || duration || 100,
        }).start();
    }
  }, [
    isOn,
    delay,
    animationValue,
    rotateAfterSlideValue,
    isRotateAfterSlideIn,
    duration,
    afterRotateDuration,
  ]);

  return (
    <Animated.View
      style={[
        positionStyle,
        {
          transform: [
            { rotate: directionPoints },
            { translateY: viewLocation },
            { rotate: rocateAfterSlideIn },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default SlideY;
