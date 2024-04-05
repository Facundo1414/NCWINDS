import React from 'react'
import Card_eS from './components/Card_eS'
import './Main_elegirnosSection.css'
import Box from '@mui/material/Box';

const Main_elegirnosSection = () => {
  return (
    <div className='fatherContainer'>
        <Box className='blueContainer'>
            <div className='textContainer'>
                <h2>¿Por qué elegirnos?</h2>
                <h4>Lorem ipsum es el texto de relleno más conocido y proviene de varios pasajes de un libro de Cicerón, escrito en el 45 a.C.</h4>
            </div>
            <div className='cardContainer'>
                <Card_eS/>
            </div>
        </Box>
    </div>
  )
}

export default Main_elegirnosSection