import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type FeedStackParams = {
  MainTab: MainTabNavigationScreenParams;
  SignIn: { message: string } | undefined;
  SignUp: { message: string } | undefined;
};
export type HomeStackParams = {
  Home: MainTabNavigationScreenParams;
  SignIn: { message: string } | undefined;
  SignUp: { message: string } | undefined;
};

export type MainTabParams = {
  Feed: { message: string } | undefined;
  My: { message: string } | undefined;
};

export type FeedStackNavigationProp =
  NativeStackNavigationProp<FeedStackParams>;

export type MainTabNavigationProp = CompositeNavigationProp<
  FeedStackNavigationProp,
  BottomTabNavigationProp<MainTabParams>
>;

export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParams>;
