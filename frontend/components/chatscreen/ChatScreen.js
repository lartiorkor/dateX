import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import lightTheme from '../../Theme/colors';
import Home from '../Home' 
import  Messages from '../messages/Messages';
import ThemeContext from '../context/ThemeContext';


const ChatScreen = ({navigation}) => {
  const {currentTheme} = React.useContext(ThemeContext)
    return (
       <View style={[styles.container, {
         backgroundColor: currentTheme.backgroundColor
       }]}>
         <View style={styles.header}>
           <Text style={[styles.headertxt, {
             color: currentTheme.txtColor
           }]}>Chats</Text>
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
    height: 60
  },
  headertxt: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    color: lightTheme.black,
    marginTop: 28,
    marginLeft: 10
  },
  body: {
    flex: 1,
  }
});
   
export default ChatScreen;
   