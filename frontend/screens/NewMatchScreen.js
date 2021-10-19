import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TextInput,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import ThemeContext from '../components/context/ThemeContext';
import MockProfilesHorizontal from '../components/MockProfiles';
import FakeUsers from '../Assets/dummy-data/FakeUsers';
import MockProfilesVertical from '../components/MockProfilesVertical';
import axios from 'axios';
import UserSearchResult from './UserSearchResult';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserDataContext from '../components/context/UserDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const createConversation_api =
  'https://datex-server.herokuapp.com/api/conversations';

const MatchScreen = () => {
  const {currentTheme} = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const {userdata} = useContext(UserDataContext);
  const {userId} = userdata;

  const [userList, setUserList] = useState([]);

  // useEffect(() => {
  //   searchQuery && getUser(searchQuery);
  // }, [searchQuery]);

  // TODO: change get user to a function

  async function getUser(query) {
    const encodedQuery = encodeURI(query);
    const searchURI = `https://datex-server.herokuapp.com/api/auth/users/search?q=${encodedQuery}`;
    console.log(`search: ${searchQuery}`);
    try {
      const response = await axios.get(searchURI);
      const {data} = response;
      setUserList(data);
      console.log(`userList: ${userList}`);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getToken() {
    try {
      const token = await AsyncStorage.getItem('accessTokenValue');
      if (token != null) {
        console.log(`token: ${token}`);
        return String(token);
      } else {
        console.log('token is null');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createConversation(user_two_id, user_one_id = userId) {
    const tokenValue = getToken();
    try {
      console.log('run');
      const response = await axios.post(
        createConversation_api,
        {
          user_one: user_one_id,
          user_two: user_two_id,
          conversation_type: 'temp',
        },
        {
          headers: {
            Authorization: `Token ${tokenValue}`,
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function clearUserList() {
    if (searchQuery === '') {
      console.log(`search query is null`);
      setUserList([]);
    }
    console.log(`userlist: ${userList}`);
  }

  function clearSearch() {
    setSearchQuery('');
    setUserList([]);
  }

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: currentTheme.backgroundColor},
      ]}>
      <StatusBar
        hidden={false}
        barStyle={
          currentTheme.name === 'light' ? 'dark-content' : 'light-content'
        }
        backgroundColor={currentTheme.backgroundColor}
      />
      <View style={styles.header}>
        <Text style={[styles.headerTxt, {color: currentTheme.txtColor}]}>
          Find Friends
        </Text>
        <View style={styles.textinputbox}>
          <Ionicons name="search-sharp" size={22} color="#595241" />
          <TextInput
            placeholder="Search for friends..."
            style={styles.textInput}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            underlineColorAndroid="transparent"
            onSubmitEditing={() => getUser(searchQuery)}
          />
          {searchQuery ? (
            <Ionicons
              name="close-sharp"
              size={26}
              color="#595241"
              onPress={clearSearch}
            />
          ) : null}
        </View>
      </View>
      <View style={{borderWidth: 1, flex: 1}}>
        {userList.length != 0 ? (
          userList.map(user => (
            <UserSearchResult
              key={user.user_id}
              username={user.username}
              createConversation={createConversation}
              search_user_id={user.user_id}
              theme={currentTheme}
            />
          ))
        ) : (
          <Text style={{fontSize: 20, color: 'black'}}>No users</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {},
  headerTxt: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 1.1,
  },
  searchbar: {
    borderRadius: 50,
    marginVertical: 10,
  },
  textinputbox: {
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 8,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    marginLeft: 22,
    fontSize: 18,
    textDecorationLine: 'none',
    color: '#636057',
  },
});

export default MatchScreen;
