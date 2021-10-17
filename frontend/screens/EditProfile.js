import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import {createStackNavigator} from '@react-navigation/stack';
import ThemeContext from '../components/context/ThemeContext';
import UserDataContext from '../components/context/UserDataContext';
import UserProfileContext from '../components/context/UserProfileContext';
import RBSheet from 'react-native-raw-bottom-sheet';

import ProfilePicture from './ProfilePicture';

const avatars = [
  'https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-boy-wearing-a-hat-user-avatar-png-image_6531259.jpg',
  'https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-girls-avatars-png-image_6531264.jpg',
];

const picStack = createStackNavigator();

const EditProfile = () => {
  return (
    <picStack.Navigator>
      <picStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <picStack.Screen
        name="Profile Photo"
        component={ProfilePicture}
        options={{
          headerShown: false,
        }}
      />
    </picStack.Navigator>
  );
};

const EditProfileScreen = ({navigation}) => {
  const {userprofile, setuserprofile} = React.useContext(UserProfileContext);
  const {userdata, setuserdata} = React.useContext(UserDataContext);
  const {username, profilepic, phone, gender} = userprofile;
  const {email} = userdata;
  const {currentTheme} = React.useContext(ThemeContext);
  const [image, setimage] = useState(avatars[Math.floor(Math.random() * 2)]);

  const refRBSheet = useRef();

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setimage(image.path);
      setuserprofile({...userprofile, profilepic: image.path});
    });
    refRBSheet.current.close();
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setimage(image.path);
      setuserprofile({...userprofile, profilepic: image.path});
    });
    refRBSheet.current.close();
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: currentTheme.backgroundColor,
        },
      ]}>
      <StatusBar
        hidden={false}
        barStyle={
          currentTheme.name === 'light' ? 'dark-content' : 'light-content'
        }
        backgroundColor={currentTheme.backgroundColor}
      />
      <View
        style={[
          styles.header,
          {
            backgroundColor: currentTheme.backgroundColor,
            borderColor: currentTheme.headerbc,
          },
        ]}>
        <Ionicons
          name="arrow-back-outline"
          color={currentTheme.txtColor}
          size={30}
          onPress={() => navigation.navigate('Settings')}
        />
        <Text
          style={[
            styles.headerTxt,
            {
              color: currentTheme.txtColor,
            },
          ]}>
          Edit Profile
        </Text>
      </View>
      <View style={styles.head}>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Profile Photo', {picture: image})
            }>
            <Image
              source={{
                uri: profilepic,
              }}
              style={{
                height: 150,
                width: 150,
                borderRadius: 75,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={{
              borderRadius: 22,
              backgroundColor: currentTheme.editcamicon,
              width: 45,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}>
            <Ionicons
              name="camera-reverse-outline"
              size={24}
              color={currentTheme.backgroundColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View
          style={[
            styles.actionbox,
            {
              borderBottomColor: currentTheme.tabActive,
            },
          ]}>
          <Text style={styles.textstyle}>Username</Text>
          <TextInput
            style={[styles.textinput, {color: currentTheme.txtColor}]}
            autoCorrect={false}
            value={username}
            autoCompleteType="username"
            onChangeText={value =>
              setuserprofile({...userprofile, username: value})
            }
          />
        </View>
        <View
          style={[
            styles.actionbox,
            {
              borderBottomColor: currentTheme.tabActive,
            },
          ]}>
          <Text style={styles.textstyle}>Email</Text>
          <TextInput
            style={[styles.textinput, {color: currentTheme.txtColor}]}
            autoCorrect={false}
            autoCompleteType="email"
            value={email}
            editable={false}
            onChangeText={value => setuserdata({...userdata, email: value})}
          />
        </View>
        <View
          style={[
            styles.actionbox,
            {
              borderBottomColor: currentTheme.tabActive,
            },
          ]}>
          <Text style={styles.textstyle}>Phone</Text>
          <TextInput
            style={[styles.textinput, {color: currentTheme.txtColor}]}
            autoCompleteType="tel"
            value={phone}
          />
        </View>
        <View
          style={[
            styles.actionbox,
            {
              borderBottomColor: currentTheme.tabActive,
            },
          ]}>
          <Text style={styles.textstyle}>Gender</Text>
          <TextInput
            style={[styles.textinput, {color: currentTheme.txtColor}]}
            value={gender === 'M' ? 'Male' : 'Female'}
            editable={false}
          />
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={300}
        customStyles={{
          draggableIcon: {
            backgroundColor: currentTheme.primaryColor,
          },
          container: {
            backgroundColor: currentTheme.bottomSheetBg,
          },
        }}>
        <View
          style={[
            styles.bottomSheetContainer,
            {backgroundColor: currentTheme.bottomSheetBg},
          ]}>
          <View style={styles.bottomSheetHead}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 28,
                fontWeight: 'bold',
                color: currentTheme.colorAccent,
              }}>
              Upload Photo
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: currentTheme.colorAccent,
                marginBottom: 15,
              }}>
              Choose Your Profile Picture
            </Text>
          </View>
          <Pressable
            style={[
              styles.bottomSheetbtn,
              {backgroundColor: currentTheme.primaryColor},
            ]}
            onPress={takePhotoFromCamera}>
            <Text style={styles.bottomSheetbtnTxt}>TAKE PHOTO</Text>
          </Pressable>
          <Pressable
            style={[
              styles.bottomSheetbtn,
              {backgroundColor: currentTheme.primaryColor},
            ]}
            onPress={choosePhotoFromLibrary}>
            <Text style={styles.bottomSheetbtnTxt}>CHOOSE PHOTO</Text>
          </Pressable>
          <Pressable
            style={[
              styles.bottomSheetbtn,
              {backgroundColor: currentTheme.primaryColor},
            ]}
            onPress={() => refRBSheet.current.close()}>
            <Text style={styles.bottomSheetbtnTxt}>CANCEL</Text>
          </Pressable>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
  },
  headerTxt: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1.2,
    position: 'absolute',
    right: 130,
  },
  head: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 2,
    padding: 20,
  },
  textinput: {
    fontSize: 18,
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  textstyle: {
    fontSize: 16,
    color: 'grey',
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
  actionbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    marginBottom: 15,
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
  },
  bottomSheetbtnTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default EditProfile;
