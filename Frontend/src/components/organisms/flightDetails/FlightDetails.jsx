import React from "react";
import { Box, Typography, Divider, Slider } from '@mui/material';


const FlightDetails =()=>{

  
  return(
    <Box component='section' border='1px solid black' sx={{backgroundColor: 'white', color: 'black'}} borderRadius='12px' boxShadow='3' margin='8px' padding='12px'>
      <Typography>Filtrar por</Typography>
      <Divider />
      <Box>
        <Typography>Precio</Typography>
        <Typography>$ 0 - $ 1.200.000</Typography>
        <Slider />
      </Box>

    </Box>
  );
}

export default FlightDetails