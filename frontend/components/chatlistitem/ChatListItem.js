import React  from 'react';
import {View,Text,Image,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import moment from 'moment';
import ThemeContext from '../context/ThemeContext';
import { color } from 'react-native-reanimated';

const ChatListItem = ({message,navigation,identifier}) => {
    let current_time = moment().format("HH:mm");
    const {currentTheme} = React.useContext(ThemeContext)
    
    return (
        <TouchableWithoutFeedback
            // onPress={()=>navigation.navigate('chatroomscreen',{id:identifier})}
            onPress={()=>navigation.navigate('ChatRoomScreen')}>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={require ('../../Assets/1.jpg')}
                />
                <View style={[styles.txtcontainer, {
                    borderBottomColor: currentTheme.tabInactive
                }]}>
                    <Text style={[styles.username, {
                        color: currentTheme.txtColor
                    }]}>Nobel Fiawornu</Text>
                    <Text style={styles.lastmessage}>{message}</Text>
                </View>
                <View style={styles.timestampcontainer}>
                    <Text style={styles.timestamp}>{current_time}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        height: 70,
        marginHorizontal: 10
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 30
    },
    txtcontainer: {
        flexDirection: 'column',
        marginLeft: 15,
        borderBottomWidth: 0.5,
        flex: 1,        
    },
    timestampcontainer: {
        position: 'absolute',
        right: 15,
        top: 9
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    lastmessage: {
        fontSize: 14,
        color: 'grey'
    },
    timestamp: {
        fontSize: 12,
        color: 'grey'
    }
})

export default ChatListItem;
