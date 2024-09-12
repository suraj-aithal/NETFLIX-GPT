import React from 'react'
import { useSelector } from 'react-redux';
import VideoBg from './VideoBg';
import VideoTitle from './VideoTitle';

const Maincontainer = () => {
    const movies = useSelector((store)=>store.movies?.nowplayingmovies)

    if(movies == null)return;

    const mainmovie = movies[0];

    const {original_title,overview,id} = mainmovie

  return (
    <div>
        <VideoTitle title={original_title} overview = {overview} />
        <VideoBg id={id} />
    </div>
  )
}

export default Maincontainer;