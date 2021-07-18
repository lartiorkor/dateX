import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import lightTheme from '../Theme/colors'
import LinearGradient from 'react-native-linear-gradient'

const WelcomeScreen = ({navigation}) => {
    return (
        <LinearGradient
            colors={[lightTheme.primaryColor, lightTheme.colorAccent]}
            style={{flex: 1}} >
                <StatusBar 
                    backgroundColor={lightTheme.primaryColor}
                />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image 
                            source={require('../Assets/newlogo.png')}
                            style={styles.logo}
                        />

                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.txt}>Create a new account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.btnContainer}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.btnText}>LOG IN WITH EMAIL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>LOG IN WITH GOOGLE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerTxtContainer}>
                        <Text style={styles.footerTxt}>Trouble logging in?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    header: {
        flex: 2.8,
    },
    footer: {
        flex: 1.2,
    },
    btnContainer: {
        borderRadius: 30,
        marginVertical: 10, 
        alignItems: 'center',
        borderColor: lightTheme.rn_iconscolor,
        paddingVertical: 12,
        backgroundColor: lightTheme.rn_iconscolor
    },
    btnText: {
        fontSize: 18,
        color: lightTheme.black,
        letterSpacing: 1.2,
        fontWeight: 'bold'
    },
    footerTxt: {
        fontSize: 18,
        color: lightTheme.textColor
    },
    footerTxtContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    headerContent: {
        flex: 1,
        marginTop: 250,
        alignItems: 'center'
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
        fontWeight: 'bold'
    }
})

export default WelcomeScreen
