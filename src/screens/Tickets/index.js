import { SafeAreaView, Image, View, Pressable } from 'react-native';
import React, { useContext, useEffect } from 'react';
import Header from '../../Components/Header'
import { styles } from './styles';
import Seats from '../../Data/Seats.json';
import TicketStatus from '../../Components/TicketStatus';
import { TicketContext } from '../../context/TicketContext';

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
  
  useEffect(()=>{

  },[])

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  )
}