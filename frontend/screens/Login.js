import React from 'react'
import { 
    View, Text,
    ImageBackground, TouchableOpacity,
    StyleSheet, TextInput,
    StatusBar
} from 'react-native'
import { useState } from 'react'

import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import lightTheme from '../Theme/colors'
import BouncyCheckbox from "react-native-bouncy-checkbox";


const Login = ({navigation}) => {
    const [loginObj, setloginObj] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setshowPassword] = useState(true);
    let { password } = loginObj;

    return (
        <ImageBackground
            style={styles.container}
            source={require('../Assets/background.png')}
            resizeMode='cover'
        >
            <StatusBar 
            />
            <View style={styles.headPanel}>
                <TouchableOpacity 
                    style={{marginTop: 10,}}
                    onPress={() => navigation.goBack()}>
                    <Feather 
                        name='chevron-left'
                        size={50}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.loginContainer}>
                <View style={
                    loginObj.email === '' ? styles.empty_txtinputbox : styles.txtinputbox
                }>
                    <View style={{justifyContent: 'center'}}>
                        <Icon 
                            name='person'
                            size={25}
                            color='grey'
                            style={{paddingLeft: 10}}
                        />
                    </View>
                    <TextInput 
                        placeholder='Email'
                        placeholderTextColor='grey'
                        style={styles.txtinput}
                        value={loginObj.email}
                        onChangeText={(text) => setloginObj({...loginObj, email: text})}
                    />
                </View>
                <View style={
                    loginObj.password === '' ? styles.empty_txtinputbox : styles.txtinputbox
                }>
                    <View style={{justifyContent: 'center'}}>
                        <Icon 
                            name='lock'
                            size={20}
                            color='grey'
                            style={{paddingLeft: 10}}
                       />
                    </View>
                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor='grey'
                        style={styles.txtinput}
                        value={loginObj.password}
                        secureTextEntry={showPassword}
                        onChangeText={(text) => setloginObj({...loginObj, password: text})}
                    />
                    <View style={{
                        position: 'absolute',
                        top: 12,
                        right: 0,
                        marginRight: 15
                        }}>
                            {
                                password !== '' ? 
                                <TouchableOpacity 
                                onPress={() => setshowPassword(!showPassword)} >
                                    {
                                        showPassword ?
                                        <Feather 
                                        name='eye'
                                        color='grey'
                                        size={20}
                                        />: 
                                        <Feather 
                                            name='grey'
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
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <View style={[styles.btnContainer, {marginTop: 20}]}>
                        <Text style={styles.btnText}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headPanel: {
        flex: 1.1,
    },
    loginContainer: {
        flex: 0.9,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    empty_txtinputbox: {
        flexDirection: 'row',
        marginVertical: 10,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 30
    },
    txtinputbox: {
        flexDirection: 'row',
        marginVertical: 10,
        borderWidth: 2,
        borderColor: lightTheme.steelblue,
        borderRadius: 30
    },
    txtinput: {
        marginLeft: 15,
        color: lightTheme.black,
        fontSize: 16,
        flex: 1
    },
    btnContainer: {
        borderRadius: 30,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: lightTheme.colorAccent,
        paddingVertical: 13,
    },
    btnText: {
        color: lightTheme.textColor,
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1.2
    }
})

export default Login
