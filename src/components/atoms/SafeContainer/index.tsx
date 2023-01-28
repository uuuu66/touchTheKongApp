import React, { FunctionComponent } from 'react';
import {
  ScrollView,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { Container } from './styles';
import * as Styled from './styles';
import { WithoutEdges } from './types';
import useSafeContainerInsets from './useSafeContainerInsets';

interface Props {
  wrapMode?: 'scroll' | 'keyboard-scroll';
  barStyle?: StatusBarStyle;
  backgroundColor?: string;
  statusBarColor?: string;
  topColor?: string;
  bottomColor?: string;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  withoutEdges?: WithoutEdges;
}

const SafeContainer: FunctionComponent<Props> = function SafeContainer({
  wrapMode,
  barStyle,
  backgroundColor,
  statusBarColor,
  topColor,
  bottomColor,
  style,
  contentContainerStyle,
  withoutEdges,
  children,
}) {
  const { top, bottom } = useSafeContainerInsets(withoutEdges);

  const renderContents = () => {
    switch (wrapMode) {
      case 'scroll':
        return (
          <ScrollView
            keyboardShouldPersistTaps={'handled'}
            contentContainerStyle={[styles.scrollView, contentContainerStyle]}
          >
            {children}
          </ScrollView>
        );
      case 'keyboard-scroll':
        return (
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'handled'}
            contentContainerStyle={[styles.scrollView, contentContainerStyle]}
            style={{ flex: 1 }}
          >
            {children}
          </KeyboardAwareScrollView>
        );
      default:
        return children;
    }
  };

  return (
    <Styled.Container
      backgroundColor={backgroundColor}
      style={[styles.container, style]}
    >
      {(statusBarColor || backgroundColor) && (
        <StatusBar
          backgroundColor={statusBarColor ?? backgroundColor}
          barStyle={barStyle ?? 'dark-content'}
        />
      )}
      <Styled.SafeArea height={top} color={topColor ?? backgroundColor} />
      {renderContents()}
      <Styled.SafeArea height={bottom} color={bottomColor ?? backgroundColor} />
    </Styled.Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default SafeContainer;
