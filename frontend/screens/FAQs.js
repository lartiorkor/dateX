import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import {
  Text, Title, Subheading, Paragraph, Headline
} from 'react-native-paper'

const FAQs = () => {
  return (
    <ScrollView style={styles.container}>
      <Title>DateX FAQ</Title> 
<Text style={styles.text}>This FAQ provides answers to basic questions about DateX.</Text>
<Title>General</Title>
<Subheading style={[styles.subHeading, styles.text]}>What is DateX?</Subheading>
<Text style={styles.text}>DateX is a messaging app with a focus on helping users build meaningful connections with random people. It is fast, simple and free, and can be used on mobile devices.</Text>
<Subheading style={[styles.subHeading, styles.text]}>Who is DateX for?</Subheading>
<Text style={styles.text}>DateX is for everyone who wants a simple and reliable way of messaging and connecting to other people.</Text>
<Subheading style={[styles.subHeading, styles.text]}>Is it available on my device?</Subheading>
<Text style={styles.text}>You can use DateX on all smartphones; it is available on both android and iOS devices.</Text>
<Subheading style={[styles.subHeading, styles.text]}>Who are the people behind DateX?</Subheading>
<Text style={styles.text}>DateX is supported by a group of computer engineering students in KNUST, Ghana; who altogether contributed both ideologically and technically to make DateX possible.</Text>
<Subheading style={[styles.subHeading, styles.text]}>Where is DateX based?</Subheading>
<Text style={styles.text}>The Datex development team is currently based in Kumasi, Ghana.</Text>
<Title>DateX basics</Title>
<Subheading style={[styles.subHeading, styles.text]}>Who can I message?</Subheading>
<Text style={styles.text}>You can message people who are in your phone contacts and have DateX, or people you have been matched with on DateX.  </Text>
<Subheading style={[styles.subHeading, styles.text]}>Who can message me?</Subheading>
<Text style={styles.text}>People can contact you on DateX if they know your phone number or if you message them first. </Text>
<Subheading style={[styles.subHeading, styles.text]}>Can I delete my messages?</Subheading>
<Text style={styles.text}>No. You cannot delete messages sent or received in any conversation. If you wish to have any messages deleted, you may contact DateX Support.</Text>
<Subheading style={[styles.subHeading, styles.text]}>How do I log out of DateX?</Subheading>
<Text style={styles.text}>
Most users don’t need to log out of DateX but if you do want to log out for some reason, here’s how to do that:
Go to Settings > Sign out (last option on the Settings page)
</Text>
<Title>Username</Title>
<Subheading style={[styles.subHeading, styles.text]}>What are usernames? How do I get one?</Subheading>
<Text style={styles.text}>You can set up a public username in Settings by editing your profile. It then becomes visible to other people who view your profile.</Text>	
<Subheading style={[styles.subHeading, styles.text]}>What can I use as my user name?</Subheading>
<Text style={styles.text}>You can use a-z, 0-9 and underscores. Usernames are case insensitive, but DateX will store your capitalization preferences.</Text>
<Subheading style={[styles.subHeading, styles.text]}>Do I need a user name?</Subheading>
<Text style={styles.text}>You don’t have to get one. Remember that DateX usernames are public and as such, visible to people who view your profile.</Text>
<Subheading style={[styles.subHeading, styles.text]}>How do I delete my username?</Subheading>
<Text style={styles.text}>Go to settings and save an empty username. This will remove your username; people will no longer be able to see it when they view your profile.</Text>
<Subheading style={[styles.subHeading, styles.text]}>What if someone is pretending to be me?</Subheading>
<Text style={styles.text}>If a scammer is pretending to be you, please contact Datex Support.</Text>
<Title>Others</Title>
<Subheading style={[styles.subHeading, styles.text]}>My phone was stolen, what do I do?</Subheading>
<Text style={styles.text}>First of all, sorry about your phone. Fortunately, the email is the only way for us to identify a DateX user. If you remember the email you signed up with, you only have to install DateX on your new mobile device and then sign in.</Text>
<Subheading style={[styles.subHeading, styles.text]}>Do you have a privacy policy?</Subheading>
<Text style={styles.text}>Yes. Go to DateX Settings – Privacy Policy</Text>
<Subheading style={[styles.subHeading, styles.text]}>How do I disable notifications?</Subheading>
<Text style={styles.text}>Go to DateX – Notifications to either enable or disable notifications.</Text>
<Title>DateX Support </Title>
<Text style={styles.text}>If you have any other questions, please contact DateX Support (in DateX go to Settings – Contact Us). </Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF'
  },
  text: {
    fontSize: 15,
    textAlign: 'justify'
  },
  subHeading: {
    fontWeight: 'bold'
  }
})

export default FAQs
