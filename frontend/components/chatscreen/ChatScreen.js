import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import lightTheme from '../../Theme/colors';
import Home from '../Home' 
import  Messages from '../messages/Messages';


const ChatScreen = ({navigation}) => {
    return (
       <View style={ styles.container}>
         <View style={styles.header}>
           <Text style={styles.headertxt}>Chats</Text>
         </View>
         <View style={styles.body}>
           <Home/> 
           <Messages navigation={navigation}/>
         </View>  
       </View>
    
       
    );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: lightTheme.light,
    height: 60
  },
  headertxt: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    color: lightTheme.black,
    marginLeft: 15,
    marginTop: 28
  },
  body: {
    flex: 1,
    paddingHorizontal: 15
  }
});
   
export default ChatScreen;
   