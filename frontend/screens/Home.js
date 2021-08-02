import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MessageScreen from './MessageScreen'
import SettingsStackScreen from './SettingsStackScreen'
import MatchScreen from './MatchScreen'
import lightTheme from '../Theme/colors'
import ThemeContext from '../components/context/ThemeContext'
import AppTheme from '../Theme/AppTheme'
import SettingsScreen from './SettingsScreen'

const myTab = createMaterialBottomTabNavigator()
const Tab = createBottomTabNavigator()

const Home = () => {
    const [theme, settheme] = useState('lightTheme');
    const currentTheme = AppTheme[theme];
    const toggleTheme = () => {
        settheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme')
    }
    return (
        <ThemeContext.Provider value={{currentTheme: currentTheme, toggleTheme: toggleTheme}}>
            <Tab.Navigator initialRouteName='Match' tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'relative',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    height: 60,
                    backgroundColor: currentTheme.tabColor,
                }
            }}>
                <Tab.Screen name='Chat' component={MessageScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Ionicons 
                                name='chatbubbles-outline'
                                size={30}
                                color= {focused ? currentTheme.tabActive : currentTheme.tabInactive}
                            />
                        </View>
                    )
                }}
                />
                <Tab.Screen name='Match' component={MatchScreen}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Ionicons 
                                    name='search-outline'
                                    size={30}
                                    color= {focused ? currentTheme.tabActive : currentTheme.tabInactive}
                                />
                            </View>
                        )
                    }}
                />
                <Tab.Screen name='SettingsStack' component={SettingsStackScreen}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Ionicons 
                                    name='settings-outline'
                                    size={30}
                                    color= {focused ? currentTheme.tabActive : currentTheme.tabInactive}
                                />
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        </ThemeContext.Provider>
    )
}


export default Home
