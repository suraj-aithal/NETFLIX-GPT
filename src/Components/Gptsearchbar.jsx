import React, { useRef } from 'react'
import lang from '../Utils/langconstatnt';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../Utils/constant';
import { addbrowsemovies } from '../Utils/gptslice';

const Gptsearchbar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store)=>store.selectlang.selected_lang);
  const searchtext = useRef(null);
  const handlesearchbutton = async () =>{
    console.log(searchtext.current.value) 

    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+searchtext.current.value+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
     const json = await data.json();

    dispatch(addbrowsemovies(json.results))
  }
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' bg-black  w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchtext} className='p-4 m-4 col-span-9' type='text' placeholder={lang[langkey].gptsearchplaceholder} />
        <button className='p-2 px-8 m-4 col-span-3 bg-red-500 rounded-lg' onClick={handlesearchbutton}>
          {lang[langkey].search}
        </button>
      </form>
    </div>
  )
}

export default Gptsearchbar;