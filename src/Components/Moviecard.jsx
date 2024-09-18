import React from 'react'
import { CARD_PIC } from '../Utils/constant'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addinfo } from '../Utils/infoslice';

const Moviecard = ({poster,id,data}) => {
  const dispatch = useDispatch()
  const handleclick = () =>{
    dispatch(addinfo(data))
  }
  let flag = true;
  let flag2 = false
  if(poster==null){
    flag = false
    flag2 = true

  }
  console.log(data)
  return (
   <Link to={"/info/"+id}>
     <div className='w-48 pr-4' onClick={handleclick}>
       {flag && <img   className='cursor-pointer' alt='Poster' src={CARD_PIC + poster} />}
        {flag2 && <img alt='Poster' src='https://cdn-icons-png.flaticon.com/512/2503/2503508.png' /> }
    </div>
   </Link>
  )
}

export default Moviecard