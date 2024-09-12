import  { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import { addupcomingmovies} from "../Utils/movieslice"


const Useupcoming = () =>{
    const dispatch = useDispatch();

    const Upcoming = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      dispatch(addupcomingmovies(json.results))
    }
  
    
  
    useEffect(()=>{
        Upcoming();
    },[])
}

export default Useupcoming;