import React from 'react'
import Hero from './components/Hero'
import Navbar from '../../app/shared/Navbar'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from '../../app/shared/Footer'
import Gallary from '../gallary/Gallary'

const Home = () => {
  return (
    <div className='scroll-smooth duration-300 scroll-mt-24'>
      <Hero />
      <Skill/>
      <Projects/>
      <Contact/>
      <Gallary/>
    </div>
  )
}

export default Home