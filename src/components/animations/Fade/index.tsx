import React, { FunctionComponent, useEffect, useRef } from 'react';
import { StyleProp, ViewStyle, Animated, Easing } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  initialValue: number;
  isIn?: boolean;
  delay?: number;
  duration?: number;
  destination?: number;
  isOn?: boolean;

  afterAnimFunc?: () => void;
}

const Fade: FunctionComponent<Props> = function Fade(props) {
  const {
    initialValue,
    children,
    isIn,
    isOn,
    style,
    destination,
    delay = 300,
    duration = 1000,
    afterAnimFunc,
  } = props;
  const animationValue = useRef(new Animated.Value(initialValue || 0)).current;

  const opacityValue = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: isIn
      ? [0, destination === 0 ? 0 : destination || 1]
      : [1, destination || 0],
  });

  useEffect(() => {
    if (isOn) {
      Animated.timing(animationValue, {
        toValue: 1,
        easing: Easing.cubic,
        useNativeDriver: true,
        delay,
        duration,
      }).reset();
      Animated.timing(animationValue, {
        toValue: 1,
        easing: Easing.cubic,
        useNativeDriver: true,
        delay,
        duration,
      }).start();
      if (afterAnimFunc) {
        setTimeout(() => {
          afterAnimFunc();
        }, delay + duration);
      }
    }
  }, [isOn, delay, animationValue, duration, afterAnimFunc]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: opacityValue,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default Fade;
