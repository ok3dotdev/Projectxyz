import React, { useRef, useState, useMemo } from 'react'
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber'
import { BufferAttribute, Clock, PointsMaterial } from "three";

import Banner from "../components/Banner";
import Space from "../components/Canvas";

// const pointsMaterial = new PointsMaterial;

// function Particles({count = 3000}) {

//   const myRef = useRef();

//   let mouseX = 0;
//   let mouseY = 0;

//   function animateParticles(event) {
//     mouseY  = event.clientY
//     mouseX  = event.clientX
//   }

//   document.addEventListener('mousemove', animateParticles)

//   useFrame(({clock})=>{

//     const getElapsedTime = clock.getElapsedTime();
//     myRef.current.rotation.x = -0.04 * getElapsedTime
//     // if(mouseX > 0){
//     //   myRef.current.rotation.y = -mouseY * (getElapsedTime * 0.0009)
//     //   myRef.current.rotation.y = -mouseX * (getElapsedTime * 0.0009)
//     // }
//   });

//   const points = useMemo(() => {
//     const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 77.5);
//     return new BufferAttribute(new Float32Array(p), 3);
//   }, [count]);
//   return(
//     <points ref={myRef}>
//       <bufferGeometry>
//         <bufferAttribute attach={"attributes-position"} {...points} />
//       </bufferGeometry>
//       <pointsMaterial size={0.08} color={"#FFFFFF"}/>
//     </points>
//   )
// }

export default function testpage() {
 
  return (
    <div className="h-[100vh]">
        <div className="absolute z-10 w-full h-[100vh] grid place-content-center">
          <Banner/>
        </div>
        <Space/>
        {/* <Canvas className="bg-gray-900 fixed top-0 left-0 z-11" camera={[0,0,10]}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Particles />
        </Canvas> */}
    </div>
    
  )
}