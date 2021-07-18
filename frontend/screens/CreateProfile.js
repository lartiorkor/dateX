import React from 'react'
import { View,
        Text, 
        StyleSheet,
        TextInput,
        Image,
        TouchableOpacity } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import RNPickerSelect from 'react-native-picker-select'
import { useState, createRef } from 'react'
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import ImagePicker from 'react-native-image-crop-picker';


const CreateProfile = () => {
    const [opView, setopView] = useState(false)
    const [gender, setgender] = useState('')

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
        });  
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
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
                <View style={{
                    height: 130,
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
                        borderWidth: 1,
                        borderRadius: 50,
                        marginTop:10,
                        padding: 10
                    }}>
                        <Image 
                            source={require('../Assets/user.png')}
                            style={{
                                height: 60,
                                width: 60,
                            }}
                        />
                    </View>
                    <TouchableOpacity 
                        style={{
                        marginTop: 7
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
                        marginTop: 30,
                        fontSize: 15,
                        color: 'grey'
                    }}>Add an optional profile picture</Text>
                </View>
                </View>
                <View style={{
                }}>
                <View style={{
                    backgroundColor: '#fefefe',
                    paddingBottom: 10
                }}>
                    <TextInput 
                        placeholder='username'
                        style={styles.txtInput}
                    />
                </View>
                <Text style={{
                    paddingLeft: 20,
                    letterSpacing: 2,
                    marginTop: 30
                }}>
                    NAME
                </Text>
                <TextInput 
                    style={styles.txtInput}
                />
                <Text style={{
                    paddingLeft: 20,
                    letterSpacing: 2
                }}>
                    AGE
                </Text>
                <TextInput 
                    style={styles.txtInput}
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
                    onValueChange={(value) => {setgender(value)}}
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
        backgroundColor: '#e3e3e3'
    },
    txtInput: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingLeft: 20,
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
        borderColor: 'black',
        backgroundColor: '#fefefe'
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
})

export default CreateProfile
