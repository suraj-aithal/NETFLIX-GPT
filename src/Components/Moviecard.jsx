import React from 'react'
import { CARD_PIC } from '../Utils/constant'

const Moviecard = ({poster}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='Poster' src={CARD_PIC + poster} />
    </div>
  )
}

export default Moviecard