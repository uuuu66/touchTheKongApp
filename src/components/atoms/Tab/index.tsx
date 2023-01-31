/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FunctionComponent } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { icons } from '@src/assets';
import TabButton from '@src/components/molecules/TabButton';
import TabMiddleButton from '@src/components/molecules/TabMiddleButton';
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
  return (
    <View style={tabStyle.constainer}>
      {items.map(val => (
        <TabButton
          style={tabStyle.button}
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
        onPress={() => {}}
        icon={icons.APP_LOGO}
        windowWidth={windowWidth}
        tabHeight={tabHeight}
      />
    </View>
  );
};

export default Tab;
const tabStyle = StyleSheet.create({
  constainer: { height: tabHeight, width: '100%', flexDirection: 'row' },
  indicator: { height: 3 },
  button: { height: tabHeight, flex: 1 },

  label: { fontSize: 13 },
});
