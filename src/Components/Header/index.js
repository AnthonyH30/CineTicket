import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';


export default function Header({pagetitle}) {

  const navigation = useNavigation();

  const goBack = () =>{
    navigation.goBack()
  }

  return (
    <View style={styles.header}>
        <Pressable onPress={goBack} hitSlop={20} style={{position: 'absolute', left: 5}}>
            <Entypo name='chevron-left' size={24} color='white' />
        </Pressable>
        <Text style={styles.pageTitle}>{pagetitle}</Text>
    </View>
  )
}