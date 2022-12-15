import React, { useContext } from 'react';
import { View, SafeAreaView, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Title from '../../Components/Title'
import { StatusBar } from 'expo-status-bar';
import Categories from '../../Components/Categories';
import { TicketContext } from '../../context/TicketContext';
import axios from 'axios';


export default function Home({navigation}) {
  const { movies, setDetailMovie, detailMovie } = useContext(TicketContext);

  const movieDetails = (item) => {
    navigation.navigate('Details')
    axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=a7c113a3ac789f97bba5838bcc13852a&language=en-US`).then((response) => {
      setDetailMovie(response.data)}).catch(error => console.log(error));
    console.log(detailMovie)
  }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='light'/>
        <Title style={{marginTop: 30, marginLeft: 24}} text='Choose a movie and enjoy!' />
        <TextInput placeholderTextColor={'gray'} placeholder='Search' style={[styles.searchInput, {marginHorizontal: 24}]} />
        <View>
            <Title text='Category' style={{fontWeight: '700', marginLeft: 24}} />
        </View>
        <Categories />
        <FlatList
          data={movies}
          keyExtractor={(item) => String(item.id)}
          horizontal
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => movieDetails(item)} style={styles.card}>
              <Image style={styles.cardImage} source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}/>
            </TouchableOpacity>
          )}
        />
    </SafeAreaView>
  )
}