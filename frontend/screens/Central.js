// Contains the main app content
// which is the screen the user will
// be sent to after logging in or
// signing up

import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home';
import ChatRoomScreen from './ChatRoomScreen';
import ChangePassword from './ChangePassword';
import ThemeContext from '../components/context/ThemeContext';

const CentralStack = createStackNavigator();

const Central = () => {
  const { currentTheme } = useContext(ThemeContext);
  return(
    <CentralStack.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false
    }}>
      <CentralStack.Screen name='Home' component={Home}/>
      <CentralStack.Screen name='ChatRoomScreen' component={ChatRoomScreen} options={{
        headerShown: true,
        headerTitle: () => (
          <View style={styles.header}>
            <Image style={styles.image} source={require ('../Assets/1.jpg')}/>
            <Text style={styles.text}>Whats Good</Text>
          </View>
        ),
      }}/>
      <CentralStack.Screen name='ChangePassword' component={ChangePassword} options={{
        headerShown: true,
        title: '',
        headerStyle: {
          backgroundColor: currentTheme.backgroundColor
        }
      }}/>
    </CentralStack.Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height:40,
    width:40,
    marginRight:10,
    borderRadius:20,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold'
  }
})

export default Central;