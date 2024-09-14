import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptsuggestion from './Gptsuggestion'
import { LOGIN_IMG } from '../Utils/constant'

const GptSearch = () => {
  return (
    <div>
       <div className='absolute -z-10'>  {/** This image is absolute to its parent position which is the body */}
            <img src={LOGIN_IMG} alt="bg" />
        </div>
      <Gptsearchbar />
      <Gptsuggestion />
    </div>
  )
}

export default GptSearch