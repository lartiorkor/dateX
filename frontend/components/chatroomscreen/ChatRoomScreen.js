import React from 'react'
import {Text,View,TouchableOpacity, TouchableWithoutFeedback, FlatList,ImageBackground} from 'react-native';
 
import ChatMessage from '../chatmessage/ChatMessage';
import InputBox from '../inputbox/InputBox';


const DATA = [
    {
      id: 'u1',
      content: 'First Item',
      createdAt:'2021-07-19T08:15:00.000Z'
    },
    {
      id: 'u2',
      content: 'First Item',
      createdAt:'2021-07-19T08:23:00.000Z'
    },
    {
      id: 'u3',
      content: 'First Item',
      createdAt:'2021-07-19T08:20:00.000Z'
    },];

const ChatRoomScreen = ({route}) => {
   
  console.log(route.params.id)
   
   
        
    return (
        <ImageBackground style={{width:'100%', height:'100%'}} source={require('../../Assets/BG.png')}>
         <FlatList
         data={DATA}
         renderItem={({item})=> <ChatMessage message={item} />}
         inverted />
         <InputBox/>
         </ImageBackground>
         
    )
} 

export default ChatRoomScreen;
