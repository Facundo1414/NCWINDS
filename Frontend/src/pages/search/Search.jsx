import React, { useState } from "react";
import { Box, Grid, Typography } from '@mui/material'; 
import FlightCard from "../../components/molecules/flightCard/FlightCard";
import Search_topCards from '../../components/organisms/Search_topCards/Search_topCards'
import SearchBar from '../../components/organisms/header/SearchBar'
import Skeleton from '@mui/material/Skeleton';
import { useEffect } from "react";

export const Search =()=>{
  const salida = "Buenos Aires, Argentina";
  let salidaSplit = salida.split(', ');

  const destino = "Madrid, España";
  let destunoSplit = destino.split(', ');

  // loading skeleton section 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const response = fetch("")
    .then((data) => data.json())
    .then((jsonData) => {
      console.log(jsonData);
      setLoading(true)
    })
    .catch((error) => {
      console.error('Hubo un error en la solicitud:', error);
    });
      
    // esta parte es de prueba. Cuando tengamos los endpoints se borra!
    const temporizador = setTimeout(() => {
      console.log('Han pasado 4 segundos');
      setLoading(true)
    }, 3000); 
    return () => clearTimeout(temporizador);
    // end of test section
  },[])

  // end of loading skeleton section 

  return(
    <Grid container marginTop={"5rem"}>

      <Grid item xs={3}>
        {/* Flight Details should be here */}
        <SearchBar xs/>
      </Grid>

      <Grid item xs={9} paddingX={'20px'}>
        <Search_topCards/>
        {loading?
          <Grid item xs={12}>
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
        :  <Skeleton variant="rectangular" width={Grid} height={"20rem"} />}
      </Grid>
    </Grid>
  );
}
