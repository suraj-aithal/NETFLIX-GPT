import  { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import { addtopratedmovies, addtopseries} from "../Utils/movieslice"


const Usetopratedseries = () =>{
    const dispatch = useDispatch();

    const Upcoming = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      dispatch(addtopseries(json.results))
    }
  
    
  
    useEffect(()=>{
        Upcoming();
    },[])
}

export default Usetopratedseries;