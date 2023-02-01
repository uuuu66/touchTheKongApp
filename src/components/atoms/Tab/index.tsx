/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FunctionComponent } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Camera } from 'react-native-vision-camera';
import { icons } from '@src/assets';
import TabButton from '@src/components/molecules/TabButton';
import TabMiddleButton from '@src/components/molecules/TabMiddleButton';
import { colors } from '@src/constants';
import { DataOption } from '@src/interfaces';

interface TabProps {
  items: DataOption<any>[];
  onSelect?: (value?: any) => void;
  value?: any;
}
const { width: windowWidth } = Dimensions.get('window');
const tabHeight = 60;
const Tab: FunctionComponent<TabProps> = function Tab(props) {
  const { items, onSelect, value } = props;
  const handlePressTabButton = (selectedValue: any) => {
    if (onSelect) onSelect(selectedValue);
  };
  const handlePressMiddleButton = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();
    console.log(cameraPermission, microphonePermission);
  };
  return (
    <View style={tabStyle.constainer}>
      {items.map(val => (
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
      ))}
      <TabMiddleButton
        onPress={handlePressMiddleButton}
        icon={icons.CAMERA}
        backgroundColor={colors.GRAY1}
        windowWidth={windowWidth}
        tabHeight={tabHeight}
      />
    </View>
  );
};

export default Tab;
const tabStyle = StyleSheet.create({
  constainer: {
    height: tabHeight + 40,
    width: '100%',
    flexDirection: 'row',
  },
  indicator: { height: 3 },
  button: { height: tabHeight + 40, flex: 1, backgroundColor: colors.PRIMARY3 },

  label: { fontSize: 13 },
});
