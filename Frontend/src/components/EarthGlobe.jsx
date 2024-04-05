import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import EarthDayMap from "../assets/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/8k_earth_clouds.jpg";

const EarthGlobe = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);

  return (
    <>
      <mesh scale={2.51}>
        <sphereGeometry args={[1, 40, 40]}/>
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite transparent/>
      </mesh>

      <mesh scale={2.5}>
        <sphereGeometry args={[1, 40, 40]}/>
        <meshPhongMaterial specularMap={specularMap}/>
        <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
      </mesh>
    </>
  );
}

export { EarthGlobe };
