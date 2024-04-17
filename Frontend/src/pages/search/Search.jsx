import React, { useContext, useState } from "react";
import { Box, Grid, Typography} from '@mui/material'; 
import FlightCard from "../../components/molecules/flightCard/FlightCard";
import Search_topCards from '../../components/organisms/Search_topCards/Search_topCards'
import SearchBar from '../../components/molecules/searchBar/SearchBar'
import Skeleton from '@mui/material/Skeleton';
import { useEffect } from "react";
import FlightDetails from '../../components/organisms/flightDetails/FlightDetails';
import jsonFlights from '../../utils/flightCard/flightCard.json';
import { ViajesContext } from "../../context/ViajesContextProvider";

const Search =()=>{

  // loading skeleton section 
  const [loading, setLoading] = useState(true);
  const {infoVuelo, setVueloSeleccionado} = useContext(ViajesContext)
  const [vuelosFetch, setVuelosFetch] = useState([])
  const datafalse = {
    origen: "Brasil",
    destino: "Italia",
    fechaIda: "2024-06-01"
  }
  const endPoint = `http://localhost:8080/viajes/originAndDestinyAndDateOfOrigin/${datafalse.origen}/${datafalse.destino}/${datafalse.fechaIda}`
  
  
  useEffect(() => {
    const response = fetch(endPoint)
    .then((data) => data.json())
    .then((jsonData) => {
      setVuelosFetch(jsonData)
      setLoading(false)
    })
    .catch((error) => {
      console.error('Hubo un error en la solicitud:', error);
    });
      
    // esta parte es de prueba. Cuando tengamos los endpoints se borra!
    // const temporizador = setTimeout(() => {
    //   console.log('Han pasado 4 segundos');
    //   setLoading(false)
    //   console.log(vuelosFetch);
    // }, 3000); 
    // return () => clearTimeout(temporizador);
    // end of test section
  },[])

  

  // end of loading skeleton section 
  

  return(
    <Grid container sx={{width:'95%'}}>

      <Grid item xs={12} md={4} padding='15px'>
        <SearchBar searchStyles={{bgcolor: 'white',bgcolorContainer: "#002561"}}/>
        <FlightDetails />
      </Grid>
      
      <Grid item xs={12} md={8} paddingX={'15px'}>
        <Search_topCards/>
        {loading? (
          <Box width="100%">
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rectangular" width="100%" height={160}>
            </Skeleton>
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rectangular" width="100%" height={160}>
            </Skeleton>
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
          </Box>
        ) : 
        (
          <Box>
            {vuelosFetch.map((flight)=>{
                let propsFightCard = {
                  origen: flight.origin.split(','),
                  destino: flight.destiny.split(','),
                  horaSalida: flight.dateOfOrigin,
                  horaLlegada: flight.dateOfDestiny,
                  duracionVuelo: flight.duration,
                  precio: flight.price
                }
              return <FlightCard key={flight.id} props={propsFightCard}/>
            })}
          </Box>
        )}

      </Grid>
    </Grid>
  );
}

export default Search;