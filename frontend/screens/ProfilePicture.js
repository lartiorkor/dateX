import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ThemeContext from '../components/context/ThemeContext'
import UserProfileContext from '../components/context/UserProfileContext'

const ProfilePicture = ({navigation}) => {
    const {userprofile} = React.useContext(UserProfileContext)
    const {profilepic} = userprofile
    const {currentTheme} = React.useContext(ThemeContext)
    return (
        <View style={[styles.container, {
            backgroundColor: currentTheme.backgroundColor
        }]}>
            <View style={styles.header}>
                <Ionicons 
                    name='close-outline'
                    size={30}
                    color={currentTheme.txtColor}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.body}>
                <Image 
                    source={{
                        uri: profilepic
                    }}
                    style={{
                        flex: 1
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingLeft: 15,
        paddingTop: 15
    },
    body: {
        marginTop: 150,
        height: 350,
        width: '100%',
    }
})

export default ProfilePicture
