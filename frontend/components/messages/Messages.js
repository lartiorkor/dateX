import React from 'react'
import { View,Text,FlatList,StyleSheet} from 'react-native';
import ChatListItem from '../chatlistitem/ChatListItem';


const DATA = [
  {
    id: 'bd7acbea',
    title: 'First Item',
  },
  {
    id: '3ac68afc',
    title: 'Second Item',
  },
  {
    id: '58694a0f',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea',
    title: 'First Item',
  },
  {
    id: '3ac68afc',
    title: 'Second Item',
  },
  {
    id: '58694a0f',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea',
    title: 'First Item',
  },
  {
    id: '3ac68afc',
    title: 'Second Item',
  },
  {
    id: '58694a0f',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea',
    title: 'First Item',
  },
  {
    id: '3ac68afc',
    title: 'Second Item',
  },
  {
    id: '58694a0f',
    title: 'Third Item',
  },
];
 
 
const Messages = () => {
    return (
      <View style={styles.main}>
      <Text style={{fontWeight:'bold',fontSize:16,textAlign:'left'}}>Messages</Text>
        <View style={styles.container}>
           
            <FlatList 
            data={DATA}
            renderItem={() =>     
            <ChatListItem message='react-native ye gae'/>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}/>
        
        </View>  
        </View>     
              
      
    );
  };

  const styles = StyleSheet.create({
    container: {
 
      paddingTop:10,
      alignItems:'center',
      justifyContent:'center',
    
   },
   main: {
     flex:1,
     paddingLeft:5,
     paddingRight:5,
     
   }
  });
  
  
  
  export default Messages;
