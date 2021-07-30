import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ProfilePicture = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{
                    uri: route.params.picture
                }}
                style={{
                    height: 350,
                    width: '100%'
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProfilePicture
