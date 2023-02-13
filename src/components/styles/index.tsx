import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
const { boxShadow } = globalStyles;
export { boxShadow };

export default globalStyles;
