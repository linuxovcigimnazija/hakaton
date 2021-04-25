//Navigation File
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardStackNavigator, StackNavigator } from './Navigation/StackNavigator';
import TabNavigator from './Navigation/TabNavigator';
const App = () => {

    return (
        <NavigationContainer>
            <StackNavigator />
            {/* <DashboardStackNavigator /> */}
            {/* <TabNavigator /> */}
        </NavigationContainer>
    );
};

export default App;