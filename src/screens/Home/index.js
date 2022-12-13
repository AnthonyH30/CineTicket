import { View, Text, SafeAreaView, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Title from '../../Components/Title'
import { StatusBar } from 'expo-status-bar';
import Categories from '../../Components/Categories';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='light'/>
        <Title text='Choose a movie and enjoy!' />
        <TextInput style={styles.searchInput} />
        <View>
            <Title text='Category' style={{fontWeight: '700'}} />
        </View>
        <Categories />
        <Text style={{color: 'white'}}>eu sla man</Text>
    </SafeAreaView>
  )
}