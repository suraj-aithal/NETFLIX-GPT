import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import Moviecard from './Moviecard';

const Gptsuggestion = () => {
  const gptdata = useSelector((store)=>store.gpt.gptsearchmovies);
  console.log(gptdata);
  if(!gptdata)return null;
  return (
    <div class="p-4 m-4 bg-black text-white flex flex-wrap gap-4">
    {gptdata && gptdata.map((movie) => (
      <Moviecard
        key={movie.id}
        poster={movie.poster_path}
        id={movie.id}
        data={movie}
        className="w-full sm:w-1/2 md:w-1/3 rounded-lg overflow-hidden shadow-md"
      />
    ))}
  </div>
  
  )
}

export default Gptsuggestion;