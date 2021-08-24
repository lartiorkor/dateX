// Contains the main app content
// which is the screen the user will
// be sent to after logging in or
// signing up

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home';
import ChatRoomScreen from './ChatRoomScreen';

const CentralStack = createStackNavigator();

const Central = () => {
  return(
    <CentralStack.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false
    }}>
      <CentralStack.Screen name='Home' component={Home}/>
      <CentralStack.Screen name='ChatRoomScreen' component={ChatRoomScreen}/>
    </CentralStack.Navigator>
  )
}

export default Central;