import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
  Pressable,
} from 'react-native';
import {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import lightTheme from '../Theme/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import axios from 'axios';
import UserDataContext from '../components/context/UserDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const loginURL = 'https://datex-server.herokuapp.com/api/auth/login/';
  const {userdata, setuserdata} = React.useContext(UserDataContext);
  const {accessToken, refreshToken, userObject} = userdata;
  const [loginObj, setloginObj] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setshowPassword] = useState(true);
  let {password} = loginObj;

  async function handleLogin() {
    try {
      const result = await axios.post(loginURL, {
        identity: loginObj.email,
        password: loginObj.password,
      });
      const {access_token, refresh_token, user} = result.data;
      const userId = user.user_id;
      console.log(`login-userid: ${userId}`);
      storeUserObject(userId);
      storeTokens(access_token);
      navigation.navigate('Central');
    } catch (error) {
      console.log(`login: ${error}`);
    }
  }

  async function storeUserObject(id) {
    try {
      await AsyncStorage.setItem('userId', id);
      console.log('id stored');
    } catch (error) {
      console.log(`login: ${error}`);
    }
  }

  async function storeTokens(token) {
    try {
      await AsyncStorage.setItem('accessTokenValue', token);
      console.log('Token stored');
    } catch (error) {
      console.log(`login: ${error}`);
    }
  }

  const transition = () => {
    navigation.navigate('Central');
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[lightTheme.primaryColor, lightTheme.colorAccent]}>
      <KeyboardAwareScrollView style={{flex: 1}}>
        {/* <View style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        alignItems: 'center',
                        marginLeft: -10
                    }}>
                    <Feather 
                        name='chevron-left'
                        size={50}
                        color={lightTheme.light}
                        onPress={() => navigation.goBack()}
                    /> */}
        <Text style={styles.headText}>Login</Text>
        {/* </View> */}
        <View
          style={{
            height: 150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}>
          <Image source={require('../Assets/newlogo.png')} />
        </View>
        <View style={{marginTop: 15}}>
          <View style={styles.txtinputbox}>
            <FontAwesome
              name="user"
              size={20}
              color={lightTheme.light}
              style={styles.userIcon}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={lightTheme.textColor}
              style={styles.txtinput}
              value={loginObj.email}
              onChangeText={text => setloginObj({...loginObj, email: text})}
            />
          </View>
          <View style={styles.txtinputbox}>
            <FontAwesome
              name="lock"
              size={20}
              color={lightTheme.light}
              style={styles.userIcon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={lightTheme.textColor}
              style={styles.txtinput}
              secureTextEntry={showPassword}
              value={loginObj.password}
              onChangeText={text => setloginObj({...loginObj, password: text})}
            />
            {showPassword ? (
              <Feather
                name="eye"
                color={lightTheme.light}
                size={20}
                style={{marginRight: 10}}
                onPress={() => setshowPassword(!showPassword)}
              />
            ) : (
              <Feather
                name="eye-off"
                color={lightTheme.light}
                size={20}
                style={{marginRight: 10}}
                onPress={() => setshowPassword(!showPassword)}
              />
            )}
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            marginTop: 5,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: lightTheme.light,
              fontWeight: '600',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <Pressable style={styles.btnContainer} onPress={handleLogin}>
          <Text style={styles.btnText}>SIGN IN</Text>
        </Pressable>
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: lightTheme.light,
            }}>
            Don't have an account?{' '}
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text
              style={{
                fontSize: 16,
                color: lightTheme.light,
                fontWeight: 'bold',
              }}>
              {' '}
              SignUp
            </Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headText: {
    fontSize: 26,
    color: lightTheme.textColor,
    fontWeight: '700',
    marginTop: 35,
  },
  loginContainer: {
    flex: 0.9,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  empty_txtinputbox: {
    flexDirection: 'row',
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 30,
  },
  txtinputbox: {
    flexDirection: 'row',
    marginVertical: 5,
    borderWidth: 2,
    borderColor: lightTheme.light,
    borderRadius: 30,
    alignItems: 'center',
  },
  txtinput: {
    marginLeft: 15,
    color: lightTheme.light,
    fontSize: 16,
    flex: 1,
  },
  userIcon: {
    marginLeft: 10,
  },
  btnContainer: {
    borderRadius: 30,
    marginTop: 70,
    alignItems: 'center',
    backgroundColor: lightTheme.light,
    paddingVertical: 10,
  },
  btnText: {
    color: lightTheme.colorAccent,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
