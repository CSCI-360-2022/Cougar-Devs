import { StyleSheet, Text, View, Image, SafeAreaView, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

const EventItem = ({event}) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Event", {id: event.id})
  };

  return  (
  <Pressable onPress={onPress} style={styles.eventContainer}>
     <Image source={{uri: event.image}} style={styles.image}/>
        
        <View style={{justifyContent: 'space-between', flex: 1, paddingHorizontal: 20}}>
           <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
             <Text style={styles.eventName}>{event.name}</Text>
             <Text style={styles.eventPrice}>${event.price}</Text>
           </View>

           <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10}}>
             <Text style={styles.OrganizationName}>{event.organization}</Text>
             <Text style={styles.eventDate}>{event.date}</Text>
           </View>
        </View>
           
   </Pressable>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  
    eventContainer: {
      width: '95%',
      borderRadius: 15,
      marginBottom: 20,
      backgroundColor: 'rgba(242,242,240,0.7)',
      borderBottomWidth: 5,
      borderBottomColor: 'rgba(242,242,240,0.7)',
    
      
    },
  
    image: {
      borderTopEndRadius: 15,
      borderTopStartRadius: 15,
      width: "100%",
      aspectRatio: 4/3,
    },
  
    eventName: {
      fontFamily: 'Urbanist-SemiBold',
      fontSize: 25,
      color: 'black',
    },
  
    eventPrice: {
      fontFamily: 'Urbanist-Medium',
      color: 'black',
      fontWeight: '400',
      fontSize: 25
    },
  
    OrganizationName: {
      fontFamily: 'Urbanist-Regular',
      color: 'gray',
      fontWeight: '500',
      fontSize: 18
    },
  
    eventDate: {
      fontFamily: 'Urbanist-Regular',
      color: "gray",
      fontSize: 18,
    }
  });
  