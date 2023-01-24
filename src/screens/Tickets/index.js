import { ScrollView, Image, View, Pressable, Dimensions, FlatList, Text, TouchableOpacity, Touchable } from 'react-native';
import React, { useContext } from 'react';
import Header from '../../Components/Header'
import { styles } from './styles';
import Seats from '../../Data/Seats.json';
import TicketStatus from '../../Components/TicketStatus';
import { TicketContext } from '../../context/TicketContext';
import Title from '../../Components/Title';

const hours = ["12:00", "13:00", "14:00", "15:00", "16:00"]

export default function Tickets() {

  const { setCurrentSelected, currentSelected, date, currentDate, setCurrentDate, session, setSession, price, BuyTicket } = useContext(TicketContext);

  const data = new Date;
  const dia = data.getDate();

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

  const handleDays = (item) =>{
    if(item >= dia){
      setCurrentDate(item)
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
            data={date}
            keyExtractor={(item) => String(item.day)}
            horizontal
            renderItem={({item, index}) => {
              return(
                <TouchableOpacity style={[styles.dateContainer, currentDate === item.day ? {backgroundColor: '#ffa500'} : {}, item.day < dia ? {opacity: 0.3} : {}]} onPress={() => handleDays(item.day)}>
                  <Text style={styles.textMonth}>{item.month}</Text>
                  <View style={styles.circleDay}>
                    <Text style={styles.textDay}>{item.day}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {hours.map( hour => (
              <TouchableOpacity key={hour} style={[styles.hourContainer, session === hour ? {borderColor: '#ffa500'} : {}]} onPress={() => setSession(hour)}>
                <Text style={[styles.textHour, session === hour ? {color: '#ffa500'} : {}]}>{hour}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.finishContainer}>
            <View style={styles.priceContainer}>
              <Text style={{color: 'white', fontWeight: '600', fontSize: 17}}>Total Price</Text>
              <Text style={{color: 'white', fontWeight: '500', fontSize: 16}}>${price}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={BuyTicket}>
              <Text style={styles.btnText}>Book Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}