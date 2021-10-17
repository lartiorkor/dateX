import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const UserSearchResult = ({username}) => {
  return (
    <View>
      <Pressable style={styles.container}>
        <Text style={styles.text}>hey {username}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: 'gray',
    borderBottomWidth: 0.5,
    borderColor: '#748c94',
  },
  text: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});

export default UserSearchResult;
