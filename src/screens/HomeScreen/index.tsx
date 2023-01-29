import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { fonts } from '@src/assets';

import { SafeContainer } from '@src/components/atoms';
import Header from '@src/components/atoms/Header';
import { colors } from '@src/constants';
import { MainTabParams } from '@src/navigations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const HomeScreen: FunctionComponent<Props> = function HomeScreen() {
  const route = useRoute<RouteProp<MainTabParams, 'Home'>>();
  return (
    <SafeContainer>
      <Header title="home" />
      <View>
        <Text style={styles.text}>{'HomeScreen'}</Text>
        <Text style={styles.text}>{route.params?.message}</Text>
      </View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
  },
  text: {
    color: colors.PRIMARY3,
    fontFamily: fonts.BOLD,
  },
  title: {
    marginTop: 24,
  },
  body: {
    backgroundColor: 'yellow',
  },
});

export default HomeScreen;
