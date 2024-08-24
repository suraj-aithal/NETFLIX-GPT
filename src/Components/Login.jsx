import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [issigninform,setissigninform] = useState(true)

    const handlesignin = () =>{
        setissigninform(!issigninform)
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4" alt="bg" />
        </div>

        <form className='bg-black absolute p-12 my-36 mx-auto right-0 left-0 w-3/12 bg-opacity-70 text-white' >
        <h1 className='text-3xl font-bold py-4'>{issigninform?'Sign In':'Sign Up'}</h1>
           {!issigninform &&  <input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700' />}
           {!issigninform &&  <input type='text' placeholder='Mobile Number' className='p-2 my-4 w-full bg-gray-700' />}
            <input type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />
            <input type='text' placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />
            {!issigninform && <input type='text' placeholder='Confirm Password' className='p-2 my-4 w-full bg-gray-700' />}
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg text-white'>{issigninform?'Sign In':'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={handlesignin}>{issigninform?'New to Netflix? Sign Up Now':'Already registered? Sign In Now'}</p>
        </form>
    </div>
  )
}

export default Login