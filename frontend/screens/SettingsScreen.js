import React, {useState, useContext} from 'react'
import { View, Text,
        Pressable, ScrollView,
        StyleSheet, SafeAreaView,
        StatusBar, Image,
        Switch } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ThemeContext from '../components/context/ThemeContext'

const avatars = ['https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-boy-wearing-a-hat-user-avatar-png-image_6531259.jpg',
'https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-girls-avatars-png-image_6531264.jpg']
const index = Math.random() * 2

const SettingsScreen = ({navigation}) => {
    const [profileImage, setProfileImage] = useState({uri: avatars[0]})
    const [darkTheme, setdarkTheme] = useState(true)
    const [notification, setnotification] = useState(true)

    const {currentTheme, toggleTheme} = useContext(ThemeContext)

    const switchTheme = () => {
        setdarkTheme(!darkTheme)
        toggleTheme()
    }

    const toggleNotification = () => {
        setnotification(!notification)
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: currentTheme.backgroundColor}]}>
            <StatusBar 
                hidden={false}
                barStyle={currentTheme.name ==='light' ? 'dark-content' : 'light-content'}
                backgroundColor={currentTheme.backgroundColor}
            />
            <ScrollView>
                    <View style={[styles.header, {backgroundColor: currentTheme.backgroundColor}]}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            letterSpacing: 1.1,
                            color: currentTheme.txtColor
                        }}>Settings</Text>
                        <Pressable onPress={() => navigation.navigate('EditProfile')}>
                            <View style={styles.headerPanel}>
                                <Image 
                                    source={profileImage}
                                    style={styles.profileImage}
                                />
                                <View style={styles.headerPanelTxt}>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        color: currentTheme.txtColor
                                    }}>username</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: currentTheme.txtColor,
                                        marginBottom: 5,
                                    }}>Edit personal details</Text>
                                </View>
                                <Ionicons 
                                    name='chevron-forward-outline' color={currentTheme.txtColor} size={30} style={styles.headerPanelIcon}
                                />
                            </View>
                        </Pressable>
                    </View>
                <View style={[styles.body, {backgroundColor: currentTheme.backgroundColor}]}>
                    {/* Dark Theme Card */}
                    <View style={{marginVertical: 5}}>
                    {/* <Text style={styles.cardTitleText}>Dark Theme</Text> */}
                    <View style={[styles.bodyCard, {borderRadius: 30, borderColor: currentTheme.tabInactive, backgroundColor: currentTheme.defaultbg}]}>
                        <View style={{flexDirection: 'row', paddingVertical: 10, alignItems: 'center'}}>
                            <Image 
                                source={require('../Assets/moon.png')}
                                style={{
                                    height: 20,
                                    width: 20
                                }}
                            />
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', flex: 1}}>
                                <Text style={[styles.buttonTxt, {color: currentTheme.txtColor}]}>Dark Theme</Text>
                                <Switch
                                    trackColor={{ false: "#0D8052", true: "#0D8052" }}
                                    thumbColor={darkTheme ? "#29CC8B" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={switchTheme}
                                    value={darkTheme}
                                />
                            </View>   
                        </View>
                    </View>
                    </View>
                    {/* Profile Card */}
                    <View style={{marginVertical: 5}}>
                        {/* <Text style={styles.cardTitleText}>Profile</Text> */}
                        <View style={[styles.bodyCard, {borderRadius: 30, borderColor: currentTheme.tabInactive, backgroundColor: currentTheme.defaultbg}]}>
                            <Pressable style={[styles.button, { borderBottomWidth: 0.5, borderColor: '#d4d4d4'}]}>
                                <Image 
                                    source={require('../Assets/edit-profile.png')}
                                    style={{
                                        height: 20,
                                        width: 20
                                    }}
                                />
                                <Text style={[styles.buttonTxt, {color: currentTheme.txtColor}]}>Edit Profile</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('ChangePassword')} style={styles.button}>
                                <Image 
                                    source={require('../Assets/password.png')}
                                    style={{
                                        height: 20,
                                        width: 20
                                    }}
                                />
                                <Text style={[styles.buttonTxt, {color: currentTheme.txtColor}]}>Change Password</Text>
                            </Pressable>
                        </View>
                    </View>
                    
                    {/* Notification Card */}
                    <View style={{marginVertical: 5}}>
                        {/* <Text style={styles.cardTitleText}>Notifications</Text> */}
                        <View style={[styles.bodyCard, {borderRadius: 30, borderColor: currentTheme.tabInactive, backgroundColor: currentTheme.defaultbg}]}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image 
                                        source={require('../Assets/notification.png')}
                                        style={{
                                            height: 20,
                                            width: 20
                                        }}
                                    />
                                    <Text style={[styles.buttonTxt, {color: currentTheme.txtColor}]}>Notification</Text>
                                </View>
                                <Switch
                                    trackColor={{ false: "#0D8052", true: "#0D8052" }}
                                    thumbColor={notification ? "#29CC8B" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleNotification}
                                    value={notification}
                                />
                         </View>
                        </View>
                   </View>
                    {/* Contact Us Card */}
                    <View style={{marginVertical: 5}}>
                        {/* <Text style={styles.cardTitleText}>Contact Us</Text> */}
                        <View style={[styles.bodyCard, {borderRadius: 30, borderColor: currentTheme.tabInactive, backgroundColor: currentTheme.defaultbg}]}>
                            <Pressable onPress={() => navigation.navigate('Privacy')} style={[styles.button, { borderBottomWidth: 0.5, borderColor: '#d4d4d4'}]}>
                                <Image 
                                    source={require('../Assets/privacy-policy.png')}
                                    style={{
                                        height: 20,
                                        width: 20
                                    }}
                                />
                                <Text style={[styles.buttonTxt, {color: currentTheme.txtColor}]}>Privacy Policy</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('FAQ')} style={[styles.button, { borderBottomWidth: 0.5, borderColor: '#d4d4d4'}]}>
                                <Image 
                                    source={require('../Assets/faq.png')}
                                    style={{
                                        height: 20,
                                        width: 20
                                    }}
                                />
                                <Text style={[styles.buttonTxt, {color: currentTheme.txtColor}]}>FAQs</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('ContactUs')} style={styles.button}>
                                <Image 
                                    source={require('../Assets/contact-us.png')}
                                    style={{
                                        height: 20,
                                        width: 20
                                    }}
                                />
                                <Text style={[styles.buttonTxt, {color: currentTheme.txtColor}]}>Contact Us</Text>
                            </Pressable>
                        </View>
                    </View>
                    {/* Sign Out Card */}
                    <View style={{marginVertical: 5}}>
                        {/* <Text style={styles.cardTitleText}>Sign Out</Text> */}
                        <View style={[styles.bodyCard, {borderRadius: 30, borderColor: currentTheme.tabInactive, backgroundColor: currentTheme.defaultbg}]}>
                            <Pressable style={{ paddingVertical: 12, flexDirection: 'row'}}>
                                <Image 
                                    source={require('../Assets/logout.png')}
                                    style={{
                                        height: 20,
                                        width: 20
                                    }}
                                />
                                <Text style={[styles.buttonTxt, {color: currentTheme.txtColor}]}>Sign Out</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingHorizontal: 15,
        paddingBottom: 10
    },
    headerPanel: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginBottom: 10,
        marginTop: 10
    },
    headerPanelTxt: {
        marginLeft: 20,
        justifyContent: 'space-around',
    },
    headerPanelIcon: {
        flex: 1,
        position: 'absolute',
        right: 0,
        top: 20
    },
    body: {
    },
    profileImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    bodyCard: {
        borderRadius: 20,
        padding: 5,
        paddingHorizontal: 12,
        justifyContent: 'center',
        marginBottom: 7
    },
    cardTitleText: {
        fontSize: 14,
        color: '#a6a6a6',
        fontWeight: '700',
        marginLeft: 5
    },
    button: {
        paddingVertical: 12,
        flexDirection: 'row'
    },
    buttonTxt: {
        marginLeft: 10,
        textAlignVertical: 'center',
        fontSize: 15,
        letterSpacing: 1.2,
        fontWeight: 'bold'
    }
})

export default SettingsScreen