import React from 'react'
import lang from '../Utils/langconstatnt';
import { useSelector } from 'react-redux';

const Gptsearchbar = () => {
  const langkey = useSelector((store)=>store.selectlang.selected_lang);
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' bg-black  w-1/2 grid grid-cols-12'>
        <input className='p-4 m-4 col-span-9' type='text' placeholder={lang[langkey].gptsearchplaceholder} />
        <button className='p-2 px-8 m-4 col-span-3 bg-red-500 rounded-lg'>
          {lang[langkey].search}
        </button>
      </form>
    </div>
  )
}

export default Gptsearchbar;