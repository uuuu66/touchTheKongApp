import React, { useCallback } from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import CustomTab from '@src/components/atoms/Tab';
import FeedScreen from '@src/screens/FeedStackScreen';

import MapScreen from '@src/screens/MapScreen';
import MyScreen from '@src/screens/MyScreen';
import { MainTabParams } from '../types';

const Tab = createBottomTabNavigator<MainTabParams>();

const MainTabNavigator = function MainTabNavigator() {
  const TabBar = useCallback((props: BottomTabBarProps) => {
    const { navigation } = props;
    const onSelect = (value: string) => {
      navigation.navigate(value);
    };
    return (
      <CustomTab
        onSelect={onSelect}
        items={[
          { label: '홈', value: 'Feed' },
          { label: '지도', value: 'Map' },
          { label: '인기', value: 'Famous' },
          { label: '마이', value: 'My' },
        ]}
      />
    );
  }, []);

  return (
    <Tab.Navigator
      tabBar={TabBar}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={'Feed'} component={FeedScreen} />
      <Tab.Screen name={'My'} component={MyScreen} />
      <Tab.Screen name={'Map'} component={MapScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
