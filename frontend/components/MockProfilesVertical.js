import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const MockProfilesVertical = ({ user, theme }) => {
  const { item } = user
  const {imageUri, name, lastSeen} = item
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: imageUri}}
        style={styles.image}
      />
      <View style={[styles.textContainer, {borderColor: theme.tabInactive}]}>
        <Text style={[styles.username, {color: theme.txtColor}]}>{name}</Text>
        <Text style={[styles.status, {color: theme.tabInactive}]}>last seen {lastSeen}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    flex: 1
  },
  status: {
    fontSize: 12
  }
})
export default MockProfilesVertical
