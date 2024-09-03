import React from 'react'
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser,removeUser } from '../Utils/userSlice';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO } from '../Utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const handleclick = () =>{
    signOut(auth).then(() => {})
    .catch((error) => {
       navigate('/error')
    });
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
      <img alt='usericon' className='w-12 h-12' src={user?.photoURL} />
      <button onClick={handleclick} className='font-bold text-white'>(Sign out)</button>
    </div>}
    </div>
  )
}

export default Header