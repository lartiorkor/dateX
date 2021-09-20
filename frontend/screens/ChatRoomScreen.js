import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar} from 'react-native'
import InputBox from '../components/inputbox/InputBox'
import Chats from '../Assets/dummy-data/Chats'
import TextMessage from '../components/messages/TextMessage'

const ChatRoomScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar 
        hidden={false}
        barStyle='dark-content'
        backgroundColor='#fff'
      />
      {/* <View style={styles.header}>
        <Text>Hello</Text>
        
      </View> */}
      <FlatList 
        data={Chats.messages}
        renderItem= {({ item }) => <TextMessage message={item}/>}
      />
      <View>
        <InputBox />
      </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    padding: 10
  }
})

export default ChatRoomScreen