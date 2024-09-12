import  { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import {addtopratedmovies} from "../Utils/movieslice"


const Usetopratedmovies = () =>{
    const dispatch = useDispatch();

    const Now_playing = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      dispatch(addtopratedmovies(json.results))
    }
  
    
  
    useEffect(()=>{
      Now_playing();
    },[])
}

export default Usetopratedmovies;