import React from 'react'
import Hero from './components/Hero'
import Navbar from '../../app/shared/Navbar'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallary from '../gallary/Gallary'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill/>
      <Projects/>
      <Contact/>
      <Gallary/>
      <Footer/>
    </div>
  )
}

export default Home