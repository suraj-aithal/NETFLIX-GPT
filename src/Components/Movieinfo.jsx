import React from 'react'
import { useSelector } from 'react-redux'
import Useinfo from '../Utils/usemovieinfovid'
import { useNavigate } from 'react-router-dom'

const Movieinfo = () => {
    const navigate = useNavigate();
    const handle = () =>{
        navigate('/browse')
    }
    const data = useSelector((store)=>store.info.movieinfo)
   const viddata = useSelector((store)=>store.info.vid)
   
   Useinfo(data?.id)
   const name = data?.title || data?.name
   const date = data?.release_date || data?.first_air_date;
   const key = viddata?.key || ''
  return (
   data && <div className='flex h-screen'>
     <div className='bg-green-600 w-full md:w-6/12 border border-black'>
      <iframe
        className='w-full h-full object-cover'
        src={"https://www.youtube.com/embed/"+key+ "?&autoplay=0&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
    <div className='bg-black w-full md:w-6/12 border border-black flex flex-col justify-between'>
      <div className='text-white m-4 p-4'>
        <h1 className='text-4xl md:text-6xl mb-4'>Name: {name}</h1>
        <h2 className='text-2xl md:text-4xl mb-4'>Release Date: {date}</h2>
        <h2 className='text-xl md:text-3xl mb-4'>Ratings: {data?.vote_average}</h2>
        <legend className='border-b border-black text-xl mb-2'>Overview</legend>
        <p className='text-base md:text-lg'>{data?.overview}</p>
      <button className='text-white bg-purple-800 rounded-lg m-3 p-4' onClick={handle}>Back to home</button>
      </div>
    </div>
  </div>
  
  )
}

export default Movieinfo