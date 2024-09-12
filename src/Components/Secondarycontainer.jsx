import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className='bg-black  text-white'>
    <div className=' -mt-[166px] relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowplayingmovies} />
      </div>
      {/* 
      Movie list - Trending
      Movie list - Popular
      Movie list - High Rated
      and many more stuff
      */}
      <MovieList title={"Trending"} movies={movies.nowplayingmovies} />
      <MovieList title={"Popular"} movies={movies.nowplayingmovies} />
      <MovieList title={"High Rated"} movies={movies.nowplayingmovies} />
    </div>
  )
}

export default Secondarycontainer