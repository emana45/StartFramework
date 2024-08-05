import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCow} from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Notfound from './components/Notfound/Notfound'



let x = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'About' , element:<About/>},
    {path:'Portfolio' , element:<Portfolio/>},
    {path:'Contact', element:<Contact/>},
    {path:'*' , element:<Notfound/>}
  ]}
])

function App() {
 

  return (
    <>
    <RouterProvider router={x}></RouterProvider>
     
    </>
  )
}

export default App
