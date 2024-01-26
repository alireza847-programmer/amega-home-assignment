import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomNavigationRoute} from 'types/routes/bottomNavigation';

export const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<BottomNavigationRoute>>();
};
