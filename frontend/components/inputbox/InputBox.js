import React,{useState} from 'react'
import {View,Text,StyleSheet, TextInput,Button, TouchableOpacity} from 'react-native';
import { styles } from 'styled-system';
import {MaterialCommunityIcons,Fontisto,MaterialIcons} from 'react-native-vector-icons';
 
 

export default function  InputBox  () {
    const [message,setMessage] = useState('');
    const onPress =()=> {
        console.warn("Sending : ${message}")
        setMessage("");
    }
    return (
       <View style={styles2.container} >
           <View style={styles2.main}> 
               
                  <TextInput placeholder='Type something' multiline style={styles2.input}
                  value={message}
                  onChangeText={ setMessage}/>
                    
           </View>
           {!!message && 
           <TouchableOpacity onPress={onPress}>
               <View style={styles2.buttonContainer} >
               <Button color="green" style={styles2.button} title="Send"/>
           </View>
           </TouchableOpacity>}
            
             
       </View>

    )
};

const styles2 = StyleSheet.create({
    container: {
 
     
      flexDirection:'row',
      alignItems:'flex-end',
    
   },
   main: {
     flex:1,
     flexDirection:'row',
     backgroundColor:'white',
     padding:10,
     margin:10,
     borderRadius:50,
     alignItems:'center',

     
   },
   button:{
        width:50,
        height:50,
        borderRadius:50,
   },
   buttonContainer:{
       backgroundColor:'green',
       borderRadius:50,
       height:50,
       width:50,
       alignItems:'center',
       justifyContent:'center',
       padding:10,
       margin:10,
    
       
   },
   input:{
        flex:1,
        marginHorizontal:10,
       backgroundColor:'white',
       padding:10,
       alignItems:'flex-end',
   }
  });

  
