import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import MessageScreen from './MessageScreen'
import SettingsStackScreen from './SettingsStackScreen'
import MatchScreen from './MatchScreen'

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
            <Tab.Navigator initialRouteName='Match' tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'relative',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    height: 60,
                    backgroundColor: '#ffffff',
                }
            }}>
                <Tab.Screen name='Chat' component={MessageScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Ionicons 
                                name='chatbubbles-outline'
                                size={30}
                                color= {focused ? '#e32f45' : '#748c94'}
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
                                    color= {focused ? '#e32f45' : '#748c94'}
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
                                    color= {focused ? '#e32f45' : '#748c94'}
                                />
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
    )
}

export default Home
