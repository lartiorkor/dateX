import React, {Component, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import CreateProfile from './screens/CreateProfile';
import WelcomeScreen from './screens/WelcomeScreen';
import lightTheme from './Theme/colors';
import Central from './screens/Central';
import UserDataContext from './components/context/UserDataContext';
import UserProfileContext from './components/context/UserProfileContext';
import ThemeContext from './components/context/ThemeContext';
import AppTheme from './Theme/AppTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStack from './screens/RootStack';

import {decode, encode} from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

const avatar =
  'https://cdn-icons.flaticon.com/png/512/5349/premium/5349022.png?token=exp=1634440858~hmac=db37aa18c63c90257164d81d286211fe';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  async function getToken() {
    try {
      const accessToken = await AsyncStorage.getItem('accessTokenValue');
      if (accessToken != null) {
        setLoggedIn(true);
        console.log(`logged in ${loggedIn}`);
      } else {
        // do nothing
      }
    } catch (error) {
      console.log(error);
    }
  }
  const [userdata, setuserdata] = useState({
    email: '',
    password: '',
    accessToken: '',
    refreshToken: '',
    userId: '',
  });

  const [userprofile, setuserprofile] = useState({
    username: '',
    age: '',
    phone: '',
    profilepic: avatar,
    gender: '',
    profile_id: '',
  });

  const [theme, settheme] = useState('lightTheme');
  const currentTheme = AppTheme[theme];
  const toggleTheme = () => {
    settheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  };

  useEffect(() => {
    getToken();
    console.log(`logged in ${loggedIn}`);
  }, []);

  return (
    <UserDataContext.Provider
      value={{userdata: userdata, setuserdata: setuserdata}}>
      <UserProfileContext.Provider
        value={{userprofile: userprofile, setuserprofile: setuserprofile}}>
        <ThemeContext.Provider
          value={{currentTheme: currentTheme, toggleTheme: toggleTheme}}>
          <NavigationContainer>
            {loggedIn ? <Central /> : <RootStack />}
          </NavigationContainer>
        </ThemeContext.Provider>
      </UserProfileContext.Provider>
    </UserDataContext.Provider>
  );
};

export default App;
