import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/index'
import Details from "../screens/Details";
import Tickets from "../screens/Tickets";
import MyTickets from "../screens/MyTickets";


const Stack = createStackNavigator();

export function HomeNavigation(){
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Tickets" component={Tickets} />
            </Stack.Navigator>
    );
}

export function MyTicketsNavigation(){
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="MyTickets" component={MyTickets} />
            </Stack.Navigator>
    );
}