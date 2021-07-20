import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import Home from '../Home' 
import  Messages from '../messages/Messages';



     
  
   
   
   
const ChatScreen = ({navigation}) => {
    return (
   
       <View style={ styles.container}>
         <Home/> 
         <Messages navigation={navigation}/>  
       </View>
    
       
    );
};
  
const styles = StyleSheet.create({
     container: {
       flex:1,
       paddingTop:10,
       alignItems:'center',
       justifyContent:'center',
     
    },
   });
   
   export default ChatScreen;
   