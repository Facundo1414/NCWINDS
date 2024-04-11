import React from "react";
import { Box, Grid, Typography } from '@mui/material'; 
import FlightCard from "../../components/molecules/flightCard/FlightCard";
import Search_topCards from '../../components/organisms/Search_topCards/Search_topCards'
import SearchBar from '../../components/organisms/header/SearchBar'
import FlightDetails from '../../components/organisms/flightDetails/FlightDetails';

export const Search =()=>{
  const salida = "Buenos Aires, Argentina";
  let salidaSplit = salida.split(', ');

  const destino = "Madrid, España";
  let destunoSplit = destino.split(', ');

  return(
    <Grid container marginTop={"5rem"}>
      <Grid item xs={3}>
        {/* Flight Details should be here */}

        <FlightDetails />
      </Grid>
      
      <Grid item xs={9} paddingX={'20px'}>
        <Search_topCards/>
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
