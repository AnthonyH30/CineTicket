import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigation, MyTicketsNavigation} from './Navigation';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "white",
      tabBarStyle:{
        backgroundColor: '#151518',
        borderTopColor: '#4f4f54'
      }
      }}>
      <Tab.Screen
      name="HomeTab"
      component={HomeNavigation}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Entypo name='home' size={size} color={color} />
        )
      }}
      />
      <Tab.Screen
      name="MyTicketsTab"
      component={MyTicketsNavigation}
      options={{
        tabBarLabel: "My Tickets",
        tabBarIcon: ({ color, size }) => (
          <Entypo name='ticket' size={size} color={color} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}