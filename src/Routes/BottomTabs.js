import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigation, MyTicketsNavigation} from './Navigation';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
      name="Home"
      component={HomeNavigation}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Entypo name='home' size={size} color={color} />
        )
      }}
      />
      <Tab.Screen
      name="MyTickets"
      component={MyTicketsNavigation}
      options={{
        tabBarLabel: "My Tickets",
        tabBarIcon: ({ color, size }) => (
          <Entypo name='ticket' size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  );
}