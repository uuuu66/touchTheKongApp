import React, { FunctionComponent } from 'react';
import {
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  ImageURISource,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import icons from '@src/assets/icons';
import { Typo } from '@src/components/atoms';
import Card from '@src/components/atoms/Card';
import { colors } from '@src/constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  title?: string;
  icon?: ImageSourcePropType & ImageURISource;
}

const PhotoCard: FunctionComponent<Props> = function PhotoCard(props) {
  const { style, title, icon } = props;
  return (
    <Card title={title} style={[style, { marginBottom: 20 }, styles.container]}>
      <View style={[styles.imageWrapper]}>
        <Image style={styles.image} source={icon || icons.APP_LOGO} />
      </View>
      <View style={[styles.container]}>
        <Typo>sss</Typo>
      </View>
    </Card>
  );
};

export default PhotoCard;

const styles = StyleSheet.create({
  image: { width: '100%', height: '100%' },
  imageWrapper: {
    shadowColor: colors.GRAY12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6.27,
    elevation: 10,
    height: 300,
    width: 300,
  },
  container: { justifyContent: 'center', alignItems: 'center' },
});
