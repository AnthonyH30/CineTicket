import { View, SafeAreaView, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import Title from '../../Components/Title'
import { StatusBar } from 'expo-status-bar';
import Categories from '../../Components/Categories';
import axios from 'axios';
import API_LINK from '../../Data/API_Data';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a7c113a3ac789f97bba5838bcc13852a&language=en-US&page=1').then((response) => {
      setMovies(response.data.results)}).catch(error => console.log(error));
  },[])

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='light'/>
        <Title style={{marginTop: 20}} text='Choose a movie and enjoy!' />
        <TextInput placeholderTextColor={'gray'} placeholder='Search' style={styles.searchInput} />
        <View>
            <Title text='Category' style={{fontWeight: '700'}} />
        </View>
        <Categories />
        <FlatList
          data={movies}
          keyExtractor={(item) => String(item.id)}
          horizontal
          renderItem={({item}) => (
            <TouchableOpacity style={{margin: 20}}>
              <Image style={{width: 200, height: 300, borderRadius: 20}} source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}/>
            </TouchableOpacity>
          )}
        />
    </SafeAreaView>
  )
}