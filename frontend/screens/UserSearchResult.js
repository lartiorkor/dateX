import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

const UserSearchResult = ({
  username,
  createConversation,
  search_user_id,
  theme,
}) => {
  console.log(search_user_id);
  return (
    <View style={styles.container}>
      <Avatar.Text
        size={40}
        label={username[0].toUpperCase()}
        style={styles.avatar}
      />
      <Pressable
        style={[styles.userRowContainer, {borderColor: theme.defaultbg}]}
        onPress={() => createConversation(search_user_id)}>
        <Text style={[styles.text, {color: theme.txtColor}]}>{username}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 7,
    alignItems: 'center',
  },
  userRowContainer: {
    paddingVertical: 20,
    marginHorizontal: 5,
    backgroundColor: 'transparent',
    flex: 1,
    marginLeft: 20,
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserSearchResult;
