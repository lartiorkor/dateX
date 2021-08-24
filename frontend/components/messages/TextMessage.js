import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const myId = 'u1'

const TextMessage = ({ message }) => {
    const isMe = message.user.id === myId;

    return (
        <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
            <Text style={{ color: isMe ? 'black' : 'white'}}>{message.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%'
    },
    leftContainer: {
        backgroundColor: '#3777f0',
        marginLeft: 10,
        marginRight: 'auto'
    },
    rightContainer: {
        backgroundColor: 'lightgrey',
        marginLeft: 'auto',
        marginRight: 10
    }
});

export default TextMessage
