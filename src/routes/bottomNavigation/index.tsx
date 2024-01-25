import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from 'pages/dashboard';
import {
  BOTTOM_NAVIGATION_DASHBOARD,
  BOTTOM_NAVIGATION_MARKET_DATA,
  BOTTOM_NAVIGATION_PROFILE,
} from 'routes/const';
import texts from 'locales/en';
import {PlusSvg} from 'assets/svgs';

const Tab = createBottomTabNavigator<any>();

const {
  navigation: {dashboard, marketData, profile},
} = texts;

const renderIconColor = (focused: boolean) => {
  if (!focused) {
    return '#000';
  }
  return '#0087E0';
};
const tabs = [
  {
    label: dashboard,
    name: BOTTOM_NAVIGATION_DASHBOARD,
    componenet: Dashboard,
    icon: ({focused, size}: {focused: boolean; size: number}) => (
      <PlusSvg fill={renderIconColor(focused)} width={size} height={size} />
    ),
  },
  {
    label: marketData,
    name: BOTTOM_NAVIGATION_MARKET_DATA,
    componenet: Dashboard,
    icon: ({focused, size}: {focused: boolean; size: number}) => (
      <PlusSvg fill={renderIconColor(focused)} width={size} height={size} />
    ),
  },
  {
    label: profile,
    name: BOTTOM_NAVIGATION_PROFILE,
    componenet: Dashboard,
    icon: ({focused, size}: {focused: boolean; size: number}) => (
      <PlusSvg fill={renderIconColor(focused)} width={size} height={size} />
    ),
  },
];
const BottomNavigationStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {tabs.map(({componenet, label, name, icon}) => (
        <Tab.Screen
          key={name}
          options={{
            tabBarLabel: label,
            tabBarIcon: icon,
          }}
          name={name}
          component={componenet}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigationStack;
