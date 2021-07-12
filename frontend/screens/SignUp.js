import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const {height, width} = Dimensions.get('screen')


const SignUp = ({navigation}) => {

    return (
        <LinearGradient colors={['#ff695e', '#fc054b']} style={styles.container}>
            <View style={{flex: 1}}>

            </View>
            <View style={{flex: 3}}>
                <TextInput 
                    placeholder='Name'
                    placeholderTextColor='white'
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Email or Phone Number'
                    placeholderTextColor='white'
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Password'
                    placeholderTextColor='white'
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Confirm Password'
                    placeholderTextColor='white'
                    style={styles.input}
                />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    input: {
        borderWidth: 1,
        marginVertical: 10,
        borderColor: '#d9d9d9',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    }
})
export default SignUp
