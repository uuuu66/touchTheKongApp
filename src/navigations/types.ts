import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParams = {
  Home: { message: string } | undefined;
  SignIn: { message: string } | undefined;
  SignUp: { message: string } | undefined;
  MainTab: { message: string } | undefined;
  SignInModal: { message: string } | undefined;
};
export type FeedStackParams = {
  Feed: { message: string } | undefined;
  Home: { home: string } | undefined;
};
export type MainTabParams = {
  Feed: { message: string } | undefined;
  Map: { message: string } | undefined;
  My: { message: string } | undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParams>;

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParams>
>;
export type FeedStackNavigationProp =
  NativeStackNavigationProp<FeedStackParams>;
export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParams>;
