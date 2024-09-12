import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constant";
import { addtrailervideo } from "./movieslice";
import { useEffect } from "react";

const Usemovietrailer = (id) => {

    const dispatch = useDispatch()
    const getmovievideos = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US',API_OPTIONS)
        const json = await data.json()
        const filtered_data = json.results.filter((video) => video.type ==='Trailer')
        const trailer = filtered_data.length ? filtered_data[0] : json.results[0];
        dispatch(addtrailervideo(trailer))
    };
    useEffect(()=>{
        getmovievideos();
    },[])
}

 export default Usemovietrailer;