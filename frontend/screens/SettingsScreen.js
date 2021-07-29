import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, Switch } from 'react-native'
import lightTheme from '../Theme/colors'


const avatars = ['https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-boy-wearing-a-hat-user-avatar-png-image_6531259.jpg',
'https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-girls-avatars-png-image_6531264.jpg']



const SettingsScreen = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    const [notifEnabled, setNotifEnabled] = useState(false);
    const notifToggle = () => setNotifEnabled(previousState => !previousState)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertxt}>Settings</Text>
                <View style={styles.headerpanel}>
                    <Image 
                        source={{
                            uri: avatars[Math.floor(Math.random() * 2)]
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
                            fontWeight: 'bold'
                        }}>User Username</Text>
                    </View>
                    <Pressable style={styles.editiconcontainer} onPress={() => navigation.navigate('EditProfile')}>
                        <Image 
                            source={require('../Assets/editprofileicon.png')}
                            style={styles.editicon}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.body}>
                <View style={[styles.signoutbtn, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>Dark Theme</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#f4f3f4" }}
                        thumbColor={isEnabled ? "#25DB1F" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={[styles.signoutbtn, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>Notifications</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#f4f3f4" }}
                        thumbColor={notifEnabled ? "#25DB1F" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={notifToggle}
                        value={notifEnabled}
                    />
                </View>
                <TouchableOpacity style={styles.signoutbtn}>
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signoutbtn}>
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signoutbtn}>
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>FAQs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signoutbtn}>
                    <Text style={{
                        color: 'red',
                        fontSize: 16,
                        letterSpacing: 1.2,
                        fontWeight: 'bold'
                    }}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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
        borderRadius: 30
    },
    headerpaneltxtbox: {
        marginLeft: 20
    },
    editiconcontainer: {
        position: 'absolute',
        right: 15,
        top: 15
    },
    editicon: {
        height: 40,
        width: 40
    },
    signoutbtn: {
        backgroundColor: lightTheme.light,
        paddingHorizontal: 15,
        paddingVertical: 12
    },
})

export default SettingsScreen