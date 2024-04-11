import React, { useState } from "react";
import { Grid} from '@mui/material'; 
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
<<<<<<< HEAD
    <Grid container marginTop={"5rem"}>

      <Grid item xs={12} md={3}>
=======
    <Grid container marginTop={"5rem"} paddingX={"10px"} >
      <Grid item xs={3}  display={'flex'} flexDirection={"column"} alignItems={'center'} paddingTop={'1rem'}>
>>>>>>> d42cc782c84f259a3e6083a30fad33ba46ca9274
        {/* Flight Details should be here */}
        <SearchBar searchStyles={{bgcolor: 'white',bgcolorContainer: "#002561"}}/>
        <FlightDetails />
      </Grid>

      
<<<<<<< HEAD
      <Grid item xs={12} md={9} paddingX={'20px'}>
=======
      <Grid item xs={9} >
>>>>>>> d42cc782c84f259a3e6083a30fad33ba46ca9274
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
