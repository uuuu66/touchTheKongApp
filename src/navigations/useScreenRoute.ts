import { RouteProp, useRoute } from '@react-navigation/native';
import { MainTabParams, RootStackParams } from './types';

export default <
  R extends keyof T,
  T extends RootStackParams | MainTabParams = RootStackParams,
>() => useRoute<RouteProp<T, R>>();
