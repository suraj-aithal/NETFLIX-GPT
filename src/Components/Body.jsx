import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

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