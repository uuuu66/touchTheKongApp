/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Tab as CustomTab } from '@rneui/base';
import { DataOption } from '@src/interfaces';

interface TabProps {
  items: DataOption<any>[];
  onSelect?: (value?: any) => void;
  value?: any;
}

const Tab: FunctionComponent<TabProps> = function Tab(props) {
  const { items, onSelect, value } = props;
  const [number, setNumber] = useState(
    value ? items.findIndex(val => val.value === value) : 0,
  );
  return (
    <View>
      <CustomTab
        containerStyle={tabStyle.constainer}
        indicatorStyle={tabStyle.indicator}
        onChange={e => {
          if (onSelect) onSelect(items.find((_, index) => index === e)?.value);
          setNumber(e);
        }}
        value={number}
      >
        {items.map(val => (
          <CustomTab.Item
            key={val.value}
            titleStyle={tabStyle.label}
            buttonStyle={tabStyle.button}
            title={val.label}
          />
        ))}
      </CustomTab>
    </View>
  );
};

export default Tab;
const tabStyle = StyleSheet.create({
  constainer: { height: 60 },
  indicator: { height: 3 },
  button: { height: 60 },
  label: { fontSize: 13 },
});
