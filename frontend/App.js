import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from './screens/Login'
import SignUp from './screens/SignUp'
import CreateProfile from './screens/CreateProfile'
import WelcomeScreen from './screens/WelcomeScreen'
import lightTheme from './Theme/colors'
import Home from './screens/Home'

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen 
            name='Welcome' component={WelcomeScreen} options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name='Login' component={Login} options={{
            headerShown: false
          }}/>
          <Stack.Screen name='SignUp' component={SignUp} options={{
            headerShown: false
          }}/>
          <Stack.Screen name='Profile' component={CreateProfile} options={{
            headerTitle: 'Create Profile',
            headerTitleAlign: 'center',
            headerLeft: null
          }}/>
          <Stack.Screen name='Home' component={Home} options={{
            headerLeft: null,
            headerTitleAlign: 'center'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
