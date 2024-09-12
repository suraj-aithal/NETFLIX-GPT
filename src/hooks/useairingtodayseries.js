import  { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import {addairingtoday} from "../Utils/movieslice"


const Useairingtoday = () =>{
    const dispatch = useDispatch();

    const airingtoday = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      dispatch(addairingtoday(json.results))
    }
  
    
  
    useEffect(()=>{
        airingtoday();
    },[])
}

export default Useairingtoday;