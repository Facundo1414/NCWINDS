import React from "react";
import { Box, Grid, Typography } from '@mui/material'; 
import FlightCard from "../../components/molecules/flightCard/FlightCard";


export const Search =()=>{
  const salida = "Buenos Aires, Argentina";
  let salidaSplit = salida.split(', ');

  const destino = "Madrid, España";
  let destunoSplit = destino.split(', ');

  return(
    <Grid container>
      <Grid item xs={3}>
        {/* Flight Details should be here */}
      </Grid>

      <Grid item xs={9} paddingX={'20px'}>
        <FlightCard 
          horaSalida={'12:00'} 
          horaLlegada={'04:20'} 
          lugarSalida={salidaSplit} 
          lugarLlegada={destunoSplit} 
          duracionVuelo={'10:45'} 
          precio={'1.250.000'}
        />

        <FlightCard 
          horaSalida={'12:00'} 
          horaLlegada={'04:20'} 
          lugarSalida={salidaSplit} 
          lugarLlegada={destunoSplit} 
          duracionVuelo={'10:45'} 
          precio={'1.250.000'}
        />

        <FlightCard 
          horaSalida={'12:00'} 
          horaLlegada={'04:20'} 
          lugarSalida={salidaSplit} 
          lugarLlegada={destunoSplit} 
          duracionVuelo={'10:45'} 
          precio={'1.250.000'}
        />
      </Grid>
    </Grid>
  );
}