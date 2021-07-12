import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from './screens/Login'
import SignUp from './screens/SignUp'

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} options={{
            headerShown: false
          }}/>
          <Stack.Screen name='SignUp' component={SignUp} options={{
            headerShown: false
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
