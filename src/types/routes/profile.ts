import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomNavigationRoute} from './bottomNavigation';

export type ProfileProps = NativeStackScreenProps<
  BottomNavigationRoute,
  'bottomNavigationProfile'
>;
