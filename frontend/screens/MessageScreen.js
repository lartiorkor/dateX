import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
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
                options={ ({route })=> ({
                    title:route.params.id,
                headerLeft: ()=> (
                <View style={{
                    flexDirection:'row',
                    marginRight:100,
                }}>
                    <Image style={styles1.image} source={require ('../Assets/1.jpg')}/>
                </View>
            ) 
                }) }/>

            </chatStack.Navigator>
    )
}

const styles1 = StyleSheet.create({
    image: {
        height:50,
        width:50,
        marginRight:10,
        borderRadius:50,
    },

})

export default MessageScreen
