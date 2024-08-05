import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  let [open , setOpen] = useState(false);

  function toggle(){
    setOpen(!open)
  }
  return (
    <>
      <nav className=' bg-[#2C3E50] py-8 px-4 md:px-20 text-white top-0 left-0 right-0 relative'>
        <div className="container  mx-auto flex flex-wrap justify-between items-center">
        <div>
            <Link to="" className='font-bold text-2xl  md:text-3xl lg:p-2' >START FRAMEWORK</Link>
          </div>
          <div className='space-x-8 hidden lg:flex'>
            <NavLink to="About" className=' font-bold p-2 '>ABOUT</NavLink>
            <NavLink to="Portfolio" className=' font-bold p-2 '>PORTFOLIO</NavLink>
            <NavLink to="Contact" className=' font-bold p-2 '>CONTACT</NavLink>
          </div>
          <div className='lg:hidden'>
            <FontAwesomeIcon icon={faBars} className='text-2xl text-[#232C33] px-4 py-2  border-2 border-[#232C33] rounded-lg cursor-pointer' onClick={toggle} />
          </div>
        </div>
          <div className={`flex flex-col pt-4 space-y-2 w-fit bg-[#2C3E50] ${open?'block':'hidden'}`}>
            <NavLink to="About" className=' font-bold p-2 '>ABOUT</NavLink>
            <NavLink to="Portfolio" className=' font-bold p-2 '>PORTFOLIO</NavLink>
            <NavLink to="Contact" className=' font-bold p-2 '>CONTACT</NavLink>
          </div>
      </nav>
    </>
  )
}
