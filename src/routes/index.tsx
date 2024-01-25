import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigationStack from './bottomNavigation';

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomNavigationStack />
    </NavigationContainer>
  );
};

export default Routes;
