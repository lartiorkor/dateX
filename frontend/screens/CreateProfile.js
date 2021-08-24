import React, { useRef, useState, useContext } from "react";
import { 
        View, 
        SafeAreaView,
        Button, 
        Text, 
        StatusBar, 
        Pressable, 
        StyleSheet,
        Image, 
        TextInput} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import RNPickerSelect from 'react-native-picker-select';
import lightTheme from "../Theme/colors";
import UserProfileContext from "../components/context/UserProfileContext";

const avatars = ['https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-boy-wearing-a-hat-user-avatar-png-image_6531259.jpg',
'https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-girls-avatars-png-image_6531264.jpg']
 
const CreateProfile = ({navigation}) => {
    const {userprofile, setuserprofile} = useContext(UserProfileContext);
    const {username, age, gender, profilepic} = userprofile
    const [image, setimage] = useState(avatars[Math.floor(Math.random() * 2)])

    const refRBSheet = useRef();

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setimage(image.path)
            setuserprofile({...userprofile, profilepic: image.path})
        });
        refRBSheet.current.close()  
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setimage(image.path)
            setuserprofile({...userprofile, profilepic: image.path})
        });
        refRBSheet.current.close()
    }

    const profileSubmit = () => {
        navigation.navigate('Central')
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingTop: 15,
                backgroundColor: '#fff'
            }}
        >
            <StatusBar 
                hidden={false}
            />
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
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
                <Pressable 
                    style={styles.editPicIcon} 
                    onPress={() => refRBSheet.current.open()}
                >
                    <Ionicons 
                        name='camera-reverse-outline' size={24} color='#fff'
                    />
                </Pressable>
            </View>
            <View style={{
                marginTop: 50,
                marginBottom: 10
            }}>
                <Text style={styles.textInputTitle}>Username</Text>
                <TextInput 
                    style={styles.textInput}
                    value={username}
                    onChangeText={(text) => setuserprofile({...userprofile, username: text})}
                />
            </View>
            <View style={{
                marginBottom: 10
            }}>
                <Text style={styles.textInputTitle}>Age</Text>
                <TextInput 
                    style={styles.textInput}
                    value={age}
                    onChangeText={(text) => setuserprofile({...userprofile, age: text})}
                />
            </View>
            <View style={{
                marginBottom: 70
            }}>
                <Text style={styles.textInputTitle}>Gender</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'select gender...',
                        value: null,
                        color: '#c4c4c4'
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
                          color: '#c4c4c4',
                        },
                        inputAndroid: {
                          fontSize: 16,
                          fontWeight: 'bold',
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                          borderBottomWidth: 0.5,
                          borderColor: '#c4c4c4',
                          color: 'black',
                          marginVertical: 10,
                          backgroundColor: '#fff'
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
                                size={20} color="#c4c4c4"
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

            <Pressable 
                style={styles.buttonContainer}
                onPress={profileSubmit}
            >
                <Text style={styles.buttonText}>CREATE PROFILE</Text>
            </Pressable>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={300}
            >
            <View style={styles.bottomSheetContainer}>
                <View style={styles.bottomSheetHead}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: lightTheme.primaryColor
                    }}>Upload Photo</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 18,
                        color: lightTheme.primaryColor,
                        marginBottom: 15
                    }}>Choose Your Profile Picture</Text>
                </View>
                <Pressable 
                    style={styles.bottomSheetbtn}
                    onPress={takePhotoFromCamera}
                >
                    <Text style={styles.bottomSheetbtnTxt}>TAKE PHOTO</Text>
                </Pressable>
                <Pressable 
                    style={styles.bottomSheetbtn}
                    onPress={choosePhotoFromLibrary}
                >
                    <Text style={styles.bottomSheetbtnTxt}>CHOOSE PHOTO</Text>
                </Pressable>
                <Pressable 
                    style={styles.bottomSheetbtn}
                    onPress={() => refRBSheet.current.close()}
                >
                    <Text style={styles.bottomSheetbtnTxt}>CANCEL</Text>
                </Pressable>
            </View>
        </RBSheet>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        paddingHorizontal: 15,
    },
    bottomSheetHead: {
        marginBottom: 5
    },
    bottomSheetbtn: {
        borderRadius: 15,
        height: 50,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightTheme.primaryColor
    },
    bottomSheetbtnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    editPicIcon: {
        position: 'absolute',
        right: 80,
        bottom: 15,
        height: 45,
        width: 45,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightTheme.primaryColor
    },
    textInputTitle: {
        fontSize: 16,
        color: lightTheme.primaryColor
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#c4c4c4',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        paddingLeft: 15
    },
    buttonContainer: {
        marginBottom: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightTheme.primaryColor
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }
})

export default CreateProfile;