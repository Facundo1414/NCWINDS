import React from 'react';
import About from '../../components/organisms/about/About';

import Main_elegirnosSection from '../../components/organisms/Main_elegirnosSection/Main_elegirnosSection'
import Header from '../../components/organisms/header/Header';

export const Main = () => {
    
  return (
    <div>
      <Header/>
      <Main_elegirnosSection/>  
      <About />
    </div>
    
  )
}
