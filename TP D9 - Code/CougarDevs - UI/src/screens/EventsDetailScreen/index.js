import { View, Text, Image, FlatList, StyleSheet, Button, TouchableOpacity, ScrollView } from "react-native"
import events from "../../../assets/data/events.json"
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";






const EventsDetailScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const event = events.find(events => events.id === route.params.id);
    
    

    const [ticket, setTicket] = useState(1)


    const decrementTickets = () => {
        if (ticket > 1) {
            setTicket(ticket - 1)
        } else {
            setTicket(0)
        }
    }

    const getTotal = () => {
        return (event.price * ticket).toFixed(2)
    }
    return (
        <View style={styles.pageContainer}>
            <Image source={{uri: event.image}} style={styles.image}/>

            
            <Ionicons onPress={() => navigation.goBack()}name="arrow-back-circle" size={45} color="white" style={styles.iconContainer}/>
            
                    <ScrollView style={styles.container}>
                    <Text style={styles.title}>{event.name}</Text>
                    <View style={styles.line}/>
                    {/* DESCRIPTION */}
                
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.subtitle}>{event.organization}</Text>
                    <Text style={styles.subtitle}>{event.date}</Text>
                    </View>
                    <Text style={styles.price}>${event.price}</Text>
            
                    <Text style={styles.description}>{event.description}</Text>
                    
                    </ScrollView>

                <View style={styles.footer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text> Tickets </Text>
                            <View style={styles.tickets}>
                            <TouchableOpacity onPress={() => decrementTickets()} style={{borderRadius: 10}}>
                            <EvilIcons name="minus" size={30} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.ticketText}> {ticket} </Text>
                            <TouchableOpacity onPress={() => setTicket(ticket + 1)}>
                                <EvilIcons name="plus" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                </View>
                        <View style={{backgroundColor:'black', width: '100%', alignItems: 'center', height: 60, borderRadius: 20, justifyContent: 'center'}}>
                            <Text style={styles.payButton}> Add {ticket} to basket &#8226; ${getTotal()}</Text>
                        </View>
                
                </View>
                
        </View>
    )

}

const styles = StyleSheet.create({
    pageContainer:{
        flex:1
    },
    image: {
        width: '100%',
        aspectRatio: 4/3,
    },

    iconContainer:{
        position: 'absolute',
        top: 50,
        left: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: "600",
        fontFamily: 'Urbanist-SemiBold'
    },

    price: {
        paddingTop: 10,
        color: '#525252',
        fontSize: 25,
        fontFamily: 'Urbanist-Medium',
    },

    line:{
        width: '100%',
        paddingBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    description: {
        paddingVertical: 10,
        fontFamily: 'Urbanist-Regular',
        fontSize: 18,
    },

    container: {
        margin: 10,
    },

    tickets: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },
    
    ticketText: {
        fontFamily: 'Urbanist-Regular',
        fontSize: 18,
    },

    subtitle: {
        fontFamily: 'Urbanist-Regular',
        fontSize: 20,
        paddingVertical: 3,
        paddingTop: 10,
    },

    footer: {
       alignItems: 'center',
       justifyContent: 'space-between',
       paddingHorizontal: 10,
       position: 'absolute',
       bottom: 50,
       width: '100%',
       backgroundColor: 'white',
       height: 60,
    },

    payButton: {
        fontFamily: 'Urbanist-SemiBold',
        fontSize: 15,
        color: 'white',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
    }
})

export default EventsDetailScreen;