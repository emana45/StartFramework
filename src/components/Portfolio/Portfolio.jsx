import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar , faPlus} from '@fortawesome/free-solid-svg-icons'
import pic1 from '../../assets/poert1.png'
import pic2 from '../../assets/port2.png'
import pic3 from '../../assets/port3.png'

export default function Portfolio() {
  return (
    <>
    <section className=' container mx-auto flex justify-center items-center flex-col text-center py-10  '>
    <div className='text-[#2C3E50]'>
        <h1 className='lg:text-5xl text-3xl font-bold'>PORTFOLIO COMPONENT</h1>
        <div className='flex justify-center items-center my-3'>
          <div className='w-20 h-1 bg-[#2C3E50]'></div>
          <FontAwesomeIcon icon={faStar} className='mx-4'/>
          <div className='w-20 h-1 bg-[#2C3E50]'></div>
        </div>
      </div>
      <div className='row gap-y-10'>
        <div className="lg:w-4/12 md:6/12 w-full flex justify-center ">
        <div className='lg:w-11/12 w-full relative group overflow-hidden'>
        <img src={pic1} alt="" className='w-full rounded-xl' />
        <div className="layer absolute top-0 left-0 bottom-0 right-0 bg-[#19bc9c] flex justify-center items-center text-white opacity-0 group-hover:opacity-90 transition-all duration-700">
        <FontAwesomeIcon icon={faPlus} className='text-8xl'/>
        </div>
        </div>
        </div>
        <div className="lg:w-4/12 md:w-1/2 w-full flex justify-center">
        <div className='lg:w-11/12 w-full relative overflow-hidden group'>
        <img src={pic2} alt="" className='w-full rounded-xl' />
        <div className="layer absolute top-0 left-0 bottom-0 right-0 bg-[#19bc9c] flex justify-center items-center text-white opacity-0 group-hover:opacity-90 transition-all duration-700">
        <FontAwesomeIcon icon={faPlus} className='text-8xl'/>
        </div>
        </div>
        </div>
        <div className="lg:w-4/12 md:w-1/2 w-full flex justify-center">
        <div className='lg:w-11/12 w-full relative overflow-hidden group'>
        <img src={pic3} alt="" className='w-full rounded-xl' />
        <div className="layer absolute top-0 left-0 bottom-0 right-0 bg-[#19bc9c] flex justify-center items-center text-white opacity-0 group-hover:opacity-90 transition-all duration-700">
        <FontAwesomeIcon icon={faPlus} className='text-8xl'/>
        </div>
        </div>
        </div>
        <div className="lg:w-4/12 md:w-1/2 w-full flex justify-center">
        <div className='lg:w-11/12 w-full relative overflow-hidden group'>
        <img src={pic1} alt="" className='w-full rounded-xl' />
        <div className="layer absolute top-0 left-0 bottom-0 right-0 bg-[#19bc9c] flex justify-center items-center text-white opacity-0 group-hover:opacity-90 transition-all duration-700">
        <FontAwesomeIcon icon={faPlus} className='text-8xl'/>
        </div>
        </div>
        </div>
        <div className="lg:w-4/12 md:w-1/2 w-full flex justify-center">
        <div className='lg:w-11/12 w-full relative overflow-hidden group'>
        <img src={pic2} alt="" className='w-full rounded-xl' />
        <div className="layer absolute top-0 left-0 bottom-0 right-0 bg-[#19bc9c] flex justify-center items-center text-white opacity-0 group-hover:opacity-90 transition-all duration-700">
        <FontAwesomeIcon icon={faPlus} className='text-8xl'/>
        </div>
        </div>
        </div>
        <div className="lg:w-4/12 md:w-1/2 w-full flex justify-center">
        <div className='lg:w-11/12 w-full relative overflow-hidden group'>
        <img src={pic3} alt="" className='w-full rounded-xl' />
        <div className="layer absolute top-0 left-0 bottom-0 right-0 bg-[#19bc9c] flex justify-center items-center text-white opacity-0 group-hover:opacity-90 transition-all duration-700">
        <FontAwesomeIcon icon={faPlus} className='text-8xl'/>
        </div>
        </div>
        </div>
       
       </div>
      </section>

    </>
  )
}
