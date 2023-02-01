import React, { FunctionComponent } from 'react';
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { colors } from '@src/constants';
import Typo from '../Typo';

interface Props {
  style?: StyleProp<ViewStyle>;
  title?: string;
}

const Card: FunctionComponent<Props> = function Card(props) {
  const { title, style, children } = props;
  return (
    <View style={[style, styles.card]}>
      {title && (
        <Typo type="H4" style={[{ marginBottom: 5 }]}>
          {title}
        </Typo>
      )}
      {children}
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  card: {
    borderRadius: 1,
    shadowColor: colors.GRAY12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    padding: 20,
    width: '100%',
    backgroundColor: colors.GRAY1,
    flexDirection: 'column',
  },
});
