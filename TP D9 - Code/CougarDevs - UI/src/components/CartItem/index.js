import { StyleSheet, Text, View, Image, SafeAreaView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartItem = ({item}) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Event", {id: item.id})
  };

  return  (
   <SafeAreaView style={styles.page}>
  <Pressable onPress={onPress} style={styles.eventContainer}>
     <Image source={{uri: item.item.image}} style={styles.image}/>
    
    <View style={styles.rightContainer}>
        <Text numberOfLines={2} style={styles.name}>{item.item.name}</Text>
        <Text style={styles.OrganizationName}>{item.item.organization}</Text>
        <Text style={styles.eventDate}>{item.item.date}</Text>
        <Text style={styles.OrganizationName}>Tickets: {item.quantity}</Text>
        <Text style={styles.price}>${item.item.price}</Text>
    </View>
   </Pressable>
   </SafeAreaView>
  );
};

export default CartItem;

const styles = StyleSheet.create({

  
    eventContainer: {
      
      flexDirection: 'row',
      margin: 10,
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 5,
      width: '95%'
      
    
      
    },
  
    image: {
      flex: 2,
      resizeMode: 'stretch',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
  
    name: {
      fontFamily: 'Urbanist-SemiBold',
      fontSize: 18,
      paddingBottom: 5,
      color: 'black',
      width: '100%'
    },
  
    rightContainer: {
        padding: 10,
        flex: 3,
        justifyContent: '',
        alignItem: 'flex-end'
    },
    price: {
      fontFamily: 'Urbanist-Medium',
      color: 'black',
      fontWeight: '400',
      fontSize: 18,
      paddingTop: 15,
    },
  
    OrganizationName: {
      fontFamily: 'Urbanist-Regular',
      color: 'gray',
      fontWeight: '500',
      fontSize: 15,
    },
  
    eventDate: {
      fontFamily: 'Urbanist-Regular',
      color: "gray",
      fontSize: 15,
    }
  });
  