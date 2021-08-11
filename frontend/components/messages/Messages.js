import React from 'react'
import { View,Text,FlatList,StyleSheet, TextBase} from 'react-native';
import ChatListItem from '../chatlistitem/ChatListItem';
import ThemeContext from '../context/ThemeContext';


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
 
 
const Messages = ({navigation}) => {
  const {currentTheme} = React.useContext(ThemeContext)
  return (
    <View style={styles.main}>
      <View style={{borderBottomWidth: 0.5, paddingBottom: 5, borderColor: currentTheme.tabInactive}}>
        <Text style={{fontWeight: 'bold', color: currentTheme.txtColor, marginLeft: 10}}>Messages</Text>
      </View>
      <View style={styles.container}>
        <FlatList 
          data={DATA}
          renderItem={({item}) =>     
            <ChatListItem message={item.title} navigation={navigation} identifier={item.id}/>}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}/>
      </View>  
    </View>     
    );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
  },
  main: {
   flex:1,  
  }
  });
  
export default Messages;
