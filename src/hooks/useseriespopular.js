import  { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import { addpopularseries} from "../Utils/movieslice"


const Useseriespopular = () =>{
    const dispatch = useDispatch();

    const popular = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      dispatch(addpopularseries(json.results))
    }
  
    
  
    useEffect(()=>{
        popular();
    },[])
}

export default Useseriespopular;