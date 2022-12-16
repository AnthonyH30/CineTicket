import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { TicketContext } from '../../context/TicketContext';
import { styles } from './styles';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import './styles';
import InfoCard from '../../Components/InfoCard';
import { LinearGradient } from 'expo-linear-gradient';

export default function Details({navigation}) {

    const { detailMovie } = useContext(TicketContext);

    const duration = (time) =>{
      const hour = Math.floor(time / 60);
      const minutes = time % 60;
      const zerominutes = `0${minutes}`

      return `${hour}:${minutes < 10 ? zerominutes : minutes}H`
    }

  return (
    <ScrollView style={styles.container}>
      <View style={{padding: 24,}}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} hitSlop={20} style={{position: 'absolute', left: 5}}>
            <Entypo name='chevron-left' size={24} color='white' />
          </Pressable>
          <Text style={styles.pageTitle}>Movie Details</Text>
        </View>
        <View style={styles.infoView}>
          <Image style={styles.moviePoster} source={{uri: `https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}`}} />
          <View style={styles.info}>
            <InfoCard icon={<FontAwesome name='video-camera' size={16} color='white'/>} title='Genre' content={detailMovie.genres[0].name} />
            <InfoCard icon={<MaterialCommunityIcons name='clock-time-five' size={16} color='white'/>} title='Duration' content={duration(detailMovie.runtime)} />
            <InfoCard icon={<AntDesign name='star' size={16} color='white'/>} title='Rating' content={String(detailMovie.vote_average).slice('0', '3')} />
          </View>
        </View>
        <Text style={styles.movieName}>{detailMovie.original_title}</Text>
        <Text style={styles.subtitle}>Synopsis</Text>
        <Text style={styles.description}>{detailMovie.overview}</Text>
      </View>
      <LinearGradient startPoint={{y: 1}} endPoint={{y: 0}} colors={['rgba(0, 0, 0, 0)', 'rgba(21,21,24,1)']} style={styles.btnSection}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Get Reservation</Text>
        </TouchableOpacity>
      </LinearGradient >
    </ScrollView>
  )
}