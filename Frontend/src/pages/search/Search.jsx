import React, { useState } from "react";
import { Box, Grid} from '@mui/material'; 
import FlightCard from "../../components/molecules/flightCard/FlightCard";
import Search_topCards from '../../components/organisms/Search_topCards/Search_topCards'
import SearchBar from '../../components/organisms/header/SearchBar'
import Skeleton from '@mui/material/Skeleton';
import { useEffect } from "react";
import FlightDetails from '../../components/organisms/flightDetails/FlightDetails';
import jsonFlights from '../../utils/flightCard/flightCard.json';

export const Search =()=>{

  const splitLocation =(location)=>{
    return location.split(', ');

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
  }

  return(
    <Grid container sx={{width:'95%'}}>

      <Grid item xs={12} md={4} padding='15px'>
        <SearchBar searchStyles={{bgcolor: 'white',bgcolorContainer: "#002561"}}/>
        <FlightDetails />
      </Grid>
      
      <Grid item xs={12} md={8} paddingX={'15px'}>
        <Search_topCards/>

        {jsonFlights.map((value)=>{
          const newFligt ={
            ...value,
            origen: splitLocation(value.origen),
            destino: splitLocation(value.destino),
          }
          
          return <FlightCard key={newFligt.id} props={newFligt}/>

        })}

      </Grid>
    </Grid>
  );
}
