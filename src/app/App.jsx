import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './AppRouter'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <RouterProvider router={router}/>
    <Footer/>
    </>
    
  )
}

export default App