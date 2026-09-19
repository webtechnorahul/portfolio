import { Canvas } from '@react-three/fiber'
import React from 'react'
import Exprience from './components/Exprience'

const Gallary = () => {
  return (
    <div className='relative h-screen w-full pointer-events-none'>
      <Canvas className='bg-black w-full h-full'>
        <Exprience/>
      </Canvas>
        <div className="absolute top-0 left-0 right-0 z-10 project-title mb-16 py-20">
        <p className="flex gap-5 justify-center text-center items-center mb-4 text-lg text-blue-600 tracking-[0.4em]">
          &lt;
          <span className="w-20 h-[0.7px] bg-red-600 font-sans" ></span>
          My Gallery
          <span className="w-20 h-[0.7px] bg-red-600" ></span>
          &gt;
        </p>
      </div>
    </div>
  )
}

export default Gallary