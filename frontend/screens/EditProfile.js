import React from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'

const avatars = ['https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-boy-wearing-a-hat-user-avatar-png-image_6531259.jpg',
'https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-social-media-girls-avatars-png-image_6531264.jpg']

const EditProfile = () => {   
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View>
                    <Image 
                        
                    />
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.textstyle}>Username</Text>
                <TextInput
                    style= {styles.textinput}
                />
                <Text style={styles.textstyle}>Email</Text>
                <TextInput
                    style= {styles.textinput}
                />
                <Text style={styles.textstyle}>Phone</Text>
                <TextInput
                    style= {styles.textinput}
                />
                <Text style={styles.textstyle}>Gender</Text>
                <TextInput
                    style= {styles.textinput}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        flex: 1,
    },
    body: {
        flex: 2,
        padding: 20
    },
    textinput: {
      borderBottomWidth: 2,
      borderBottomColor: 'grey',
      marginBottom: 15,
      fontSize: 20,
      fontWeight: 'bold'
    },
    textstyle: {
        fontSize: 16,
        color: 'grey'
    }
})

export default EditProfile
