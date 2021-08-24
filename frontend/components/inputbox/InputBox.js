import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Platform, Pressable } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const InputBox = () => {
    const [message, setMessage] = useState('')
    return(
        <View style={styles.rootcontainer}>
            <View style={styles.inputContainer}>
                <SimpleLineIcons 
                    name='emotsmile' size={24} color="#595959" style={{marginRight: 5}}
                />
                <TextInput 
                    placeholder='Message...'
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    style={styles.input}
                    textAlignVertical='top'
                />
            </View>
            {
                message ?
                <Pressable style={styles.buttonContainer}>
                    <Ionicons name="send" size={18} color="#ddd"/>
                </Pressable> :
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <SimpleLineIcons 
                        name='camera' size={24} color="#595959" style={styles.icon}
                    />
                    <SimpleLineIcons 
                        name='microphone' size={24} color="#595959" style={styles.icon}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    rootcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    inputContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginRight: 10,
        borderRadius: 25,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dedede',
        flexDirection: 'row',
        padding: 5,
        height: 40
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
        height: 40,
        fontSize: 16
    },
    icon: {
        marginHorizontal: 5
    },
    buttonContainer: {
        height: 40,
        width: 40,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 35,
        color: '#fff'
    }
})

export default InputBox