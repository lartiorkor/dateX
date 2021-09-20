import React, { useContext, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, Pressable, TextInput } from 'react-native'
import ThemeContext from '../components/context/ThemeContext'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'

const ChangePassword = () => {
  const {currentTheme, toggleTheme} = useContext(ThemeContext)
  const [passcodes, setpasscodes] = useState({
    current_password: '',
    new_password: '',
    confirm_new_password: ''
  })
  const [showpasscodes, setshowpasscodes] = useState({
    current: true,
    new: true,
    confirm: true
  })
  const [showvalidationerror, setshowvalidationerror] = useState(false)

  const newPasswordValidation = () => {
    if (passcodes.new_password !== passcodes.confirm_new_password) {
      setshowvalidationerror(true)
    } else {
      setshowvalidationerror(false)
    }
  }

  return (
    <View style={[styles.container, {backgroundColor: currentTheme.backgroundColor}]}>
      <StatusBar 
        hidden={false}
        barStyle={currentTheme.name ==='light' ? 'dark-content' : 'light-content'}
        backgroundColor={currentTheme.backgroundColor}
     />
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: currentTheme.txtColor
      }}>Reset Password</Text>

      <Text style={{
        color: currentTheme.txtColor
      }}>Current Password</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderColor: currentTheme.tabInactive, borderBottomWidth: 0.5, marginBottom: 25, alignItems: 'center'}}>
        <TextInput 
          style={[styles.textinput, {color: currentTheme.txtColor}]}
          secureTextEntry={!showpasscodes.current}
          value={passcodes.current_password}
          onChangeText={(value) => setpasscodes({...passcodes, current_password: value})}
        />
        {
          showpasscodes.current ?
          <Feather 
            name='eye' size={20} color={currentTheme.txtColor} style={{marginRight: 10}} onPress={() => setshowpasscodes({...showpasscodes, current: false})}
          /> :
          <Feather 
            name='eye-off' size={20} color={currentTheme.txtColor} style={{marginRight: 10}} onPress={() => setshowpasscodes({...showpasscodes, current: true})}
          />
        }
      </View>

      <Text style={{
        color: currentTheme.txtColor
      }}>New Password</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderColor: currentTheme.tabInactive, borderBottomWidth: 0.5, marginBottom: showvalidationerror ? 5 : 25 , alignItems: 'center'}}>
        <TextInput 
          style={[styles.textinput, {color: currentTheme.txtColor}]}
          secureTextEntry={!showpasscodes.new}
          value={passcodes.new_password}
          onChangeText={(value) => setpasscodes({...passcodes, new_password: value})}
        />
        {
          showpasscodes.new ?
          <Feather 
            name='eye' size={20} color={currentTheme.txtColor} style={{marginRight: 10}} onPress={() => setshowpasscodes({...showpasscodes, new: false})}
          /> :
          <Feather 
            name='eye-off' size={20} color={currentTheme.txtColor} style={{marginRight: 10}} onPress={() => setshowpasscodes({...showpasscodes, new: true})}
          />
        }
      </View>
      {
        showvalidationerror ? 
        <Animatable.Text animation='slideInLeft' style={{color: 'red', marginBottom: 25, fontSize: 12}}>
          Passwords should match
        </Animatable.Text> : null
      }

      <Text style={{
        color: currentTheme.txtColor
      }}>Confirm New Password</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderColor: currentTheme.tabInactive, borderBottomWidth: 0.5, marginBottom: 5, alignItems: 'center'}}>
        <TextInput 
          style={[styles.textinput, {color: currentTheme.txtColor}]}
          secureTextEntry={!showpasscodes.confirm}
          value={passcodes.confirm_new_password}
          onChangeText={(value) => setpasscodes({...passcodes, confirm_new_password: value})}
        />
        {
          showpasscodes.confirm ?
          <Feather 
            name='eye' size={20} color={currentTheme.txtColor} style={{marginRight: 10}} onPress={() => setshowpasscodes({...showpasscodes, confirm: false})}
          /> :
          <Feather 
            name='eye-off' size={20} color={currentTheme.txtColor} style={{marginRight: 10}} onPress={() => setshowpasscodes({...showpasscodes, confirm: true})}
          />
        }
      </View>
      {
        showvalidationerror ? 
        <Animatable.Text animation='slideInLeft' style={{color: 'red', marginBottom: 25, fontSize: 12}}>
          Passwords should match
        </Animatable.Text> : null
      }

      <Pressable onPress={newPasswordValidation} style={[styles.button, {backgroundColor: currentTheme.button}]}>
        <Text style={{
          fontWeight: 'bold',
          color: currentTheme.light
        }}>UPDATE PASSWORD</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  textinput: {
    flex: 1
  },
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 40
  }
})
export default ChangePassword
