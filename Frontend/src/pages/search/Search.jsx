import React, { useContext, useState, useEffect } from "react";
import { Box, Grid, Typography} from '@mui/material'; 
import FlightCard from "../../components/molecules/flightCard/FlightCard";
import Search_topCards from '../../components/organisms/Search_topCards/Search_topCards'
import SearchBar from '../../components/molecules/searchBar/SearchBar'
import Skeleton from '@mui/material/Skeleton';
import FlightDetails from '../../components/organisms/flightDetails/FlightDetails';
import { ViajesContext } from "../../context/ViajesContextProvider";


const Search =()=>{

  // loading skeleton section 
  const [loading, setLoading] = useState(true);
  const {infoVuelo, setVueloSeleccionado} = useContext(ViajesContext) //TODO esto deberia ir en cada CARD 
  console.log(infoVuelo);
  const [vuelosFetch, setVuelosFetch] = useState([])
  let endPoint = `http://localhost:8080/viajes/originAndDestinyAndDateOfOrigin/${infoVuelo.origen}/${infoVuelo.destino}/${infoVuelo.fechaIda}`
  
  useEffect(()=>{
    endPoint = `http://localhost:8080/viajes/originAndDestinyAndDateOfOrigin/${infoVuelo.origen}/${infoVuelo.destino}/${infoVuelo.fechaIda}`
  },[infoVuelo])

  //TODO usar el apiService
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endPoint);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setVuelosFetch(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Hubo un error en la solicitud:', error); //TODO si no se muestra: informar al usuario
        setLoading(false);
      }
    };

    fetchData();
    console.log(vuelosFetch);
    console.log(endPoint);
  }, [endPoint,infoVuelo]);

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