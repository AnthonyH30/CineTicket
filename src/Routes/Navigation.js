import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/index'
import Details from "../screens/Details";
import Tickets from "../screens/Tickets";

const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Tickets" component={Tickets} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}