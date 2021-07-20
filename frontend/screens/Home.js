import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ChatScreen from './ChatScreen'
import ProfileScreen from './ProfileScreen'
import MatchScreen from './MatchScreen'

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator initialRouteName='Match' tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    height: 60,
                    backgroundColor: '#ffffff',
                }
            }}>
                <Tab.Screen name='Chat' component={ChatScreen}
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
                <Tab.Screen name='Profile' component={ProfileScreen}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Ionicons 
                                    name='person-outline'
                                    size={30}
                                    color= {focused ? '#e32f45' : '#748c94'}
                                />
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Home
