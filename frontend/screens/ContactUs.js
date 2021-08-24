import React, {useContext,useState} from 'react'
import { SafeAreaView,View, Text, TextInput, StyleSheet, Image, Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ThemeContext from '../components/context/ThemeContext'
import ImagePicker from 'react-native-image-crop-picker';


const ContactUs = () => {
  const [image, setimage] = useState('')
  const {currentTheme} = React.useContext(ThemeContext)
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
        setimage(image.path)
    });
}
  return (
    <SafeAreaView style = {[styles.container, {backgroundColor: currentTheme.backgroundColor}]}>
      <TextInput
        placeholder = 'Describe your problem'
        style={[styles.textInput, {backgroundColor: currentTheme.button}]}
        textAlignVertical='top'
        multiline={true}
      />
      <Text style = {[styles.addScreenshot, {color: currentTheme.btnText}]}>Add image (optional)</Text>
      <Pressable 
        onPress={choosePhotoFromLibrary}
        style={[styles.camera, {backgroundColor: currentTheme.button}]}>
        {
          image ? 
          <Image
              source = {{
                uri: image
              }}
              style={styles.image}
              resizeMode='contain'
          />: 
          <Ionicons 
            name='image-outline' size={36} color="#595959"
          />}
      </Pressable>
      <Pressable style = {[styles.button, {backgroundColor: currentTheme.tabActive}]}>
        <Text style={[styles.btnText, {color: currentTheme.txtColor}]}>SUBMIT</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 15
  },
  textInput: {
    borderBottomWidth: 1.5,
    height: 150,
    fontSize: 16, 
    marginBottom: 30
  },
  addScreenshot: {
    fontSize: 16,
    marginBottom: 10
  },
  camera: {
    height: 100,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 5
  },
  image: {
    height: 100,
    width: 70
  },
  button:{
    height: 50,
    marginLeft: 220,
    borderRadius: 10, 
    marginTop: 225,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
  }
})

export default ContactUs
