import React from "react";
import { Grid} from '@mui/material'; 
import FlightCard from "../../components/molecules/flightCard/FlightCard";
import Search_topCards from '../../components/organisms/Search_topCards/Search_topCards'
import FlightDetails from '../../components/organisms/flightDetails/FlightDetails';
import jsonFlights from '../../utils/flightCard/flightCard.json';

export const Search =()=>{

  const splitLocation =(location)=>{
    return location.split(', ');
  }

  return(
    <Grid container marginTop={"5rem"}>
      <Grid item xs={3}>
        {/* Flight Details should be here */}

        <FlightDetails />
      </Grid>
      
      <Grid item xs={9} paddingX={'20px'}>
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
