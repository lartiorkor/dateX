import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import lightTheme from '../Theme/colors'
import { createStackNavigator } from '@react-navigation/stack'
import EditProfile from './EditProfile'
import SettingsScreen from './SettingsScreen'
import ContactUs from './ContactUs'

const settingsStack = createStackNavigator();

const SettingsStackScreen = () => {
    return (
        <settingsStack.Navigator>
            <settingsStack.Screen name='Settings' component={SettingsScreen} options={{
                headerShown: false,
            }}/>
            <settingsStack.Screen name='EditProfile' component={EditProfile} options={{
                headerShown: false
            }}/>
            <settingsStack.Screen name='ContactUs' component={ContactUs} options={{
                headerShown: true
            }}/>
        </settingsStack.Navigator>
    )
}

export default SettingsStackScreen
