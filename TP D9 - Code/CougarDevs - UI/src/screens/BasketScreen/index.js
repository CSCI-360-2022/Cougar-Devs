import { FlatList, StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import cart from '../../../assets/data/Cart.json'
import CartItem from '../../components/CartItem'
import { Feather } from '@expo/vector-icons';

const BasketScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, justifyContent: 'center'}}>
    <Feather name="shopping-cart" size={30} color="black" />
    <Text style={{fontSize: 30, paddingLeft: 20, fontFamily: "Urbanist-Medium"}}>CART</Text>
    </View>
      <FlatList
      data={cart}
      contentContainerStyle={{flexGrow: 1, paddingBottom: 30}}
      renderItem={({item}) => <CartItem item={item}/>}/>

    <View style={{position: 'absolute', backgroundColor: 'black', height: 50, width: '90%', marginTop: 'auto', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 20, bottom: 10}}>
        <Text style={{color: 'white', fontFamily: 'Urbanist-SemiBold', fontSize: 20}}>Purchase &#8226; $125.00</Text>
    </View>
    </SafeAreaView>
  )
}

export default BasketScreen

const styles = StyleSheet.create({})