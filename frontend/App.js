import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from './screens/Login'
import SignUp from './screens/SignUp'
import CreateProfile from './screens/CreateProfile'
import WelcomeScreen from './screens/WelcomeScreen'
import lightTheme from './Theme/colors'
import Home from './screens/Home'
import UserDataContext from './components/context/UserDataContext'
import UserProfileContext from './components/context/UserProfileContext'

const Stack = createStackNavigator();

const App = () => {
  const [userdata, setuserdata] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const [userprofile, setuserprofile] = useState({
    username: '',
    age: '',
    gender: '',
    profilepic: ''
  })

  return (
    <UserDataContext.Provider value={{userdata: userdata, setuserdata: setuserdata}}>
      <UserProfileContext.Provider value={{userprofile: userprofile, setuserprofile: setuserprofile}}>
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
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
      </UserProfileContext.Provider>
    </UserDataContext.Provider>
  )
}  

export default App
