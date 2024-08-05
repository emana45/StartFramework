import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe , } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className=' text-white text-center ' >
            <div className="row bg-[#2C3E50] p-24 space-y-14 md:space-y-0">
            <div className='md:w-1/3 w-full p-3'>
                <h3 className='md:text-3xl text-2xl font-semibold pb-2'>LOCATION</h3>
                <p className='pb-4'>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className='md:w-1/3 w-full p-3'>
                <h3 className='md:text-3xl text-2xl font-semibold pb-2'>AROUND THE WEB</h3>
                <div className='flex flex-wrap justify-center items-center'>
                    <div className='w-8 h-8 mx-2 flex justify-center items-center rounded-full border borde-2 border-white'>
                    <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className='w-8 h-8 mx-2 flex justify-center items-center rounded-full border borde-2 border-white'>
                    <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className='w-8 h-8 mx-2 flex justify-center items-center rounded-full border borde-2 border-white'>
                    <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className='w-8 h-8 mx-2 flex justify-center items-center rounded-full border borde-2 border-white'>
                    <FontAwesomeIcon icon={faGlobe} />
                    </div>
                
            
                
                </div>
            </div>
            <div className='md:w-1/3 w-full p-3 '>
                <h3 className='md:text-3xl text-2xl font-semibold pb-2 '>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        <div className='p-4 last'>
            <p>Copyright © Your Website 2021</p>
        </div>

    </footer>
  )
}
