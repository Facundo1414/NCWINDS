import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";


const SeatCard =({ seatNumber, seatPrice, passengerNumber, onDelete })=>{


  return(
    <Box borderRadius='8px' borderLeft='3px solid #002561' boxShadow='1' marginY='1rem'>
      <Grid container padding='8px'>
        <Grid item xs='2' display='flex' justifyContent='center'>
          <Box display='flex' justifyContent='center' alignItems='center' borderRadius='6px' width='2.5rem' height='2.5rem' sx={{backgroundColor: '#0658BE'}}>
            <Typography fontWeight='bold' color='white'>{seatNumber}</Typography>
          </Box>
        </Grid>

        <Grid display='flex' alignItems='center' item xs='5'>
          <Typography fontWeight='bold' color='#002561'>Pasajero {passengerNumber}</Typography>
        </Grid>

        <Grid display='flex' alignItems='center' justifyContent='right' item xs='5'>
          <Typography fontWeight='bold' color='#002561'>${seatPrice}</Typography>
        </Grid>
      </Grid>

      <Divider variant='middle'/>
      <Box display='flex' justifyContent='right'>
        <Button onClick={onDelete} sx={{fontWeight: 'bold', color: '#002561'}}>Eliminar</Button>
      </Box>
    </Box>
  );
}

export { SeatCard };