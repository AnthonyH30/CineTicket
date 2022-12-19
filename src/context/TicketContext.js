import { React, createContext, useState, useEffect } from "react";
import axios from 'axios';

export const TicketContext = createContext({});

export default function TicketProvider({children}){
    const [data, setData] = useState([])
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState({
        "id": "0",
        "name": "All",
        "icon": "🌟",
        "categoryId": 1
    });
    const [currentSelected, setCurrentSelected] = useState([])
    const [detailMovie, setDetailMovie] = useState({genres:[{name: "Action"}]});

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a7c113a3ac789f97bba5838bcc13852a&language=en-US&page=1').then((response) => {
        setData(response.data.results)}).catch(error => console.log(error));
    },[])

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a7c113a3ac789f97bba5838bcc13852a&language=en-US&page=1').then((response) => {
        setMovies(response.data.results)}).catch(error => console.log(error));
    },[])

    useEffect(() =>{
        if(selectedCategory.name === 'All'){
            setMovies(data)
        }else{
            const filtered = data.filter(item => item.genre_ids.includes(selectedCategory.categoryId))
                setMovies(filtered)
        }
    },[selectedCategory])

    useEffect(()=>{
        const filteredByText = data.filter(item => item.original_title.includes(search))
        setMovies(filteredByText)
    },[search])

    return(
        <TicketContext.Provider value={{movies, selectedCategory, setSelectedCategory, detailMovie, setDetailMovie, data, setSearch, search, setCurrentSelected, currentSelected}}>
            {children}
        </TicketContext.Provider>
    )
}