import React, { useState } from "react";
import { Box, Typography, Divider, Slider, Checkbox } from '@mui/material';


const FlightDetails =()=>{
  const [price, setPrice] = useState([0, 4000000]);
  const [duracionVuelo, setDuracionVuelo] = useState(48);

  const handleChangePrice =(event, newPrice)=>{
    setPrice(newPrice);
  }

  const handleChangeDuracion =(event, newTime)=>{
    setDuracionVuelo(newTime);
  }

  return(
    <Box component='section' sx={{backgroundColor: 'white', color: 'black'}} borderRadius='12px' boxShadow='3' margin='8px' padding='20px'>
      <Box component='div'>
        <Typography variant="h6" component='h6'>Filtrar por</Typography>
      </Box>
      
      <Divider />
      <Box component='div' marginY='8px'>
        <Typography>Precio</Typography>
        <Typography>${price[0]} - ${price[1]}</Typography>
        <Slider sx={{color: '#0658BE'}} value={price} onChange={handleChangePrice} valueLabelDisplay="auto" aria-labelledby="range-slider" min={0} max={4000000}/>
      </Box>

      <Divider />
      <Box component='div' alignItems='center' marginY='6px'>
        <Typography>Duración del vuelo</Typography>
        <Slider sx={{color: '#0658BE'}} value={duracionVuelo} onChange={handleChangeDuracion} valueLabelDisplay="auto"  aria-labelledby="range-slider" min={0} max={48}/>
      </Box>

      <Divider />
      <Box component='div' display='flex' alignItems='center' marginY='6px'>
        <Checkbox />
        <Typography>Hora de salida</Typography>
      </Box>     

      <Divider />
      <Box component='div' display='flex' alignItems='center' marginY='6px'>
        <Checkbox />
        <Typography>Cantidad de escalas</Typography>
      </Box>

    </Box>
  );
}

export default FlightDetails