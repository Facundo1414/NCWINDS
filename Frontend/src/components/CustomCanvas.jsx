import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EarthGlobe } from "./EarthGlobe";

const CustomCanvas =()=>{
  
  return(
    <Canvas>
      <Suspense fallback={null}>
      <OrbitControls autoRotate enableZoom={false} enablePan={false}/>
        <ambientLight intensity={5}/>
        <EarthGlobe />
      </Suspense>
    </Canvas>
  );
}

export { CustomCanvas };