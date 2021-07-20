import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ChatRoomScreen from '../components/chatroomscreen/ChatRoomScreen'
import ChatScreen from '../components/chatscreen/ChatScreen'

const chatStack = createStackNavigator();

const MessageScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <chatStack.Navigator>
                <chatStack.Screen name='chatscreen' component={ChatScreen}/>
                <chatStack.Screen name="chatroomscreen"
                    component={ChatRoomScreen}
                    />
            </chatStack.Navigator>
        </NavigationContainer>
    )
}

export default MessageScreen
