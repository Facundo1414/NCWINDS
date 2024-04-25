import React, { useContext, useState, useEffect } from "react";
import { Box, Grid, Typography} from '@mui/material'; 
import FlightCard from "../../components/molecules/flightCard/FlightCard";
import Search_topCards from '../../components/organisms/Search_topCards/Search_topCards'
import SearchBar from '../../components/molecules/searchBar/SearchBar'
import Skeleton from '@mui/material/Skeleton';
import FlightDetails from '../../components/organisms/flightDetails/FlightDetails';
import { BackendGateWayContext } from "../../context/BackendGateWayContextProvider";
import ErrorFetchVuelos from "../../components/molecules/errorFetchVuelos/ErrorFetchVuelos";
import { ViajesContext } from "../../context/ViajesContextProvider";
import { fetchData } from "../../services/apiService";

const Search =()=>{
  const [dataFilter, setDataFilter] = useState(null)
  const {urlViajesController} = useContext(BackendGateWayContext)
  const {infoVuelo} = useContext(ViajesContext)
  const [loading, setLoading] = useState(true);
  const [vuelosFetch, setVuelosFetch] = useState([])
  const [iferrorFetchVuelos, setIferrorFetchVuelos] = useState(false)
  
  let endPointViajeSinFechas = `${urlViajesController}/originAndDestiny/${infoVuelo.origen}/${infoVuelo.destino}`
  let endPointViajeConFechaOrigen = `${urlViajesController}/originAndDestinyAndDateOfOrigin/${infoVuelo.origen}/${infoVuelo.destino}/${infoVuelo.fechaIda}`
  //let endPointViajeConAmbasFechas = `${urlViajesController}/findByOriginAndDestinyAndDateOfDestiny/${infoVuelo.origen}/${infoVuelo.destino}/${infoVuelo.fechaIda}`

  // segunda version
  useEffect(() => {
    if (infoVuelo.origen !== "" && infoVuelo.destino !== "" ) {
      const fetchDataAsync = async () => {
        let responseData = "";
        
        if (infoVuelo.fechaVuelta !== "") {
          console.log("fecha vuelta no implementada por el backend");
          //responseData = await fetchData(endPointViajeConAmbasFechas);
        } else {
          responseData = await fetchData(endPointViajeConFechaOrigen);
        } 
        if(responseData.length === 0) {

          responseData = await fetchData(endPointViajeSinFechas);
        }
          if (responseData.length > 0) {
          setVuelosFetch(responseData);
          setLoading(false);
          setIferrorFetchVuelos(false);
        } else {
          // Handle case where responseData is empty
          setLoading(false);
          setIferrorFetchVuelos(true);
        }
      };
  
      fetchDataAsync();
    }
  }, [infoVuelo]);
  
  useEffect(()=>{
    setDataFilter(vuelosFetch)
  },[vuelosFetch])
  
  return(
    <Grid container sx={{width:'95%'}}>

      <Grid item xs={12} md={4} padding='15px'>
        <SearchBar searchStyles={{bgcolor: 'white',bgcolorContainer: "#002561", direccion: 'column'}}/>
        <FlightDetails dataFlights={vuelosFetch} setDataFromParentFilter={setDataFilter} />
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
            (
              <Box>
                <ErrorFetchVuelos/>
              </Box>
            ) 
            : 
            (
            <Box>
              {dataFilter.map((flight)=>{
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