import React, {useState, useContext} from 'react'
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, Switch } from 'react-native'
import lightTheme from '../Theme/colors'
import darkTheme from '../Theme/dark'
import ThemeContext from '../components/context/ThemeContext'
import { backgroundColor } from 'styled-system'
import { color } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import UserDataContext from '../components/context/UserDataContext'
import UserProfileContext from '../components/context/UserProfileContext'


const avatars = ['https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-boy-wearing-a-hat-user-avatar-png-image_6531259.jpg',
'https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-girls-avatars-png-image_6531264.jpg']

const SettingsScreen = ({navigation}) => {
    const {userdata, setuserdata} = React.useContext(UserDataContext)
    const {userprofile, setuserprofile} = React.useContext(UserProfileContext)
    const [theme, settheme] = useState(lightTheme);
    const [isEnabled, setIsEnabled] = useState(false);
    const [notifEnabled, setNotifEnabled] = useState(false);
    const notifToggle = () => setNotifEnabled(previousState => !previousState)

    const {currentTheme, toggleTheme} = React.useContext(ThemeContext)
    const {name} = userdata
    const {profilepic, username} = userprofile
    const switchTheme = () => {
        setIsEnabled(!isEnabled)
        toggleTheme()
    }

    return (
        <View style={[styles.container, {backgroundColor: currentTheme.backgroundColor}]}>
            <View style={[styles.header, {backgroundColor: currentTheme.button }]}>
                <Text style={[styles.headertxt, {color: currentTheme.txtColor}]}>Settings</Text>
                <View style={styles.headerpanel}>
                    <Image 
                        source={{
                            uri: profilepic
                        }}
                        style={styles.headerpanelimg}
                    />
                    <View style={styles.headerpaneltxtbox}>
                        <Text style={{
                            marginTop: 10,
                            color: 'grey'
                        }}>Hello</Text>
                        <Text style={{
                            fontSize: 18,
                            marginTop: 10,
                            fontWeight: 'bold',
                            color: currentTheme.txtColor
                        }}>{username}</Text>
                    </View>
                    <Pressable style={[styles.editiconcontainer, {
                        borderColor: currentTheme.txtColor
                    }]} onPress={() => navigation.navigate('EditProfile')}>
                        <Icon
                            name= 'account-edit'
                            size={30}
                            color={currentTheme.txtColor}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.body}>
                <View style={[styles.button, {flexDirection: 'row', justifyContent: 'space-between', backgroundColor: currentTheme.button}]}>
                    <Text style={{
                        color: currentTheme.txtColor,
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>Dark Theme</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#25DB1F" }}
                        thumbColor={notifEnabled ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={switchTheme}
                        value={isEnabled}
                    />
                </View>
                <View style={[styles.button, {flexDirection: 'row', justifyContent: 'space-between', backgroundColor: currentTheme.button}]}>
                    <Text style={{
                        color: currentTheme.txtColor,
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>Notifications</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#25DB1F" }}
                        thumbColor={notifEnabled ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={notifToggle}
                        value={notifEnabled}
                    />
                </View>
                <TouchableOpacity style={[styles.button, {backgroundColor: currentTheme.button}]}>
                    <Text style={{
                        color: currentTheme.txtColor,
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: currentTheme.button}]}>
                    <Text style={{
                        color: currentTheme.txtColor,
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: currentTheme.button}]}>
                    <Text style={{
                        color: currentTheme.txtColor,
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>FAQs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: currentTheme.button}]}>
                    <Text style={{
                        color: 'red',
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: lightTheme.light,
        height: 60,
        flex: 1
    },
    headertxt: {
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        marginLeft: 15,
        marginTop: 28,
        color: lightTheme.black
    },
    body: {
        flex: 3,
        marginTop: 5
    },
    headerpanel: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 15
    },
    headerpanelimg: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    headerpaneltxtbox: {
        marginLeft: 20
    },
    editiconcontainer: {
        position: 'absolute',
        right: 15,
        top: 15,
        borderRadius: 30,
        borderWidth: 2
    },
    editicon: {
        height: 40,
        width: 40
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 12
    },
})

export default SettingsScreen