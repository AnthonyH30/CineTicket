import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function TicketStatus({status, color}) {
  return (
    <View style={styles.container}>
        <View style={[styles.circle, {backgroundColor: color}]}></View>
        <Text style={styles.text}>{status}</Text>
    </View>
  )
}