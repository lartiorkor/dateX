import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import lightTheme from '../Theme/colors';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from './EditProfile';
import SettingsScreen from './SettingsScreen';
import ContactUs from './ContactUs';
import PrivacyPolicy from './PrivacyPolicy';
import FAQs from './FAQs';
import ThemeContext from '../components/context/ThemeContext';

const settingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  const {currentTheme} = useContext(ThemeContext);
  return (
    <settingsStack.Navigator>
      <settingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
      <settingsStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <settingsStack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: currentTheme.backgroundColor,
          },
          headerTintColor: currentTheme.txtColor,
        }}
      />
      <settingsStack.Screen
        name="Privacy"
        component={PrivacyPolicy}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: currentTheme.backgroundColor,
          },
          headerTintColor: currentTheme.txtColor,
        }}
      />
      <settingsStack.Screen
        name="FAQ"
        component={FAQs}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: currentTheme.backgroundColor,
          },
          headerTintColor: currentTheme.txtColor,
        }}
      />
    </settingsStack.Navigator>
  );
};

export default SettingsStackScreen;
