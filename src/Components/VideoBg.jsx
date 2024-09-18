import React from 'react'
import { useSelector } from 'react-redux';

import Usemovietrailer from "../Utils/useMovietrailer"

const VideoBg = ({id}) => {
    const trailervideo = useSelector((store)=>store.movies?.trailervideo)

    Usemovietrailer(id);
  return (
    <div className='w-screen'><iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailervideo?.key+ "?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe></div>
  )
}

export default VideoBg;