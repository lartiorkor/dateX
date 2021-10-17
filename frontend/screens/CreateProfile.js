import React, {useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import lightTheme from '../Theme/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import Fontisto from 'react-native-vector-icons/Fontisto';
import UserProfileContext from '../components/context/UserProfileContext';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import UserDataContext from '../components/context/UserDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'https://datex-server.herokuapp.com/api/auth/user/create_profile/';

const CreateProfile = ({navigation}) => {
  const {userdata, setuserdata} = useContext(UserDataContext);
  const {userId} = userdata;

  const {userprofile, setuserprofile} = useContext(UserProfileContext);
  const {username, age, phone, gender, profilepic} = userprofile;

  const refRBSheet = useRef();
  const [image, setimage] = useState(profilepic);
  const [visible, setVisible] = React.useState(false);

  async function getUserId() {
    try {
      const id = await AsyncStorage.getItem('userId');
      if (id != null) {
        console.log(id);
        setuserdata({...userdata, userId: id});
        return id;
      } else {
        console.log('id is null');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createProfile() {
    console.log(userId);
    try {
      const result = await axios.post(URL, {
        user_id: userId,
        username: username,
        age: age,
        phone_number: phone,
        gender: gender,
      });
      console.log(result.data);
      // saveUserProfile();
      navigation.navigate('Central');
    } catch (error) {
      console.log(error);
    }
  }

  // function saveUserProfile() {
  //   setuserprofile({
  //     username: username,
  //     age: age,
  //     phone: phone,
  //     gender: gender,
  //     profilepic: image,
  //   });
  // }

  const transition = () => {
    // saveUserProfile();
    navigation.navigate('Central');
  };

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setimage(image.path);
        setuserprofile({...userprofile, profilepic: image.path});
      })
      .catch(err => console.log(err));
    refRBSheet.current.close();
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setimage(image.path);
        setuserprofile({...userprofile, profilepic: image.path});
      })
      .catch(err => console.log(err));
    refRBSheet.current.close();
  };

  return (
    <LinearGradient
      colors={[lightTheme.primaryColor, lightTheme.colorAccent]}
      style={styles.container}>
      <StatusBar hidden />
      <View style={styles.head}>
        <Text
          style={{
            fontSize: 32,
            color: '#fff',
            fontWeight: '700',
          }}>
          Create Profile
        </Text>
        <Pressable onPress={createProfile}>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontWeight: 'bold',
              marginTop: 15,
            }}>
            Save
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          marginVertical: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: profilepic,
            }}
            style={styles.profilepic}
          />
          <MaterialIcons
            name="circle-edit-outline"
            size={30}
            color="#fff"
            onPress={() => refRBSheet.current.open()}
            style={{
              position: 'absolute',
              right: 2,
            }}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
            marginTop: 5,
            marginBottom: 15,
          }}>
          PROFILE PHOTO
        </Text>
      </View>
      <View>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: '#fff',
              marginBottom: 5,
            }}>
            Username
          </Text>
          <TextInput
            style={styles.textinput}
            value={username}
            onChangeText={value =>
              setuserprofile({...userprofile, username: value})
            }
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: '#fff',
              marginBottom: 5,
              marginTop: 10,
            }}>
            Age
          </Text>
          <TextInput
            style={styles.textinput}
            value={age}
            onChangeText={value => setuserprofile({...userprofile, age: value})}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: '#fff',
              marginBottom: 5,
              marginTop: 10,
            }}>
            Phone Number
          </Text>
          <TextInput
            style={styles.textinput}
            value={phone}
            onChangeText={value =>
              setuserprofile({...userprofile, phone: value})
            }
          />
        </View>
        <View
          style={{
            marginBottom: 70,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#fff',
              marginBottom: 5,
              marginTop: 10,
            }}>
            Gender
          </Text>
          <RNPickerSelect
            placeholder={{
              label: 'select gender...',
              value: null,
              color: '#000',
            }}
            onValueChange={value => {
              setuserprofile({...userprofile, gender: value});
            }}
            useNativeAndroidPickerStyle={false}
            items={[
              {label: 'Male', value: 'M'},
              {label: 'Female', value: 'F'},
            ]}
            style={{
              placeholder: {
                fontSize: 16,
                color: '#fff',
              },
              inputAndroid: {
                fontSize: 16,
                fontWeight: 'bold',
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderColor: '#fff',
                color: 'white',
                marginVertical: 10,
              },
              iconContainer: {
                top: 25,
                right: 10,
              },
            }}
            Icon={() => {
              return (
                <Fontisto
                  name="angle-down"
                  size={20}
                  color="#fff"
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                  }}
                />
              );
            }}
          />
        </View>
        {/* Enter user profile details */}
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={300}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#fc054b',
          },
          container: {
            backgroundColor: '#f4f4f4',
          },
        }}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.bottomSheetHead}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 28,
                fontWeight: 'bold',
              }}>
              Upload Photo
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                marginBottom: 15,
              }}>
              Choose Your Profile Picture
            </Text>
          </View>
          <Pressable
            style={styles.bottomSheetbtn}
            onPress={takePhotoFromCamera}>
            <Text style={styles.bottomSheetbtnTxt}>TAKE PHOTO</Text>
          </Pressable>
          <Pressable
            style={styles.bottomSheetbtn}
            onPress={choosePhotoFromLibrary}>
            <Text style={styles.bottomSheetbtnTxt}>CHOOSE PHOTO</Text>
          </Pressable>
          <Pressable
            style={styles.bottomSheetbtn}
            onPress={() => refRBSheet.current.close()}>
            <Text style={styles.bottomSheetbtnTxt}>CANCEL</Text>
          </Pressable>
        </View>
      </RBSheet>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textinput: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  profilepic: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: 'white',
  },
  bottomSheetContainer: {
    paddingHorizontal: 15,
  },
  bottomSheetHead: {
    marginBottom: 5,
  },
  bottomSheetbtn: {
    borderRadius: 15,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc054b',
  },
  bottomSheetbtnTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default CreateProfile;
