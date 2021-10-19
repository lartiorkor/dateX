import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Avatar, Modal, Portal, Provider} from 'react-native-paper';
import ThemeContext from '../components/context/ThemeContext';
import UserProfileContext from '../components/context/UserProfileContext';

const url =
  'https://datex-server.herokuapp.com/api/conversations/user/profile/random_user/';

const UserMatchedScreen = ({user, theme, closeHandler, setMatchedUsers}) => {
  const {username} = user;

  useEffect(() => {
    return () => {
      setUserMatchedUsers(null);
    };
  }, []);

  return (
    <View>
      <View style={styles.usermatch_header}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          MATCH FOUND
        </Text>
      </View>

      <View style={styles.usermatch_body}>
        <Avatar.Text
          label={username ? username[0].toUpperCase() : ' '}
          size={70}
        />
        <Text style={styles.usermatch_bodyText}>
          {username ? username : ' '}
        </Text>
      </View>

      <View style={styles.usermatch_buttonContainer}>
        <Pressable
          style={[styles.usermatch_button, {backgroundColor: theme.button}]}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: theme.light,
            }}>
            Start Chat
          </Text>
        </Pressable>
        <Pressable
          onPress={closeHandler}
          style={[styles.usermatch_button, {backgroundColor: theme.button}]}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: theme.light,
            }}>
            Close
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const MatchScreen = () => {
  const {currentTheme} = useContext(ThemeContext);
  const {userprofile} = useContext(UserProfileContext);
  const {profile_id, age} = userprofile;

  const [matchedUsers, setMatchedUsers] = useState(null);

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => {
    setVisible(false);
  };

  function showProfile() {
    console.log(`profileid: ${profile_id}, age: ${age}`);
  }

  async function randomMatch() {
    try {
      const response = await axios.post(url, {
        profile_id: profile_id,
        age: age,
      });
      console.log(response.data);
      const {data} = response;
      setMatchedUsers(data);
      data && showModal();
    } catch (error) {
      console.log(error);
    }
  }

  function closeHandler() {
    hideModal();
  }

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
  };

  return (
    <View style={styles.container}>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <UserMatchedScreen
              theme={currentTheme}
              user={matchedUsers}
              closeHandler={closeHandler}
              setMatchedUsers={setMatchedUsers}
            />
          </Modal>
        </Portal>
        <View style={styles.header}>
          <Avatar.Text size={40} label="H" />
        </View>
        <View style={styles.body}>
          <Image
            source={require('./../Assets/DateX_.png')}
            style={styles.body_image}
          />

          <Pressable style={styles.button} onPress={randomMatch}>
            <Text style={styles.button_text}>Match</Text>
          </Pressable>
        </View>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  body: {
    flex: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body_image: {},
  button: {
    backgroundColor: '#fc054b',
    marginVertical: 30,
    width: '40%',
    paddingVertical: 15,
    elevation: 10,
  },
  button_text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  usermatch_header: {
    alignItems: 'center',
  },
  usermatch_body: {
    alignItems: 'center',
    marginTop: 20,
  },
  usermatch_bodyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  usermatch_buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  usermatch_button: {
    borderRadius: 5,
    paddingVertical: 15,
    width: '40%',
    alignItems: 'center',
    elevation: 5,
  },
});

export default MatchScreen;
