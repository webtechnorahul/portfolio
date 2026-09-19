import React from 'react'
import FanGroup from './FanGroup'
import { OrbitControls, } from '@react-three/drei'
import { Helper } from '@react-three/drei'
import { PointLightHelper } from 'three'

const Exprience = () => {
  return (
    <>
    <ambientLight intensity={5} color={'white'} />
         {/* <pointLight position={[2, 10, 2]} intensity={100} color={'red'}>
      <Helper type={PointLightHelper} args={[0.5, 'hotpink']} />  */}
    <FanGroup/>
    
    </>
  )
}

export default Exprience