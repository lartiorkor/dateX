import { View,Text,StyleSheet} from 'react-native';
import Home from './components/Home'; 
  import  Messages from './components/messages/Messages';




  import React from 'react';
  import { View,Text,StyleSheet} from 'react-native';
  import Home from './Home'; 
  import  Messages from '../messages/Messages';
     
  
   
   
   
   const ChatScreen = () => {
     return (
   
       <View style={ styles.container}>
         <Home/> 
         <Messages/>
          
         
         
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
   