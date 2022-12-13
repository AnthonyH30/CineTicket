import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import CategoriesData from '../../Data/CategoriesData.json';
import { styles } from './styles';

export default function Categories() {
  return (
    <FlatList
        data={CategoriesData}
        keyExtractor={(item) => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
            return(
                <TouchableOpacity style={styles.categoryContainer}>
                    <View style={styles.iconBox}>
                        <Text style={styles.icon}>{item.icon}</Text>
                    </View>
                    <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
            )
        }}
    />
  )
}