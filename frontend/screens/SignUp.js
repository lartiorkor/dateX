import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import lightTheme from '../Theme/colors'
import UserDataContext from '../components/context/UserDataContext'

const {height, width} = Dimensions.get('screen')


const SignUp = ({navigation}) => {
    const {userdata, setuserdata} = React.useContext(UserDataContext)
    const {name, email, password, confirmpassword} = userdata
    // const [signUpObj, setsignUpObj] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     c_password: ''
    // })

    const [showPassword, setshowPassword] = useState(false)
    const [showc_password, setshowc_password] = useState(false)
    // let { password, c_password } = signUpObj

    const showDeets = () => {
        console.log(`Name: ${name}, Email: ${email}, 
        Password: ${password} , Confirm Password: ${confirmpassword}`)
    }

    const signUpEvent = () => {
        navigation.navigate('Profile')
    } 

    return (
        <LinearGradient
            colors={[lightTheme.primaryColor, lightTheme.colorAccent]} 
            style={styles.container}>
            <View style={{flex: 1}}>
                <TouchableOpacity
                    style={{marginLeft: -20, marginTop: -10}}
                    onPress={() => navigation.goBack()}>
                    <Feather 
                        name='chevron-left'
                        size={50}
                    />
                </TouchableOpacity>
                <Text style={styles.signuptxt}>SignUp</Text>
            </View>
            <View style={{flex: 3, paddingTop: 20}}>
                <View style={styles.input}>
                    <FontAwesome 
                        name='user'
                        size={20}
                        color={lightTheme.light}
                        style={styles.userIcon}
                    />
                    <TextInput 
                        placeholder='Name'
                        placeholderTextColor={lightTheme.light}
                        autoCompleteType='off'
                        autoCorrect={false}
                        style={styles.txtInput}
                        value={name}
                        onChangeText={(text) => setuserdata({...userdata, name: text})}
                    />
                </View>
                <View style={styles.input}>
                    <FontAwesome 
                        name='envelope'
                        size={20}
                        color={lightTheme.light}
                        style={styles.userIcon}
                    />
                    <TextInput 
                        placeholder='Email'
                        placeholderTextColor={lightTheme.light}
                        autoCompleteType='off'
                        autoCorrect={false}
                        keyboardType='email-address'
                        style={[styles.txtInput, {
                            
                        }]}
                        value={email}
                        onChangeText={(text) => setuserdata({...userdata, email: text})}
                    />
                </View>
                <View style={styles.input}>
                    <FontAwesome 
                        name='lock'
                        size={20}
                        color={lightTheme.light}
                        style={styles.userIcon}
                    />
                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor={lightTheme.light}
                        secureTextEntry={showPassword}
                        style={[styles.txtInput]}
                        value={password}
                        onChangeText={(text) => setuserdata({...userdata, password: text})}
                    />
                    <View style={{
                        position: 'absolute',
                        top: 7,
                        right: 0,
                        marginRight: 10
                    }}>
                        {
                        password !== '' ? 
                            <TouchableOpacity 
                                style={{justifyContent: 'center', marginLeft: 240}}
                                onPress={() => setshowPassword(!showPassword)}
                            >
                                {
                                    showPassword ? 
                                    <Feather 
                                        name='eye'
                                        color={lightTheme.light}
                                        size={20}
                                    /> :
                                    <Feather 
                                        name='eye-off'
                                        color={lightTheme.light}
                                        size={20}
                                    />
                                }
                            </TouchableOpacity> : null
                        }
                    </View>
                </View>
                <View style={styles.input}>
                    <FontAwesome 
                        name='lock'
                        size={20}
                        color={lightTheme.light}
                        style={styles.userIcon}
                    />
                    <TextInput 
                        placeholder='Confirm Password'
                        placeholderTextColor={lightTheme.light}
                        secureTextEntry={showc_password}
                        style={styles.txtInput}
                        value={confirmpassword}
                        onChangeText={(text) => setuserdata({...userdata, confirmpassword: text})}
                    />
                    <View style={{
                        position: 'absolute',
                        top: 7,
                        right: 0,
                        marginRight: 10
                    }}>
                    {
                        confirmpassword !== '' ?
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                            }}
                            onPress={() => setshowc_password(!showc_password)}
                        >
                            {
                                    showc_password ? 
                                    <Feather 
                                        name='eye'
                                        color={lightTheme.light}
                                        size={20}
                                    /> :
                                    <Feather 
                                        name='eye-off'
                                        color={lightTheme.light}
                                        size={20}
                                    />
                                }
                        </TouchableOpacity> : null
                    }
                    </View>
                </View>
                <TouchableOpacity onPress= {() => signUpEvent()}>
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnText}>SIGNUP</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={{
                        color: lightTheme.textColor
                    }}>Already Have An Account? </Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                        <Text style={{
                            color: lightTheme.textColor,
                            fontSize: 16,
                            fontWeight: 'bold' }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: lightTheme.textColor
    },
    input: {
        borderWidth: 1,
        marginVertical: 10,
        borderColor: lightTheme.light,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        flexDirection: 'row',
    },
    editInput: {
        borderWidth: 1,
        marginVertical: 10,
        borderColor: lightTheme.light,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        flexDirection: 'row',
    },
    userIcon: {
        paddingTop: 12
    },
    txtInput: {
        marginLeft: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1
    },
    signuptxt: {
        fontSize: 45,
        fontWeight: 'bold',
        color: lightTheme.textColor,
        letterSpacing: 1.2,
        marginTop: 50
    },
    signupContainer: {
        borderWidth: 1
    },
    btnContainer: {
        borderRadius: 30,
        padding: 12,
        marginTop: 30,
        backgroundColor: lightTheme.black
    },
    btnText: {
        textAlign: 'center',
        fontSize: 24,
        color: lightTheme.textColor,
        letterSpacing: 1.2,
        fontWeight: 'bold'
    },
    footer: {
        paddingTop: 70,
        alignItems: 'center',
    }
})
export default SignUp
