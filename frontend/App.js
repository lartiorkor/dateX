import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from './screens/Login'
import SignUp from './screens/SignUp'
import CreateProfile from './screens/CreateProfile'
import WelcomeScreen from './screens/WelcomeScreen'
import lightTheme from './Theme/colors'
import Central from './screens/Central'
import UserDataContext from './components/context/UserDataContext'
import UserProfileContext from './components/context/UserProfileContext'


const Stack = createStackNavigator();

const avatars = ['https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-boy-wearing-a-hat-user-avatar-png-image_6531259.jpg',
'https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-girls-avatars-png-image_6531264.jpg']

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
    profilepic: avatars[Math.random() * 2]
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
        <Stack.Screen name='Central' component={Central} options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
      </UserProfileContext.Provider>
    </UserDataContext.Provider>
  )
}  

export default App
