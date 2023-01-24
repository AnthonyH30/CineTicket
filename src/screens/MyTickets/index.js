import { SafeAreaView, FlatList, TouchableOpacity, Image, View, Dimensions, Text } from 'react-native';
import React, { useContext } from 'react';
import { styles } from './styles';
import Title from '../../Components/Title';
import { TicketContext } from '../../context/TicketContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

export default function MyTickets() {

  const { ticketsData, cancelTicket } = useContext(TicketContext);

  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.titulo} text="My Tickets" />
      <FlatList
          data={ticketsData}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={(<View style={{flex: 1, width: width, height: height / 2, alignItems: 'center', justifyContent: 'center'}}><Text style={{color: 'white', fontSize: 20,}}>No Tickets Found...</Text></View>)}
          ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
          renderItem={({item}) => (
            <View style={styles.ticket}>
              <Image style={styles.ticketImage} source={{uri: `https://image.tmdb.org/t/p/w500/${item.image}`}}/>
              <View style={styles.content}>
                <View style={styles.titlePrice}>
                  <Text style={styles.ticketTitle}>{item.title}</Text>
                  <Text style={styles.price}>${item.price}</Text>
                </View>
                <View style={styles.seatsHour}>
                  <View style={styles.seats}>
                    <Text style={{color: 'white'}}>Seats: </Text>
                    {item.seats.map((seat, index) => (
                      <View key={seat.id}>
                        <Text style={{color: 'white'}}>{seat.Number}{index == item.seats.length -1 ? "." : ", "}</Text>
                      </View>
                    ))}
                  </View>
                  <View>
                    <Text style={{color: 'white'}}>Jan,{item.day} | {item.hour}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={{marginLeft: 15}} onPress={() => cancelTicket(item.id)}>
                <MaterialCommunityIcons name='cancel' color="red" size={30}/>
              </TouchableOpacity>
            </View>
          )}
        />
    </SafeAreaView>
  )
}