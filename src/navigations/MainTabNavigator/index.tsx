import React, { useCallback } from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import CustomTab from '@src/components/atoms/Tab';
import HomeScreen from '@src/screens/HomeScreen';
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
          { label: '홈', value: 'Home' },
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
      <Tab.Screen name={'Feed'} component={HomeScreen} />
      <Tab.Screen name={'My'} component={MyScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
