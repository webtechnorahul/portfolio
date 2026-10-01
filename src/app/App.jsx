import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './AppRouter'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'
import { HelmetProvider } from 'react-helmet-async'

const App = () => {
  return (
    <>
    <HelmetProvider>
      <Navbar/>
      <RouterProvider router={router}/>
      <Footer/>
    </HelmetProvider>
    </>
    
  )
}

export default App