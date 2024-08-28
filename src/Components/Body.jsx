import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';

const Body = () => {
const dispatch = useDispatch();

      
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
      }
    });
  },[])
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login />
        },
        {
            path:"/browse",
            element:<Browse />
        }
    ])
    // prov  
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body