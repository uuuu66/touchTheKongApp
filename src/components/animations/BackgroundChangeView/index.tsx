import React, { FunctionComponent, useEffect, useRef } from 'react';
import { StyleProp, ViewStyle, Animated, Easing } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  isOn?: boolean;
  isReverse?: boolean;
  changedBackgroundColors: string[];
  reverseChangedBackgroundColors: string[];
}

const BackgroundColorChangeView: FunctionComponent<Props> =
  function BackgroundChangeView(props) {
    const {
      style,
      isOn,
      isReverse,
      changedBackgroundColors,
      reverseChangedBackgroundColors,
      children,
    } = props;
    const animationInitialValue = useRef(new Animated.Value(0)).current;
    const reverseInitialValue = useRef(new Animated.Value(0)).current;
    const backgroundColors = animationInitialValue.interpolate({
      inputRange: [0, 1],
      outputRange: changedBackgroundColors || ['pink', 'white'],
    });
    const reverseBackgroundColors = reverseInitialValue.interpolate({
      inputRange: [0, 1],
      outputRange: reverseChangedBackgroundColors,
    });
    useEffect(() => {
      if (isOn)
        Animated.timing(animationInitialValue, {
          toValue: 1,
          easing: Easing.cubic,
          useNativeDriver: false,
          duration: 1300,
        }).start();
    }, [isOn, animationInitialValue]);
    useEffect(() => {
      if (isReverse)
        Animated.timing(reverseInitialValue, {
          toValue: 1,
          easing: Easing.cubic,
          useNativeDriver: false,
          duration: 1300,
        }).start();
    }, [isReverse, reverseInitialValue]);
    return (
      <Animated.View
        style={[
          style,
          {
            backgroundColor: isReverse
              ? reverseBackgroundColors
              : backgroundColors,
          },
        ]}
      >
        {children}
      </Animated.View>
    );
  };

export default BackgroundColorChangeView;
