import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import Login from './Login';
import SignUp from './SignUp';
import CreateProfile from './CreateProfile';
import {createStackNavigator} from '@react-navigation/stack';
import Central from './Central';

const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Profile"
      component={CreateProfile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Central"
      component={Central}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default RootStack;
