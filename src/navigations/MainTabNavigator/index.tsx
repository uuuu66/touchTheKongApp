import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@src/screens/HomeScreen';
import MyScreen from '@src/screens/MyScreen';
import { MainTabParams } from '../types';

const Tab = createBottomTabNavigator<MainTabParams>();

const MainTabNavigator = function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'My'} component={MyScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
