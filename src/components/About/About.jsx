import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <>
      <div className='bg-[#19bc9c]  text-white flex flex-col justify-center min-h-[550px]  '>
        <div>
          <div className='text-center'>
            <h1 className='lg:text-5xl md:text-4xl  text-3xl font-bold pb-2'>ABOUT COMPONENT</h1>
            <div className='flex justify-center items-center my-3 pb-1'>
              <div className='w-20 h-1 bg-white'></div>
              <FontAwesomeIcon icon={faStar} className='mx-4' />
              <div className='w-20 h-1 bg-white'></div>
            </div>
          </div>
          <div className='md:flex space-y-6 px-10 justify-center items-center md:px-48 md:space-x-2 md:space-y-0'>
            <div>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as<p>optional SASS stylesheets for easy customization.</p> </p>
            </div>
            <div>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as<p>optional SASS stylesheets for easy customization.</p> </p>
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}
