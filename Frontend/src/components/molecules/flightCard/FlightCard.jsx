import React from "react";
import { Box, Button, Grid, Typography } from '@mui/material';


const FlightCard =()=>{

  return(
    <Grid container component='article' maxWidth='850px' height='160px' borderRadius='12px' margin='20px 10px' color={'black'} overflow='hidden' sx={{backgroundColor: 'white'}}>
      <Grid display={'flex'} item xs='9'>
        <Grid item xs='4' border={'1px solid black'} alignContent='center'>
          salida
        </Grid>

        <Grid item xs='4' border={'1px solid black'} alignContent='center'>
          recorrido
        </Grid>

        <Grid item xs='4' border={'1px solid black'} alignContent='center'>
          llegada
        </Grid>
      </Grid>

      <Grid item xs='3' border={'1px solid black'}>
        <Button>25352</Button>
      </Grid>
    </Grid>
  );
}

export default FlightCard;