//StackNavigator File
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'component/Home/Home';
import AppIntro from 'component/AppIntro/AppIntro';
import SignIn from 'component/SignIn/SignIn';
import SignUp from 'component/SignUp/SignUp';
import ForgotPassword from 'component/Forgot/ForgotPassword';
import Email from 'component/Forgot/Email';
import Phone from 'component/Forgot/Phone';
import NewPassword from 'component/Forgot/NewPassword';
import Dashboard from 'component/Dashboard/Dashboard';
import Notification from 'component/Notification/Notification';
import Profile from 'component/Profile/Profile';
import SearchProduct from 'component/SearchProduct/SearchProduct';
import CheckOut from 'component/CheckOut/CheckOut';
import Payment from 'component/Payment/Payment';
import Scanner from 'component/Payment/Scanner';
import TopUp from 'component/TopUp/TopUp';
import TabNavigator from './TabNavigator';
import AddCart from 'component/SearchProduct/AddCart';
import Category from 'component/Category/Category';
import SubCategory from 'component/Category/SubCategory';
import PaymentType from 'component/Payment/PaymentType';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'AppIntro'} headerMode={false}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AppIntro" component={AppIntro} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="Dashboard" component={TabNavigator} />
      <Stack.Screen name="SearchProduct" component={SearchProduct} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="TopUp" component={TopUp} />
      <Stack.Screen name="AddCart" component={AddCart} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="SubCategory" component={SubCategory} />
      <Stack.Screen name="PaymentType" component={PaymentType} />
    </Stack.Navigator>
  );
};

const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Dashboard'} headerMode={false}>
      <Stack.Screen name="Dashboard" component={TabNavigator} />
      <Stack.Screen name="SearchProduct" component={SearchProduct} />
    </Stack.Navigator>
  );
};

const NotificationStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Notification'} headerMode={false}>
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Profile'} headerMode={false}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {
  StackNavigator,
  DashboardStackNavigator,
  NotificationStackNavigator,
  ProfileStackNavigator,
};
