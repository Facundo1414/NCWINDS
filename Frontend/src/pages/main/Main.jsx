

import React from 'react';
import About from '../../components/organisms/about/About';
import Destinations from '../../components/organisms/destinations/Destinations'
import Main_elegirnosSection from '../../components/organisms/Main_elegirnosSection/Main_elegirnosSection'

export const Main = () => {
    
  return (
    <div>
      <Destinations/>
      <Main_elegirnosSection/>  
      <About />
    </div>
    
  )
}
