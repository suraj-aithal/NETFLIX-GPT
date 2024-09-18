import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constant";
import { useEffect } from "react";
import { addinfo, addinfovid } from "./infoslice";

const Useinfo = (id) => {

    const dispatch = useDispatch()
    const getmovievideos = async () =>{
        if(id==null)return;
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US',API_OPTIONS)
        const json = await data.json()
        if(json==null)return;
        const filtered_data = json.results.filter((video) => video.type ==='Trailer')
        const trailer = filtered_data.length ? filtered_data[0] : json.results[0];
        dispatch(addinfovid(trailer))
    };
    useEffect(()=>{
        getmovievideos();
    },[])
}

 export default Useinfo;