import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from 'pages/home/index';

const Routes = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default Routes;
