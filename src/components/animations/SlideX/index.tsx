import React, { FunctionComponent, useEffect, useRef } from 'react';
import { StyleProp, ViewStyle, Animated, Easing } from 'react-native';

interface Props {
  positionStyle?: StyleProp<ViewStyle>;
  initialValue: number;
  isOn?: boolean;

  initialPosition?: number;
  destination?: number;
  delay?: number;
  duration?: number;
  afterRotateDuration?: number;
  isRotateAfterSlideIn?: boolean;
  afterRotateDeg?: string;
}

const SlideX: FunctionComponent<Props> = function SlideX(props) {
  const {
    initialValue,
    children,
    isOn,

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

  const viewLocation = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      initialPosition === 0 ? 0 : initialPosition || 1,
      destination === 0 ? 0 : destination || 0,
    ],
  });
  const rocateAfterSlideIn = rotateAfterSlideValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', afterRotateDeg || '0deg'],
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
            { translateX: viewLocation },
            { rotate: rocateAfterSlideIn },
          ],
        },
        {
          position: 'absolute',
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default SlideX;
