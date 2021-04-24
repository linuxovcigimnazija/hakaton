//TabNavigator File
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DashboardStackNavigator,
  NotificationStackNavigator,
  ProfileStackNavigator,
} from './StackNavigator';
import CustomTab from 'commontab/CustomTab';
import Images from 'constants/Images';
import Dashboard from 'component/Dashboard/Dashboard';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTab {...props} />}
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      initialRouteName={'Notification'}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        initialParams={{icon: Images.activeHome, icon1: Images.deActiveHome}}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStackNavigator}
        initialParams={{
          icon: Images.activeNotification,
          icon1: Images.deActiveNotification,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        initialParams={{
          icon: Images.tabUserprofile,
          icon1: Images.tabUserprofile,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
