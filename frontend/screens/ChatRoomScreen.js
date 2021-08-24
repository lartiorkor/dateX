import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar} from 'react-native'
import InputBox from '../components/inputbox/InputBox'
import Chats from '../Assets/dummy-data/Chats'
import TextMessage from '../components/messages/TextMessage'

const ChatRoomScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar 
        hidden={false}
        barStyle='dark-content'
        backgroundColor='#fff'
      />
      <View style={styles.header}>
        
      </View>
      <FlatList 
        data={Chats.messages}
        renderItem= {({ item }) => <TextMessage message={item}/>}
        inverted
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
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 0.5
  }
})

export default ChatRoomScreen