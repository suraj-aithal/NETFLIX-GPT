import React from 'react'
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser,removeUser } from '../Utils/userSlice';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO, SUPPORTED_LANGUAGES } from '../Utils/constant';
import { togglegptpage } from '../Utils/gptslice';
import { changelang } from '../Utils/langslice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const showgptsearch = useSelector((store) => store.gpt.showgptsearch)
  console.log(showgptsearch)
  const handlegpt = () =>{
    dispatch(togglegptpage());
  }
  const handleclick = () =>{
    signOut(auth).then(() => {})
    .catch((error) => {
       navigate('/error')
    });
  }
  const handlelangchange = (e) =>{
    dispatch(changelang(e.target.value)) 
  }

  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });
    return  () => unsubscribe();
  },[])
  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' src={LOGO} alt="logo" />
    { user && <div className='flex p-4'>
    { showgptsearch && <select className='p-2 m-2 bg-gray-700 text-white' onChange={handlelangchange}>
        {
          SUPPORTED_LANGUAGES.map((lang)=><option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
        }
      </select>}
      <button onClick={handlegpt} className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg mx-4 my-2'>
        {
          showgptsearch?"Home page":"GPT Search"
        }
      </button>
      <img alt='usericon'  className='w-12 h-12' src={user?.photoURL} />
      <button onClick={handleclick} className='font-bold text-white'>(Sign out)</button>
    </div>}
    </div>
  )
}

export default Header