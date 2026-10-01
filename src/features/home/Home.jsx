import React, { Suspense } from 'react'
import Hero from './components/Hero'
// import Skill from './components/Skill'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
import Gallary from '../gallary/Gallary'
import { lazy } from 'react'
const Skill = lazy(() => import("./components/Skill"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const Home = () => {
  return (
    
    <div className='scroll-smooth duration-300 scroll-mt-24'>
      <Hero />
      <Suspense fallback={<div/>}>
        <Skill/>
        <Projects/>
        <Contact/>
      </Suspense>
        {/* <Gallary/> */}
      
    </div>
  )
}

export default Home