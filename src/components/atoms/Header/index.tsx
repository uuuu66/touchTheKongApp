import React, { FunctionComponent } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Header as CustomHeader, HeaderProps } from '@rneui/themed';
import icons from '@src/assets/icons';
import { colors } from '@src/constants';

interface CustomHeaderProps extends HeaderProps {
  onPressHeader?: (title?: string) => void;
  title?: string;
}

const Header: FunctionComponent<CustomHeaderProps> = function Header(props) {
  const { onPressHeader, title, ...rest } = props;

  return (
    <CustomHeader
      statusBarProps={{
        barStyle: 'light-content',
        backgroundColor: colors.BLUE,
      }}
      centerComponent={{
        children: (
          <Image source={icons.APP_LOGO} style={[{ width: 40, height: 40 }]} />
        ),
        style: [styles.heading],
      }}
      containerStyle={styles.headerContainer}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.GRAY1,
    justifyContent: 'space-around',
    width: '100%',
    color: colors.RED,
  },
  heading: {
    color: colors.GRAY13,
    fontSize: 15,
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
