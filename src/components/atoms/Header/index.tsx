import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Header as CustomHeader, HeaderProps } from '@rneui/themed';
import { colors } from '@src/constants';

interface CustomHeaderProps extends HeaderProps {
  onPressHeader?: (title?: string) => void;
  title?: string;
}

const Header: FunctionComponent<CustomHeaderProps> = function Header(props) {
  const { onPressHeader, title, ...rest } = props;

  return (
    <CustomHeader
      statusBarProps={{ barStyle: 'light-content' }}
      barStyle="light-content" // or directly
      centerComponent={{
        text: title,
        style: { color: '#fff' },
      }}
      containerStyle={styles.headerContainer}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.PRIMARY1,
    justifyContent: 'space-around',
    // width: '100%',

    // height: 40,
    // maxHeight: 40,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
