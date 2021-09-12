import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import lightTheme from '../Theme/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import UserDataContext from '../components/context/UserDataContext'
import axios from 'axios';

const {height, width} = Dimensions.get('screen')


const SignUp = ({navigation}) => {
    const signupURL = 'https://datex-server.herokuapp.com/api/auth/signup/';
    const {userdata, setuserdata} = React.useContext(UserDataContext)
    const {username, email, password, userObject} = userdata

    const [showPassword, setshowPassword] = useState(false)

    const signUpEvent = async () => {
        try {
            let res = await axios.post(signupURL, {
                email: email,
                password: password
            })
            const { data } = res
            setuserdata({...userdata, userObject: data.user})
            console.log(data)
            console.log(userdata)
        } catch (err) {
            console.log(err)
        }
    } 
    // const signUpEvent = () => {
    //     axios.post(signupURL, {
    //         email: email,
    //         password: password
    //     }).then(
    //         (res) => {
    //             setuserdata({...userdata, userObject: res.data.user})
    //             console.log(res.data)
    //             console.log(userdata)
    //         }
    //     ).catch(
    //         (err) => console.log(err)
    //     )

    // } 

    const transition = () => {
        signUpEvent()
        navigation.navigate('Profile')
    }

    return (
        <LinearGradient
            colors={[lightTheme.primaryColor, lightTheme.colorAccent]} 
            style={styles.container}>
            <KeyboardAwareScrollView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <TouchableOpacity
                        style={{marginLeft: -10, marginTop: -10}}
                        onPress={() => navigation.goBack()}>
                        <Feather 
                            name='chevron-left'
                            size={50}
                            color={lightTheme.light}
                        />
                    </TouchableOpacity>
                    <Text style={styles.signuptxt}>SignUp</Text>
                </View>
                <View style={{flex: 3, paddingTop: 30}}>
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
                    <Pressable onPress= {transition}>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnText}>SIGNUP</Text>
                        </View>
                    </Pressable>
                    <View style={styles.footer}>
                        <Text style={{
                            color: lightTheme.light
                        }}>Already Have An Account? </Text>
                        <Pressable onPress={() => {navigation.navigate('Login')}}>
                            <Text style={{
                                color: lightTheme.light,
                                fontSize: 16,
                                fontWeight: 'bold' }}> Login</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAwareScrollView>
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
        marginVertical: 20,
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
        marginTop: 50,
        backgroundColor: lightTheme.light
    },
    btnText: {
        textAlign: 'center',
        fontSize: 24,
        color: lightTheme.colorAccent,
        letterSpacing: 1.2,
        fontWeight: 'bold'
    },
    footer: {
        paddingTop: 70,
        justifyContent: 'center',
        flexDirection: 'row'
    }
})
export default SignUp
