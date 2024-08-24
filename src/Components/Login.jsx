import React, { useState ,useRef} from 'react'
import Header from './Header'
import {validateFunction} from "../Utils/validator";
import { validateemailandpass } from '../Utils/validator';

const Login = () => {
    const [issigninform,setissigninform] = useState(true)
    const [errormessage,seterrormessage] = useState(null)

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const mobile = useRef(null)
    const reenter = useRef(null)


    const handleButtonClick = ()  =>{
        // validate the form data

     if(!issigninform){
        const message = validateFunction(
            name.current.value,
            email.current.value,
            password.current.value,
            reenter.current.value, // Pass the re-entered password
            mobile.current.value
        );
        seterrormessage(message)
     }else{
        const message = validateemailandpass(email.current.value,password.current.value)
        seterrormessage(message)
     }
    //  console.log(message); 
        // console.log(email);
        // console.log(email.current.value);
        // console.log(password);


        // sign in or sign up    


    }

    const handlesignin = () =>{
        setissigninform(!issigninform)
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4" alt="bg" />
        </div>

        <form onSubmit={(e)=>{e.preventDefault()}} className='bg-black absolute p-12 my-36 mx-auto right-0 left-0 w-3/12 bg-opacity-70 text-white' >
        <h1 className='text-3xl font-bold py-4'>{issigninform?'Sign In':'Sign Up'}</h1>
           {!issigninform &&  <input type='text' ref={name} placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700' />}
           {!issigninform &&  <input type='text' ref={mobile} placeholder='Mobile Number' className='p-2 my-4 w-full bg-gray-700' />}
            <input type='text' ref={email} placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />
            <input type='text' ref={password} placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />
            {!issigninform && <input type='text'ref={reenter} placeholder='Confirm Password' className='p-2 my-4 w-full bg-gray-700' />}
            <p className='text-red-600 font-bold text-lg p-2'>{errormessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg text-white' onClick={handleButtonClick}>{issigninform?'Sign In':'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={handlesignin}>{issigninform?'New to Netflix? Sign Up Now':'Already registered? Sign In Now'}</p>
        </form>
    </div>
  )
}

export default Login