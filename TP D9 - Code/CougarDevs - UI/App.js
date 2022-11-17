import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import EventsDetailScreen from './src/screens/EventsDetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import { useFonts } from 'expo-font';
import { useCallback, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from './src/navigation';
import {withAuthenticator} from 'aws-amplify-react-native'
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure({...config,
Analytics: {
  disabled: true,
}});

function App() {

  const [fontsLoaded] =  useFonts({
    'Urbanist-SemiBold': require('./assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('./assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
  });

const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded){
        await SplashScreen.hideAsync();
    }
}, [fontsLoaded]);

if(!fontsLoaded){
    return <Text style={{justifyContent: 'center', alignItems:'center'}}> WAITING FOR FONTS</Text>;
}

  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}

export default withAuthenticator(App)