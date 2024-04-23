import React from 'react'
import { Box } from '@mui/material';
import { Card_eS } from './components/Card_eS'
import './Main_elegirnosSection.css'

const Main_elegirnosSection = () => {
  return (
    <div className='fatherContainer'>
        <Box className='blueContainer'>
            <div className='textContainer'>
                <h2>¿Por qué elegirnos?</h2>
                <h4>Al elegirnos, nuestros clientes disfrutan de una experiencia de viaje excepcional con comodidad, seguridad y tarifas competitivas en una amplia variedad de destinos internacionales.</h4>
            </div>
            <Card_eS/>
        </Box>
    </div>
  )
}

export { Main_elegirnosSection };