import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Base64ArrayBuffer from 'base64-arraybuffer';

import MessageScreen from './MessageScreen';
import SettingsStackScreen from './SettingsStackScreen';
import MatchScreen from './MatchScreen';
import lightTheme from '../Theme/colors';
import ThemeContext from '../components/context/ThemeContext';
import AppTheme from '../Theme/AppTheme';
import SettingsScreen from './SettingsScreen';
import UserDataContext from '../components/context/UserDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import UserProfileContext from '../components/context/UserProfileContext';

const Tab = createBottomTabNavigator();
let getprofileurl;
// const url =
//   'https://datex-server.herokuapp.com/api/auth/user/profile/e5710e81-4d10-42d0-a5b3-35bf3fd5bf2e';

const Home = () => {
  const {currentTheme} = useContext(ThemeContext);
  const {userdata, setuserdata} = useContext(UserDataContext);
  const {userprofile, setuserprofile} = useContext(UserProfileContext);
  const {email, userId} = userdata;

  useEffect(() => {
    getUserId();

    setTimeout(() => {
      getUserProfile(getprofileurl);
    }, 2000);

    //   const timer = setTimeout(() => {
    //     getUserProfile();
    //   }, 1000);

    //   return () => clearTimeout(timer);
  }, [userId]);

  async function getUserId() {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (userId != null) {
        getprofileurl = `https://datex-server.herokuapp.com/api/auth/user/profile/${userId}`;
        console.log(`getprofileurl: ${getprofileurl}`);
        setuserdata({...userdata, userId});
      } else {
        // do nothing
        console.log('null');
      }
    } catch (error) {
      console.log(`home1: ${error}`);
    }
  }

  async function getUserProfile(endpoint) {
    try {
      const response = await axios.get(endpoint);
      if (response.status === 200) {
        console.log(response.data);
        const {username, gender, age, phone_number, profile_id, picture} =
          response.data;
        const new_age = String(age);
        const new_phone_number = String(phone_number);
        setUserProfile(
          username,
          new_age,
          gender,
          new_phone_number,
          profile_id,
          picture,
        );
      } else {
        console.log('get request not successful');
      }
    } catch (error) {
      console.log(`home2: ${error}`);
    }
  }

  function setUserProfile(
    username,
    age,
    gender,
    phone,
    profile_id,
    profilepic,
  ) {
    setuserprofile({username, age, gender, phone, profile_id, profilepic});
  }

  return (
    <Tab.Navigator
      initialRouteName="Match"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'relative',
          height: 60,
          backgroundColor: currentTheme.tabColor,
        },
      }}>
      <Tab.Screen
        name="Chat"
        component={MessageScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name="chatbubbles-outline"
                size={30}
                color={
                  focused ? currentTheme.tabActive : currentTheme.tabInactive
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Match"
        component={MatchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons
                name="search-outline"
                size={30}
                color={
                  focused ? currentTheme.tabActive : currentTheme.tabInactive
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name="settings-outline"
                size={30}
                color={
                  focused ? currentTheme.tabActive : currentTheme.tabInactive
                }
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
