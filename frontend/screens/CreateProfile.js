import React from 'react'
import { View,
        Text, 
        StyleSheet,
        TextInput,
        Image,
        TouchableOpacity, 
        ImageBackground} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RNPickerSelect from 'react-native-picker-select'
import { useState, createRef } from 'react'
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import ImagePicker from 'react-native-image-crop-picker';
import lightTheme from '../Theme/colors'
import UserProfileContext from '../components/context/UserProfileContext'

const avatars = ['https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-boy-wearing-a-hat-user-avatar-png-image_6531259.jpg',
'https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-girls-avatars-png-image_6531264.jpg']

const CreateProfile = ({navigation}) => {
    const [image, setimage] = useState(avatars[Math.floor(Math.random() * 2)])
    const {userprofile, setuserprofile} = React.useContext(UserProfileContext)
    const [opView, setopView] = useState(false)
    // const [gender, setgender] = useState('')
    const {gender, username, age, profilepic} = userprofile
    // const [profile, setprofile] = useState({
    //     image: '',
    //     username: '',
    //     age: ''
    // })
    // const userProfile = {
    //     ...profile,
    //     gender: gender
    // }

    const sheetRef = React.useRef(null)
    let fall = new Animated.Value(1)

    const openBottomSheet = () => {
        sheetRef.current.snapTo(0)
        setopView(true)
    }

    const closeBottomSheet = () => {
        sheetRef.current.snapTo(1)
        setopView(false)
    }

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setimage(image.path)
            closeBottomSheet()
            setuserprofile({...userprofile, profilepic: image.path})
        });  
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setimage(image.path)
            closeBottomSheet()
            setuserprofile({...userprofile, profilepic: image.path})
        });         
    }

    const renderContent = () => (
        <View style={{
          backgroundColor: 'white',
          padding: 16,
          justifyContent: 'center'
        }}> 
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>
              Upload Photo
            </Text>
            <Text style={styles.panelSubtitle}>
              Choose your profile picture
            </Text>
          </View>
          <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
            <Text style={styles.panelButtonTitle}>TAKE PHOTO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
            <Text style={styles.panelButtonTitle}>CHOOSE PHOTO</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.panelButton}
            onPress={closeBottomSheet}
            >
            <Text style={styles.panelButtonTitle}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      );

    return (
        <>
            <Animated.View style={
                opView ? 
                [styles.container, {opacity: 0.1}] :
                styles.container
            }>
                {/* <View style={{
                    alignItems: 'center',
                    marginTop: 15
                }}>
                    <Image 
                        source={{
                            uri: image
                        }}
                        style={{
                            height: 150,
                            width: 150,
                            borderRadius: 75
                        }}
                    />
                    <View 
                        onPress={openBottomSheet}
                        style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        right: 120,
                        bottom: 0,
                        backgroundColor: 'green',
                    }}>
                        <Ionicons 
                            name='camera-reverse-outline'
                            size={25}
                            color= 'white'
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.actionbox}>
                        <Text>Username</Text>
                        <TextInput 
                            style={styles.txtInput}
                        />
                    </View>
                    <View style={styles.actionbox}>
                        <Text>Age</Text>
                        <TextInput 
                            style={styles.txtInput}
                        />
                    </View>
                    <View>
                        <Text>Gender</Text>
                    <RNPickerSelect
                    placeholder={{
                        label: 'select your gender...',
                        value: null,
                        color: '#9ea0a4'
                    }} 
                    onValueChange={(value) => {setuserprofile({...userprofile, gender: value})}}
                    useNativeAndroidPickerStyle={false}
                    items={[
                        {label: 'Male', value: 'male'},
                        {label: 'Female', value: 'female'}
                    ]}
                    style={{
                        placeholder: {
                          fontSize: 16,
                          color: 'grey',
                        },
                        inputAndroid: {
                          fontSize: 16,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                          borderWidth: 1,
                          borderRadius: 30, 
                          borderColor: 'black',
                          color: 'black',
                          marginVertical: 10,
                          backgroundColor: '#fefefe'
                        },
                        iconContainer: {
                          top: 25,
                          right: 10
                        },
                    }}
                    Icon={() => {
                        return (
                            <Fontisto 
                                name="angle-down" 
                                size={20} color="gray"
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    top: 0
                                }}
                            />
                        )
                      }}
                    />
                    </View>
                </View> */}
                <View style={{
                    height: 150,
                    flexDirection: 'row',
                    backgroundColor: '#fefefe'
                }}>
                <View style={{
                    flex: 1.3,
                    borderTopWidth: 1,
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center',
                        borderRadius: 15,
                        marginTop:10,
                    }}>
                        <Image 
                            source={{
                                uri: image
                            }}
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15
                            }}
                        />
                    </View>
                    <TouchableOpacity 
                        style={{
                        marginTop: 10
                        }}
                        onPress={openBottomSheet}
                    >
                        <Text style={{
                            color: 'blue'
                        }}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 2.7,
                    borderTopWidth: 1,
                }}>
                    <Text style={{
                        marginLeft: 10,
                        marginTop: 50,
                        fontSize: 15,
                        color: 'grey'
                    }}>Add your profile picture</Text>
                </View>
                </View>
                <View>
                <View style={{
                    backgroundColor: '#fefefe',
                    paddingBottom: 10,
                }}>
                    <TextInput 
                        placeholder='username'
                        style={styles.txtInput}
                        value={username}
                        onChangeText={(value) => setuserprofile({...userprofile, username: value})}
                    />
                </View>
                <Text style={{
                    paddingLeft: 20,
                    letterSpacing: 2,
                    marginTop: 30
                }}>
                    AGE
                </Text>
                <TextInput 
                    style={styles.txtInput}
                    value={age}
                    onChangeText={(value) => setuserprofile({...userprofile, age: value})}
                />
                </View>
                <View style={{
                marginVertical: 10,
                }}>
                <Text style={{
                    paddingLeft: 20,
                    letterSpacing: 2
                }}>
                    GENDER
                </Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'select your gender...',
                        value: null,
                        color: '#9ea0a4'
                    }} 
                    onValueChange={(value) => {setuserprofile({...userprofile, gender: value})}}
                    useNativeAndroidPickerStyle={false}
                    items={[
                        {label: 'Male', value: 'male'},
                        {label: 'Female', value: 'female'}
                    ]}
                    style={{
                        placeholder: {
                          fontSize: 16,
                          color: 'grey',
                        },
                        inputAndroid: {
                          fontSize: 16,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                          borderBottomWidth: 1,
                          borderTopWidth: 1,
                          borderColor: 'black',
                          color: 'black',
                          paddingRight: 30,
                          marginVertical: 10,
                          backgroundColor: '#fefefe'
                        },
                        iconContainer: {
                          top: 25,
                          right: 10
                        },
                    }}
                    Icon={() => {
                        return <Fontisto name="angle-down" size={20} color="gray" />;
                      }}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttontxt}>DONE</Text>
                </TouchableOpacity>

            </Animated.View>
            <BottomSheet 
            ref={sheetRef}
            snapPoints={[300, 0]}
            renderContent={renderContent}
            initialSnap={1}
            borderRadius={10}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECEBF0'
    },
    txtInput: {
        borderWidth: 0.5,
        paddingLeft: 20,
        fontSize: 16,
        color: 'red',
        marginVertical: 10,
        borderColor: 'black',
        backgroundColor: '#fefefe',
        borderRadius: 30,
        marginHorizontal: 10
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        borderRadius: 15,
        backgroundColor: '#32F355',
        marginHorizontal: 15,
        paddingVertical: 10,
        marginTop: 150
    },
    buttontxt: {
        color: lightTheme.light,
        fontSize: 22,
        letterSpacing: 1.2,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    actionbox: {
        marginVertical: 10
    },
    body: {
        marginHorizontal: 20
    }
})

export default CreateProfile
