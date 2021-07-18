import React from 'react'
import { View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    StatusBar, 
    Image, 
    TextInput, 
    Dimensions, 
    ToolbarAndroid, 
    ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import lightTheme from '../Theme/colors'
import BouncyCheckbox from "react-native-bouncy-checkbox";


import { useState } from 'react'

const {height, width} = Dimensions.get('screen')

const Login = ({navigation}) => {

    const [loginObj, setloginObj] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setshowPassword] = useState(true)

    let { password } = loginObj

    return (
        <ImageBackground source={require('../Assets/background.png')}
            resizeMode='cover'
            style={styles.container}>
                <StatusBar 
                    backgroundColor={lightTheme.primaryColor}
                />
                <View style={{flex: 1}}>
                    <TouchableOpacity style={{
                        paddingTop: 7,
                        paddingLeft: 7
                    }} onPress={() => navigation.goBack()}>
                        <Fontisto 
                            name='angle-left'
                            color='#ebebeb'
                            size={25}
                        />
                    </TouchableOpacity>
                    <View style={{
                        marginHorizontal: 20,
                        marginTop: 70
                    }}>
                        <Text style={styles.headerTxt}>Welcome,</Text>
                    </View>
                </View>
                <View style={styles.loginContainer}>
                    <View style={styles.loginLayout}>
                        <View style={{justifyContent: 'center'}}>
                            <Icon 
                                name='person'
                                size={20}
                                color={lightTheme.black}
                                style={{paddingLeft: 10}}
                            />
                        </View>
                        <TextInput 
                            placeholder='Email'
                            placeholderTextColor={lightTheme.black}
                            style={styles.input}
                            value={loginObj.email}
                            onChangeText={(text) => setloginObj({...loginObj, email: text})}
                        />
                    </View>
                    <View style={styles.loginLayout}>
                        <View style={{justifyContent: 'center'}}>
                            <Icon 
                                name='lock'
                                size={20}
                                color={lightTheme.black}
                                style={{paddingLeft: 10}}
                            />
                        </View>
                        <TextInput 
                            placeholder='Password'
                            placeholderTextColor={lightTheme.black}
                            style={styles.input}
                            value={loginObj.password}
                            secureTextEntry={showPassword}
                            onChangeText={(text) => setloginObj({...loginObj, password: text})}
                        />
                        <View style={{
                            position: 'absolute',
                            top: 12,
                            right: 0,
                            marginRight: 10
                        }}>
                            {
                            password !== '' ? 
                            <TouchableOpacity 
                                onPress={() => setshowPassword(!showPassword)}
                            >
                                {
                                    showPassword ?
                                    <Feather 
                                        name='eye'
                                        color={lightTheme.black}
                                        size={20}
                                    />: 
                                    <Feather 
                                        name='eye-off'
                                        color={lightTheme.black}
                                        size={20}
                                    />
                                }
                            </TouchableOpacity> : null
                        }
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 5
                    }}>
                        <BouncyCheckbox
                            size={20}
                            fillColor="#51ff17"
                            unfillColor="#FFFFFF"
                            text="Remember Me"
                            iconStyle={{ borderColor: lightTheme.black }}
                            textStyle={{ color: lightTheme.black }}
                            onPress={(isChecked: boolean) => {}}
                        />
                        <View style={{ marginVertical: 5, alignItems: 'center'}}>
                            <TouchableOpacity>
                                <Text style={{color: lightTheme.black}}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.btnContainer, {marginTop: 20}]}>
                        <TouchableOpacity>
                            <Text style={styles.btnText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTxt: {
        fontSize: 45,
        color: lightTheme.textColor
    },
    loginContainer: {
        flex: 1,
        marginTop: 60,
        borderRadius: 2,
        borderColor: lightTheme.black,
        marginHorizontal: 20
    },
    img:{
        height: 200,
        width: 200
    },
    input: {
        paddingLeft: 10,
        color: lightTheme.black,
        fontSize: 16
    },
    loginLayout: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: lightTheme.black,
        borderRadius: 30,
        marginVertical: 10
    },
    btnContainer: {
        borderRadius: 30,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: lightTheme.black,
        paddingVertical: 13
    },
    btnText: {
        color: lightTheme.textColor,
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1.2
    }
})

export default Login
