import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from './screens/Login'
import SignUp from './screens/SignUp'
import CreateProfile from './screens/CreateProfile'
import WelcomeScreen from './screens/WelcomeScreen'
import lightTheme from './Theme/colors'

import  ChatScreen from './components/chatscreen/ChatScreen';
import ChatRoomScreen from './components/chatroomscreen/ChatRoomScreen';


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
          <Stack.Screen name='Profile' component={CreateProfile}/>
          <Stack.Screen name="chatroomscreen"
            component={ChatRoomScreen}
            options={ ({route })=> ({title:route.params.itemId})
               
           
            }/>
          <Stack.Screen name='chatscreen' component={ChatScreen}/>
          <Stack.Screen name='Profile' component={CreateProfile}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
