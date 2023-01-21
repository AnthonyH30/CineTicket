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
    const [date, setDate] = useState([
        {
            month: "Jan",
            day: "1",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "2",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "3",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "4",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "5",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "6",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        }
        ,{
            month: "Jan",
            day: "7",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        }
        ,{
            month: "Jan",
            day: "8",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "9",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "10",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "11",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "12",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "13",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "14",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "15",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "16",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "17",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "18",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "19",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "20",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "21",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "22",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "23",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "24",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "25",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "26",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "27",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "28",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "29",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "30",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        },
        {
            month: "Jan",
            day: "31",
            hours: [ "13:00", "14:30", "16:00", "17:30", "19:00"]
        }
    ])
    const [currentDate, setCurrentDate] = useState();
    const [session, setSession] = useState();
    const [price, setPrice] = useState(0);

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

    useEffect(()=>{
        const totalPrice = currentSelected.length;
        setPrice(totalPrice * 20)
    },[currentSelected])

    return(
        <TicketContext.Provider value={{movies, selectedCategory, setSelectedCategory, detailMovie, setDetailMovie, data, setSearch, search, setCurrentSelected, currentSelected, date, currentDate, setCurrentDate, session, setSession, price}}>
            {children}
        </TicketContext.Provider>
    )
}