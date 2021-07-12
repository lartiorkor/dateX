import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, TextInput, Dimensions, ToolbarAndroid } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'

const {height, width} = Dimensions.get('screen')

const Login = ({navigation}) => {
    return (
        <LinearGradient 
            colors={['#ff695e', '#fc054b']}
            style={styles.container}>
                <StatusBar hidden/>
                <View style={styles.container}>
                    <Image 
                        source={require('../Assets/mocklogo.png')}
                        style={styles.img}/>
                </View>
                <View style={styles.loginContainer}>
                    <View style={styles.loginLayout}>
                        <View style={{justifyContent: 'center'}}>
                            <Icon 
                                name='person'
                                size={20}
                                color='white'
                                style={{paddingLeft: 10}}
                            />
                        </View>
                        <TextInput 
                            placeholder='Email'
                            placeholderTextColor='white'
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.loginLayout}>
                        <View style={{justifyContent: 'center'}}>
                            <Icon 
                                name='lock'
                                size={20}
                                color='white'
                                style={{paddingLeft: 10}}
                            />
                        </View>
                        <TextInput 
                            placeholder='Password'
                            placeholderTextColor='white'
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity>
                            <Text style={styles.btnText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Text style={{color: 'white'}}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{color: 'white', 
                                        fontWeight: 'bold',
                                        }}> Sign Up Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 60}}>
                        <TouchableOpacity>
                            <Text style={{color: 'white'}}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'blue',
        fontSize: 18,
        textDecorationLine: 'underline'
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 2,
        borderColor: 'white',
    },
    img:{
        height: 300,
        width: 300
    },
    input: {
        width: width * 0.8,
        paddingLeft: 10,
    },
    loginLayout: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
        marginVertical: 10
    },
    btnContainer: {
        borderRadius: 30,
        width: width * 0.9,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 13
    },
    btnText: {
        color: '#fc054b',
        fontSize: 18
    }
})

export default Login
