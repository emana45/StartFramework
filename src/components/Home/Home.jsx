import React from 'react'
import homePic from '../../assets/avataaars.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <>
    <div className='bg-[#19BC9C] text-white text-center flex flex-col justify-center min-h-[550px]'>
      <div className='flex justify-center items-center mb-10'>
     <img src={homePic} className='w-64'></img>
      </div>
      <div>
        <h1 className='lg:text-5xl text-3xl font-bold'>START FRAMEWORK</h1>
        <div className='flex justify-center items-center my-3'>
          <div className='w-20 h-1 bg-white'></div>
          <FontAwesomeIcon icon={faStar} className='mx-4'/>
          <div className='w-20 h-1 bg-white'></div>
        </div>
        <div><p>Graphic Artist - Web Designer - Illustrator</p></div>

      </div>
      
    </div>
    </>
  )
}
