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
      <Image style={styles.image} source={icon || icons.CAMERA} />
      <View style={[styles.container]}>
        <Typo>sss</Typo>
      </View>
    </Card>
  );
};

export default PhotoCard;

const styles = StyleSheet.create({
  image: {
    borderColor: colors.GRAY13,
    borderWidth: 2,
    height: 300,
    width: 300,
  },
  container: { justifyContent: 'center', alignItems: 'center' },
});
