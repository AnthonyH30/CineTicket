import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { TicketContext } from '../../context/TicketContext';
import CategoriesData from '../../Data/CategoriesData.json';
import { styles } from './styles';

export default function Categories() {

    const { selectedCategory, setSelectedCategory } = useContext(TicketContext);

  return (
    <View>
        <FlatList
            data={CategoriesData}
            keyExtractor={(item) => String(item.id)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
                return(
                    <TouchableOpacity onPress={() => setSelectedCategory(item)} style={[styles.categoryContainer, index === 0 ? {marginLeft: 24} : {}]}>
                        <View style={[styles.iconBox, selectedCategory.name === item.name ? {backgroundColor: 'gray'} : {}]}>
                            <Text style={styles.icon}>{item.icon}</Text>
                        </View>
                        <Text style={[styles.text, selectedCategory.name === item.name ? {color: 'white'} : {}]}>{item.name}</Text>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
  )
}