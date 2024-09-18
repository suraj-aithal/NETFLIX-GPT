import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Movieinfo from './Movieinfo'

const Body = () => {

// we are updating stuff
      
  
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login />
        },
        {
            path:"/browse",
            element:<Browse />
        },
        {
            path:"/info/:resid",
            element:<Movieinfo />
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