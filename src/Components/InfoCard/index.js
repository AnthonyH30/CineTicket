import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function InfoCard({title, content, icon}) {
  return (
    <View style={styles.container}>
        {icon}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
    </View>
  )
}