import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <>
    <section className='my-6'>
    <div className='text-[#2C3E50] text-center'>
        <h1 className='lg:text-5xl text-3xl font-bold'>CONTACT SECTION</h1>
        <div className='flex justify-center items-center my-3'>
          <div className='w-20 h-1 bg-[#2C3E50]'></div>
          <FontAwesomeIcon icon={faStar} className='mx-4'/>
          <div className='w-20 h-1 bg-[#2C3E50]'></div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center my-20 '>
        <form className= 'w-1/2 space-y-10'>
          <input type='text' placeholder='userName' className='w-full py-4 border-b border-gray-300 rounded-xl px-2'/>
          <input type='text' placeholder='userAge' className='w-full py-4 border-b border-gray-300 rounded-xl px-2'/>
          <input type='email' placeholder='userEmail' className='w-full py-4 border-b border-gray-300 rounded-xl px-2'/>
          <input type='password' placeholder='userPassword' className='w-full py-4 border-b border-gray-300 rounded-xl px-2'/>
          <button type='submit' className='px-4 py-2 bg-[#19BC9C] text-white mt-4 rounded-xl'>send Message</button>
        </form>

        
      </div>
    </section>
    </>
  )
}
