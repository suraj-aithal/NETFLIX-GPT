import  { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import { addpopularmovies} from "../Utils/movieslice"


const Usepopularmovies = () =>{
    const dispatch = useDispatch();

    const Popular = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      dispatch(addpopularmovies(json.results))
    }
  
    
  
    useEffect(()=>{
        Popular();
    },[])
}

export default Usepopularmovies;