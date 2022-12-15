import React, { useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { TicketContext } from '../../context/TicketContext';
import './styles';

export default function Details() {

    const { detailMovie } = useContext(TicketContext);

  return (
    <SafeAreaView>
      <Text>{detailMovie.original_title}</Text>
    </SafeAreaView>
  )
}