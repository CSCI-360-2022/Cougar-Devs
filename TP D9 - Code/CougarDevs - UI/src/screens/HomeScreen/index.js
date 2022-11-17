import { StyleSheet, Image, FlatList,View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import EventItem from '../../components/EventItem';
import events from "../../../assets/data/events.json"
import SearchBar from '../../components/searchBar';

export default function HomeScreen() {
  return (
    <SafeAreaView>
   <SearchBar/>
    <FlatList data={events}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{flexGrow: 1,justifyContent: 'center',alignItems: 'center', paddingBottom: 50}}
    renderItem={({item}) => <EventItem event={item}/>}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  searchBar:{
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 15,
    fontSize: 17,
    fontFamily: "Urbanist-Medium"
  }

});
