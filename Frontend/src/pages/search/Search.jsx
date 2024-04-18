import React, { useContext, useState } from "react";
import { Box, Grid, Typography} from '@mui/material'; 
import FlightCard from "../../components/molecules/flightCard/FlightCard";
import Search_topCards from '../../components/organisms/Search_topCards/Search_topCards'
import SearchBar from '../../components/molecules/searchBar/SearchBar'
import Skeleton from '@mui/material/Skeleton';
import { useEffect } from "react";
import FlightDetails from '../../components/organisms/flightDetails/FlightDetails';
import { ViajesContext } from "../../context/ViajesContextProvider";
import { BackendGateWayContext } from "../../context/BackendGateWayContextProvider";
import ErrorFetchVuelos from "../../components/molecules/errorFetchVuelos/ErrorFetchVuelos";

const Search =()=>{
  const {urlViajesController} = useContext(BackendGateWayContext)
  const [loading, setLoading] = useState(true);
  const {infoVuelo} = useContext(ViajesContext)
  const [vuelosFetch, setVuelosFetch] = useState([])
  let endPoint = `${urlViajesController}/${infoVuelo.origen}/${infoVuelo.destino}/${infoVuelo.fechaIda}`
  const [iferrorFetchVuelos, setIferrorFetchVuelos] = useState(false)
  

  // cambiar endpoint si se cambian los datos de las busqeuda de vuelos
  useEffect(()=>{
    if (infoVuelo.origen !== "" && infoVuelo.destino !== "" && infoVuelo.fechaIda !== "") {
      endPoint = `${urlViajesController}/${infoVuelo.origen}/${infoVuelo.destino}/${infoVuelo.fechaIda}`
    }
    else if(infoVuelo.origen !== "" && infoVuelo.destino !== "") {
      endPoint = `${urlViajesController}/${infoVuelo.origen}/${infoVuelo.destino}`
    }
  },[infoVuelo])

  //TODO usar el apiService
  useEffect(() => {
    if (infoVuelo.origen !== "" && infoVuelo.destino !== "") {
      const fetchData = async () => {
        try {
          const response = await fetch(endPoint);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setVuelosFetch(jsonData);
          setLoading(false);
          setIferrorFetchVuelos(false);
        } catch (error) {
          console.error('Hubo un error en la solicitud:', error);
          setIferrorFetchVuelos(true)
          setLoading(false);
        }
      };
  
      fetchData();
    }
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
            {iferrorFetchVuelos? 
            (<ErrorFetchVuelos/>) 
            : 
            (
            <Box>
              {vuelosFetch.map((flight)=>{
                return <FlightCard key={flight.id} flight={flight}/>
              })}
            </Box>
            )
            }
          </Box>
        )}

      </Grid>
    </Grid>
  );
}

export default Search;