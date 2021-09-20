import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const MockProfilesHorizontal = ({ user, theme }) => {
  const {item} = user
  const {imageUri, name} = item
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: imageUri}}
        style={styles.image}
      />
      <Text style={[styles.text, {color: theme.txtColor}]}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    marginHorizontal: 7,
    alignItems: 'center',
    marginVertical: 7
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  text: {
    fontSize: 13
  }
}) 

export default MockProfilesHorizontal
