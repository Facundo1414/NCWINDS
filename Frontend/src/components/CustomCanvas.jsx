import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { EarthGlobe } from "./EarthGlobe";
import { CircularProgress } from '@mui/material';

const CustomCanvas =()=>{
  
  return(
    <Canvas>
      <Suspense fallback={<Loader />}>
        <OrbitControls autoRotate enableZoom={false} enablePan={false}/>
        <ambientLight intensity={5}/>
        <EarthGlobe />
      </Suspense>
    </Canvas>
  );
}


const Loader =()=>{
  return(
    <Html center>
      <CircularProgress disableShrink size={'2rem'}/>
    </Html> 
  );
}

export { CustomCanvas };