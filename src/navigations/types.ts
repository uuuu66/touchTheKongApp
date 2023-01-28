import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParams = {
  MainTab: MainTabNavigationScreenParams;
  SignIn: { message: string } | undefined;
  SignUp: { message: string } | undefined;
};

export type MainTabParams = {
  Home: { message: string } | undefined;
  My: { message: string } | undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParams>;

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParams>
>;

export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParams>;
