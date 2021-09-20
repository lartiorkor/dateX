import React, {useContext} from 'react'
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import ThemeContext from '../components/context/ThemeContext'
import MockProfilesHorizontal from '../components/MockProfiles'
import FakeUsers from '../Assets/dummy-data/FakeUsers'
import MockProfilesVertical from '../components/MockProfilesVertical'

const MatchScreen = () => {
    const {currentTheme} = useContext(ThemeContext)
    return (
        <View style={[styles.container, {backgroundColor: currentTheme.backgroundColor}]}>
            <StatusBar 
                hidden={false}
                barStyle={currentTheme.name ==='light' ? 'dark-content' : 'light-content'}
                backgroundColor={currentTheme.backgroundColor}
            />
            <View style={styles.header}>
                <Text style={[styles.headerTxt, {color: currentTheme.txtColor}]}>Find Friends</Text>
                <Searchbar 
                    placeholder='Search for friends...'
                    style={styles.searchbar}
                />
            </View>
            <View style={{flex: 1}}>
                <Text style={{
                    fontSize: 12, color: currentTheme.tabInactive
                }}>Recent Searches</Text>
                <FlatList 
                    data={FakeUsers}
                    renderItem={(user, theme) => <MockProfilesHorizontal user={user} theme={currentTheme}/>}
                    horizontal
                    style={{}}
                />
            </View>
            {/* Horizontal flatlist of recently searched users */}
            <Text style={{
                fontSize: 12, color: currentTheme.tabInactive
            }}>Your Friends</Text>
            {/* Vertical flatlist of your friend list */}
            <View style={{flex: 4}}>
                <FlatList 
                    data={FakeUsers}
                    renderItem={(user, theme) => <MockProfilesVertical user={user} theme={currentTheme}/>}
                    style={{}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    header: {

    },
    headerTxt: {
        fontSize: 32,
        fontWeight: 'bold',
        letterSpacing: 1.1,
    },
    searchbar: {
        borderRadius: 50,
        marginVertical: 10
    }
})

export default MatchScreen
