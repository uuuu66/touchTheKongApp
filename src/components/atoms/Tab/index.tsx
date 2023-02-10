/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Path, Svg } from 'react-native-svg';
import { Camera } from 'react-native-vision-camera';

import { icons } from '@src/assets';
import TabButton from '@src/components/molecules/TabButton';
import TabMiddleButton from '@src/components/molecules/TabMiddleButton';
import { boxShadow } from '@src/components/styles';
import { colors } from '@src/constants';
import { DataOption } from '@src/interfaces';

interface TabProps {
  items: DataOption<any>[];
  onSelect?: (value?: any) => void;
  value?: any;
}
function TabBg({ color = '#FFFFFF', ...props }) {
  return (
    <Svg width={100} height={tabHeight} viewBox="0 0 75 100" {...props}>
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      />
    </Svg>
  );
}

const { width: windowWidth } = Dimensions.get('window');
const tabHeight = 60;
const Tab: FunctionComponent<TabProps> = function Tab(props) {
  const { items, onSelect, value } = props;
  const handlePressTabButton = (selectedValue: any) => {
    if (onSelect) onSelect(selectedValue);
  };
  const [menus, setMenus] = useState(items);

  const handlePressMiddleButton = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();
    console.log(cameraPermission, microphonePermission);
  };
  useEffect(() => {
    const newMenus = [...items];
    newMenus.splice(items.length / 2, 0, {
      value: 'bg',
      label: 'bg',
    });
    setMenus(newMenus);
  }, [items]);
  return (
    <View style={[tabStyle.constainer, boxShadow]}>
      {menus.map(val =>
        val.value === 'bg' ? (
          <TabBg key={val.value} />
        ) : (
          <TabButton
            style={[tabStyle.button]}
            size="small"
            key={val.value}
            label={val.label}
            icon={icons.KAKAO}
            onPress={() => {
              handlePressTabButton(val.value);
            }}
            isSelect={value === val.value}
          />
        ),
      )}

      <TabMiddleButton
        onPress={handlePressMiddleButton}
        icon={icons.CAMERA}
        windowWidth={windowWidth}
        tabHeight={tabHeight}
      />
    </View>
  );
};

export default Tab;
const tabStyle = StyleSheet.create({
  constainer: {
    height: tabHeight,
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  indicator: { height: 3 },
  button: { height: tabHeight, flex: 1, backgroundColor: colors.PRIMARY3 },

  label: { fontSize: 13 },
});
