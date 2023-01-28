import React, { FunctionComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { icons, images, fonts } from '@src/assets';
import { Typo } from '@src/components/atoms';
import { colors, strings } from '@src/constants';
import { MainTabParams } from '@src/navigations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const HomeScreen: FunctionComponent<Props> = function HomeScreen() {
  const route = useRoute<RouteProp<MainTabParams, 'Home'>>();
  return (
    <View>
      <Image source={icons.APP_LOGO} style={styles.image} />
      <Image source={images.GENESIS} style={styles.image} />
      <Text style={styles.text}>{'HomeScreen'}</Text>
      <Text style={styles.text}>{route.params?.message}</Text>
      <Typo type={'H1'} style={styles.title}>
        {strings.APP_NAME}
      </Typo>
      <Typo type={'BODY1'} style={styles.body}>
        {'SUBTITLE'}
      </Typo>
    </View>
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
