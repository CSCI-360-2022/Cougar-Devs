import { View, Text, StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const SearchBar = () => {
  return (
    <View style={{flexDirection: 'row', zIndex: 1, width: '100%', alignItems: 'center', justifyContent: 'center',}}>
    <Ionicons name="search" size={24} color="black" style={{padding: 5, position: 'absolute', left: 15}} />

    <TextInput placeholder='Search for Events' style={styles.searchBar}/>
    </View>
  )
}

const styles = StyleSheet.create({
 
    searchBar:{
      flex: 1,
      height: 50,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 25,
      paddingLeft: 40,
      fontSize: 17,
      fontFamily: "Urbanist-Medium"
    }
  
  });
  
export default SearchBar