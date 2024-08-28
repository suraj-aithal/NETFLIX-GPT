import React, { useState ,useRef} from 'react'
import Header from './Header'
import {validateFunction,validateemailandpass} from "../Utils/validator";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addUser} from "../Utils/userSlice"


const Login = () => {
    const [issigninform,setissigninform] = useState(true)
    const [errormessage,seterrormessage] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const mobile = useRef(null)
    const reenter = useRef(null)

    // useRef is a special hook in react to give and use the reference to any particular element or anything suppose an input field for example in this case
    // we can use its value for further operations


    const handleButtonClick = ()  =>{
        // validate the form data

     if(!issigninform){
        const message = validateFunction(
            // name.current.value ->  this gives the exact ref value of the current value
            name.current.value,
            email.current.value,
            password.current.value,
            reenter.current.value, // Pass the re-entered password
            mobile.current.value
        );
        seterrormessage(message)

        if(message) return;

        // Sign-up logic   go to firebase documentation and copy paste from there
        createUserWithEmailAndPassword(auth, 
            email.current.value,
            password.current.value,)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL} = auth.currentUser
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    navigate("/browse")
    }).catch((error) => {
      // An error occurred
      seterrormessage(error.message)
    });
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+" "+errorMessage)
    // ..
  });


     }else{
        const message = validateemailandpass(email.current.value,password.current.value)
        seterrormessage(message)

        if(message)  return;

        // sign in logic
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode +"-"+ errorMessage)
  });



     }
    //  console.log(message); 
        // console.log(email);
        // console.log(email.current.value);
        // console.log(password);
    }

    const handlesignin = () =>{
        setissigninform(!issigninform)
    }

  return (
    <div>
        <Header />
        <div className='absolute'>  {/** This image is absolute to its parent position which is the body */}
            <img src="https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4" alt="bg" />
        </div>

            {/** e.preventDefault()   prevents automatic submission when the submit button is pressed */}
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