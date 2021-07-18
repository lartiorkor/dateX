import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import lightTheme from '../Theme/colors'

const {height, width} = Dimensions.get('screen')


const SignUp = ({navigation}) => {

    const [signUpObj, setsignUpObj] = useState({
        name: '',
        email: '',
        password: '',
        c_password: ''
    })

    const [showPassword, setshowPassword] = useState(false)
    const [showc_password, setshowc_password] = useState(false)
    let { password, c_password } = signUpObj

    const showDeets = () => {
        alert(`Name: ${signUpObj.name}, Email: ${signUpObj.email}, 
        Password: ${signUpObj.password} , Confirm Password: ${signUpObj.c_password}`)
    }

    return (
        <LinearGradient colors={[lightTheme.primaryColor, lightTheme.colorAccent]} style={styles.container}>
            <View style={[styles.signupContainer, {flex: 1}]}>
                <Text style={styles.signuptxt}>SignUp</Text>
            </View>
            <View style={{flex: 3}}>
                <View style={styles.input}>
                    <FontAwesome 
                        name='user'
                        size={20}
                        color={lightTheme.rn_iconscolor}
                        style={styles.userIcon}
                    />
                    <TextInput 
                        placeholder='Name'
                        placeholderTextColor={lightTheme.textColor}
                        autoCompleteType='off'
                        autoCorrect={false}
                        style={styles.txtInput}
                        value={signUpObj.name}
                        onChangeText={(text) => setsignUpObj({...signUpObj, name: text})}
                    />
                </View>
                <View style={styles.input}>
                    <FontAwesome 
                        name='envelope'
                        size={20}
                        color={lightTheme.rn_iconscolor}
                        style={styles.userIcon}
                    />
                    <TextInput 
                        placeholder='Email'
                        placeholderTextColor={lightTheme.textColor}
                        autoCompleteType='off'
                        autoCorrect={false}
                        keyboardType='email-address'
                        style={styles.txtInput}
                        value={signUpObj.email}
                        onChangeText={(text) => setsignUpObj({...signUpObj, email: text})}
                    />
                </View>
                <View style={styles.input}>
                    <FontAwesome 
                        name='lock'
                        size={20}
                        color={lightTheme.rn_iconscolor}
                        style={styles.userIcon}
                    />
                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor={lightTheme.textColor}
                        secureTextEntry={showPassword}
                        style={styles.txtInput}
                        value={signUpObj.password}
                        onChangeText={(text) => setsignUpObj({...signUpObj, password: text})}
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
                                        name='eye-off'
                                        color={lightTheme.rn_iconscolor}
                                        size={20}
                                    /> :
                                    <Feather 
                                        name='eye'
                                        color={lightTheme.rn_iconscolor}
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
                        color={lightTheme.rn_iconscolor}
                        style={styles.userIcon}
                    />
                    <TextInput 
                        placeholder='Confirm Password'
                        placeholderTextColor={lightTheme.textColor}
                        secureTextEntry={showc_password}
                        style={styles.txtInput}
                        value={signUpObj.c_password}
                        onChangeText={(text) => setsignUpObj({...signUpObj, c_password: text})}
                    />
                    <View style={{
                        position: 'absolute',
                        top: 7,
                        right: 0,
                        marginRight: 10
                    }}>
                    {
                        c_password !== '' ?
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                            }}
                            onPress={() => setshowc_password(!showc_password)}
                        >
                            {
                                    showc_password ? 
                                    <Feather 
                                        name='eye-off'
                                        color={lightTheme.rn_iconscolor}
                                        size={20}
                                    /> :
                                    <Feather 
                                        name='eye'
                                        color={lightTheme.rn_iconscolor}
                                        size={20}
                                    />
                                }
                        </TouchableOpacity> : null
                    }
                    </View>
                </View>
                <TouchableOpacity onPress= {() => {navigation.navigate('Profile')}}>
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
        padding: 10
    },
    input: {
        borderWidth: 1,
        marginVertical: 10,
        borderColor: '#d9d9d9',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        flexDirection: 'row',
    },
    userIcon: {
        paddingTop: 12
    },
    txtInput: {
        marginLeft: 10,
        color: lightTheme.textColor,
        fontSize: 16
    },
    signuptxt: {
        fontSize: 40,
        fontWeight: 'bold',
        color: lightTheme.textColor,
    },
    signupContainer: {
        justifyContent: 'center'
    },
    btnContainer: {
        borderRadius: 30,
        padding: 12,
        marginTop: 30,
        backgroundColor: lightTheme.rn_iconscolor
    },
    btnText: {
        textAlign: 'center',
        fontSize: 24,
        color: lightTheme.black
    },
    footer: {
        paddingTop: 70,
        alignItems: 'center',
    }
})
export default SignUp
