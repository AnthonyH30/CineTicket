import { React, createContext, useState, useEffect } from "react";
import axios from 'axios';

export const TicketContext = createContext({});

export default function TicketProvider({children, navigation}){
    const [movies, setMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [detailMovie, setDetailMovie] = useState({});

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a7c113a3ac789f97bba5838bcc13852a&language=en-US&page=1').then((response) => {
        setMovies(response.data.results)}).catch(error => console.log(error));
    },[])

    return(
        <TicketContext.Provider value={{movies, selectedCategory, setSelectedCategory, detailMovie, setDetailMovie}}>
            {children}
        </TicketContext.Provider>
    )
}