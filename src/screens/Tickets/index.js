import { ScrollView, Image, View, Pressable, Dimensions, FlatList, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Header from '../../Components/Header'
import { styles } from './styles';
import Seats from '../../Data/Seats.json';
import TicketStatus from '../../Components/TicketStatus';
import { TicketContext } from '../../context/TicketContext';
import Title from '../../Components/Title';
import Date from '../../Data/Date.json';

const hours = ["12:00", "13:00", "14:00", "15:00", "16:00"]

export default function Tickets() {

  const { setCurrentSelected, currentSelected } = useContext(TicketContext);

  const removeSeats = (seat) => {
    const filteredSeats = currentSelected.filter(list => list.id !== seat.id);
    setCurrentSelected(filteredSeats);
  }

  const setSelected = (seat) => {
    const checkTheList = currentSelected.find(list => list.id === seat.id);
    if(checkTheList){
      removeSeats(seat)
    }else{
      setCurrentSelected([...currentSelected, seat])
    }
    
  }

  return (
    <ScrollView style={styles.container}>
      <Header pagetitle='Select Seats' />
      <Image style={styles.imageCine} source={require('../../Assets/cine.png')} />
      <View style={styles.seatsContainer}>
        {Seats.map(seat => (
          <Pressable hitSlop={5} style={[styles.seat, currentSelected.find(list => list.id === seat.id) ? {backgroundColor: '#ffa500'} : {}]} onPress={() => setSelected(seat)} key={seat.id}></Pressable>
        ))}
      </View>
      <View style={styles.status}>
          <TicketStatus color='gray' status='Available' />
          <TicketStatus color='#ffa500' status='Selected' />
          <TicketStatus color='white' status='Reserved' />
      </View>
      <View>
        <Title text='Select Date and Time' style={{fontSize: 17, alignSelf: 'center', marginVertical: 10}} />
        <View style={{paddingHorizontal: 24, marginBottom: 50}}>
          <FlatList
            data={Date}
            keyExtractor={(date) => String(date.day)}
            horizontal
            renderItem={({date, index}) => {
              return(
                <View style={styles.dateContainer}>
                  <Text style={styles.textMonth}>Dec</Text>
                  <View style={styles.circleDay}>
                    <Text style={styles.textDay}>{index}</Text>
                  </View>
              </View>
              )
            }}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {hours.map( hour => (
              <View key={hour} style={styles.hourContainer}>
                <Text style={styles.textHour}>{hour}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.finishContainer}>
            <View style={styles.priceContainer}>
              <Text style={{color: 'white', fontWeight: '600', fontSize: 17}}>Total Price</Text>
              <Text style={{color: 'white', fontWeight: '500', fontSize: 16}}>$32.16</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Book Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}