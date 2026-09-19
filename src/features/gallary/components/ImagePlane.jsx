import { useTexture } from '@react-three/drei';
import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
const ImagePlane = ({url,PlaneWidth,PlaneHeight,position,rotation}) => {

    const texture=useTexture(url);
    const geometry=useMemo(()=>{
        const geo=new THREE.PlaneGeometry(PlaneWidth,PlaneHeight);
        geo.translate(12,PlaneHeight/2,0);
        return geo;
    },[PlaneHeight,PlaneWidth]);

  return (
    <mesh position={position} rotation={rotation} geometry={geometry}>
        <meshStandardMaterial map={texture} side={THREE.DoubleSide}/>
    </mesh>
  )
}

export default ImagePlane