import React, { useMemo, useRef } from 'react'
import ImagePlane from './ImagePlane'
import {useControls} from 'leva'
import {Images} from '../data/images'
import { useFrame } from '@react-three/fiber'
const FanGroup = () => {
    const groupRef=useRef();
   /** const {numPlanes,spreadAngle,planeHeight,planeWidth,positionY}=useControls("book fan",{
        numPlanes:{
            value:12,
            min:6,
            max:40,
            step:1,
            label:"no. of plane"
        },
        spreadAngle:{
            value:360,
            min:20,
            max:360,
            step:1,
            label:"spread angle"
        },
        planeHeight:{
            value:4,
            min:2,
            max:15,
            step:1,
            label:"plane height"
        },
        planeWidth:{
            value:5,
            min:2,
            max:20,
            step:1,
            label:"plane width"
        },
        positionY:{
            value:-2,
            min:-10,
            max:10,
            step:0.5,
            label:"position y of group"
        }
    }); */

    const numPlanes=12,spreadAngle=360,planeHeight=4,planeWidth=6,positionY=-2


    const planes=useMemo(()=>{
            const count=numPlanes;
            const totalarcRad=(spreadAngle*Math.PI)/180;
            const step=totalarcRad/(count-1);
            const startingAngle=-totalarcRad/2;
    
            return Array.from({length:count},(_,i)=>{
                const angle=startingAngle+(i*step);
                return {
                    key:i,
                    url:Images[i%Images.length],
                    position:[0,0,0],
                    rotation:[0,angle,0]
    
                }
            })
        },[numPlanes,spreadAngle]);
    
        useFrame((state,delta)=>{
            // groupRef.current.rotation.y+=delta;
            groupRef.current.rotation.y+=delta*0.3;

        })
  return (
    <group ref={groupRef} position={[0,positionY,-15]} >
        {planes.map((plane)=>{
            return <ImagePlane key={plane.key} url={plane.url} position={plane.position} rotation={plane.rotation} PlaneWidth={planeWidth} PlaneHeight={planeHeight} />
        })}
    </group>
  )
}

export default FanGroup