import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ChatRoomScreen from '../components/chatroomscreen/ChatRoomScreen'
import ChatScreen from '../components/chatscreen/ChatScreen'

const chatStack = createStackNavigator();

const MessageScreen = () => {
    return (
            <chatStack.Navigator screenOptions={{
                headerStyle:{
                    backgroundColor:'green',
                    shadowOpacity:0,
                    elevation:0,
                },
                headerTintColor:'white',
                headerTitleAlign:'left',
                headerTitleStyle:{ fontWeight:'bold',}
            }}>
                <chatStack.Screen name='chatscreen' component={ChatScreen} options={{
                    headerShown: false
                }}/>
                <chatStack.Screen name='chatroomscreen' component={ChatRoomScreen}
                options={ ({route })=> ({title:route.params.id}) }/>
            </chatStack.Navigator>
    )
}

export default MessageScreen
