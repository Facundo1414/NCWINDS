import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import RadioGroupRating from './RadioGroupRating';


const ErrorFetchVuelos = () => {
  return (
    <Box textAlign="center" display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} bgcolor={'#FCC53D'} minHeight={400}
    borderRadius={5}>
      <Typography variant="h5" gutterBottom color={"black"}>
        ¡Ups! No se encontraron vuelos.
      </Typography>
      <Typography variant="body1" gutterBottom color={"black"}>
        Parece que no hay vuelos disponibles en este momento.
      </Typography>
      <RadioGroupRating/>
    </Box>
  );
};

export default ErrorFetchVuelos;
