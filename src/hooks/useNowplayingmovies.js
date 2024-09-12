import  { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import {addnowplayingmovies} from "../Utils/movieslice"


const UseNowPlaying = () =>{
    const dispatch = useDispatch();

    const Now_playing = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      dispatch(addnowplayingmovies(json.results))
    }
  
    
  
    useEffect(()=>{
      Now_playing();
    },[])
}

export default UseNowPlaying;