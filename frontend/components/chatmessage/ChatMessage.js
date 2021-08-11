import React from 'react'
import {Text,View,StyleSheet} from 'react-native';
import moment from 'moment';
import { backgroundColor } from 'styled-system';





const ChatMessage = ({message}) => {
 
    const isMyMessage = () => {
        return message.id ==='u1' ; 
    }
    return (
        <View style={styles.container}>
            <View style={[styles.messageBox,
            {backgroundColor:isMyMessage() ? '#dcf8c5' : 'white',
            marginLeft: isMyMessage() ? 50 :0,
            marginRight: isMyMessage() ? 0:50 }]}>
               {!isMyMessage() && <Text style={styles.name}> { message.id}</Text>}
                <Text style={styles.message}>Hello { message.content}</Text>
                <Text style={styles.time}>{moment (message.createdAt).fromNow()}</Text>   
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        padding:10,    
   },
   messageBox: {
        
       
       borderRadius:5,
       padding:10,
     
   },
   name: {
        color:'lightblue',
        fontWeight:'bold',
        marginBottom:5,

   },
   message:{
        
   },
   time:{
        alignSelf:'flex-end',
        color:'#ebebeb',
   }, 
  });

export default ChatMessage;
