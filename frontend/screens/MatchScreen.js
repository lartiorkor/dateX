import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ThemeContext from '../components/context/ThemeContext'


const MatchScreen = () => {
    const {currentTheme} = React.useContext(ThemeContext)
    return (
        <View style={[styles.container, {
            backgroundColor: currentTheme.backgroundColor
        }]}>
            <Text>Match Screen</Text>
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
