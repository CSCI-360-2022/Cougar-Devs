import { StyleSheet, Text, View, Pressable } from 'react-native'
import {Auth} from 'aws-amplify'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.infoBox}>
            <Text style={styles.subtitle}> Name </Text>
            <Text style={styles.profileText}> CougarDevs </Text>
        </View>
        <View style={styles.infoBox}>
            <Text style={styles.subtitle}>Email</Text>
            <Text style={styles.profileText}> CougarDevs@g.cofc.edu </Text>
        </View>

        <View style={styles.infoBox}>
            <Text style={styles.subtitle}> Phone Number </Text>
            <Text style={styles.profileText}> (123) 456-7890</Text>
        </View>


        <Pressable style={styles.logoutButton} onPress={() => Auth.signOut()}>
            <Text style={{fontSize: 25, fontFamily: 'Urbanist-Regular'}}> Logout </Text>
        </Pressable>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    profileText: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 18,
        fontFamily: "Urbanist-Regular",
    },
    infoBox: {
        height: 50,
        marginBottom: 20,
        width: '80%',
        borderWidth: 1,
        borderBottomWidth: 2,
        alignItems: 'flex-start',
    },

    logoutButton: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderBottomWidth: 2,
    },

    subtitle:{
        paddingLeft: 5,
        fontSize: 13,
        color: 'grey'
    }
    
})