import React, {useRef, useMemo} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { BufferAttribute, Clock, PointsMaterial } from "three";

function Particles({count = 3000}) {

  const myRef = useRef();

  let mouseX = 0;
  let mouseY = 0;

  function animateParticles(event) {
    mouseY  = event.clientY
    mouseX  = event.clientX
  }

  document.addEventListener('mousemove', animateParticles)

  useFrame(({clock})=>{
    const getElapsedTime = clock.getElapsedTime();
    myRef.current.rotation.x = -0.04 * getElapsedTime
  });

  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 77.5);
    return new BufferAttribute(new Float32Array(p), 3);
  }, [count]);

  return(
    <points ref={myRef}>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} {...points} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color={"#FFFFFF"}/>
    </points>
  )
}

function Space({children}) {
  return (
    <div className="h-[100vh]">
        <Canvas className="bg-gray-900 fixed top-0 left-0 z-11" camera={[0,0,10]}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Particles />
        </Canvas>
    </div>
  )
};

export default Space