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
      <MovieList title={"Popular"} movies={movies.popularmovie} />
      <MovieList title={"Top Rated"} movies={movies.topratedmovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingmovies} />
      <MovieList title={"TV Seires Airing today"} movies={movies.airingtoday} />
      <MovieList title={"On the air"} movies={movies.ontheair} />
      <MovieList title={"Poplar TV Series"} movies={movies.popularseries} />
      <MovieList title={"Top Rated TV Series"} movies={movies.topseries} />
    </div>
  )
}

export default Secondarycontainer