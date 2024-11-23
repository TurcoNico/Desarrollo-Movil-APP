import React from 'react';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import { createStackNavigator } from './node_modules/@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import TurnoScreen from './screens/TurnoScreen';
import ConfigScreen from './screens/ConfigScreen';
import ErrorScreen from './screens/ErrorScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Error" component={ErrorScreen} />
        <Stack.Screen name="TurnoScreen" component={TurnoScreen}/>
        <Stack.Screen name="ConfigScreen" component={ConfigScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}