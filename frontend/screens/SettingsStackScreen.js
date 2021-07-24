import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import lightTheme from '../Theme/colors'
import { createStackNavigator } from '@react-navigation/stack'
import EditProfile from './EditProfile'
import SettingsScreen from './SettingsScreen'

const settingsStack = createStackNavigator();

const SettingsStackScreen = () => {
    return (
        <settingsStack.Navigator>
            <settingsStack.Screen name='Settings' component={SettingsScreen} options={{
                headerShown: false,
            }}/>
            <settingsStack.Screen name='EditProfile' component={EditProfile} options={{
                headerTitleAlign: 'center',
                title: 'Edit Profile',
                headerTitleStyle: {
                    letterSpacing: 1.2
                }
            }}/>
        </settingsStack.Navigator>
    )
}

export default SettingsStackScreen
