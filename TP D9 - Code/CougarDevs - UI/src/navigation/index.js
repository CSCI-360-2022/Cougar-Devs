import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EventsDetailScreen from '../screens/EventsDetailScreen';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {Foundation, Feather} from "@expo/vector-icons"
import ProfileScreen from '../screens/Profile';
import BasketScreen from '../screens/BasketScreen';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name="home" component={HomeTabs} options={{headerShown: false}}/>
            <Stack.Screen name="Event" component={EventsDetailScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{backgroundColor: 'white'}}>
            <Tab.Screen name='Home' component={HomeStackNavigator} options={{tabBarIcon: ({color}) => (
                 <Foundation name="home" size={24} color={color}/>
    ),
    }}/>
            <Tab.Screen name="Cart" component={BasketScreen} options={{tabBarIcon: ({color}) => (
                <Feather name="shopping-cart" size={24} color={color} />
            ),
            }}/>

            <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: ({color}) => (
                <Feather name="shopping-cart" size={24} color={color} />
            ),
            }}/>

        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
        <HomeStack.Screen name="Events" component={HomeScreen} options={{headerShown: false}}/>
        <HomeStack.Screen name="Event" component={EventsDetailScreen} options={{headerShown:false}}/>
        <HomeStack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        </HomeStack.Navigator>
    )
}
export default RootNavigator;