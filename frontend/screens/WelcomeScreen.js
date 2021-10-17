import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import lightTheme from '../Theme/colors';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={[lightTheme.primaryColor, lightTheme.colorAccent]}
      style={{flex: 1}}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              source={require('../Assets/newlogo.png')}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[
              styles.btnContainer,
              {
                borderColor: lightTheme.light,
                borderWidth: 2,
              },
            ]}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnContainer,
              {
                backgroundColor: lightTheme.light,
              },
            ]}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={[styles.btnText, {color: lightTheme.colorAccent}]}>
              CREATE NEW ACCOUNT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    flex: 2.8,
  },
  footer: {
    flex: 1.2,
    marginTop: 50,
  },
  btnContainer: {
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 12,
  },
  btnText: {
    fontSize: 18,
    color: lightTheme.light,
    letterSpacing: 1.2,
    fontWeight: 'bold',
  },
  footerTxt: {
    fontSize: 16,
    color: lightTheme.light,
  },
  footerTxtContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  headerContent: {
    flex: 1,
    marginTop: 250,
    alignItems: 'center',
  },
  logo: {
    marginTop: 70,
  },
  txt: {
    fontSize: 18,
    color: lightTheme.textColor,
    marginTop: 100,
    textDecorationLine: 'underline',
    letterSpacing: 1.2,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
