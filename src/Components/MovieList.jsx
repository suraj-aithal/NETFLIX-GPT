import React from 'react'
import Moviecard from './Moviecard';

const MovieList = ({title,movies}) => {
    console.log(movies);
  return (
    <div className='px-6'>
        <h1 className='text-3xl py-4'>{title}</h1>
     <div className='flex overflow-scroll'>
     <div className='flex'>
      {
        movies && movies.map((movie)=>(<Moviecard id={movie.id} poster={movie.poster_path} />))
       }
      </div>
     </div>
    </div>
  )
}

export default MovieList