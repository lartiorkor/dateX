import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import moment from 'moment';

const ChatListItem = ({message}) => {
    let current_time = moment().format("HH:mm");
    return (
       <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image style={styles.image} source={require ('../../Assets/1.jpg')}/>
            <View style={styles.midContainer}>
                <Text style={styles.username}>Nobel Fiawornu</Text>
                <Text style={styles.lastmessage}>{message}</Text>
            </View>
            </View>
            <Text style={styles.time}>{current_time}</Text>
       </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      width:'95%',
      justifyContent:'space-between',
      padding:10,
      paddingRight:20,
     
    
    
   },
   leftContainer: {
       flexDirection:'row',
      
          
   },
   image: {
       height:50,
       width:50,
       marginRight:10,
       borderRadius:50,
   },
   midContainer:{
       
   },
   username :{
       fontWeight:'bold',
       fontSize:16,
   },
   lastmessage:{
        fontSize:16,
        color:'grey',
   },
   time:{
        fontSize:12,
        color:'grey',
   },
  });

export default ChatListItem;
