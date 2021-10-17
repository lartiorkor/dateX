import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, StatusBar} from 'react-native';
import {Searchbar} from 'react-native-paper';
import ThemeContext from '../components/context/ThemeContext';
import MockProfilesHorizontal from '../components/MockProfiles';
import FakeUsers from '../Assets/dummy-data/FakeUsers';
import MockProfilesVertical from '../components/MockProfilesVertical';
import axios from 'axios';
import UserSearchResult from './UserSearchResult';

const MatchScreen = () => {
  const {currentTheme} = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    searchQuery && getUser(searchQuery);
  }, [searchQuery]);

  async function getUser(query) {
    const encodedQuery = encodeURI(query);
    const searchURI = `https://datex-server.herokuapp.com/api/auth/users/search?q=${encodedQuery}`;
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
        <Searchbar
          placeholder="Search for friends..."
          style={styles.searchbar}
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>
      <View style={{borderWidth: 1, flex: 1}}>
        {userList.length != 0 ? (
          userList.map(user => (
            <UserSearchResult key={user.user_id} username={user.username} />
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
});

export default MatchScreen;
