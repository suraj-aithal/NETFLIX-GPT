import  { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import {addnowplayingmovies, addontheair} from "../Utils/movieslice"


const Useontheair = () =>{
    const dispatch = useDispatch();

    const ontheair = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      dispatch(addontheair(json.results))
    }
  
    
  
    useEffect(()=>{
      ontheair();
    },[])
}

export default Useontheair;