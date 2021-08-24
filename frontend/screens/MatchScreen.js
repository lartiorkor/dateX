import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ThemeContext from '../components/context/ThemeContext'
import MapView from 'react-native-maps'
import FadeInText from '../components/FadeInText'


const MatchScreen = () => {
    const {currentTheme} = React.useContext(ThemeContext)
    return (
        <View style={[styles.container, {
            backgroundColor: currentTheme.backgroundColor
        }]}>
            <MapView
                style ={{
                    width: '100%',
                    height: '100%'
                }}
                initialRegion={{
                    latitude: 6.67331,
                    longitude: -1.56531,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={{
                    position: 'absolute',
                    bottom: 50
                }}>
                    <FadeInText />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MatchScreen
